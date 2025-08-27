import Image from "next/image"

interface ProfileCardProps {
  name: string
  specialization: string
  image: string
}

export function ProfileCard({ name, specialization, image }: ProfileCardProps) {
  return (
    <div className="group cursor-pointer animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
      {/* Profile Image */}
      <div className="relative aspect-square mb-3 overflow-hidden rounded-lg bg-muted shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-all duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
      </div>

      {/* Profile Info */}
      <div className="space-y-1 transition-all duration-200 group-hover:translate-x-1">
        <h3 className="font-semibold text-foreground text-lg leading-tight transition-colors duration-200 group-hover:text-blue-600">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm transition-colors duration-200 group-hover:text-foreground/80">
          {specialization}
        </p>
      </div>
    </div>
  )
}
