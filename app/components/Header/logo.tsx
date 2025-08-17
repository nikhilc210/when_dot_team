import type React from "react"

interface LogoProps {
  primaryText: string
  secondaryText: string
  className?: string
}

export function Logo({ primaryText, secondaryText, className = "" }: LogoProps): React.JSX.Element {
  return (
    <div className={`flex-shrink-0 ${className}`}>
      <div className="text-xl font-semibold">
        <span className="text-[#000000] font-itim text-[16px]">{primaryText}</span>
        <span className="text-[#00AAFF] text-[24px]">{secondaryText}</span>
      </div>
    </div>
  )
}
