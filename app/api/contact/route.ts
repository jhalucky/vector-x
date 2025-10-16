import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = await resend.emails.send({
      from: "VECTOR-X Contact <onboarding@resend.dev>",
      to: "jhalucky61@gmail.com",
      subject: `📩 New Contact: ${body.subject || "No subject"}`,
      text: `
      Name: ${body.name}
      Email: ${body.email}
      Phone: ${body.phone}
      Message: ${body.message}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}
