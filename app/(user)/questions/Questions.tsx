"use client"

import { useState } from "react"
import { Search, Share2, ArrowUp, Calendar, Users, Sparkles, Filter } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"

interface Event {
  id: string
  title: string
  subtitle: string
  speaker: string
  speakerImage: string
  date: string
  queuePosition: number
  upvotes: number
}

const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "What are the most evidence-based supplements for extending lifespan?",
    subtitle: "Bio hacking Your Daily Routine",
    speaker: "Peter Attia",
    speakerImage: "/peter-attia-headshot.png",
    date: "10th June 2025",
    queuePosition: 31,
    upvotes: 89,
  },
  {
    id: "2",
    title: "What are the most evidence-based supplements for extending lifespan?",
    subtitle: "Bio hacking Your Daily Routine",
    speaker: "Bryan Johnson",
    speakerImage: "/bryan-johnson-headshot.png",
    date: "10th June 2025",
    queuePosition: 2,
    upvotes: 156,
  },
  {
    id: "3",
    title: "What are the most evidence-based supplements for extending lifespan?",
    subtitle: "Bio hacking Your Daily Routine",
    speaker: "Dr. Robert Fox",
    speakerImage: "/dr-robert-fox-headshot.png",
    date: "10th June 2025",
    queuePosition: 1,
    upvotes: 203,
  },
  {
    id: "4",
    title: "What are the most evidence-based supplements for extending lifespan?",
    subtitle: "Bio hacking Your Daily Routine",
    speaker: "Bryan Johnson",
    speakerImage: "/bryan-johnson-casual.png",
    date: "10th June 2025",
    queuePosition: 12,
    upvotes: 67,
  },
]

const pastEvents: Event[] = [
  {
    id: "5",
    title: "Advanced Longevity Protocols: What We Learned in 2024",
    subtitle: "Bio hacking Your Daily Routine",
    speaker: "Dr. David Sinclair",
    speakerImage: "/dr-david-sinclair-headshot.png",
    date: "15th May 2025",
    queuePosition: 0,
    upvotes: 342,
  },
  {
    id: "6",
    title: "Metabolic Health and Aging: The Complete Guide",
    subtitle: "Bio hacking Your Daily Routine",
    speaker: "Rhonda Patrick",
    speakerImage: "/rhonda-patrick-headshot.png",
    date: "8th May 2025",
    queuePosition: 0,
    upvotes: 278,
  },
  {
    id: "7",
    title: "Sleep Optimization for Longevity",
    subtitle: "Bio hacking Your Daily Routine",
    speaker: "Matthew Walker",
    speakerImage: "/matthew-walker-headshot.png",
    date: "1st May 2025",
    queuePosition: 0,
    upvotes: 195,
  },
]

function EventCard({ event, isPast }: { event: Event; isPast: boolean }) {
  const [upvotes, setUpvotes] = useState(event.upvotes)
  const [hasUpvoted, setHasUpvoted] = useState(false)

  const handleUpvote = () => {
    if (!hasUpvoted) {
      setUpvotes((prev) => prev + 1)
      setHasUpvoted(true)
    }
  }

  return (
    <Card className="group mb-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card border-0 shadow-md overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-3 pb-2">
          <div className="flex items-start justify-between mb-1">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-0 font-medium text-xs">
              <Calendar className="w-3 h-3 mr-1" />
              {event.date}
            </Badge>
            {!isPast && event.queuePosition > 0 && (
              <div className="text-right">
                <div className="bg-accent/10 px-1.5 py-0.5 rounded-full">
                  <span className="text-xs font-bold text-accent">
                    {event.queuePosition}
                    <sup className="text-xs">
                      {event.queuePosition === 1
                        ? "st"
                        : event.queuePosition === 2
                          ? "nd"
                          : event.queuePosition === 3
                            ? "rd"
                            : "th"}
                    </sup>
                  </span>
                  <span className="text-xs text-accent ml-1">in Queue</span>
                </div>
              </div>
            )}
          </div>

          <h3 className="text-base font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {event.title}
          </h3>
        </div>

        <div className="p-3 pt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Avatar className="h-8 w-8 ring-2 ring-primary/20 ring-offset-1">
                  <AvatarImage src={event.speakerImage || "/placeholder.svg"} alt={event.speaker} />
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xs">
                    {event.speaker
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-accent rounded-full border-2 border-white flex items-center justify-center">
                  <Users className="w-1.5 h-1.5 text-white" />
                </div>
              </div>

              <div>
                <p className="font-semibold text-primary text-sm leading-tight">{event.subtitle}</p>
                <p className="text-muted-foreground font-medium text-xs leading-tight">{event.speaker}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="w-1 h-1 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-xs text-accent font-medium">{isPast ? "Completed" : "Live Session"}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Share2 className="h-3 w-3" />
              </Button>
              <div className="flex items-center gap-1">
                <Button
                  size="icon"
                  onClick={handleUpvote}
                  className={`h-7 w-7 transition-all duration-300 ${
                    hasUpvoted
                      ? "bg-gradient-to-r from-primary to-accent shadow-lg"
                      : "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl"
                  }`}
                >
                  <ArrowUp className="h-3 w-3 text-white" />
                </Button>
                <span className="text-sm font-semibold text-primary min-w-[2rem] text-center">{upvotes}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Questions() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming")
  const [searchQuery, setSearchQuery] = useState("")

  const currentEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents
  const filteredEvents = currentEvents.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.subtitle.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-primary/5">
      <div className="max-w-5xl mx-auto p-6">
       

        <div className="mb-8">
          <div className="flex gap-2 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-border/50 max-w-md mx-auto">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "upcoming"
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg transform scale-105"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "past"
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg transform scale-105"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        <div className="relative mb-8 max-w-2xl mx-auto">
          <div className="relative bg-gradient-to-r from-white/90 via-white/95 to-white/90 backdrop-blur-md rounded-3xl p-1 shadow-2xl border border-primary/10">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl"></div>
            <div className="relative flex items-center">
              <div className="absolute left-6 flex items-center gap-2">
                <div className="p-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full">
                  <Search className="h-4 w-4 text-primary" />
                </div>
                <Sparkles className="h-3 w-3 text-accent animate-pulse" />
              </div>
              <Input
                type="text"
                placeholder="Search events, speakers, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-20 pr-16 py-4 text-lg bg-transparent border-0 rounded-3xl focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/70"
              />
              <div className="absolute right-4 flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-3 bg-primary/5 hover:bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  <Filter className="h-3 w-3 mr-1" />
                  Filter
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full opacity-60 animate-pulse"></div>
          <div
            className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full opacity-40 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div key={activeTab} className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
          {filteredEvents.length > 0 ? (
            <div className="space-y-4">
              {filteredEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="animate-in fade-in-0 slide-in-from-bottom-2 duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <EventCard event={event} isPast={activeTab === "past"} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-primary" />
              </div>
              <p className="text-muted-foreground text-xl font-medium">No events found matching your search.</p>
              <p className="text-muted-foreground mt-2">Try adjusting your search terms or browse all events.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
