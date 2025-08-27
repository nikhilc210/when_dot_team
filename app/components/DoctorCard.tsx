import Image from "next/image"
import { Star, MapPin, Calendar, Heart } from "lucide-react"
import Link from "next/link"

 interface Doctor {
  id: number
  name: string

  location: string
  image: string
  specialty?: string
  rating?: number
  reviews?: number
}

interface DoctorCardProps {
  doctor: Doctor,
  index:number
}

export default function DoctorCard({ doctor, index }: DoctorCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-[1.03] hover:-translate-y-2 border border-gray-100">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Doctor Image */}
      <div className="relative h-52 bg-gradient-to-br from-blue-100 to-blue-50 overflow-hidden">
        <Image
          src={doctor.image || "/placeholder.svg"}
          alt={`Portrait of ${doctor.name}`}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
        />

        {doctor.rating && (
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg border border-white/20">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="text-sm font-bold text-gray-800">{doctor.rating}</span>
          </div>
        )}

        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
          <div className="bg-white/90 backdrop-blur-md rounded-full p-2 shadow-lg hover:bg-red-50 transition-colors duration-200 cursor-pointer">
            <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors duration-200" />
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/95 backdrop-blur-md rounded-xl px-3 py-2 shadow-lg border border-white/20 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              {doctor.specialty || "General Medicine"}
            </p>
          </div>
        </div>
      </div>

      {/* Doctor Info */}
      <div className="p-6 space-y-4">
        <div className="inline-block bg-gradient-to-r from-[#00aaff] to-[#0088cc] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
          Institiute
        </div>

        <div className="space-y-2">
          <h3 className="text-gray-900 font-bold text-xl leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00aaff] group-hover:to-[#0088cc] group-hover:bg-clip-text transition-all duration-300">
            {doctor.name}
          </h3>
          <p className="text-gray-600 text-sm font-medium">{doctor.specialty || "General Medicine"}</p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-gray-500">
            <div className="bg-gray-100 rounded-full p-1">
              <MapPin className="h-3 w-3" />
            </div>
            <span className="font-medium">{doctor.location}</span>
          </div>
          {doctor.reviews && (
            <div className="text-gray-500 font-medium">
              <span className="text-[#00aaff] font-bold">{doctor.reviews}</span> reviews
            </div>
          )}
        </div>

        <div className="pt-2">
          <Link href={"/expert/profile"} className="w-full bg-gradient-to-r from-[#00aaff] to-[#0088cc] hover:from-[#0088cc] hover:to-[#0066aa] text-white py-3 px-4 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 flex items-center justify-center gap-2 cursor-pointer">
            <Calendar className="h-4 w-4" />
            Visit Profile
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-[#00aaff]/20 group-hover:to-[#0088cc]/20 transition-all duration-500 pointer-events-none opacity-0 group-hover:opacity-100" />
    </div>
  )
}
