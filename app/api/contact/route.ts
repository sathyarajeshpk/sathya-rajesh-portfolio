import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Save to Supabase
    const { createClient } = require("@supabase/supabase-js");
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );
    const { error: dbError } = await supabase.from("contacts").insert([body]);
    if (dbError) throw dbError;

    // 2. Send email notification via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>", // Change after domain verification
          to: "sathyarajeshpk@gmail.com",
          subject: `New Enquiry: ${body.service} from ${body.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <table style="font-family:sans-serif;border-collapse:collapse;width:100%;max-width:600px;">
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${body.name}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${body.email}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Company</td><td style="padding:8px;border:1px solid #ddd;">${body.company || "N/A"}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${body.phone || "N/A"}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Country</td><td style="padding:8px;border:1px solid #ddd;">${body.country || "N/A"}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Service</td><td style="padding:8px;border:1px solid #ddd;">${body.service}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Budget</td><td style="padding:8px;border:1px solid #ddd;">${body.budget || "Not specified"}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Timeline</td><td style="padding:8px;border:1px solid #ddd;">${body.timeline || "Not specified"}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Description</td><td style="padding:8px;border:1px solid #ddd;">${body.description}</td></tr>
            </table>
            <p style="margin-top:20px;color:#666;font-size:12px;">Submitted at ${new Date().toLocaleString()}</p>
          `,
        }),
      });
    }

    return NextResponse.json(
      { success: true, message: "Message received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message" },
      { status: 500 }
    );
  }
}