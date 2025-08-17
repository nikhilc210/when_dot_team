"use client"

import { Search } from "lucide-react"
import { Input } from "../components/ui/input"
import type { SearchBarProps } from "../types/expert"

export function SearchBar({ searchTerm, onSearchChange, isSearching }: SearchBarProps) {
  return (
    <div className="relative group">
      <Search
        className={`absolute  left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 transition-all duration-300 ${
          isSearching ? "text-blue-500 scale-110" : ""
        }`}
      />
      <Input
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 w-64 transition-all duration-300 rounded-[148px] border-[#18181829] focus:w-72 focus:shadow-lg focus:border-blue-500"
      />
      {isSearching && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent"></div>
        </div>
      )}
    </div>
  )
}
