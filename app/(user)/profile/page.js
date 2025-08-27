"use client";

import React from "react";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { X, Plus, Linkedin, Instagram, Camera } from "lucide-react";
import Image from "next/image";
import Header from "../../components/Header/Header";
export default function LongevityProfile() {
  const [interests, setInterests] = useState([
    "diet",
    "biohacking",
    "Nutrition",
    "Supplements",
    "biohacking",
  ]);
  const [newInterest, setNewInterest] = useState("");
  const [socialLinks, setSocialLinks] = useState({
    linkedin: "",
    instagram: "",
    twitter: "",
  });
  const [profileImage, setProfileImage] = useState(
    "/professional-woman-brown-hair.png"
  );

  const removeInterest = (index) => {
    setInterests(interests.filter((_, i) => i !== index));
  };

  const addInterest = () => {
    if (newInterest.trim() && !interests.includes(newInterest.trim())) {
      setInterests([...interests, newInterest.trim()]);
      setNewInterest("");
    }
  };

  const handleSocialChange = (platform, value) => {
    setSocialLinks((prev) => ({ ...prev, [platform]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    window.location.href = "/expert";
  };

  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-gray-50 p-6"
        style={{
          background: `linear-gradient(180deg, #FEFCF9 0%, #EBF5FF 55.29%, #FEFCF9 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Update Your <span className="text-blue-500">Longevity</span> Profile
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Profile Picture Section */}
              <Card className="bg-[#FFFFFF] p-2 rounded-b-md relative">
                <CardContent className="p-0 bg-[#FFFFFF]">
                  <div>
                    <div
                      className="h-48 rounded-lg mb-4 relative "
                      style={{
                        background: "#FFFFFF",
                      }}
                    >
                      <Image
                        src="/jelly.jpg"
                        alt="Jellyfish background"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute -bottom-1 left-4 flex items-end gap-1">
                        <div className="w-20 h-20 rounded-full  border-1 border-white">
                          <img
                            src={profileImage || "/placeholder.svg"}
                            alt="Profile picture"
                            className=" w-20 h-20 rounded-full"
                          />
                        </div>
                        <label
                          htmlFor="profile-image"
                          className="cursor-pointer"
                        >
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
                            <Camera className="w-4 h-4 text-gray-600" />
                          </div>
                        </label>
                        <input
                          id="profile-image"
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-start p-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Your Profile Picture
                        </h3>
                        <p className="text-sm text-gray-600">
                          This will be displayed on your profile
                        </p>
                      </div>
                      <Button
                        className="bg-[#00AAFF] rounded-[15px] hover:bg-blue-600 text-white px-6"
                        onClick={handleSave}
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Personal Information */}
              <Card className="bg-[#FFFFFF] min-h-[390px]">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <Input
                        defaultValue="Dr. Robert Fox"
                        className="w-full border-1 border-[#D0E7FB] rounded-[15px]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        defaultValue="RobertFox@gmail.com"
                        type="email"
                        className="w-full border-1 border-[#D0E7FB] rounded-[15px]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        defaultValue="+1 3123456789"
                        type="tel"
                        className="w-full border-1 border-[#D0E7FB] rounded-[15px]"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Bio Section */}
              <Card className="bg-[#FFFFFF]">
                <CardHeader>
                  <CardTitle>Bio</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    defaultValue="Leading researcher in cellular regeneration and aging reversal at Stanford University. Recent breakthrough in telomere extension methodology shows promising results for longevity enhancement."
                    className="min-h-32 resize-none border-1 border-[#D0E7FB] rounded-[15px]"
                    placeholder="Tell us about yourself..."
                  />
                </CardContent>
              </Card>

              {/* My Interest Section */}
              <Card className="bg-[#FFFFFF]">
                <CardHeader>
                  <CardTitle>My Interest</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {interests.map((interest, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-[15px] text-sm shadow-2xl"
                      >
                        {interest}
                        <button
                          onClick={() => removeInterest(index)}
                          className="ml-1 hover:text-red-500"
                        >
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      value={newInterest}
                      onChange={(e) => setNewInterest(e.target.value)}
                      placeholder="Add new interest"
                      className="flex-1 border-1 border-[#D0E7FB] rounded-[15px]"
                      onKeyPress={(e) => e.key === "Enter" && addInterest()}
                    />
                    <Button
                      onClick={addInterest}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1 bg-transparent"
                    >
                      <Plus size={16} />
                      ADD MORE
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Socials Section */}
              <Card className="bg-[#FFFFFF]">
                <CardHeader>
                  <CardTitle>Socials</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Linkedin className="w-5 h-5 text-white" />
                      </div>
                      <Input
                        placeholder="LinkedIn profile URL"
                        value={socialLinks.linkedin}
                        onChange={(e) =>
                          handleSocialChange("linkedin", e.target.value)
                        }
                        className="flex-1 border-1 border-[#D0E7FB] rounded-[15px]"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Instagram className="w-5 h-5 text-white" />
                      </div>
                      <Input
                        placeholder="Instagram profile URL"
                        value={socialLinks.instagram}
                        onChange={(e) =>
                          handleSocialChange("instagram", e.target.value)
                        }
                        className="flex-1 border-1 border-[#D0E7FB] rounded-[15px]"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </div>
                      <Input
                        placeholder="X (Twitter) profile URL"
                        value={socialLinks.twitter}
                        onChange={(e) =>
                          handleSocialChange("twitter", e.target.value)
                        }
                        className="flex-1 border-1 border-[#D0E7FB] rounded-[15px]"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
