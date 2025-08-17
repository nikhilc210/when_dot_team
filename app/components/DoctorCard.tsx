import type { DoctorCardProps } from "../types/expert"

export function DoctorCard({ doctor, index }: DoctorCardProps) {
  return (
    <div
      className={`group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:scale-105 animate-in fade-in slide-in-from-bottom-4`}
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: "both",
      }}
    >
      {/* Doctor Image with enhanced animations */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={doctor.image || "/placeholder.svg"}
          alt={doctor.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
        />

        {/* Enhanced Hover Overlay with slide-up animation */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-white">
          <div className="text-center space-y-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
            <h3 className="text-2xl font-bold animate-in slide-in-from-bottom-2 duration-300 delay-200">
              More information
            </h3>
            <p className="text-lg animate-in slide-in-from-bottom-2 duration-300 delay-300">More information</p>
            <p className="text-base animate-in slide-in-from-bottom-2 duration-300 delay-400">More information</p>
          </div>

          {/* Animated border effect */}
          <div className="absolute inset-0 border-2 border-white/20 scale-95 group-hover:scale-100 transition-transform duration-500 delay-200"></div>
        </div>
      </div>

      {/* Doctor Info with slide-up animation */}
      <div className="p-4 transform group-hover:-translate-y-1 transition-transform duration-300">
        <div className="text-sm text-gray-500 mb-1 transition-colors duration-300 group-hover:text-blue-500">
          {doctor.institution}
        </div>
        <h3 className="font-semibold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-blue-600">
          {doctor.name}
        </h3>
        <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
          {doctor.location}
        </p>
      </div>

      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
    </div>
  )
}
