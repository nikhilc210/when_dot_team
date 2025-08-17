import type { NoResultsProps } from "../types/expert"

export function NoResults({}: NoResultsProps) {
  return (
    <div className="text-center py-12 animate-in bounce-in duration-500">
      <div className="text-6xl mb-4 animate-bounce">🔍</div>
      <p className="text-gray-500 text-lg animate-in fade-in slide-in-from-bottom-2 duration-500 delay-200">
        No doctors found matching your criteria.
      </p>
      <p className="text-gray-400 text-sm mt-2 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-400">
        Try adjusting your search or filters
      </p>
    </div>
  )
}
