"use client"

import { useState } from "react"
import { Header } from "../../components/header"
import { Sidebar } from "../../components/Sidebar/index"
import { MainContent } from "../../components/main-content"
import { ReplayEventsSidebar } from "../../components/replay-events-sidebar"
import Questions from "./Questions"

export default function Page() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        <div
          className={`flex-1 transition-all duration-300 ${
            sidebarCollapsed ? "ml-16" : "ml-64"
          }`}
        >
          <div className="flex">
            <div className="flex-1 p-0 max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 h-[80vh]">
                {/* Video */}
                <div className="flex-1">
                  <iframe
                    className="w-full h-full rounded-lg shadow"
                    src="https://www.youtube.com/embed/Nq2wYlWFucg"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Live Chat */}
                <div className="w-full md:w-[350px] h-full">
                  {/* <iframe
                    className="w-full h-full rounded-lg shadow"
                    src="https://www.youtube.com/live_chat?v=Nq2wYlWFucg&embed_domain=localhost"
                    frameBorder="0"
                  ></iframe> */}
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
