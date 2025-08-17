import { SearchBar } from "./SearchBar"
import { SpecializationDropdown } from "./SpecializationDropdown"
import type { Specialization } from "../types/expert"

interface SearchControlsProps {
  searchTerm: string
  onSearchChange: (term: string) => void
  isSearching: boolean
  specializations: Specialization[]
  selectedSpecializations: string[]
  onSpecializationChange: (id: string, checked: boolean) => void
}

export function SearchControls({
  searchTerm,
  onSearchChange,
  isSearching,
  specializations,
  selectedSpecializations,
  onSpecializationChange,
}: SearchControlsProps) {
  return (
    <div className="flex items-center gap-4">
      <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} isSearching={isSearching} />
      <SpecializationDropdown
        specializations={specializations}
        selectedSpecializations={selectedSpecializations}
        onSpecializationChange={onSpecializationChange}
      />
    </div>
  )
}
