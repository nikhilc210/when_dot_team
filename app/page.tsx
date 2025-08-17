"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Header from "./components/Header/Header"
import MenuIcon from "./components/ui/menu-icon"
import Footer from "./components/Footer/Footer"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleMenuClick = () => {
    setShowFooter(!showFooter)
  }

  const headerProps = {
    // onLoginClick: () => {
    //   console.log("Custom login handler")
    // },
  }

  return (
    <>
      <Header {...headerProps} />
      <div className="bg-[#f8f8f8] relative overflow-hidden ">
        {/* DNA Pattern - Positioned behind text only */}
        <div className="absolute left-[220px] top-[356px] transform -translate-y-1/2 w-80 h-80 opacity-20">
          <Image src="/dna-pattern.png" alt="" fill className="object-contain object-left" priority />
        </div>

        <div className="relative z-10 min-h-screen flex">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-[20px] md:text-[50px] lg:text-[50px] xl:text-[50px] font-light leading-tight text-[#000000] mb-8">
                Unlock the Secrets
                <br />
                to a Longer,
                <br />
                <span className="font-bold text-black">Healthier Life</span>
              </h1>

              <motion.p
                className="text-gray-700 text-lg md:text-xl max-w-lg mb-10 leading-relaxed mt-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Explore the world&apos;s leading longevity researchers, discover insights, and join a vibrant community
                driven by science and purpose
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button className="bg-[#00AAFF] hover:bg-[#45b8b0] text-white text-[14px] rounded-full px-8 py-3 text-base font-normal transition-all duration-300 hover:scale-105">
                  Browse Experts
                </button>
                <button className="text-black bg-[#F1F7F9] hover:bg-gray-100 text-[14px] font-semibold rounded-full px-6 py-3 text-base transition-all duration-300">
                  Join the Community
                </button>
                <button className="border-gray-400 border-1 text-black text-[14px] rounded-full px-6 py-3 bg-transparent hover:bg-gray-50 text-base font-normal transition-all duration-300">
                  Ask a Question
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Figure Image - Positioned to overlap both sections with transparent background */}
          <motion.div
            className="hidden lg:block absolute bottom-0 right-0 w-full h-full"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9, x: isVisible ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="w-[800px] !h-[850px] absolute bottom-0 left-1/3">
              <Image
                src="/home_girl.png"
                alt="Futuristic health technology visualization"
                fill
                className="object-contain object-bottom"
                priority
                style={{
                  objectPosition: "center bottom",
                }}
              />
            </div>
          </motion.div>

          {/* Mobile Image Section */}
          <motion.div
            className="lg:hidden absolute bottom-0 right-0 w-64 h-80 "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 0.2 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              src="/home_girl.png"
              alt="Futuristic health technology visualization"
              fill
              className="object-contain object-bottom"
            />
          </motion.div>
        </div>
      </div>

      {/* Menu Icon - Only show when footer is not visible */}
      <AnimatePresence>
        {!showFooter && (
          <motion.div
            className="fixed bottom-10 left-10 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <MenuIcon onClick={handleMenuClick} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer with bottom-up animation - positioned at bottom */}
      <AnimatePresence>
        {showFooter && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-40 h-96"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              duration: 0.6,
            }}
          >
            <Footer onClose={() => setShowFooter(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
