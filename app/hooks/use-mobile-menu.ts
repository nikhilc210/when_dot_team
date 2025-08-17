"use client"

import { useState, useCallback } from "react"
import type { MobileMenuState, MenuToggleHandler } from "../types/header.types"

interface UseMobileMenuReturn {
  isMenuOpen: boolean
  toggleMenu: MenuToggleHandler
  closeMenu: () => void
  openMenu: () => void
}

export function useMobileMenu(initialState = false): UseMobileMenuReturn {
  const [menuState, setMenuState] = useState<MobileMenuState>({ isOpen: initialState })

  const toggleMenu: MenuToggleHandler = useCallback(() => {
    setMenuState((prev) => ({ isOpen: !prev.isOpen }))
  }, [])

  const closeMenu = useCallback((): void => {
    setMenuState({ isOpen: false })
  }, [])

  const openMenu = useCallback((): void => {
    setMenuState({ isOpen: true })
  }, [])

  return {
    isMenuOpen: menuState.isOpen,
    toggleMenu,
    closeMenu,
    openMenu,
  }
}
