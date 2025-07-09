import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, Heart, Camera, Sparkles, ArrowRight, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const milestones = [
    { year: "2020", title: "Started Journey", description: "Began sharing fashion content on Instagram" },
    { year: "2021", title: "First Brand Deal", description: "Collaborated with local fashion brands" },
    { year: "2022", title: "100K Followers", description: "Reached first major milestone" },
    { year: "2023", title: "500K Followers", description: "Expanded to lifestyle and beauty content" },
    { year: "2024", title: "1M+ Followers", description: "Became a leading fashion influencer" },
  ]

  const values = [
    {
      icon: Heart,
      title: "Authenticity",
      description: "I believe in genuine connections and honest recommendations that truly benefit my audience.",
    },
    {
      icon: Camera,
      title: "Quality Content",
      description: "Every post is carefully crafted with attention to detail, aesthetics, and storytelling.",
    },
    {
      icon: Sparkles,
      title: "Inspiration",
      description: "I aim to inspire confidence and help others express their unique style and personality.",
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
              <Link href="/about" className="text-rose-600 font-medium">
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
            <Link href="https://www.instagram.com/shiyyabhardwaj/" target="_blank" rel="noopener noreferrer">
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-200">
                  My Story
                </Badge>
                <h1 className="font-serif text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  About{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">
                    Shiya
                  </span>
                </h1>
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  Fashion enthusiast, content creator, and storyteller passionate about helping brands connect with
                  their audience through authentic, engaging content.
                </p>
              </div>

              <div className="bg-rose-50 p-6 rounded-2xl border-l-4 border-rose-400">
                <Quote className="w-8 h-8 text-rose-500 mb-4" />
                <blockquote className="text-lg text-gray-700 italic mb-2">
                  "Authenticity is the best filter. When you're true to yourself, your content resonates with the right
                  audience."
                </blockquote>
                <cite className="text-rose-600 font-medium">- Shiya Bhardwaj</cite>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.jpg?height=600&width=500"
                  alt="Shiya Bhardwaj - About"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">My Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From a fashion enthusiast to a leading influencer - here's how my passion turned into a career
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-200 to-amber-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-8`}
                >
                  <div className="flex-1">
                    <Card
                      className={`${
                        index % 2 === 0 ? "mr-8" : "ml-8"
                      } bg-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Badge variant="secondary" className="bg-rose-100 text-rose-700">
                            {milestone.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-rose-400 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* My Values */}
      <section className="py-20 bg-gradient-to-r from-rose-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">What Drives Me</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The core values that guide my content creation and brand partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">My Story</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Beginning</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  My journey into the world of fashion and lifestyle content creation began during college when I
                  started sharing my daily outfits and style inspirations on Instagram. What started as a personal
                  creative outlet quickly grew into something much bigger.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I've always been passionate about fashion, skincare, and helping others feel confident in their own
                  skin. This passion, combined with my love for photography and storytelling, naturally led me to
                  content creation.
                </p>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.jpg?height=320&width=400"
                  alt="Shiya's early content"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
                <Image
                  src="/placeholder.jpg?height=320&width=400"
                  alt="Shiya creating content"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What Makes Me Different</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In a world full of filters and perfection, I choose authenticity. I believe in showing the real me -
                  the good days, the challenging ones, and everything in between. My audience connects with me because
                  they see themselves in my content.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I'm not just about promoting products; I'm about building genuine relationships with my community and
                  only partnering with brands that align with my values and that I truly believe in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">Let's Create Together</h2>
          <p className="text-rose-100 text-xl mb-8 max-w-2xl mx-auto">
            Ready to work with someone who values authenticity and delivers results? Let's discuss your next campaign.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio">
              <Button size="lg" variant="secondary" className="bg-white text-rose-600 hover:bg-rose-50">
                View My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/collaborate">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-rose-600 bg-transparent"
              >
                Start a Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
