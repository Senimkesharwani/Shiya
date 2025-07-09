import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, projectType, budget, timeline, message } = body

    // Validate required fields
    if (!name || !email || !company || !projectType || !message) {
      return NextResponse.json({ error: "Required fields are missing" }, { status: 400 })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email to you (collaboration inquiry)
    const collaborationEmail = {
      from: process.env.EMAIL_USER,
      to: "kesharwanisenim85@gmail.com",
      subject: `New Collaboration Inquiry from ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e11d48;">🤝 New Collaboration Inquiry</h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            
            <h3 style="color: #374151;">Project Details</h3>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
            <p><strong>Timeline:</strong> ${timeline || "Not specified"}</p>
            
            <h3 style="color: #374151;">Message</h3>
            <p style="background: white; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            This is a collaboration inquiry from your website.
          </p>
        </div>
      `,
    }

    // Auto-reply for collaboration
    const collaborationReply = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for your collaboration inquiry - Shiya Bhardwaj",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e11d48;">Thank You for Your Interest!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out about a potential collaboration with ${company}. I'm excited about the possibility of working together!</p>
          
          <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #e11d48;">
            <h3 style="margin-top: 0;">Next Steps:</h3>
            <ul>
              <li>I'll review your project details within 24 hours</li>
              <li>I'll send you my media kit and detailed proposal</li>
              <li>We can schedule a call to discuss your campaign goals</li>
            </ul>
          </div>

          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Project Summary:</h3>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Budget Range:</strong> ${budget || "To be discussed"}</p>
            <p><strong>Timeline:</strong> ${timeline || "Flexible"}</p>
          </div>

          <p>I look forward to creating amazing content for ${company}!</p>
          <p>Best regards,<br>Shiya Bhardwaj</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            Follow me: <a href="https://www.instagram.com/shiyyabhardwaj/" style="color: #e11d48;">@shiyabhardwaj</a> | 
            Email: swarnimkesharwani4@gmail.com
          </p>
        </div>
      `,
    }

    // Send both emails
    await transporter.sendMail(collaborationEmail)
    await transporter.sendMail(collaborationReply)

    return NextResponse.json({ message: "Collaboration inquiry sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending collaboration email:", error)
    return NextResponse.json({ error: "Failed to send collaboration inquiry" }, { status: 500 })
  }
}
