"use client"

import { JSX } from "react/jsx-dev-runtime"
import type { NavigationItem, NavigationClickHandler } from "../../types/header.types"
import { NavigationItemComponent } from "./navigation-item"

interface DesktopNavigationProps {
  navigationItems: NavigationItem[]
  onNavigationClick?: NavigationClickHandler
}

export function DesktopNavigation({ navigationItems, onNavigationClick }: DesktopNavigationProps): JSX.Element {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigationItems.map((item) => (
        <NavigationItemComponent key={item.id} item={item} onClick={onNavigationClick} isMobile={false} />
      ))}
    </nav>
  )
}
