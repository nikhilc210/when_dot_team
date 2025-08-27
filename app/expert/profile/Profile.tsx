"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"
import { ChevronLeft, Instagram, Linkedin, Check, CheckCircle, Dna, FileText, Trophy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const events = [
  { id: 1, isLive: true, hasCheck: false },
  { id: 2, isLive: false, hasCheck: true },
  { id: 3, isLive: false, hasCheck: false },
  { id: 4, isLive: false, hasCheck: false },
  { id: 5, isLive: false, hasCheck: true },
  { id: 6, isLive: false, hasCheck: false },
  { id: 7, isLive: false, hasCheck: false },
]

function getEventImageQuery(index: number): string {
  const queries = [
    "modern podcast studio with microphones and health supplements on desk",
    "scientist in lab coat examining DNA samples under microscope",
    "fitness tracking devices and wearable technology on wooden table",
    "healthy meal prep containers with colorful vegetables and proteins",
    "meditation and wellness setup with plants and natural lighting",
    "blood test vials and medical equipment in clinical setting",
    "gym equipment and exercise bikes in modern fitness center",
  ]
  return queries[index % queries.length]
}

export default function Profile() {
  const [activeTab, setActiveTab] = useState("events")
  const [isFollowing, setIsFollowing] = useState(true)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200 mb-6 group"
          style={{ color: "#00aaff" }}
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="font-medium">Back</span>
        </button>

        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/middle-aged-doctor-headshot.png"
                alt="Peter Attia"
                width={384}
                height={384}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">Peter Attia</h1>

              {/* Follow Button and Social Icons */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Button
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    isFollowing ? "text-white hover:opacity-90" : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                  }`}
                  style={isFollowing ? { backgroundColor: "#00aaff" } : {}}
                >
                  {isFollowing ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Follow
                    </>
                  ) : (
                    "Follow"
                  )}
                </Button>

                <div className="flex gap-3">
                  <button className="w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                    <Instagram className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                    <Linkedin className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-10 h-10 bg-black hover:bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-700 text-lg leading-relaxed mb-4 animate-fade-in-up">
                Leading researcher in cellular regeneration and aging reversal at Stanford University. Recent
                breakthrough in telomere extension methodology shows promising results for longevity enhancement.
              </p>

              {/* Hashtags */}
              <div className="flex flex-wrap gap-2">
                {["#supplements", "#bio-hacking", "#nutrition"].map((tag, index) => (
                  <span
                    key={tag}
                    className="text-gray-600 cursor-pointer transition-colors duration-200 animate-fade-in-up hover:opacity-80"
                    style={{ animationDelay: `${index * 100}ms`, color: "#00aaff" }}
                    // onMouseEnter={(e) => (e.target.style.color = "#0088cc")}
                    // onMouseLeave={(e) => (e.target.style.color = "#00aaff")}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="rounded-2xl p-2 inline-flex gap-2" style={{ backgroundColor: "rgba(0, 170, 255, 0.1)" }}>
            <button
              onClick={() => handleTabChange("events")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "events" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Events
            </button>
            <button
              onClick={() => handleTabChange("about")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "about" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              About the Expert
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "events" && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#00aaff" }}>
              Upcoming Events
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              {events.map((event, index) => (
                <Card
                  key={event.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                      <Link href={event.isLive ? "/live" : "/eventDetail"}>
                      <div className="relative">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={`/abstract-geometric-shapes.png?key=ak4pd&height=200&width=300&query=${getEventImageQuery(index)}`}
                        alt="Bio hacking event"
                        width={300}
                        height={200}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                      {event.isLive && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium animate-pulse">
                          Live
                        </div>
                      )}
                      {event.hasCheck && (
                        <div className="absolute top-2 right-2 rounded-full p-1" style={{ backgroundColor: "#00aaff" }}>
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">Bio hacking Your Daily</h3>
                      <p className="text-sm font-medium" style={{ color: "#00aaff" }}>
                        17th August 6:30 pm Est
                      </p>
                    </div>
                  </div>
                      </Link>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "about" && (
          <div className="animate-fade-in space-y-8">
            {/* Specializations Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl font-bold" style={{ color: "#00aaff" }}>
                  Specializations
                </h2>
                <Dna className="w-6 h-6" style={{ color: "#00aaff" }} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  "Epigenetic Reprogramming & Aging Clocks",
                  "Cellular Senescence & Regeneration",
                  "Personalized Healthspan Optimization",
                ].map((specialization, index) => (
                  <Card
                    key={specialization}
                    className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up bg-gray-100"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <h3 className="font-semibold text-gray-900 text-lg leading-tight">{specialization}</h3>
                  </Card>
                ))}
              </div>
            </div>

            {/* Selected Publications Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl font-bold" style={{ color: "#00aaff" }}>
                  Selected Publications
                </h2>
                <FileText className="w-6 h-6" style={{ color: "#00aaff" }} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Reversing Biological Age through Epigenetic Modulation",
                    journal: "Nature Aging",
                    year: "2023",
                  },
                  {
                    title: "The Role of NAD+ in Cellular Longevity Pathways",
                    journal: "Cell Metabolism",
                    year: "2022",
                  },
                  {
                    title: "AI-Driven Biomarker Detection for Early Aging Intervention",
                    journal: "Journal of Longevity Science",
                    year: "2024",
                  },
                ].map((publication, index) => (
                  <Card
                    key={publication.title}
                    className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up bg-gray-100"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <h3 className="font-semibold text-gray-900 mb-2 leading-tight">"{publication.title}"</h3>
                    <p className="text-gray-700">
                      — <span className="font-medium">{publication.journal}</span> ({publication.year})
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Awards & Recognition Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl font-bold" style={{ color: "#00aaff" }}>
                  Awards & Recognition
                </h2>
                <Trophy className="w-6 h-6" style={{ color: "#00aaff" }} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Forbes "Top 50 in Longevity Innovation"',
                    year: "2023",
                  },
                  {
                    title: "Keynote Speaker at Longevity Summit Global",
                    year: "2024",
                  },
                ].map((award, index) => (
                  <Card
                    key={award.title}
                    className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up bg-gray-100"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <h3 className="font-semibold text-gray-900 mb-2 leading-tight">{award.title}</h3>
                    <p className="text-gray-700">({award.year})</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
