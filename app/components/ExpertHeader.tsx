import type { HeaderProps } from "../types/expert"

export function ExpertHeader({ isLoaded }: HeaderProps) {
  return (
    <div
      className={`flex items-center justify-between mb-8 transition-all duration-1000 ${
        isLoaded ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      }`}
    >
      <h1 className="text-[32px] font-semibold text-[#000000]">
        Browse <span className="text-[#00AAFF] animate-pulse">Directory</span>
      </h1>
    </div>
  )
}
