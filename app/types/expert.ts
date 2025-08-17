export interface Expert {
  id: string
  name: string
  description: string
  image: string
  specialization?: string
  institution?: string
  achievements?: string[]
}

export interface ExpertCardProps {
  name: string
  description: string
  image: string
  alt?: string
  onClick?: () => void
}

export interface ExpertsSectionProps {
  title?: string
  experts: Expert[]
  className?: string
}

export interface Doctor {
  id: number
  name: string
  institution: string
  location: string
  image: string
  specialization: string
}

export interface Specialization {
  id: string
  name: string
  checked: boolean
}

export interface SearchBarProps {
  searchTerm: string
  onSearchChange: (term: string) => void
  isSearching: boolean
}

export interface SpecializationDropdownProps {
  specializations: Specialization[]
  selectedSpecializations: string[]
  onSpecializationChange: (id: string, checked: boolean) => void
}

export interface DoctorCardProps {
  doctor: Doctor
  index: number
}

export interface HeaderProps {
  isLoaded: boolean
}

export type NoResultsProps = object
