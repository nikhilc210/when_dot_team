"use client"

import { Home, Check, Play, Zap, Shield, User, Sun } from "lucide-react"
import { cn } from "../../lib/utils"



const menuItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Check, label: "Following" },
  { icon: Play, label: "Replay" },
  { icon: Zap, label: "My Questions" },
  { icon: Shield, label: "Experts" },
]

const bottomItems = [
  { icon: User, label: "Profile" },
  { icon: Sun, label: "Light Mode" },
]

export function Sidebar({ collapsed, onToggle }) {
  return (
    <div
      className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-all duration-300 z-10",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex flex-col h-full">
        {/* Main menu items */}
        <div className="flex-1 py-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center px-4 py-3 cursor-pointer transition-colors",
                item.active ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600" : "text-gray-600 hover:bg-gray-50",
              )}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span className="ml-3 text-sm font-medium">{item.label}</span>}
            </div>
          ))}
        </div>

        {/* Bottom items */}
        <div className="border-t border-gray-200 py-4">
          {bottomItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-3 cursor-pointer text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span className="ml-3 text-sm font-medium">{item.label}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-8 bg-white border border-gray-200 rounded-full p-1 shadow-sm hover:shadow-md transition-shadow"
      >
        <div
          className={cn("w-4 h-4 flex items-center justify-center transition-transform", collapsed ? "rotate-180" : "")}
        >
          <div className="w-2 h-2 border-l-2 border-b-2 border-gray-400 rotate-45" />
        </div>
      </button>
    </div>
  )
}
