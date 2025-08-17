"use client"

import type { NavigationItem, NavigationClickHandler } from "../../types/header.types"
import type React from "react" // Import React to fix the undeclared JSX variable error

interface NavigationItemProps {
  item: NavigationItem
  onClick?: NavigationClickHandler
  isMobile?: boolean
  className?: string
}

export function NavigationItemComponent({
  item,
  onClick,
  isMobile = false,
  className = "",
}: NavigationItemProps): JSX.Element {
  const baseClasses = isMobile
    ? "block px-3 py-2 text-base font-medium transition-colors"
    : "px-3 py-2 text-sm font-medium transition-colors flex items-center"

  const activeClasses = item.isActive ? "text-[20px] font-bold text-[#000000] font-openSans" : "text-[20px] font-normal text-[#000000] font-openSans"

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    if (onClick) {
      onClick(item)
    }
  }

  return (
    <a
      href={item.href}
      onClick={handleClick}
      className={`${baseClasses} ${activeClasses} ${className}`}
      aria-current={item.isActive ? "page" : undefined}
    >
      {item.label}
      {item.badge && (
        <span className={`${isMobile ? "ml-2" : "ml-1"} text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full`}>
          {item.badge.count}
        </span>
      )}
    </a>
  )
}
