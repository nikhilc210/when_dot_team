"use client"

import { useState } from "react"
import { Header } from "../../components/header"
import { Sidebar } from "../../components/Sidebar/index"
import { MainContent } from "../../components/main-content"
import { ReplayEventsSidebar } from "../../components/replay-events-sidebar"
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { SearchBar } from "@/app/components/SearchBar"
import { Input } from "@/app/components/ui/input"
import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { Avatar } from "radix-ui"

export default function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Header />
      <div className="flex">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? "ml-16" : "ml-64"}`}>
          <div className="flex">
                      {/* <MainContent /> */}
                      <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            {/* Upcoming Event Card */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <Avatar.Root
  className="inline-flex size-[220px] select-none items-center justify-center overflow-hidden rounded-[12px] bg-[#f5f0ec] align-middle"
>
  <Avatar.Image
    className="size-full rounded-[inherit] object-cover"
    src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=300&h=300&dpr=2&q=80"
    alt="Colm Tuite"
  />
  <Avatar.Fallback
    className="leading-1 flex size-full items-center justify-center bg-[#f5f0ec] text-[20px] font-medium text-gray-700"
    delayMs={600}
  >
    CT
  </Avatar.Fallback>
</Avatar.Root>

                  </div>

                  <div className="flex-1">
                    <h2 className="text-[36px] font-bold text-[#00AAFF] mb-2">Upcoming Event</h2>
                    <h3 className="text-[22px] font-bold text-gray-900 mb-1">Bio hacking Your Daily Routine</h3>
                    <p className="text-[20px] font-semibold text-gray-900 mb-2">Bryan Johnson</p>
                    <p className="text-[#00AAFF] text-[20px] font-bold mb-4">
                      15<sup>th</sup> August 3 pm Est
                    </p>

                    <div className="flex items-center gap-3 mb-4">
                      <Button className="bg-[#00AAFF] h-[25px] hover:bg-blue-600 text-white">Register</Button>
                      <Button  className="h-[25px] bg-[#D0E7FB] text-[#000000]">Ask a Question</Button>
                      <Button className="border-1 border-[#00AAFF] text-[#00AAFF] h-[25px]">Visit Profile</Button>
                    </div>

                    <div className="flex items-center gap-3 float-right">
                      <div className="w-6 h-6  rounded flex items-center justify-center cursor-pointer">
                        <img src={"/instagram.png"}/>
                      </div>
                      <div className="w-6 h-6 rounded flex items-center justify-center cursor-pointer">
                         <img src={"/linkedin.png"}/>
                      </div>
                      <div className="w-6 h-6 rounded flex items-center justify-center cursor-pointer">
                         <img src={"/twitter.png"}/>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-[24px] font-bold text-[#00AAFF] mb-4">Description</h3>
              <p className="text-[#181818] mb-4 text-[16px] ">
                Leading researcher in cellular regeneration and aging reversal at Stanford University. Recent
                breakthrough in telomere extension methodology shows promising results for longevity enhancement.
              </p>
              <div className="flex gap-2">
                <span className="text-[#736969]">#supplements</span>
                <span className="text-[#736969]">#bio-hacking</span>
                <span className="text-[#736969]">#nutrition</span>
              </div>
            </div>

            {/* Trending Questions */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[24px] font-bold text-[#00AAFF]">
                  Trending Questions <span className="text-gray-500 text-[16px] font-normal">(34)</span>
                </h3>
                <Button className="h-[25px] bg-[#D0E7FB] text-[#000000]">Ask a Question</Button>
              </div>

              <div className="relative mb-6 w-full">
                <SearchBar className="absolute  left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-full h-4" />
                {/* <Input placeholder="Search" className="pl-10 bg-white" /> */}
              </div>

              <div className="space-y-4">
                {[1, 2, 3].map((num) => (
                  <Card key={num} className="bg-white">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 font-bold">{num}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-900 font-medium">
                            What are the most evidence-based supplements for extending lifespan?
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            {/* <Link className="w-4 h-4" /> */}
                          </Button>
                          <Button variant="ghost" size="sm" className="bg-green-100 text-green-600">
                            <ArrowUp className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
            <ReplayEventsSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
