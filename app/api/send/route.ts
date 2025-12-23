import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message, subject } = await request.json();
    
    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

 const { data, error } = await resend.emails.send({
  from: 'Portfolio <onboarding@resend.dev>',
  to: 'yetbarek.tech@gmail.com',
  replyTo: email,  // Changed from reply_to to replyTo
  subject: subject || `New Contact Form Submission from ${name}`,
      text: `
        New message from your portfolio:
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; font-size: 24px; margin-bottom: 20px;">New Message from Portfolio</h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p><strong style="color: #1f2937;">Name:</strong> ${name}</p>
            <p><strong style="color: #1f2937;">Email:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
            <p><strong style="color: #1f2937;">Message:</strong></p>
            <p style="white-space: pre-line; margin-top: 10px; line-height: 1.6;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px; border-top: 1px solid #e5e7eb; padding-top: 20px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      throw new Error('Failed to send email');
    }

    return NextResponse.json({ 
      success: true,
      message: 'Email sent successfully',
      data 
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to send email. Please try again later.' 
      }, 
      { status: 500 }
    );
  }
}