import { Search, Bell, BookOpen } from "lucide-react"
import { Logo } from "./Header/logo"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.location.href = "/"}>
          <Logo primaryText={"WHEN."} secondaryText={"TEAM"}/>
        </div>

        <div className="flex items-center space-x-4">
          <Search className="w-6 h-6 text-blue-500 cursor-pointer" />
          <Bell className="w-6 h-6 text-blue-500 cursor-pointer" />
          <BookOpen className="w-6 h-6 text-blue-500 cursor-pointer" />
        </div>
      </div>
    </header>
  )
}
