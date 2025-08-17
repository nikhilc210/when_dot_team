import React from "react";
import Image from "next/image";

import Header from "../components/Header/Header";
import { LuShieldPlus } from "react-icons/lu";

const features = [
  {
    icon: <LuShieldPlus size={32} className="text-[#D0E7FB]" />,
    text: "Access to world-class longevity researchers",
  },
  {
    icon: <LuShieldPlus size={32} className="text-[#D0E7FB]" />,
    text: "Live Access to World-Class Longevity Experts",
  },
  {
    icon: <LuShieldPlus size={32} className="text-[#D0E7FB]" />,
    text: "Evidence-Based Insights, Delivered Directly to You",
  },
  {
    icon: <LuShieldPlus size={32} className="text-[#D0E7FB]" />,
    text: "Stay Updated with the Latest Breakthroughs in Longevity Science",
  },
];

const LongevityPlatform = () => {
  return (
    <>
      <Header />
       <div className="w-full min-h-screen bg-white flex flex-col md:flex-row">
      
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 px-8 md:px-12 flex flex-col justify-center items-center ">
        <h1 className="text-[20px] md:text-[50px]  text-gray-800 mb-6 leading-tight">
          Built for Longevity Seekers,<br />
         by <span className="text-[20px] md:text-[50px] text-[#00AAFF] font-bold"> Longevity Enthusiasts</span>
        </h1>

        <Image
          src="/brain.png"
          alt="Brain"
          width={600} // or whatever width you want
          height={600} // adjust height to maintain aspect ratio
        
        />

        <p className="text-[22px] text-[#000000]">
          Whether you&apos;re a biohacker, a longevity enthusiast, or simply curious about living a longer, healthier life, our platform connects you directly with credible experts through live video sessions. Discover their latest insights, ask questions in real-time, and become part of a community that’s passionate about optimizing healthspan and lifespan.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              {feature.icon}
              <p className="text-[18px] font-normal text-[#000000]">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default LongevityPlatform;
