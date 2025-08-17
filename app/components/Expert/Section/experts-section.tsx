import { ExpertCard } from "../Card/expert-card"

interface Expert {
  id: string
  name: string
  description: string
  image: string
}

interface ExpertsSectionProps {
  title?: string
  experts: Expert[]
  showTitle?: boolean
}

export function ExpertsSection({ title = "Experts of the Week", experts, showTitle = true }: ExpertsSectionProps) {
  return (
    <div className="space-y-4 md:space-y-6 lg:space-y-8">
      {showTitle && title && (
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-light text-gray-400 text-center md:text-right mb-6 md:mb-8 lg:mb-12">
          {title}
        </h2>
      )}

      <div className="space-y-3 md:space-y-4 lg:space-y-6">
        {experts.map((expert, index) => (
          <div
            key={expert.id}
            className="animate-fade-in-up"
            style={{
              animationDelay: `${index * 200}ms`,
              animationFillMode: "both",
            }}
          >
            <ExpertCard name={expert.name} description={expert.description} image={expert.image} />
          </div>
        ))}
      </div>
    </div>
  )
}
