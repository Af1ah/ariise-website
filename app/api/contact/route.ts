import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, institution, role, interest, message } = body;

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !institution?.trim()) {
      return NextResponse.json(
        { error: "Please provide your name, institutional email, phone number, and institution name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      try {
        // Dynamically resolve nodemailer if installed
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const req: any = typeof require !== "undefined" ? require : null;
        const nodemailer = req ? req("nodemailer") : null;

        if (nodemailer) {
          const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === "true",
            auth: { user: smtpUser, pass: smtpPass },
          });

          await transporter.sendMail({
            from: `"ARiiSE Contact" <${smtpUser}>`,
            to: "info@ariiseglobal.com",
            replyTo: email,
            subject: `New Institutional Enquiry: ${institution} (${name})`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInstitution: ${institution}\nRole: ${role || "Not specified"}\nInterest: ${interest || "General Enquiry"}\n\nMessage:\n${message || "No additional message."}`,
          });
        }
      } catch (mailError) {
        console.error("Nodemailer error sending email:", mailError);
      }
    } else {
      console.log("Contact submission received (SMTP not configured):", {
        name,
        email,
        phone,
        institution,
        role: role || "Not specified",
        interest: interest || "General Enquiry",
        message: message || "No additional message.",
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
    });
  } catch (error) {
    console.error("Contact API route error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your enquiry." },
      { status: 500 }
    );
  }
}
