"use client"

import { useState, useEffect } from 'react'
import { Button } from '../components/ui/button'
import Header from '../components/Header/Header'

export default function PodcastInterface() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const thumbnailData = [
    {
      image: "/one_pod.jpg",
      title: "5 Practical Ways to Slow Aging",
      speaker: "Peter Attia",
      date: "15th August 2 PM EST"
    },
    {
      image: "/two_pod.jpg",
      title: "5 Practical Ways to Slow Aging",
      speaker: "Peter Attia", 
      date: "15th August 2 PM EST"
    },
    {
      image: "/three_pod.jpg",
      title: "5 Practical Ways to Slow Aging",
      speaker: "Peter Attia",
      date: "15th August 2 PM EST"
    },
    {
      image: "/one_pod.jpg",
      title: "5 Practical Ways to Slow Aging", 
      speaker: "Peter Attia",
      date: "15th August 2 PM EST"
    },
    {
      image: "/four_pod.jpg",
      title: "5 Practical Ways to Slow Aging",
      speaker: "Peter Attia",
      date: "15th August 2 PM EST"
    },
       {
      image: "/one_pod.jpg",
      title: "5 Practical Ways to Slow Aging",
      speaker: "Peter Attia",
      date: "15th August 2 PM EST"
    },
    {
      image: "/two_pod.jpg",
      title: "5 Practical Ways to Slow Aging",
      speaker: "Peter Attia", 
      date: "15th August 2 PM EST"
    },
    {
      image: "/three_pod.jpg",
      title: "5 Practical Ways to Slow Aging",
      speaker: "Peter Attia",
      date: "15th August 2 PM EST"
    },
    {
      image: "/one_pod.jpg",
      title: "5 Practical Ways to Slow Aging", 
      speaker: "Peter Attia",
      date: "15th August 2 PM EST"
    },
    {
      image: "/four_pod.jpg",
      title: "5 Practical Ways to Slow Aging",
      speaker: "Peter Attia",
      date: "15th August 2 PM EST"
    },
       {
      image: "/one_pod.jpg",
      title: "5 Practical Ways to Slow Aging",
      speaker: "Peter Attia",
      date: "15th August 2 PM EST"
    },
    {
      image: "/two_pod.jpg",
      title: "5 Practical Ways to Slow Aging",
      speaker: "Peter Attia", 
      date: "15th August 2 PM EST"
    },
    {
      image: "/three_pod.jpg",
      title: "5 Practical Ways to Slow Aging",
      speaker: "Peter Attia",
      date: "15th August 2 PM EST"
    },
    {
      image: "/one_pod.jpg",
      title: "5 Practical Ways to Slow Aging", 
      speaker: "Peter Attia",
      date: "15th August 2 PM EST"
    },
    {
      image: "/four_pod.jpg",
      title: "5 Practical Ways to Slow Aging",
      speaker: "Peter Attia",
      date: "15th August 2 PM EST"
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-4">
      {/* Main Hero Section */}
      <div className="relative bg-black text-white overflow-hidden rounded-2xl mb-6 min-h-[519px]">
        {/* Background Pattern - Vertical Lines */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            background: `#020202`
          }} />
        </div>
        
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-8 py-8">
            {/* Left Content */}
            <div className={`space-y-4 transform transition-all duration-500 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              {/* Header */}
              <h1 className="text-[20px] lg:text-[50px] font-bold leading-tight">
                Join the{' '}
                <span className="text-[#00AAFF]">Conversation</span>
              </h1>

              {/* Title */}
              <h2 className="text-[20px] text-[#FFFFFF] lg:text-[35px] font-bold leading-tight">
                5 Practical Ways to Slow Aging in 2025
              </h2>
              
              {/* Speaker Info */}
              <div className="space-y-2">
                <h3 className="text-[20px] lg:text-[40px] text-[#FFFFFF] font-semibold">Peter Attia</h3>
                <p className="text-[16px] lg:text-[26px] text-[#FFFFFF]">Aging Research Institute</p>
              </div>

              {/* Date */}
              <p className="text-[#00AAFF] text-xl font-semibold">
                15<sup>th</sup> August 2 PM EST
              </p>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <Button 
                  className="bg-[#00AAFF] hover:bg-[#00AAFF] text-white px-6 py-3 text-base font-semibold rounded-lg transform transition-all duration-200 hover:scale-105"
                >
                  Reserve your Spot !
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-transparent border-2 border-[#00AAFF] text-[#00AAFF] hover:bg-white hover:text-black px-6 py-3 text-base font-semibold rounded-lg transform transition-all duration-200 hover:scale-105"
                >
                  Ask a Question
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className={`transform transition-all duration-500 ease-out delay-100 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'
            }`}>
              <div className="relative">
                <img
                  src="/podcaster.png"
                  alt="Peter Attia at podcast setup"
                  className="w-full h-auto rounded-lg transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Section */}
      <div className="max-w-7xl mx-auto">
        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-4">
          {thumbnailData.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg  overflow-hidden transform transition-all duration-400 ease-out hover:scale-105 hover:shadow-xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 50 + 200}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
                />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-bold text-sm leading-tight">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.speaker}</p>
                <p className="text-[#00AAFF] text-sm font-semibold">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Horizontal Scroll */}
        <div className="lg:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {thumbnailData.map((item, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-64 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-400 ease-out hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50 + 200}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <h3 className="font-bold text-sm leading-tight">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.speaker}</p>
                  <p className="text-blue-500 text-sm font-semibold">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
