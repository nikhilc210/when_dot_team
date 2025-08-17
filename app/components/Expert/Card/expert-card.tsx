interface ExpertCardProps {
  name: string
  description: string
  image: string
  alt?: string
}

export function ExpertCard({ name, description, image, alt }: ExpertCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
      {/* Text content */}
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-[30px] sm:text-[20px] md:text-[30px] lg:text-[30px] font-semibold text-[#000000] mb-1 sm:mb-1 md:mb-1 leading-tight group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px] text-[#181818] leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Doctor image */}
      <div className="flex-shrink-0 order-first sm:order-last">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={image || "/placeholder.svg"}
            alt={alt || name}
            className="w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-32 lg:w-40 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  )
}
