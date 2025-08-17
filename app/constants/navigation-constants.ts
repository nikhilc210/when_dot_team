import type { NavigationItem } from "../types/header.types"

export const DEFAULT_NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    isActive: true,
  },
   {
    id: "about",
    label: "About",
    href: "/about",
  },
  {
    id: "experts",
    label: "Experts",
    href: "/experts",
    badge: {
      count: 120,
      variant: "default",
    },
  },
 
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
  },
] as const

export const DEFAULT_LOGO_TEXT = {
  primary: "WHEN.",
  secondary: "TEAM",
} as const
