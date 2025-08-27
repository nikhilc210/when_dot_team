import { Stethoscope, ArrowRight, Users, Award } from "lucide-react"

export default function MoreInfoCard() {
  return (
    <div className="group bg-gradient-to-br from-[#00aaff] to-[#0088cc] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:-translate-y-1 border border-[#00aaff]/20 h-full">
      {/* Header */}
      <div className="p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <h3 className="text-primary-foreground font-bold text-xl mb-3 relative z-10">More Information</h3>
        <p className="text-primary-foreground/90 text-sm mb-2 relative z-10">Discover additional resources</p>
        <p className="text-primary-foreground/90 text-sm relative z-10 mb-4">and medical professionals</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-primary-foreground/80 text-xs">
            <Users className="h-3 w-3" />
            <span>500+ Specialists</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/80 text-xs">
            <Award className="h-3 w-3" />
            <span>Board Certified</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-primary-foreground group-hover:text-white transition-colors duration-300">
          <span className="text-sm font-medium">Learn more</span>
          <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>

      {/* Icon Section */}
      <div className="relative h-32 bg-gradient-to-br from-[#00aaff]/80 to-[#0088cc]/80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        <div className="relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
          <Stethoscope className="h-12 w-12 text-primary-foreground/90 group-hover:text-primary-foreground transition-colors duration-300" />
        </div>
        <div className="absolute top-4 right-4 w-2 h-2 bg-primary-foreground/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-6 left-6 w-1 h-1 bg-primary-foreground/40 rounded-full animate-pulse delay-300"></div>
      </div>
    </div>
  )
}
