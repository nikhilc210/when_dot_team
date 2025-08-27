"use client"

import { useState } from "react"
import { Header } from "../../components/header"
import { Sidebar } from "../../components/Sidebar/index"
import { MainContent } from "../../components/main-content"
import { ReplayEventsSidebar } from "../../components/replay-events-sidebar"

export default function Page() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const events = [
  {
    id: 1,
    presenter: "Dr. Robert Fox",
    title: "Bio hacking Your Daily ...",
    image: "/woman-with-tablet-on-blue-background.png",
  },
  {
    id: 2,
    presenter: "Dr. Robert Fox",
    title: "Bio hacking Your Daily ...",
    image: "/professional-woman-in-beige-sweater.png",
  },
  {
    id: 3,
    presenter: "Dr. Robert Fox",
    title: "Bio hacking Your Daily ...",
    image: "/man-with-microscope-lab.png",
  },
  {
    id: 4,
    presenter: "Dr. Robert Fox",
    title: "Bio hacking Your Daily ...",
    image: "/woman-with-tablet-on-blue-background.png",
  },
  {
    id: 5,
    presenter: "Dr. Robert Fox",
    title: "Bio hacking Your Daily ...",
    image: "/elderly-man-with-beard-and-hat.png",
  },
  {
    id: 6,
    presenter: "Dr. Robert Fox",
    title: "Bio hacking Your Daily ...",
    image: "/woman-with-tablet-on-blue-background.png",
  },
  {
    id: 7,
    presenter: "Dr. Robert Fox",
    title: "Bio hacking Your Daily ...",
    image: "/professional-woman-in-beige-sweater.png",
  },
  {
    id: 8,
    presenter: "Dr. Robert Fox",
    title: "Bio hacking Your Daily ...",
    image: "/man-with-microscope-lab.png",
  },
  {
    id: 9,
    presenter: "Dr. Robert Fox",
    title: "Bio hacking Your Daily ...",
    image: "/woman-with-tablet-on-blue-background.png",
  },
  {
    id: 10,
    presenter: "Dr. Robert Fox",
    title: "Bio hacking Your Daily ...",
    image: "/elderly-man-with-beard-and-hat.png",
  },
]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? "ml-16" : "ml-64"}`}>
          <div className="flex">
            <div className="flex-1 p-6 max-w-5xl">
               <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-blue-500">Replay Events</h1>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group cursor-pointer animate-in fade-in-0 slide-in-from-bottom-8 duration-700 hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {event.presenter}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {event.title}
                  </p>
                </div>
              </div>
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