"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Instagram, Heart, Play, Camera, Download, Star, CheckCircle, Users, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function CollaboratePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const services = [
    {
      icon: Camera,
      title: "Sponsored Posts",
      description: "High-quality feed posts with professional photography and engaging captions",
      price: "Starting at $2,500",
      features: ["Professional photography", "Engaging captions", "Story promotion", "24-hour posting"],
    },
    {
      icon: Play,
      title: "Reels & Videos",
      description: "Dynamic video content that showcases your brand in an authentic, entertaining way",
      price: "Starting at $3,500",
      features: ["Creative concept", "Professional editing", "Trending audio", "Multiple formats"],
    },
    {
      icon: Instagram,
      title: "Story Features",
      description: "Behind-the-scenes content and product features in Instagram Stories",
      price: "Starting at $1,500",
      features: ["Multiple story slides", "Interactive elements", "Highlight inclusion", "Swipe-up links"],
    },
    {
      icon: Heart,
      title: "UGC Content",
      description: "User-generated style content that feels authentic and relatable",
      price: "Starting at $2,000",
      features: ["Multiple content pieces", "Usage rights", "Raw footage", "Brand guidelines"],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Fashion Nova",
      image: "/placeholder.svg?height=60&width=60",
      quote:
        "Shiya delivered exceptional results for our summer campaign. Her authentic approach drove 45% higher engagement than our previous collaborations.",
      results: "+45% Engagement",
    },
    {
      name: "Michael Chen",
      company: "Sephora",
      image: "/placeholder.svg?height=60&width=60",
      quote:
        "Working with Shiya was seamless. She understood our brand perfectly and created content that resonated with our target audience.",
      results: "2.3M Reach",
    },
    {
      name: "Emma Rodriguez",
      company: "Zara",
      image: "/placeholder.svg?height=60&width=60",
      quote:
        "Professional, creative, and delivers beyond expectations. Shiya is our go-to influencer for fashion campaigns.",
      results: "+60% Conversions",
    },
  ]

  const stats = [
    { icon: Users, label: "Followers", value: "1M+", color: "text-pink-500" },
    { icon: TrendingUp, label: "Avg. Engagement", value: "8.2%", color: "text-green-500" },
    { icon: Heart, label: "Monthly Reach", value: "5M+", color: "text-red-500" },
    { icon: CheckCircle, label: "Brand Partners", value: "30+", color: "text-blue-500" },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! I'll get back to you within 24 hours.")
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
              <Link href="/collaborate" className="text-rose-600 font-medium">
                Collaborate
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-rose-600 transition-colors">
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
              Let's Work Together
            </Badge>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Brand{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">
                Collaborations
              </span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-8">
              Partner with me to create authentic, engaging content that resonates with your target audience and drives
              real results for your brand.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg mr-4"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Media Kit
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4 ${stat.color}`}
                  >
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Services I Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From sponsored posts to full campaign management, I offer comprehensive content creation services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-rose-600 mb-2">{service.price}</div>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-r from-rose-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Start Your Project</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to collaborate? Fill out the form below and I'll get back to you within 24 hours.
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Brand *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sponsored-post">Sponsored Post</SelectItem>
                        <SelectItem value="reel-video">Reel/Video</SelectItem>
                        <SelectItem value="story-feature">Story Feature</SelectItem>
                        <SelectItem value="ugc-content">UGC Content</SelectItem>
                        <SelectItem value="campaign">Full Campaign</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1k-3k">$1,000 - $3,000</SelectItem>
                        <SelectItem value="3k-5k">$3,000 - $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k+">$10,000+</SelectItem>
                        <SelectItem value="discuss">Let's Discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Timeline</Label>
                    <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                        <SelectItem value="1month">1 month</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg"
                >
                  Send Collaboration Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">What Brands Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take my word for it - here's what my brand partners have to say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.company}</div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {testimonial.results}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
