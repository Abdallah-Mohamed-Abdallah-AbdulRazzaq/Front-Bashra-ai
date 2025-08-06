"use client"

import type React from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { 
  ArrowRight,
  Shield,
  Brain,
  Users,
  Clock,
  Smartphone,
  Globe

} from "lucide-react"
import Link from "next/link"

interface RevealCardsProps {
  language: "en" | "ar"
}

export function RevealCards({ language }: RevealCardsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

const translations = {
  en: {
    appDownload: {
      title: "Download BASHRA.AI Mobile App",
      subtitle: "Available on All Platforms",
      description:
        "Get instant access to healthcare services, book appointments, and consult with doctors anytime, anywhere.",
      benefits: {
        instant: "Instant Consultations",
        secure: "Secure & Private",
        affordable: "Affordable Care",
        available: "24/7 Available",
      },
    },
    whyChoose: {
      title: "Why Choose Us",
      features: [
        {
          title: "Secure & Private",
          description: "End-to-end encryption and HIPAA compliance ensure your data is always protected.",
          stats: "256-bit encryption",
        },
        {
          title: "AI-Powered",
          description: "Advanced machine learning algorithms provide accurate diagnosis and personalized care.",
          stats: "95% accuracy rate",
        },
        {
          title: "Global Reach",
          description: "Connect with healthcare professionals worldwide, breaking geographical barriers.",
          stats: "50+ countries",
        },
        {
          title: "24/7 Available",
          description: "Round-the-clock healthcare support whenever you need it most.",
          stats: "Always online",
        },
        {
          title: "Expert Network",
          description: "Access to thousands of certified healthcare professionals across all specialties.",
          stats: "10,000+ doctors",
        },
        {
          title: "Mobile First",
          description: "Seamless experience across all devices with our responsive design.",
          stats: "iOS & Android",
        },
      ],
    }
  },
  ar: {
    appDownload: {
      title: "تحميل تطبيق بشرى.AI للهاتف المحمول",
      subtitle: "متوفر على جميع المنصات",
      description: "احصل على وصول فوري لخدمات الرعاية الصحية، احجز المواعيد، واستشر الأطباء في أي وقت وأي مكان.",
      benefits: {
        instant: "استشارات فورية",
        secure: "آمن وخاص",
        affordable: "رعاية ميسورة التكلفة",
        available: "متوفر 24/7",
      },
    },
    whyChoose: {
      title: "لماذا تختارنا",
      features: [
        {
          title: "آمن وخاص",
          description: "التشفير من النهاية إلى النهاية والامتثال لمعايير HIPAA يضمن حماية بياناتك دائماً.",
          stats: "تشفير 256 بت",
        },
        {
          title: "مدعوم بالذكاء الاصطناعي",
          description: "خوارزميات التعلم الآلي المتقدمة توفر تشخيصاً دقيقاً ورعاية شخصية.",
          stats: "معدل دقة 95%",
        },
        {
          title: "وصول عالمي",
          description: "تواصل مع المهنيين الصحيين حول العالم، كسر الحواجز الجغرافية.",
          stats: "50+ دولة",
        },
        {
          title: "متوفر 24/7",
          description: "دعم الرعاية الصحية على مدار الساعة عندما تحتاجه أكثر.",
          stats: "متاح دائماً",
        },
        {
          title: "شبكة خبراء",
          description: "الوصول إلى آلاف المهنيين الصحيين المعتمدين في جميع التخصصات.",
          stats: "10,000+ طبيب",
        },
        {
          title: "الهاتف المحمول أولاً",
          description: "تجربة سلسة عبر جميع الأجهزة مع تصميمنا المتجاوب.",
          stats: "iOS و Android",
        },
      ],
    }
  },
}

// Reveal animation component
const RevealOnScroll = ({
  children,
  direction = "up",
  delay = 0,
}: {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

  const t = translations[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  // Feature icons array
  const featureIcons = [Shield, Brain, Globe, Clock, Users, Smartphone]
  const gradients = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-purple-500",
    "from-pink-500 to-rose-500",
  ]

  return (
    <>
      {/* Section 5: Hover Reveal Cards */}
      <section className={`py-20 bg-black ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  {t.whyChoose.title}
                </span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.whyChoose.features.map((feature, index) => {
              const IconComponent = featureIcons[index]
              const gradient = gradients[index]
              
              return (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <motion.div
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 p-8 h-80"
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Background gradient on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    />

                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <motion.div
                          className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </motion.div>

                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                          {feature.title}
                        </h3>

                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                          {feature.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <span
                          className={`text-sm font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                        >
                          {feature.stats}
                        </span>
                        <motion.div
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ x: language === 'ar' ? -5 : 5 }}
                        >
                          <ArrowRight className={`w-5 h-5 text-white ${language === 'ar' ? 'rotate-180' : ''}`} />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </RevealOnScroll>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}