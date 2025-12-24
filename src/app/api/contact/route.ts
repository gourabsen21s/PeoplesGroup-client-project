import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  console.log('API: Contact request received');

  try {
    const contentType = request.headers.get('content-type');

    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { success: false, message: 'Invalid content type. Expected JSON.' },
        { status: 400 }
      );
    }

    const bodyText = await request.text();
    if (!bodyText.trim()) {
      return NextResponse.json(
        { success: false, message: 'Request body is empty.' },
        { status: 400 }
      );
    }

    let data;
    try {
      data = JSON.parse(bodyText);
    } catch {
      return NextResponse.json(
        { success: false, message: 'Invalid JSON format.' },
        { status: 400 }
      );
    }

    const { name, email, company, phone, subject, message } = data;

    const htmlTemplate = `
<!DOCTYPE html>
<html>
  <body style="margin:0; padding:0; background-color:#f1f5f9;">
    <div style="width:100%; padding:24px 0; background-color:#f1f5f9;">
      <div style="
        max-width:600px;
        margin:0 auto;
        background:#ffffff;
        border-radius:10px;
        overflow:hidden;
        box-shadow:0 4px 12px rgba(0,0,0,0.08);
        font-family:Arial, Helvetica, sans-serif;
      ">

        <!-- Header -->
        <div style="background:#0f172a; padding:20px 24px; color:#ffffff;">
          <h2 style="margin:0; font-size:20px;">New Contact Form Submission</h2>
          <p style="margin:6px 0 0; font-size:13px; color:#cbd5f5;">
            Peoples Group Website
          </p>
        </div>

        <!-- Content -->
        <div style="padding:24px;">

          <!-- Contact Details -->
          <div style="background:#f8fafc; padding:16px 20px; border-radius:8px; margin-bottom:20px;">
            <p style="margin:6px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin:6px 0;"><strong>Email:</strong> ${email}</p>
            ${company ? `<p style="margin:6px 0;"><strong>Company:</strong> ${company}</p>` : ''}
            ${phone ? `<p style="margin:6px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
            ${subject ? `<p style="margin:6px 0;"><strong>Subject:</strong> ${subject}</p>` : ''}
          </div>

          <!-- Message -->
          <div style="background:#f8fafc; padding:16px 20px; border-radius:8px;">
            <h3 style="margin:0 0 10px; font-size:16px; color:#0f172a;">Message</h3>
            <p style="margin:0; font-size:14px; line-height:1.6; color:#334155;">
              ${String(message).replace(/\n/g, '<br>')}
            </p>
          </div>

        </div>

        <!-- Footer -->
        <div style="background:#f8fafc; padding:16px 24px; text-align:center;">
          <p style="margin:0; font-size:12px; color:#64748b;">
            This message was sent from the Peoples Group website contact form.
          </p>
        </div>

      </div>
    </div>
  </body>
</html>
`;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || 'noreply@peoplesgroup.biz',
        to: ['info@peoplesgroup.biz', 'Sandy@peoplesgroup.biz'],
        reply_to: email,
        subject: `New Contact Form: ${subject || 'Peoples Group Inquiry'}`,
        html: htmlTemplate,
      }),
    });

    if (!resendResponse.ok) {
      const err = await resendResponse.text();
      throw new Error(err);
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    console.error('Contact API error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send message. Please try again later.',
      },
      { status: 500 }
    );
  }
}
