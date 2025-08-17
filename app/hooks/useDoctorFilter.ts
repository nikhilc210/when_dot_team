"use client"

import { useState, useEffect, useMemo } from "react"
import type { Doctor, Specialization } from "../types/expert"

interface UseDoctorFilterProps {
  doctors: Doctor[]
  specializations: Specialization[]
}

export function useDoctorFilter({ doctors, specializations }: UseDoctorFilterProps) {
  const [selectedSpecializations, setSelectedSpecializations] = useState(
    specializations.filter((s) => s.checked).map((s) => s.id),
  )
  const [searchTerm, setSearchTerm] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (searchTerm) {
      setIsSearching(true)
      const timer = setTimeout(() => setIsSearching(false), 300)
      return () => clearTimeout(timer)
    }
  }, [searchTerm])

  const handleSpecializationChange = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedSpecializations([...selectedSpecializations, id])
    } else {
      setSelectedSpecializations(selectedSpecializations.filter((s) => s !== id))
    }
  }

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.institution.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesSpecialization =
        selectedSpecializations.length === 0 || selectedSpecializations.includes(doctor.specialization)
      return matchesSearch && matchesSpecialization
    })
  }, [doctors, searchTerm, selectedSpecializations])

  return {
    selectedSpecializations,
    searchTerm,
    isSearching,
    filteredDoctors,
    setSearchTerm,
    handleSpecializationChange,
  }
}
