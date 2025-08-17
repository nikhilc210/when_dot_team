import { FeaturedEvent } from "./featured-event"
import { EventGrid } from "./event-grid"

export function MainContent() {
  return (
    <main className="flex-1 p-6 max-w-5xl">
      <FeaturedEvent />
      <EventGrid />
    </main>
  )
}
