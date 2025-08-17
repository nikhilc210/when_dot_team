export interface NavigationItem {
  id: string
  label: string
  href: string
  badge?: {
    count: number
    variant?: "default" | "primary"
  }
  isActive?: boolean
}

export interface HeaderProps {
  navigationItems?: NavigationItem[]
  logoText?: {
    primary: string
    secondary: string
  }
  onLoginClick?: () => void
  className?: string
}

export interface MobileMenuState {
  isOpen: boolean
}

export type MenuToggleHandler = () => void
export type NavigationClickHandler = (item: NavigationItem) => void
