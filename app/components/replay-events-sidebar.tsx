import { Button } from "../components/ui/button"
import { Check } from "lucide-react"

const replayEvents = [
  {
    id: 1,
    title: "5 Practical Ways to Slow Aging in 2025",
    speaker: "Dr. David Sinclair",
    date: "6th August 3:30 pm Est",
    image: "/dr_image.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Bio hacking Your Daily Routine",
    speaker: "By Dr. Robert Fox",
    date: "10th June 2025",
    image: "/professional-businesswoman.png",
    completed: true,
  },
  {
    id: 3,
    title: "Bio hacking Your Daily Routine",
    speaker: "By Dr. Robert Fox",
    date: "10th June 2025",
    image: "/professional-businesswoman.png",
    completed: true,
  },
  {
    id: 4,
    title: "Bio hacking Your Daily Routine",
    speaker: "By Dr. Robert Fox",
    date: "10th June 2025",
    image: "/professional-businesswoman.png",
  },
  {
    id: 5,
    title: "Bio hacking Your Daily Routine",
    speaker: "By Dr. Robert Fox",
    date: "10th June 2025",
    image: "/elderly-man-white-beard.png",
  },
]

export function ReplayEventsSidebar() {
  return (
    <div className="w-80 bg-white border-l border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-blue-500 mb-6">Replay Events</h2>

      <div className="space-y-4">
        {replayEvents.map((event, index) => (
          <div key={event.id} className={`${event.featured ? "mb-6" : ""}  flex min-h-[90px] shadow-md p-2  items-center rounded-[10px]`}>
            {event.featured ? (
              <div className="relative rounded-lg overflow-hidden">
                <img src={event.image || "/placeholder.svg"} alt={event.speaker} className="w-full h-40 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-sm font-medium">{event.speaker}</p>
                  <p className="text-xs opacity-90">{event.title}</p>
                  <p className="text-xs opacity-75 mt-1">{event.date}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.speaker}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {event.completed && (
                    <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{event.speaker}</p>
                  <p className="text-xs text-gray-600 truncate">{event.title}</p>
                  <p className="text-xs text-blue-500">{event.date}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <Button className="w-full mt-6 bg-[#00AAFF] rounded-[15px] hover:bg-blue-600 text-white">See All</Button>
    </div>
  )
}
