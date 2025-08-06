"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, Download, Brain, Zap, Shield } from "lucide-react"
import { FloatingElements } from "@/components/floating-elements"

interface HeroSectionProps {
  language: "en" | "ar"
}

export function HeroSection({ language }: HeroSectionProps) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const content = {
    en: {
      headline: "Revolutionary AI-Powered Medical Diagnostics",
      subheadline: "Transforming healthcare with cutting-edge artificial intelligence",
      description:
        "BASHRA.AI combines advanced machine learning with medical expertise to provide instant, accurate diagnoses and streamline healthcare delivery for patients and professionals.",
      downloadAndroid: "Download for Android",
      downloadIOS: "Download for iOS",
      watchDemo: "Watch Demo",
    },
    ar: {
      headline: "تشخيص طبي ثوري مدعوم بالذكاء الاصطناعي",
      subheadline: "تحويل الرعاية الصحية بالذكاء الاصطناعي المتطور",
      description:
        "يجمع BASHRA.AI بين التعلم الآلي المتقدم والخبرة الطبية لتوفير تشخيصات فورية ودقيقة وتبسيط تقديم الرعاية الصحية للمرضى والمهنيين.",
      downloadAndroid: "تحميل لأندرويد",
      downloadIOS: "تحميل لآيفون",
      watchDemo: "مشاهدة العرض التوضيحي",
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingElements />

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${language === "ar" ? "lg:order-2" : ""}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6"
            >
              <Zap className="w-4 h-4 mr-2" />
              {language === "en" ? "AI-Powered Healthcare" : "الرعاية الصحية بالذكاء الاصطناعي"}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {content[language].headline}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              {content[language].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                {content[language].downloadAndroid}
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-blue-50 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                {content[language].downloadIOS}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">99.2%</div>
                <div className="text-sm text-gray-600">{language === "en" ? "Accuracy" : "دقة"}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">50K+</div>
                <div className="text-sm text-gray-600">{language === "en" ? "Diagnoses" : "تشخيص"}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">{language === "en" ? "Available" : "متاح"}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`relative ${language === "ar" ? "lg:order-1" : ""}`}
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Main AI Brain Visual */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
                className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-full opacity-20"
              />

              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1.05, 1, 1.05],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
                className="absolute inset-4 bg-gradient-to-tl from-cyan-400 via-blue-500 to-indigo-600 rounded-full opacity-30"
              />

              {/* Central Brain Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center"
                >
                  <Brain className="w-16 h-16 text-blue-600" />
                </motion.div>
              </div>

              {/* Floating UI Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute top-8 right-8 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">Secure</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-medium">Fast AI</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
