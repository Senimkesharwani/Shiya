import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, Heart, Play, Briefcase, ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export default function HomePage() {
  const stats = [
    { icon: Heart, label: "Followers", value: "1M+", color: "text-pink-500" },
    { icon: Play, label: "Reels", value: "250+", color: "text-purple-500" },
    { icon: Briefcase, label: "Brand Collabs", value: "30+", color: "text-amber-500" },
  ]

  const instagramPosts = [
    { id: 1, image: "/placeholder.jpg?height=300&width=300", likes: "12.5K", comments: "234" },
    { id: 2, image: "/placeholder.jpg?height=300&width=300", likes: "18.2K", comments: "456" },
    { id: 3, image: "/placeholder.jpg?height=300&width=300", likes: "15.8K", comments: "321" },
    { id: 4, image: "/placeholder.jpg?height=300&width=300", likes: "22.1K", comments: "567" },
    { id: 5, image: "/placeholder.jpg?height=300&width=300", likes: "19.7K", comments: "432" },
    { id: 6, image: "/placeholder.jpg?height=300&width=300", likes: "16.3K", comments: "298" },
  ]

  const testimonials = [
    {
      brand: "Fashion Nova",
      quote: "Shiya's authentic approach to content creation drove incredible engagement for our campaign.",
      metric: "+45% engagement",
    },
    {
      brand: "Sephora",
      quote: "Her beauty content resonates perfectly with our target audience. Exceptional results!",
      metric: "2.3M reach",
    },
    {
      brand: "Zara",
      quote: "Professional, creative, and delivers beyond expectations. A true brand partner.",
      metric: "+60% conversions",
    },
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
              <Link href="/portfolio" className="text-gray-700 hover:text-rose-600 transition-colors">
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
      <section className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-200">
                  Fashion & Lifestyle Influencer
                </Badge>
                <h1 className="font-serif text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">
                    Shiya
                  </span>
                </h1>
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  I help brands shine through authentic, engaging content that resonates with millions of followers
                  worldwide.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md mb-2 ${stat.color}`}
                    >
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="font-bold text-2xl text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg w-full sm:w-auto"
                  >
                    View Portfolio
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/collaborate">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-rose-200 text-rose-700 hover:bg-rose-50 bg-transparent w-full sm:w-auto"
                  >
                    Hire Me
                    <Briefcase className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.jpg"
                  alt="Shiya Bhardwaj - Fashion Influencer"
                  fill
                  className=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <Instagram className="w-8 h-8 text-pink-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Latest from Instagram</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow my journey and get inspired by my latest fashion, beauty, and lifestyle content
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {instagramPosts.map((post) => (
              <Card
                key={post.id}
                className="group cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-0 relative">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.jpg"}
                      alt={`Instagram post ${post.id}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center space-x-4 text-white">
                        <div className="flex items-center">
                          <Heart className="w-5 h-5 mr-1" />
                          <span className="text-sm font-medium">{post.likes}</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm font-medium">{post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="https://instagram.com/shiyabhardwaj" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-pink-200 text-pink-700 hover:bg-pink-50 bg-transparent"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Follow @shiyabhardwaj
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-rose-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Trusted by Leading Brands</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">See what brands say about working with me</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">"{testimonial.quote}"</blockquote>
                  <div className="flex justify-between items-center">
                    <div className="font-semibold text-gray-900">{testimonial.brand}</div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {testimonial.metric}
                    </Badge>
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
          <h2 className="font-serif text-4xl font-bold text-white mb-4">Ready to Collaborate?</h2>
          <p className="text-rose-100 text-xl mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. I'm always excited to work with brands that share my passion for
            authentic storytelling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collaborate">
              <Button size="lg" variant="secondary" className="bg-white text-rose-600 hover:bg-rose-50">
                <Briefcase className="w-5 h-5 mr-2" />
                Start a Project
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-rose-600 bg-transparent"
              >
                Download Media Kit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">Shiya Bhardwaj</h3>
              <p className="text-gray-400 mb-4">
                Fashion & Lifestyle Influencer helping brands connect with their audience through authentic content.
              </p>
              <div className="flex space-x-4">
                <Link href="https://instagram.com/shiyabhardwaj" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                    <Instagram className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/portfolio" className="block text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
                <Link href="/collaborate" className="block text-gray-400 hover:text-white transition-colors">
                  Collaborate
                </Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>business@shiyabhardwaj.com</p>
                <p>For collaborations & partnerships</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Shiya Bhardwaj. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
