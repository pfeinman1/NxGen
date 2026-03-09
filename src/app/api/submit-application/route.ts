import { NextResponse } from "next/server";

interface ApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string;
  referredBy: string;
  building: string;
  pillar: string;
  showUp: string;
}

export async function POST(request: Request) {
  try {
    const data: ApplicationData = await request.json();

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.linkedin || !data.building || !data.pillar || !data.showUp) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    // Send to Google Sheets via Google Apps Script Web App
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data,
            timestamp,
          }),
        });
      } catch (sheetError) {
        console.error("Failed to send to Google Sheets:", sheetError);
      }
    }

    // Send email notification via Resend or any email service
    if (process.env.RESEND_API_KEY && process.env.NOTIFICATION_EMAIL) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "NxGeN Applications <onboarding@resend.dev>",
            to: process.env.NOTIFICATION_EMAIL,
            subject: `New NxGeN Application: ${data.firstName} ${data.lastName}`,
            html: `
              <h2>New Application Received</h2>
              <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>LinkedIn:</strong> <a href="${data.linkedin}">${data.linkedin}</a></p>
              <p><strong>Referred By:</strong> ${data.referredBy || "N/A"}</p>
              <p><strong>Pillar:</strong> ${data.pillar}</p>
              <p><strong>What they're building:</strong></p>
              <p>${data.building}</p>
              <p><strong>How they show up for others:</strong></p>
              <p>${data.showUp}</p>
              <p><strong>Submitted:</strong> ${timestamp}</p>
            `,
          }),
        });
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
