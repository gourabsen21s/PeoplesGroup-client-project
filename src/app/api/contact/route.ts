import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  console.log('API: Contact request received');
  
  try {
    // Check content type
    const contentType = request.headers.get('content-type');
    console.log('API: Content-Type:', contentType);
    
    if (!contentType?.includes('application/json')) {
      console.log('API: Invalid content type error');
      return NextResponse.json(
        { success: false, message: 'Invalid content type. Expected JSON.' },
        { status: 400 }
      );
    }

    const body = await request.text(); // Get raw text first
    console.log('API: Request body length:', body.length);
    
    if (!body.trim()) {
      console.log('API: Empty body error');
      return NextResponse.json(
        { success: false, message: 'Request body is empty.' },
        { status: 400 }
      );
    }

    // Try to parse JSON with better error handling
    let parsedData;
    try {
      parsedData = JSON.parse(body);
      console.log('API: JSON parsed successfully');
    } catch (parseError) {
      console.error('API: JSON parse error:', parseError);
      return NextResponse.json(
        { success: false, message: 'Invalid JSON format in request body.' },
        { status: 400 }
      );
    }

    const { name, email, company, phone, subject, message } = parsedData;
    console.log('API: Form data parsed:', { name, email, subject });

    console.log('API: Creating SMTP transporter');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
      port: parseInt(process.env.SMTP_PORT || '465'), // Try port 465 with SSL
      secure: true, // true for 465 (SSL), false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .header { background: #1e293b; color: white; padding: 30px; text-align: center; }
          .header h1 { font-size: 24px; margin-bottom: 8px; }
          .content { padding: 30px; }
          .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin-bottom: 25px; }
          .info-item { background: #f8fafc; padding: 15px; border-radius: 6px; border-left: 4px solid #f97316; }
          .info-label { font-size: 12px; color: #64748b; text-transform: uppercase; margin-bottom: 4px; }
          .info-value { font-size: 14px; color: #1e293b; font-weight: 500; }
          .message-box { background: #f8fafc; padding: 20px; border-radius: 6px; border-left: 4px solid #f97316; }
          .footer { background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0; }
          .footer p { font-size: 12px; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>Peoples Group - Coal & Mineral Solutions</p>
          </div>
          <div class="content">
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Name</div>
                <div class="info-value">${name}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Email</div>
                <div class="info-value">${email}</div>
              </div>
              ${company ? `
              <div class="info-item">
                <div class="info-label">Company</div>
                <div class="info-value">${company}</div>
              </div>
              ` : ''}
              ${phone ? `
              <div class="info-item">
                <div class="info-label">Phone</div>
                <div class="info-value">${phone}</div>
              </div>
              ` : ''}
              ${subject ? `
              <div class="info-item">
                <div class="info-label">Subject</div>
                <div class="info-value">${subject}</div>
              </div>
              ` : ''}
            </div>
            <div class="message-box">
              <div class="info-label" style="margin-bottom: 10px;">Message</div>
              <div>${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>This message was sent from the Peoples Group website contact form</p>
            <p style="margin-top: 10px; font-size: 11px; color: #94a3b8;">
              SWASTIKAYAN BUILDING, Government Hospital Road<br>
              Ghutkala Zade Ward, Bhadravati, Chandrapur<br>
              Maharashtra - 442902, India
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: ['info@peoplesgroup.biz', 'Sandy@peoplesgroup.biz'],
      subject: `New Contact Form: ${subject || 'Peoples Group Inquiry'}`,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        ${company ? `Company: ${company}\n` : ''}
        ${phone ? `Phone: ${phone}\n` : ''}
        ${subject ? `Subject: ${subject}\n` : ''}
        
        Message:
        ${message}
      `,
      html: htmlTemplate,
    };

    console.log('API: Verifying SMTP connection...');
    try {
      await transporter.verify();
      console.log('API: SMTP connection verified');
    } catch (verifyError) {
      console.error('API: SMTP verification failed:', verifyError);
      throw new Error(`SMTP connection failed: ${verifyError instanceof Error ? verifyError.message : 'Unknown error'}`);
    }

    console.log('API: Sending mail...');
    await transporter.sendMail(mailOptions);
    console.log('API: Mail sent successfully');

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully!'
    });
  } catch (error) {
    console.error('API: Error in contact route:', error);
    console.error('API: Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace',
      envVars: {
        SMTP_HOST: process.env.SMTP_HOST ? 'Set' : 'Not set',
        SMTP_USER: process.env.SMTP_USER ? 'Set' : 'Not set',
        SMTP_PASSWORD: process.env.SMTP_PASSWORD ? 'Set' : 'Not set',
        SMTP_PORT: process.env.SMTP_PORT || 'Not set'
      }
    });
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message. Please try again later.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
