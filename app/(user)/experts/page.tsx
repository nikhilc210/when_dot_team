"use client"

import { useState, useEffect } from 'react'

import { Header } from "../../components/header"
import { Sidebar } from "../../components/Sidebar/index"
import { MainContent } from "../../components/main-content"
import { ReplayEventsSidebar } from "../../components/replay-events-sidebar"
import { Search, ChevronDown } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import DoctorCard from "../../components/DoctorCard"
import MoreInfoCard from "../../components/more-info-card"

export default function PodcastInterface() {
  const [isVisible, setIsVisible] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
    const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      institute: "Aging Research Institute",
      location: "State, Country",
      image: "/male-doctor-stethoscope.png",
      specialty: "Geriatric Medicine",
      rating: 4.9,
      reviews: 127,
    },
    {
      id: 2,
      name: "Dr. Emily Rodriguez",
      institute: "Aging Research Institute",
      location: "State, Country",
      image: "/female-doctor-stethoscope.png",
      specialty: "Internal Medicine",
      rating: 4.8,
      reviews: 89,
    },
    {
      id: 3,
      name: "Dr. Michael Thompson",
      institute: "Aging Research Institute",
      location: "State, Country",
      image: "/male-doctor-stethoscope.png",
      specialty: "Cardiology",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 4,
      name: "Dr. Lisa Wang",
      institute: "Aging Research Institute",
      location: "State, Country",
      image: "/professional-doctor-portrait.png",
      specialty: "Neurology",
      rating: 4.9,
      reviews: 203,
    },
    {
      id: 5,
      name: "Dr. Jennifer Adams",
      institute: "Aging Research Institute",
      location: "State, Country",
      image: "/female-doctor-blonde.png",
      specialty: "Endocrinology",
      rating: 4.6,
      reviews: 74,
    },
    {
      id: 6,
      name: "Dr. Sarah Chen",
      institute: "Aging Research Institute",
      location: "State, Country",
      image: "/female-doctor-stethoscope.png",
      specialty: "Internal Medicine",
      rating: 4.8,
      reviews: 89,
    },
    {
      id: 7,
      name: "Dr. Sarah Chen",
      institute: "Aging Research Institute",
      location: "State, Country",
      image: "/professional-doctor-portrait.png",
      specialty: "Cardiology",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 8,
      name: "Dr. Sarah Chen",
      institute: "Aging Research Institute",
      location: "State, Country",
      image: "/male-doctor-white-coat.png",
      specialty: "Neurology",
      rating: 4.9,
      reviews: 203,
    },
    {
      id: 9,
      name: "Dr. Sarah Chen",
      institute: "Aging Research Institute",
      location: "State, Country",
      image: "/male-doctor-stethoscope.png",
      specialty: "Geriatric Medicine",
      rating: 4.9,
      reviews: 127,
    },
    {
      id: 10,
      name: "Dr. Sarah Chen",
      institute: "Aging Research Institute",
      location: "State, Country",
      image: "/doctor-female-2.png",
      specialty: "Endocrinology",
      rating: 4.6,
      reviews: 74,
    },
    {
      id: 11,
      name: "Dr. Sarah Chen",
      institute: "Aging Research Institute",
      location: "State, Country",
      image: "/blonde-female-doctor.png",
      specialty: "Internal Medicine",
      rating: 4.8,
      reviews: 89,
    },
    {
      id: 12,
      name: "Dr. Sarah Chen",
      institute: "Aging Research Institute",
      location: "State, Country",
      image: "/male-doctor-white-coat.png",
      specialty: "Cardiology",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 13,
      name: "Dr. Sarah Chen",
      institute: "Aging Research Institute",
      location: "State, Country",
      image: "/doctor-1.png",
      specialty: "Neurology",
      rating: 4.9,
      reviews: 203,
    },
    {
      id: 14,
      name: "Dr. Sarah Chen",
      institute: "Aging Research Institute",
      location: "State, Country",
      image: "/professional-male-doctor.png",
      specialty: "Geriatric Medicine",
      rating: 4.9,
      reviews: 127,
    },
    {
      id: 15,
      name: "Dr. Sarah Chen",
      institute: "Aging Research Institute",
      location: "State, Country",
      image: "/male-doctor-white-coat.png",
      specialty: "Internal Medicine",
      rating: 4.8,
      reviews: 89,
    },
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

 

  return (
     <div className="min-h-screen bg-gray-50">
      <Header />
        <div className="flex">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? "ml-16" : "ml-64"}`}>
          <div className="flex">
            <div className="flex-1 p-6 max-w-5xl">
               <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between animate-in fade-in duration-700">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl tracking-tight">
          Browse{" "}
          <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Directory
          </span>
        </h1>

        {/* Search Section */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center animate-in slide-in-from-right duration-700 delay-200">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted group-focus-within:text-primary transition-colors duration-200" />
            <Input
              placeholder="Search doctors..."
              className="pl-11 pr-4 py-3 w-full sm:w-72 bg-card border-border shadow-lg hover:shadow-xl focus:shadow-xl transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-ring"
            />
          </div>
          <Button
            variant="default"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            All Specializations
            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
          </Button>
        </div>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-6">
        {doctors.slice(0, 5).map((doctor, index) => (
          <div
            key={doctor.id}
            className="animate-in fade-in slide-in-from-bottom duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <DoctorCard doctor={doctor} />
          </div>
        ))}

        {/* More Information Card - positioned at index 5 */}
        <div className="animate-in fade-in slide-in-from-bottom duration-500" style={{ animationDelay: "500ms" }}>
          <MoreInfoCard />
        </div>

        {doctors.slice(5).map((doctor, index) => (
          <div
            key={doctor.id}
            className="animate-in fade-in slide-in-from-bottom duration-500"
            style={{ animationDelay: `${(index + 6) * 100}ms` }}
          >
            <DoctorCard doctor={doctor} />
          </div>
        ))}
      </div>
    </div>
            </div>
            <ReplayEventsSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
