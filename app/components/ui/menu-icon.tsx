"use client"

import { motion } from "framer-motion"

interface MenuIconProps {
  isVisible?: boolean
  onClick?: () => void
}

export default function MenuIcon({ isVisible = true, onClick }: MenuIconProps) {
  return (
    <motion.div
      className="absolute bottom-8 left-8 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      onClick={onClick}
    >
      <div className="flex flex-col space-y-1">
        <div className="w-8 h-1 bg-[#4ECDC4] rounded"></div>
        <div className="w-6 h-1 bg-[#4ECDC4] rounded"></div>
        <div className="w-4 h-1 bg-[#4ECDC4] rounded"></div>
      </div>
    </motion.div>
  )
}
