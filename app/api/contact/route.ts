import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.service || !body.description) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    let savedRecord = null;

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY
      );

      const { data, error } = await supabase
        .from("contacts")
        .insert([
          {
            name: body.name,
            company: body.company || null,
            email: body.email,
            phone: body.phone || null,
            country: body.country || null,
            service: body.service,
            budget: body.budget || null,
            timeline: body.timeline || null,
            description: body.description,
            attachment_url: null,
          },
        ])
        .select()
        .single();

      if (error) {
        console.error("Supabase insert error:", error);
        return NextResponse.json(
          { success: false, message: error.message },
          { status: 500 }
        );
      }

      savedRecord = data;
    } else {
      console.warn("Contact form submitted without Supabase environment variables configured.");
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Portfolio <onboarding@resend.dev>",
            to: "sathyarajeshpk@gmail.com",
            subject: `New Enquiry: ${body.service} from ${body.name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${body.name}</p>
              <p><strong>Email:</strong> ${body.email}</p>
              <p><strong>Company:</strong> ${body.company || "N/A"}</p>
              <p><strong>Phone:</strong> ${body.phone || "N/A"}</p>
              <p><strong>Service:</strong> ${body.service}</p>
              <p><strong>Budget:</strong> ${body.budget || "Not specified"}</p>
              <p><strong>Timeline:</strong> ${body.timeline || "Not specified"}</p>
              <p><strong>Description:</strong></p>
              <p>${body.description.replace(/\n/g, "<br>")}</p>
            `,
          }),
        });
      } catch (emailError) {
        console.error("Email failed (non-critical):", emailError);
      }
    }

    return NextResponse.json(
      { success: true, message: "Message received", data: savedRecord },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("API error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Server error" },
      { status: 500 }
    );
  }
}
