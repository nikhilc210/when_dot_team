import { ChevronDown } from "lucide-react"
import { Button } from "../components/ui/button"
import { Checkbox } from "../components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../components/ui/dropdown-menu"
import type { SpecializationDropdownProps } from "../types/expert"

export function SpecializationDropdown({
  specializations,
  selectedSpecializations,
  onSpecializationChange,
}: SpecializationDropdownProps) {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button className="bg-[#00AAFF] hover:bg-blue-600 text-white text-[18px] font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
          All Specializations
          <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 p-4 animate-in slide-in-from-top-2 duration-300 bg-[#ffffff]">
        <div className="space-y-3">
          {specializations.map((spec, index) => (
            <div
              key={spec.id}
              className={`flex items-center space-x-3 transition-all duration-300 hover:bg-gray-50 p-2 rounded-md animate-in slide-in-from-left-1`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Checkbox
                id={spec.id}
                checked={selectedSpecializations.includes(spec.id)}
                onCheckedChange={(checked) => onSpecializationChange(spec.id, checked as boolean)}
                className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 transition-all duration-200 hover:scale-110"
              />
              <label
                htmlFor={spec.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer transition-colors duration-200 hover:text-blue-600"
              >
                {spec.name}
              </label>
            </div>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
