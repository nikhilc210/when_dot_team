"use client"

import { useState, useEffect } from "react"
import { Button } from "../../../components/ui/button"
import Header from "@/app/components/Header/Header"

const interests = [
  {
    id: "cognitive-health",
    title: "Cognitive Health",
    image: "/assets/health.jpg",
  },
  {
    id: "nutrition-diet",
    title: "Nutrition & Diet",
    image: "/assets/nutrition.jpg",
  },
  {
    id: "genetics-epigenetics",
    title: "Genetics & Epigenetics",
    image: "/assets/genetics.jpg",
  },
  {
    id: "physical-activity",
    title: "Physical Activity",
    image: "/assets/physical.jpg",
  },
  {
    id: "sleep-circadian",
    title: "Sleep & Circadian Rhythm",
    image: "/assets/sleep.jpg",
  },
  {
    id: "supplements-nootropics",
    title: "Supplements & Nootropics",
    image: "/assets/supliment.jpg",
  },
  {
    id: "biomarkers-testing",
    title: "Biomarkers & Testing",
    image: "/assets/biomarker.jpg",
  },
  {
    id: "stress-management",
    title: "Stress Management & Mental Health",
    image: "/assets/stress.jpg",
  },
  {
    id: "hormonal-health",
    title: "Hormonal Health",
    image: "/assets/hormonal.jpg",
  },
  {
    id: "regenerative-medicine",
    title: "Regenerative Medicine",
    image: "/assets/regenrative.jpg",
  },
  {
    id: "detox-environmental",
    title: "Detox & Environmental Exposure",
    image: "/assets/detox.jpg",
  },
  {
    id: "longevity-technology",
    title: "Longevity Technology",
    image: "/assets/longetivity.jpg",
  },
  {
    id: "microbiome-gut",
    title: "Microbiome & Gut Health",
    image: "/assets/micro.jpg",
  },
  {
    id: "preventive-medicine",
    title: "Preventive & Personalized Medicine",
    image: "/assets/personalized.jpg",
  },
  {
    id: "anti-aging",
    title: "Anti-Aging Therapies",
    image: "/assets/anti_aging.jpg",
  },
  {
    id: "social-health",
    title: "Social Health & Purpose",
    image: "/assets/social_health.jpg",
  },
]

export default function Component() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const toggleInterest = (interestId: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interestId) ? prev.filter((id) => id !== interestId) : [...prev, interestId],
    )
  }

  return (
      <>
          <Header />
          <div className="min-h-screen bg-white flex flex-col sm:flex-row">
      {/* Left Hero Section */}
      <div
        className={`flex-1 relative overflow-hidden transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
      >
        <div
  className="absolute inset-4 rounded-2xl"
  style={{
    backgroundImage: `url('/podcast_gif.gif')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    top: "16px",
    bottom: "96px", // 16px (from inset-4) + 80px = 96px
    left: "16px",
    right: "16px"
  }}
/>
       
        <div className="relative z-10 h-full flex flex-col  px-6 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-0">
          <div
            className={`max-w-lg transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 lg:mb-8 animate-fade-in mt-20">
              Join the conversation with world-class longevity experts & enthusiasts.
            </h1>
            <blockquote
              className={`text-base sm:text-lg lg:text-xl text-blue-100 italic transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              "Your health questions deserve expert answers. Let's make longevity accessible to everyone."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Right Interests Section */}
      <div
        className={`flex-1 p-4 sm:p-6 lg:p-2 xl:p-8 flex flex-col transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
      >
        <div className="mb-2 lg:mb-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
            Tell Us your <span className="text-blue-500">Interests</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">Select the health topics that interest you most</p>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 lg:mb-8 px-4 py-0">
            {interests.map((interest, index) => (
              <button
                key={interest.id}
                onClick={() => toggleInterest(interest.id)}
                className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group ${
                  selectedInterests.includes(interest.id)
                    ? "ring-3 sm:ring-4 ring-blue-500 ring-offset-2 scale-105"
                    : "hover:ring-2 hover:ring-blue-300"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isLoaded ? `slideInUp 0.6s ease-out forwards` : "none",
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <div
                  className="absolute inset-0 bg-gray-200 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${interest.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {/* Subtle overlay for text readability */}
                {/* <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" /> */}

                {/* Centered title */}
                <div className="absolute inset-0 flex items-end text-center p-2 sm:p-3" >
                  <h3 className="text-white font-semibold text-xs sm:text-sm leading-tight text-center transition-transform duration-300 group-hover:scale-105 drop-shadow-lg" style={{
                  background: `radial-gradient(50% 50% at 50% 50%, rgba(11, 12, 98, 0.8) 0%, rgba(102, 102, 102, 0) 98.56%)`

                }}>
                    {interest.title}
                  </h3>
                </div>

                {selectedInterests.includes(interest.id) && (
                  <div className="absolute top-2 right-2 w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
                {/* Subtle blue tint on hover */}
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end absolute bottom-20 right-13">
          <Button
            size="lg"
            className={`bg-[#00AAFF] text-[24px] font-bold  hover:bg-blue-600 text-white px-6 sm:px-8 py-3  rounded-[15px] text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer`}
                     
                      onClick={() => {
                           window.location.href = "/signup/user"
                      }}
          >
            Continue {selectedInterests.length > 0 && `(${selectedInterests.length})`}
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
      </>
  )
}
