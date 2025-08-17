interface Event {
  id: number
  title: string
  speaker: string
  image: string
}

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => {
      window.location.href = "/upcoming"
    }}>
      <img src={event.image || "/placeholder.svg"} alt={event.speaker} className="w-full h-32 object-cover" />
      <div className="p-3">
        <h3 className="font-medium text-sm text-gray-900 mb-1">{event.speaker}</h3>
        <p className="text-xs text-gray-600 line-clamp-2">{event.title}</p>
      </div>
    </div>
  )
}
