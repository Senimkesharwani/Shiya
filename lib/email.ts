import nodemailer from "nodemailer"

// Create reusable transporter
export const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
}

// Email templates
export const emailTemplates = {
  contactConfirmation: (name: string, message: string) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #e11d48;">Thank You for Reaching Out!</h2>
      <p>Hi ${name},</p>
      <p>Thank you for your message. I've received your inquiry and will get back to you within 24 hours.</p>
      <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #e11d48;">
        <p><strong>Your Message:</strong></p>
        <p style="font-style: italic;">"${message}"</p>
      </div>
      <p>Best regards,<br>Shiya Bhardwaj</p>
    </div>
  `,

  collaborationInquiry: (data: any) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #e11d48;">🤝 New Collaboration Inquiry</h2>
      <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Project:</strong> ${data.projectType}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      </div>
    </div>
  `,
}
