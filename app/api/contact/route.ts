import { NextResponse } from "next/server";

const MAX_LENGTHS = {
  name: 120,
  company: 160,
  email: 254,
  phone: 40,
  country: 80,
  service: 80,
  budget: 80,
  timeline: 80,
  description: 5000,
} as const;

type FieldName = keyof typeof MAX_LENGTHS;

const REQUIRED: FieldName[] = ["name", "email", "service", "description"];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const OWNER_EMAIL = process.env.CONTACT_TO_EMAIL || "sathyarajeshpk@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Coerce to a trimmed string, or null if the value isn't a usable scalar. */
function readField(raw: unknown, max: number): string | null {
  if (typeof raw !== "string") return null;
  const trimmed = raw.trim();
  if (!trimmed) return "";
  return trimmed.slice(0, max);
}

function parseBody(body: unknown) {
  if (typeof body !== "object" || body === null) {
    return { error: "Malformed request body." as const };
  }

  const source = body as Record<string, unknown>;
  const fields = {} as Record<FieldName, string>;

  for (const [key, max] of Object.entries(MAX_LENGTHS) as [FieldName, number][]) {
    const value = readField(source[key], max);
    if (value === null && source[key] !== undefined && source[key] !== null) {
      return { error: `Field "${key}" must be text.` as const };
    }
    fields[key] = value ?? "";
  }

  for (const field of REQUIRED) {
    if (!fields[field]) {
      return { error: "Please fill in your name, email, service, and project description." as const };
    }
  }

  if (!EMAIL_PATTERN.test(fields.email)) {
    return { error: "That email address doesn't look right." as const };
  }

  return { fields };
}

async function saveToSupabase(fields: Record<FieldName, string>) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return { configured: false as const };

  const { createClient } = await import("@supabase/supabase-js");
  const supabase = createClient(url, key);

  const { data, error } = await supabase
    .from("contacts")
    .insert([
      {
        name: fields.name,
        company: fields.company || null,
        email: fields.email,
        phone: fields.phone || null,
        country: fields.country || null,
        service: fields.service,
        budget: fields.budget || null,
        timeline: fields.timeline || null,
        description: fields.description,
        attachment_url: null,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Supabase insert failed:", error);
    return { configured: true as const, ok: false as const };
  }
  return { configured: true as const, ok: true as const, id: data?.id as string | undefined };
}

async function sendEmail(fields: Record<FieldName, string>) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { configured: false as const };

  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 16px 6px 0;color:#6b655b;font:500 12px system-ui">${label}</td>` +
    `<td style="padding:6px 0;color:#141416;font:14px system-ui">${escapeHtml(value || "—")}</td></tr>`;

  const html = `
    <div style="font:14px system-ui;color:#141416;max-width:640px">
      <p style="font:500 12px system-ui;letter-spacing:.14em;text-transform:uppercase;color:#b4552b">New enquiry</p>
      <h2 style="font:400 24px Georgia,serif;margin:8px 0 20px">${escapeHtml(fields.name)}${
        fields.company ? ` — ${escapeHtml(fields.company)}` : ""
      }</h2>
      <table style="border-collapse:collapse;margin-bottom:20px">
        ${row("Email", fields.email)}
        ${row("Phone", fields.phone)}
        ${row("Country", fields.country)}
        ${row("Service", fields.service)}
        ${row("Budget", fields.budget)}
        ${row("Timeline", fields.timeline)}
      </table>
      <p style="font:500 12px system-ui;letter-spacing:.14em;text-transform:uppercase;color:#6b655b">Description</p>
      <p style="white-space:pre-wrap;line-height:1.6">${escapeHtml(fields.description)}</p>
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: OWNER_EMAIL,
        reply_to: fields.email,
        subject: `Enquiry — ${fields.service} — ${fields.name}`,
        html,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected the request:", response.status, await response.text());
      return { configured: true as const, ok: false as const };
    }
    return { configured: true as const, ok: true as const };
  } catch (error) {
    console.error("Resend request threw:", error);
    return { configured: true as const, ok: false as const };
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Malformed request body." }, { status: 400 });
  }

  const parsed = parseBody(body);
  if ("error" in parsed) {
    return NextResponse.json({ success: false, message: parsed.error }, { status: 400 });
  }

  const [stored, emailed] = await Promise.all([
    saveToSupabase(parsed.fields),
    sendEmail(parsed.fields),
  ]);

  // The enquiry only counts as received if at least one sink actually took it.
  // Reporting success when nothing was configured silently loses leads.
  const delivered = (stored.configured && stored.ok) || (emailed.configured && emailed.ok);

  if (!delivered) {
    if (!stored.configured && !emailed.configured) {
      console.error(
        "Contact form received a submission but no delivery target is configured. " +
          "Set SUPABASE_SERVICE_ROLE_KEY + NEXT_PUBLIC_SUPABASE_URL, or RESEND_API_KEY."
      );
    }
    return NextResponse.json(
      {
        success: false,
        message:
          "Your message couldn't be delivered. Please email sathyarajeshpk@gmail.com directly — sorry about that.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json(
    { success: true, message: "Enquiry received", stored: stored.configured && stored.ok, emailed: emailed.configured && emailed.ok },
    { status: 200 }
  );
}
