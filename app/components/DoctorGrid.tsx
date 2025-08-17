import type { Doctor } from "../types/expert"
import { DoctorCard } from "./DoctorCard"

interface DoctorGridProps {
  doctors: Doctor[]
}

export function DoctorGrid({ doctors }: DoctorGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
      {doctors.map((doctor, index) => (
        <DoctorCard key={doctor.id} doctor={doctor} index={index} />
      ))}
    </div>
  )
}
