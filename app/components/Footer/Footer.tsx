"use client"

import { motion } from "framer-motion"
import { ChevronDown, X } from "lucide-react"

interface FooterProps {
  onClose?: () => void
}

export default function Footer({ onClose }: FooterProps) {
  return (
    <div className="bg-blue-50 text-black h-full w-full relative shadow-2xl border-t border-gray-200 overflow-y-auto">
      {/* Close button */}
    

      <footer className="py-8 px-6 md:px-20 h-full">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Logo & Newsletter */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center text-2xl font-bold">
                <span>WHEN.</span>
                <span className="text-sky-500">TEAM</span>

                <ChevronDown className="ml-1 text-sky-500 w-5 h-5 pointer" onClick={onClose} />
              </div>
              <div>
                <p className="font-medium mb-2 text-lg">Subscribe to Our Newsletter</p>
                <div className="flex items-center bg-white rounded-full shadow-sm overflow-hidden max-w-md">
                  <input
                    type="email"
                    placeholder="enter your email address"
                    className="flex-1 px-4 py-2 outline-none text-sm bg-transparent"
                  />
                  <button className="bg-sky-500 text-white px-5 py-2 text-sm font-semibold hover:bg-sky-600 transition">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="text-sm space-y-1">
                <li>
                  <a href="#" className="hover:text-sky-500 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-500 transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-500 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Social Media */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-lg font-semibold">Social Media</h3>
              <ul className="text-sm space-y-1">
                <li>
                  <a href="#" className="hover:text-sky-500 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-500 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-500 transition-colors">
                    Facebook
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p>Copyright © 2025 When.Team. All Rights Reserved; Confidential & Proprietary Information.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-sky-500 transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-sky-500 transition-colors">
                Privacy Policy
              </a>
            </div>
          </motion.div>
        </motion.div>
      </footer>
    </div>
  )
}
