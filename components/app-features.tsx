"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Shield, Zap, Globe, Heart, Clock, ChevronLeft, ChevronRight, Brain } from "lucide-react"

interface AppFeaturesProps {
  language: "en" | "ar"
}

export function AppFeatures({ language }: AppFeaturesProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentSlide, setCurrentSlide] = useState(0)

  const content = {
    en: {
      title: "Powerful Features",
      subtitle: "Everything you need for comprehensive healthcare management",
      features: [
        {
          icon: Brain,
          title: "AI-Powered Diagnostics",
          description:
            "Advanced machine learning algorithms provide accurate medical insights and diagnostic suggestions.",
          color: "from-blue-500 to-cyan-500",
        },
        {
          icon: Shield,
          title: "Secure Health Records",
          description: "Bank-level encryption ensures your medical data remains private and secure at all times.",
          color: "from-green-500 to-emerald-500",
        },
        {
          icon: Zap,
          title: "Real-time Results",
          description: "Get instant analysis and results without waiting for traditional diagnostic processes.",
          color: "from-yellow-500 to-orange-500",
        },
        {
          icon: Globe,
          title: "Multilingual Support",
          description: "Available in multiple languages including Arabic and English for global accessibility.",
          color: "from-purple-500 to-pink-500",
        },
        {
          icon: Heart,
          title: "Health Monitoring",
          description: "Continuous health tracking with personalized recommendations and alerts.",
          color: "from-red-500 to-rose-500",
        },
        {
          icon: Clock,
          title: "24/7 Availability",
          description: "Access medical insights and consultations anytime, anywhere, day or night.",
          color: "from-indigo-500 to-blue-500",
        },
      ],
      mockups: [
        {
          title: "Dashboard Overview",
          description: "Comprehensive health dashboard with AI insights",
          image: "/3.webp",
        },
        {
          title: "AI Diagnosis",
          description: "Instant AI-powered medical analysis",
          image: "/4.webp",
        },
        {
          title: "Health Records",
          description: "Secure digital health record management",
          image: "/5.webp",
        }
      ],
    },
    ar: {
      title: "ميزات قوية",
      subtitle: "كل ما تحتاجه لإدارة الرعاية الصحية الشاملة",
      features: [
        {
          icon: Brain,
          title: "التشخيص بالذكاء الاصطناعي",
          description: "خوارزميات التعلم الآلي المتقدمة توفر رؤى طبية دقيقة واقتراحات تشخيصية.",
          color: "from-blue-500 to-cyan-500",
        },
        {
          icon: Shield,
          title: "سجلات صحية آمنة",
          description: "التشفير على مستوى البنوك يضمن بقاء بياناتك الطبية خاصة وآمنة في جميع الأوقات.",
          color: "from-green-500 to-emerald-500",
        },
        {
          icon: Zap,
          title: "نتائج فورية",
          description: "احصل على تحليل ونتائج فورية دون انتظار العمليات التشخيصية التقليدية.",
          color: "from-yellow-500 to-orange-500",
        },
        {
          icon: Globe,
          title: "دعم متعدد اللغات",
          description: "متاح بلغات متعددة بما في ذلك العربية والإنجليزية للوصول العالمي.",
          color: "from-purple-500 to-pink-500",
        },
        {
          icon: Heart,
          title: "مراقبة الصحة",
          description: "تتبع صحي مستمر مع توصيات وتنبيهات شخصية.",
          color: "from-red-500 to-rose-500",
        },
        {
          icon: Clock,
          title: "متاح 24/7",
          description: "الوصول إلى الرؤى الطبية والاستشارات في أي وقت وأي مكان، ليلاً أو نهاراً.",
          color: "from-indigo-500 to-blue-500",
        },
      ],
      mockups: [
        {
          title: "نظرة عامة على لوحة التحكم",
          description: "لوحة تحكم صحية شاملة مع رؤى الذكاء الاصطناعي",
          image: "/3.webp",
        },
        {
          title: "تشخيص الذكاء الاصطناعي",
          description: "تحليل طبي فوري مدعوم بالذكاء الاصطناعي",
          image: "/4.webp",
        },
        {
          title: "السجلات الصحية",
          description: "إدارة آمنة للسجلات الصحية الرقمية",
          image: "/5.webp",
        },
      ],
    },
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % content[language].mockups.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + content[language].mockups.length) % content[language].mockups.length)
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {content[language].title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{content[language].subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${language === "ar" ? "lg:order-2" : ""}`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {content[language].features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* App Mockups Carousel */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`relative ${language === "ar" ? "lg:order-1" : ""}`}
          >
            <div className="relative max-w-sm mx-auto">
              {/* Phone Frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-black rounded-[2.5rem] p-1">
                  <div className="bg-white rounded-[2rem] overflow-hidden relative h-[600px]">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10" />

                    {/* Screen Content */}
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className="h-full flex flex-col"
                    >
                    <img
                      src={content[language].mockups[currentSlide].image || "/placeholder.svg"}
                      alt={content[language].mockups[currentSlide].title}
                      className="w-full h-full object-cover p-6"
                    />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="sm"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {content[language].mockups.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                  </button>
                ))}
              </div>
            </div>

            {/* Mockup Info */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mt-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{content[language].mockups[currentSlide].title}</h3>
              <p className="text-gray-600">{content[language].mockups[currentSlide].description}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
