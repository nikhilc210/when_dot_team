"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Checkbox } from "../components/ui/checkbox"
import { Label } from "../components/ui/label"
import Image from "next/image"
import Header from "../components/Header/Header"

export default function Component() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    isExpert: false,
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Contact Form */}
          <div 
          className="rounded-3xl p-8 lg:p-12 shadow-2xl"
          style={{
            background: "linear-gradient(180deg, rgba(0, 170, 255, 0.7) 12.5%, rgba(5, 126, 186, 0.7) 100%)"
          }}
        >
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Get In Touch With Us
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white text-lg font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-white/90 border-0 rounded-lg h-12 text-gray-800 placeholder:text-gray-500 focus:bg-white transition-colors"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-lg font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-white/90 border-0 rounded-lg h-12 text-gray-800 placeholder:text-gray-500 focus:bg-white transition-colors"
                />
              </div>

              {/* Expert Checkbox */}
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="expert"
                  checked={formData.isExpert}
                  onCheckedChange={(checked) => handleInputChange("isExpert", checked as boolean)}
                  className="bg-white/90 border-0 data-[state=checked]:bg-white data-[state=checked]:text-blue-600"
                />
                <Label htmlFor="expert" className="text-white text-lg font-medium cursor-pointer">
                  Are you an Expert ?
                </Label>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white text-lg font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="bg-white/90 border-0 rounded-lg min-h-[120px] text-gray-800 placeholder:text-gray-500 focus:bg-white transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex-col items-end float-right">
                <Button
                  type="submit"
                  className="bg-[#01AAFF] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* AI Brain Illustration */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-2xl aspect-square opacity-9">
            <Image
              src="/brain_contact.png"
              alt="AI Brain Illustration with neural networks and tech elements"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
