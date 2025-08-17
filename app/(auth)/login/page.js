"use client";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import { Separator } from "../../components/ui/separator";
import { useState, useEffect } from "react";

export default function Page() {
  const [isExpert, setIsExpert] = useState(false);

  const handleCheckboxChange = (checked) => {
    const isChecked = checked === true;
    console.log("Checkbox changed:", isChecked);
    setIsExpert(isChecked);
  };
  const handleLogin = () => {
    if (isExpert) {
      window.location.href = "/signup/expert";
    } else {
      window.location.href = "/signup/user/interest";
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Mobile Layout - Full screen background with centered card */}
      <div className="lg:hidden relative w-full min-h-screen">
        {/* Background Image */}
        <Image
          src="/podcast_gif.gif"
          alt="Blue jellyfish floating in dark water"
          fill
          className="object-cover"
          priority
        />

        {/* Centered Card */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-sm shadow-2xl">
            {/* Logo */}
            <div className="text-center mb-8">
              <a href={"/"}>
                <h1 className="text-2xl font-bold text-gray-900 text-center">
                  WHEN.<span className="text-blue-500">TEAM</span>
                </h1>
              </a>
            </div>

            {/* Welcome Section */}
            <div className="text-center space-y-2 mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Welcome Back !
              </h2>
              <p className="text-gray-600 text-sm">
                Unlock the Secrets to a Longer, Healthier Life
              </p>
            </div>

            {/* Login Form */}
            <div className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="user123@gmail.com"
                  className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="expert"
                  checked={isExpert}
                  onCheckedChange={handleCheckboxChange}
                  className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                />
                <label htmlFor="expert" className="text-sm text-gray-700">
                  Are you an <span className="font-semibold">Expert</span>?
                </label>
              </div>

              <Button
                className="w-full h-12 bg-[#EBF5FF]  hover:bg-[00AAFF] text-[#00AAFF] text-[15px] font-bold rounded-[15px] cursor-pointer"
                onClick={() => handleLogin()}
              >
                Continue
              </Button>

              <div className="relative">
                <Separator className="my-6" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white px-2 text-sm text-gray-500">
                    OR
                  </span>
                </div>
              </div>

              {/* Social Login Buttons - Side by side on mobile */}
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="px-4 py-2 border-1 border-[#D0E7FB] rounded-[15px] hover:bg-gray-50 flex items-center justify-center space-x-2 bg-white"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-gray-700 font-medium text-sm">
                    Google
                  </span>
                </Button>

                <Button
                  variant="outline"
                  className="px-4 py-2 border-1 border-[#D0E7FB] rounded-[15px] hover:bg-gray-50 flex items-center justify-center space-x-2 bg-white"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-sm">
                    Apple
                  </span>
                </Button>
              </div>

              {/* Bottom text */}
              <div className="mt-8 pt-4">
                <p className="text-gray-600 text-xs text-center leading-relaxed">
                  Explore the world&apos;s leading longevity researchers,
                  discover insights, and join a vibrant community driven by
                  science and purpose
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Two columns */}
      <div className="hidden lg:flex w-full">
        {/* Left Column - Login Form */}
        <div className="flex-1 bg-white flex flex-col px-16 py-12">
          {/* Logo - positioned at very top */}
          <div className="mb-20 text-center">
            <a href={"/"}>
              <h1 className="text-[40px] font-bold text-[#000000]">
                WHEN.<span className="text-[48px] text-[#00AAFF]">TEAM</span>
              </h1>
            </a>
          </div>

          {/* Form content centered */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="w-full max-w-sm mx-auto space-y-8">
              {/* Welcome Section */}
              <div className="space-y-2">
                <h2 className="text-[24px] font-sans font-bold text-gray-900 text-center">
                  Welcome Back !
                </h2>
                <p className="text-[#000000] text-[15px]  font-sans text-center">
                  Unlock the Secrets to a Longer, Healthier Life
                </p>
              </div>

              {/* Login Form */}
              <div className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder="user123@gmail.com"
                    className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="expert-desktop"
                    className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                  />
                  <label
                    htmlFor="expert-desktop"
                    className="text-sm text-gray-700"
                  >
                    Are you an <span className="font-semibold">Expert</span> ?
                  </label>
                </div>

                <Button
                  className="w-full h-12 bg-[#EBF5FF]  hover:bg-[00AAFF] text-[#00AAFF] text-[15px] font-bold rounded-[15px] cursor-pointer"
                  onClick={() => handleLogin()}
                >
                  Continue
                </Button>

                <div className="relative">
                  <Separator className="my-6" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white px-2 text-sm text-gray-500">
                      OR
                    </span>
                  </div>
                </div>

                {/* Social Login Buttons - stacked on desktop */}
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    className="w-[217] h-[35px] border-1 border-[#D0E7FB] rounded-[15px] hover:bg-gray-50 flex items-center justify-center space-x-2 bg-white"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="text-gray-700 font-medium">Google</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-[217] h-[35px] border-1 border-[#D0E7FB] rounded-[15px] hover:bg-gray-50 flex items-center justify-center space-x-2 bg-white"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Apple</span>
                  </Button>
                </div>
                <div className="space-y-6">
                  {/* <blockquote className="text-white text-lg font-medium max-w-md">
                    "Your health questions deserve expert answers. Let's make
                    longevity accessible to everyone."
                  </blockquote> */}

                  <p className="text-[#000000] text-sm max-w-md text-center absolute bottom-15">
                    Explore the world&apos;s leading longevity researchers,
                    discover insights, and join a vibrant community driven by
                    science and purpose
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Background Image with Content */}
        <div className="w-[922px] relative min-h-screen px-2 py-4">
          <div className="m-4 relative w-[96%] h-[94%]">
            <Image
              src="/podcast_gif.gif"
              alt="Blue jellyfish floating in dark water"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0  flex flex-col justify-between p-16">
            <div className="flex-1 flex">
              <div className="max-w-lg">
                <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-8">
                  Join the conversation with world-class longevity experts &
                  enthusiasts.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
