import { EventCard } from "./event-card"

const upcomingEvents = [
  {
    id: 1,
    title: "Bio hacking Your Daily Routine",
    speaker: "Dr. Robert Fox",
    image: "/professional-businesswoman.png",
  },
  {
    id: 2,
    title: "Bio hacking Your Daily Routine",
    speaker: "Dr. Robert Fox",
    image: "/professional-woman-natural-light.png",
  },
  {
    id: 3,
    title: "Bio hacking Your Daily Routine",
    speaker: "Dr. Robert Fox",
    image: "/scientist-in-laboratory.png",
  },
  {
    id: 4,
    title: "Bio hacking Your Daily Routine",
    speaker: "Dr. Robert Fox",
    image: "/professional-businesswoman.png",
  },
  {
    id: 5,
    title: "Bio hacking Your Daily Routine",
    speaker: "Dr. Robert Fox",
    image: "/elderly-man-white-beard-hat.png",
  },
]

export function EventGrid() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-[20px] font-bold text-[#00AAFF]  mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-[20px] font-bold text-[#00AAFF]  mb-4">Registered Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {upcomingEvents.map((event) => (
            <EventCard key={`registered-${event.id}`} event={event} />
          ))}
        </div>
      </section>
    </div>
  )
}
