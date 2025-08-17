"use client"

import type { NavigationItem, NavigationClickHandler } from "../../types/header.types"
import { NavigationItemComponent } from "./navigation-item"

interface MobileMenuProps {
  isOpen: boolean
  navigationItems: NavigationItem[]
  onNavigationClick?: NavigationClickHandler
  onLoginClick?: () => void
}

export function MobileMenu({
  isOpen,
  navigationItems,
  onNavigationClick,
  onLoginClick,
}: MobileMenuProps): JSX.Element | null {
  if (!isOpen) return null

  const handleLoginClick = (): void => {
    if (onLoginClick) {
      onLoginClick()
    }
  }

  return (
    <div className="md:hidden border-t border-gray-200 bg-white">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navigationItems.map((item) => (
          <NavigationItemComponent key={item.id} item={item} onClick={onNavigationClick} isMobile={true} />
        ))}
        <div className="pt-2">
          <button
            onClick={handleLoginClick}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
