"use client"

import { Menu, X } from "lucide-react"
import { JSX } from "react/jsx-dev-runtime"
import type { HeaderProps, NavigationClickHandler } from "../../types/header.types"
import { DEFAULT_NAVIGATION_ITEMS, DEFAULT_LOGO_TEXT } from "../../constants/navigation-constants"
import { useMobileMenu } from "../../hooks/use-mobile-menu"
import { Logo } from "./logo"
import { DesktopNavigation } from "./desktop-navigation"
import { MobileMenu } from "./mobile-menu"

export default function Header({
  navigationItems = DEFAULT_NAVIGATION_ITEMS,
  logoText = DEFAULT_LOGO_TEXT,
  onLoginClick,
  className = "",
}: HeaderProps): JSX.Element {
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu()

  const handleNavigationClick: NavigationClickHandler = (item) => {
    console.log(`Navigating to: ${item.label}`)
    window.location.href = item.href
    // Close mobile menu when navigation item is clicked
    if (isMenuOpen) {
      closeMenu()
    }
  }

  const handleLoginClick = (): void => {
    if (onLoginClick) {
      onLoginClick()
    } else {
      console.log("Login clicked")
    }
  }

  const handleMenuToggle = (): void => {
    toggleMenu()
  }

  return (
    <header className={`bg-white border-b border-gray-200 sticky top-0 z-50 ${className}`}>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href={"/"}>
             <Logo primaryText={logoText.primary} secondaryText={logoText.secondary} />

          </a>
          <DesktopNavigation navigationItems={navigationItems} onNavigationClick={handleNavigationClick} />

          {/* Desktop Login Button */}
          <div className="hidden md:block">
            <a
              href={"/login"}
             
            >
              <div  className="bg-[#00AAFF] hover:bg-[#00AAFF] text-white w-[92px] h-[34px] rounded-[15px] text-sm font-medium transition-colors flex justify-center items-center">
                <span className="text-[12px] font-inter">Login</span>
              </div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              className="text-gray-700 hover:text-blue-500 p-2 rounded-md transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <MobileMenu
          isOpen={isMenuOpen}
          navigationItems={navigationItems}
          onNavigationClick={handleNavigationClick}
          onLoginClick={handleLoginClick}
        />
      </div>
    </header>
  )
}
