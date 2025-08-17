import { Specialization,Doctor } from "../types/expert"

export interface Expert {
  id: string
  name: string
  description: string
  image: string
}

export const expertsData: Expert[] = [
  {
    id: "robert-fox",
    name: "Dr. Robert Fox",
    description:
      "Leading researcher in cellular regeneration and aging reversal at Stanford University. Recent breakthrough in telomere extension methodology shows promising results for longevity enhancement.",
    image: "/male_dr.png",
  },
  {
    id: "sarah-chen",
    name: "Dr. Sarah Chen",
    description:
      "Leading researcher in cellular regeneration and aging reversal at Stanford University. Recent breakthrough in telomere extension methodology shows promising results for longevity enhancement.",
    image: "/female_dr.png",
  },
]


export const specializations: Specialization[] = [
  { id: "biogerontologist", name: "Biogerontologist", checked: true },
  { id: "nutritional", name: "Nutritional Gerontologist", checked: false },
  { id: "fitness", name: "Fitness Specialist", checked: false },
  { id: "microbiome", name: "Microbiome Expert", checked: false },
  { id: "pharmacological", name: "Pharmacological", checked: false },
  { id: "biohacking", name: "Biohacking Expert", checked: true },
  { id: "cognitive", name: "Cognitive Specialist", checked: true },
  { id: "resilience", name: "Resilience Coach", checked: true },
]

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    institution: "Aging Research Institute",
    location: "State, Country",
    image: "/one.jpg",
    specialization: "biogerontologist",
  },
  {
    id: 2,
    name: "Dr. Michael Rodriguez",
    institution: "Longevity Medical Center",
    location: "State, Country",
    image: "/two.png",
    specialization: "cognitive",
  },
  {
    id: 3,
    name: "Dr. Emily Johnson",
    institution: "Wellness Research Lab",
    location: "State, Country",
    image: "/three.png",
    specialization: "biohacking",
  },
  {
    id: 4,
    name: "Dr. David Kim",
    institution: "Health Optimization Clinic",
    location: "State, Country",
    image: "/one.jpg",
    specialization: "resilience",
  },
  {
    id: 5,
    name: "Dr. Lisa Wang",
    institution: "Preventive Medicine Institute",
    location: "State, Country",
    image: "/two.png",
    specialization: "nutritional",
  },
  {
    id: 6,
    name: "Dr. James Thompson",
    institution: "Aging Research Institute",
    location: "State, Country",
    image: "/three.png",
    specialization: "fitness",
  },
  {
    id: 7,
    name: "Dr. Maria Garcia",
    institution: "Longevity Medical Center",
    location: "State, Country",
    image: "/one.jpg",
    specialization: "microbiome",
  },
  {
    id: 8,
    name: "Dr. Robert Lee",
    institution: "Wellness Research Lab",
    location: "State, Country",
    image: "/two.png",
    specialization: "pharmacological",
  },
]
