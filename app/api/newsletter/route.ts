import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Here you can integrate with email services like:
    // - Mailchimp
    // - ConvertKit
    // - Klaviyo
    // - Or store in your database

    // For now, we'll just log it (replace with your email service)
    console.log("New newsletter signup:", email)

    // You can also send a welcome email
    // await sendWelcomeEmail(email)

    return NextResponse.json({ message: "Successfully subscribed to newsletter" }, { status: 200 })
  } catch (error) {
    console.error("Newsletter signup error:", error)
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}
