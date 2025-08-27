"use client"

import { useState } from "react"
import { Header } from "../../components/header"
import { Sidebar } from "../../components/Sidebar/index"
import { MainContent } from "../../components/main-content"
import { ReplayEventsSidebar } from "../../components/replay-events-sidebar"
import { ProfileCard } from "@/app/components/profile-card"
import { Search } from "lucide-react"
import { Input } from "@/app/components/ui/input"

export default function Dashboard() {

  const profiles = [
  {
    id: 1,
    name: "Full Name",
    specialization: "Specialization",
    image: "/professional-woman-in-beige-sweater.png",
  },
  {
    id: 2,
    name: "Full Name",
    specialization: "Specialization",
    image: "/man-with-microphone-podcasting.png",
  },
  {
    id: 3,
    name: "Full Name",
    specialization: "Specialization",
    image: "/professional-man-in-suit-with-blue-lighting.png",
  },
  {
    id: 4,
    name: "Full Name",
    specialization: "Specialization",
    image: "/man-working-at-desk-with-equipment.png",
  },
  {
    id: 5,
    name: "Full Name",
    specialization: "Specialization",
    image: "/woman-with-tablet-on-blue-background.png",
  },
  {
    id: 6,
    name: "Full Name",
    specialization: "Specialization",
    image: "/man-with-microphone-at-desk.png",
  },
]
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? "ml-16" : "ml-64"}`}>
          <div className="flex">
            {/* <MainContent /> */}
            <div className="flex-1 p-6 max-w-5xl">
               <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-blue-500">Following</h1>

          {/* Search Bar */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input type="text" placeholder="Search" className="pl-10 bg-muted/50 border-0 rounded-full h-12" />
          </div>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <div
              key={profile.id}
              className="animate-in fade-in-0 slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProfileCard name={profile.name} specialization={profile.specialization} image={profile.image} />
            </div>
          ))}
        </div>
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