"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Globe, Download, Users, Menu, X } from "lucide-react"

interface NavbarProps {
  language: "en" | "ar"
  setLanguage: (lang: "en" | "ar") => void
}

export function Navbar({ language, setLanguage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = {
    en: ["Home", "Features", "For Doctors", "Contact"],
    ar: ["الرئيسية", "المميزات", "للأطباء", "اتصل بنا"],
  }

  const buttons = {
    en: {
      advisory: "Advisory Services",
      download: "Download Profile",
    },
    ar: {
      advisory: "الخدمات الاستشارية",
      download: "تحميل الملف التعريفي",
    },
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className={`container mx-auto px-4 py-4 ${language === "ar" ? "font-arabic" : ""}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              BASHRA.AI
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems[language].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <Button
              variant="outline"
              size="sm"
              className="bg-white/50 backdrop-blur-sm border-blue-200 hover:bg-blue-50"
            >
              <Users className="w-4 h-4 mr-2" />
              {buttons[language].advisory}
            </Button> */}

            <a
              href="/profile.pdf" // ضع هنا مسار ملف الـ PDF داخل public
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
              >
                <Download className="w-4 h-4 mr-2" />
                {buttons[language].download}
              </Button>
            </a>

            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="bg-white/50 backdrop-blur-sm"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === "en" ? "العربية" : "English"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-white/20"
            >
              <div className="flex flex-col space-y-4 pt-4">
                {navItems[language].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" size="sm">
                    <Users className="w-4 h-4 mr-2" />
                    {buttons[language].advisory}
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-blue-500 to-indigo-600">
                    <Download className="w-4 h-4 mr-2" />
                    {buttons[language].download}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setLanguage(language === "en" ? "ar" : "en")}>
                    <Globe className="w-4 h-4 mr-2" />
                    {language === "en" ? "العربية" : "English"}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
