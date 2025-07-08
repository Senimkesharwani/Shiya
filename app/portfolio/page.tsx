"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, Heart, Eye, ExternalLink, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Fashion", "Beauty", "Lifestyle", "Travel"]

  const portfolioItems = [
    {
      id: 1,
      category: "Fashion",
      title: "Summer Collection with Zara",
      brand: "Zara",
      image: "/placeholder.svg?height=400&width=400",
      views: "2.3M",
      likes: "45K",
      engagement: "8.2%",
      description: "Showcasing the latest summer trends with vibrant colors and flowing fabrics.",
      type: "Reel",
    },
    {
      id: 2,
      category: "Beauty",
      title: "Skincare Routine with Sephora",
      brand: "Sephora",
      image: "/placeholder.svg?height=400&width=400",
      views: "1.8M",
      likes: "32K",
      engagement: "7.5%",
      description: "My complete morning skincare routine featuring premium products.",
      type: "Post",
    },
    {
      id: 3,
      category: "Lifestyle",
      title: "Home Decor Inspiration",
      brand: "West Elm",
      image: "/placeholder.svg?height=400&width=400",
      views: "1.2M",
      likes: "28K",
      engagement: "6.8%",
      description: "Creating a cozy and aesthetic living space with modern furniture.",
      type: "Story Series",
    },
    {
      id: 4,
      category: "Travel",
      title: "Bali Adventure Series",
      brand: "Tourism Board",
      image: "/placeholder.svg?height=400&width=400",
      views: "3.1M",
      likes: "67K",
      engagement: "9.1%",
      description: "Exploring the beautiful landscapes and culture of Bali.",
      type: "Reel Series",
    },
    {
      id: 5,
      category: "Fashion",
      title: "Autumn Wardrobe Essentials",
      brand: "H&M",
      image: "/placeholder.svg?height=400&width=400",
      views: "1.9M",
      likes: "38K",
      engagement: "7.8%",
      description: "Must-have pieces for the perfect autumn wardrobe.",
      type: "Reel",
    },
    {
      id: 6,
      category: "Beauty",
      title: "Makeup Tutorial: Evening Look",
      brand: "MAC Cosmetics",
      image: "/placeholder.svg?height=400&width=400",
      views: "2.5M",
      likes: "52K",
      engagement: "8.9%",
      description: "Step-by-step tutorial for a glamorous evening makeup look.",
      type: "IGTV",
    },
    {
      id: 7,
      category: "Lifestyle",
      title: "Healthy Morning Routine",
      brand: "Wellness Brand",
      image: "/placeholder.svg?height=400&width=400",
      views: "1.6M",
      likes: "31K",
      engagement: "7.2%",
      description: "Starting the day right with healthy habits and positive energy.",
      type: "Reel",
    },
    {
      id: 8,
      category: "Travel",
      title: "Paris Fashion Week Diary",
      brand: "Fashion Week",
      image: "/placeholder.svg?height=400&width=400",
      views: "4.2M",
      likes: "89K",
      engagement: "10.3%",
      description: "Behind the scenes at Paris Fashion Week with exclusive access.",
      type: "Story Highlights",
    },
  ]

  const filteredItems =
    activeFilter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  const stats = [
    { label: "Total Views", value: "50M+", color: "text-blue-500" },
    { label: "Average Engagement", value: "8.2%", color: "text-green-500" },
    { label: "Brand Partnerships", value: "30+", color: "text-purple-500" },
    { label: "Content Pieces", value: "250+", color: "text-orange-500" },
  ]

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
              <Link href="/portfolio" className="text-rose-600 font-medium">
                Portfolio
              </Link>
              <Link href="/collaborate" className="text-gray-700 hover:text-rose-600 transition-colors">
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
              My Work
            </Badge>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Creative{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Explore my best collaborations, campaigns, and content that have resonated with millions of followers
              across fashion, beauty, lifestyle, and travel.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Filter className="w-5 h-5 text-gray-500 mt-2" />
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={
                  activeFilter === filter
                    ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white"
                    : "border-rose-200 text-rose-700 hover:bg-rose-50 bg-transparent"
                }
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800">
                        {item.type}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="secondary"
                        className={`${
                          item.category === "Fashion"
                            ? "bg-pink-100 text-pink-700"
                            : item.category === "Beauty"
                              ? "bg-purple-100 text-purple-700"
                              : item.category === "Lifestyle"
                                ? "bg-green-100 text-green-700"
                                : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {item.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Content
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {item.views}
                          </div>
                          <div className="flex items-center">
                            <Heart className="w-4 h-4 mr-1" />
                            {item.likes}
                          </div>
                        </div>
                        <div className="bg-green-500 px-2 py-1 rounded text-xs font-medium">{item.engagement}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-rose-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-rose-600">{item.brand}</span>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Eye className="w-4 h-4" />
                        <span>{item.views}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">Impressed by My Work?</h2>
          <p className="text-rose-100 text-xl mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. I'd love to help bring your brand's vision to life through
            authentic, engaging content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collaborate">
              <Button size="lg" variant="secondary" className="bg-white text-rose-600 hover:bg-rose-50">
                Start a Project
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-rose-600 bg-transparent"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
