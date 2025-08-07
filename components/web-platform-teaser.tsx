"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Monitor, ExternalLink, BarChart3, Users, Calendar } from "lucide-react"

interface WebPlatformTeaserProps {
  language: "en" | "ar"
}

export function WebPlatformTeaser({ language }: WebPlatformTeaserProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const content = {
    en: {
      title: "Full Desktop Experience",
      subtitle: "Prefer working from your clinic desktop? Access our comprehensive dashboard experience.",
      description:
        "Our web platform provides healthcare professionals with a complete suite of tools for patient management, analytics, and practice administration.",
      features: [
        "Advanced Patient Analytics",
        "Appointment Scheduling",
        "Practice Management Tools",
        "Comprehensive Reporting",
      ],
      cta: "Visit Our Website",
    },
    ar: {
      title: "تجربة سطح المكتب الكاملة",
      subtitle: "تفضل العمل من سطح مكتب عيادتك؟ الوصول إلى تجربة لوحة التحكم الشاملة.",
      description:
        "توفر منصتنا الإلكترونية للمهنيين الصحيين مجموعة كاملة من الأدوات لإدارة المرضى والتحليلات وإدارة الممارسة.",
      features: ["تحليلات المرضى المتقدمة", "جدولة المواعيد", "أدوات إدارة الممارسة", "تقارير شاملة"],
      cta: "زيارة موقعنا",
    },
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Desktop Mockup */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={`relative ${language === "ar" ? "lg:order-2" : ""}`}
          >
            {/* Desktop Frame */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 rounded-t-2xl p-4 shadow-2xl"
              >
                {/* Browser Bar */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-gray-700 rounded px-3 py-1 ml-4">
                    <span className="text-gray-300 text-xs">bashra.ai/dashboard</span>
                  </div>
                </div>

                {/* Screen Content */}
                <div className="bg-white rounded-lg overflow-hidden h-80">
                  <img
                    src="/11.webp"
                    alt="BASHRA.AI Web Dashboard"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10">
                    {/* Floating UI Cards */}
                    <motion.div
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                    >
                      <div className="flex items-center space-x-2">
                        <BarChart3 className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium">Analytics</span>
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ y: [5, -5, 5] }}
                      transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                      className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                    >
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium">Patients</span>
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                      className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                    >
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-medium">Schedule</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Desktop Stand */}
              <div className="bg-gray-300 h-8 w-32 mx-auto rounded-b-lg"></div>
              <div className="bg-gray-400 h-2 w-48 mx-auto rounded-full"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full p-4 shadow-lg"
            >
              <Monitor className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${language === "ar" ? "lg:order-1" : ""}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium mb-6"
            >
              <Monitor className="w-4 h-4 mr-2" />
              {language === "en" ? "Web Platform" : "المنصة الإلكترونية"}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              <span className="bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
                {content[language].title}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-gray-600 mb-6 leading-relaxed"
            >
              {content[language].subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-gray-600 mb-8 leading-relaxed"
            >
              {content[language].description}
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid md:grid-cols-2 gap-4 mb-8"
            >
              {content[language].features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-gray-800 to-blue-600 hover:from-gray-900 hover:to-blue-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                {content[language].cta}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
