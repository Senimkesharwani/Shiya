"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Instagram, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "business@shiyabhardwaj.com",
      description: "For business inquiries and collaborations",
      link: "mailto:business@shiyabhardwaj.com",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@shiyabhardwaj",
      description: "Follow for daily updates and content",
      link: "https://instagram.com/shiyabhardwaj",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+1 (555) 123-4567",
      description: "Quick messages and urgent inquiries",
      link: "https://wa.me/15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "New York, NY",
      description: "Available for local shoots and events",
      link: null,
    },
  ]

  const faqs = [
    {
      question: "What's your typical response time?",
      answer: "I respond to all business inquiries within 24 hours during weekdays.",
    },
    {
      question: "Do you work with small brands?",
      answer: "Yes! I love working with brands of all sizes, from startups to established companies.",
    },
    {
      question: "What's included in your media kit?",
      answer:
        "My media kit includes audience demographics, engagement rates, past campaign examples, and pricing information.",
    },
    {
      question: "Do you offer package deals?",
      answer: "Yes, I offer discounted rates for multi-post campaigns and long-term partnerships.",
    },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-serif text-2xl font-bold text-rose-900">
              Shiya Bhardwaj
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-rose-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-rose-600 transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-rose-600 transition-colors">
                Portfolio
              </Link>
              <Link href="/collaborate" className="text-gray-700 hover:text-rose-600 transition-colors">
                Collaborate
              </Link>
              <Link href="/contact" className="text-rose-600 font-medium">
                Contact
              </Link>
            </div>
            <Link href="https://instagram.com/shiyabhardwaj" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="border-rose-200 text-rose-700 hover:bg-rose-50 bg-transparent"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Follow
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-200 mb-4">
              Get In Touch
            </Badge>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">Connect</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Have a question, collaboration idea, or just want to say hello? I'd love to hear from you. Let's create
              something amazing together!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{info.description}</p>
                  {info.link ? (
                    <Link
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-rose-600 font-medium hover:text-rose-700 transition-colors"
                    >
                      {info.value}
                    </Link>
                  ) : (
                    <span className="text-rose-600 font-medium">{info.value}</span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Send Me a Message</h2>
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell me more about your inquiry..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    I'm always excited to collaborate with brands that share my passion for authenticity and quality.
                    Whether you're looking for a single post or a comprehensive campaign, I'd love to help bring your
                    vision to life.
                  </p>
                  <p>
                    For business inquiries, please use the contact form or email me directly at{" "}
                    <Link href="mailto:business@shiyabhardwaj.com" className="text-rose-600 hover:text-rose-700">
                      business@shiyabhardwaj.com
                    </Link>
                  </p>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl">
                  <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 text-rose-500 mr-2" />
                    <span className="font-medium text-gray-900">Response Time</span>
                  </div>
                  <p className="text-gray-600">
                    I typically respond to all inquiries within 24 hours during business days. For urgent matters, feel
                    free to reach out via WhatsApp.
                  </p>
                </div>
              </div>

              {/* FAQ Section */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="bg-gray-50 border-0">
                      <CardContent className="p-6">
                        <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-rose-100 text-xl mb-8 max-w-2xl mx-auto">
            Don't wait - let's discuss your ideas and create content that makes an impact. I'm here to help your brand
            shine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collaborate">
              <Button size="lg" variant="secondary" className="bg-white text-rose-600 hover:bg-rose-50">
                Start a Project
              </Button>
            </Link>
            <Link href="mailto:business@shiyabhardwaj.com">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-rose-600 bg-transparent"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
