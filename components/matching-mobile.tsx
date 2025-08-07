"use client"

import type React from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { 
  Heart,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

interface MatchingMobileProps {
  language: "en" | "ar"
}

export function MatchingMobile({ language }: MatchingMobileProps) {
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
    mobileExperience: {
      title: "BASHRA.AI Mobile Experience",
      description: "Seamless healthcare management at your fingertips. Access patient records, schedule appointments, and communicate with medical professionals anywhere, anytime.",
      phones: {
        patientList: {
          title: "Patient List",
          subtitle: "BASHRA.AI Medical"
        },
        patientProfile: {
          title: "Patient Profile",
          subtitle: "Sarah Johnson"
        },
        dashboard: {
          title: "Dashboard",
          subtitle: "Medical Hub"
        }
      }
    }
  },
  ar: {
    appDownload: {
      title: "تحميل تطبيق BASHRA.AI للهاتف المحمول",
      subtitle: "متوفر على جميع المنصات",
      description: "احصل على وصول فوري لخدمات الرعاية الصحية، احجز المواعيد، واستشر الأطباء في أي وقت وأي مكان.",
      benefits: {
        instant: "استشارات فورية",
        secure: "آمن وخاص",
        affordable: "رعاية ميسورة التكلفة",
        available: "متوفر 24/7",
      },
    },
    mobileExperience: {
      title: "تجربة BASHRA.AI للهاتف المحمول",
      description: "إدارة الرعاية الصحية بسلاسة في متناول يدك. الوصول إلى سجلات المرضى، وجدولة المواعيد، والتواصل مع المهنيين الطبيين في أي مكان وأي وقت.",
      phones: {
        patientList: {
          title: "قائمة المرضى",
          subtitle: "BASHRA.AI الطبي"
        },
        patientProfile: {
          title: "ملف المريض",
          subtitle: "سارة أحمد"
        },
        dashboard: {
          title: "لوحة التحكم",
          subtitle: "المركز الطبي"
        }
      }
    }
  },
}

// Mobile Phone Mockup Component
const MobilePhone = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl">
        <div className="bg-white rounded-[2rem] overflow-hidden h-[600px] w-[300px]">
          {/* Status bar */}
          <div className="bg-white px-6 py-2 flex justify-between items-center text-black text-sm font-medium">
            <span>9:41</span>
            <div className="flex items-center space-x-1">
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              </div>
              <span className="ml-2">4G</span>
              <div className="w-6 h-3 border border-black rounded-sm">
                <div className="w-4 h-1.5 bg-green-500 rounded-sm m-0.5"></div>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="h-full bg-gray-50">{children}</div>
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
      </div>
    </div>
  )
}

  const t = translations[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <>
      {/* Mobile Trio Section - Matching the mobile trio image */}
      <section className={`py-20 bg-gradient-to-br from-slate-800 to-slate-900 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-center items-center ${language === 'ar' ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            {/* Phone 1 - Patient List */}
            <motion.div
              initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <MobilePhone>
                <img 
                  src="/6.webp" 
                  alt={language === 'ar' ? "واجهة تطبيق إدارة المرضى" : "Patient Management App Interface"}
                  className="w-full h-full object-cover"
                />
                {/* Overlay for branding */}
                <div className={`absolute top-6 ${language === 'ar' ? 'right-6 left-6' : 'left-6 right-6'}`}>
                  <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3">
                    <h3 className="text-white font-bold text-lg">{t.mobileExperience.phones.patientList.title}</h3>
                    <p className="text-white/80 text-sm">{t.mobileExperience.phones.patientList.subtitle}</p>
                  </div>
                </div>
              </MobilePhone>
            </motion.div>

            {/* Phone 2 - Patient Profile */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="z-10"
            >
              <MobilePhone>
                <img 
                  src="/7.webp" 
                  alt={language === 'ar' ? "واجهة ملف المريض" : "Patient Profile Interface"}
                  className="w-full h-full object-cover"
                />
                {/* Overlay for branding */}
                <div className={`absolute top-6 ${language === 'ar' ? 'right-6 left-6' : 'left-6 right-6'}`}>
                  <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3">
                    <h3 className="text-white font-bold text-lg">{t.mobileExperience.phones.patientProfile.title}</h3>
                    <p className="text-white/80 text-sm">{t.mobileExperience.phones.patientProfile.subtitle}</p>
                  </div>
                </div>
              </MobilePhone>
            </motion.div>

            {/* Phone 3 - Home/Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <MobilePhone>
                <img 
                  src="/8.webp" 
                  alt={language === 'ar' ? "واجهة لوحة التحكم الطبية" : "Medical Dashboard Interface"}
                  className="w-full h-full object-cover"
                />
                {/* Overlay for branding */}
                <div className={`absolute top-6 ${language === 'ar' ? 'right-6 left-6' : 'left-6 right-6'}`}>
                  <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3">
                    <h3 className="text-white font-bold text-lg">{t.mobileExperience.phones.dashboard.title}</h3>
                    <p className="text-white/80 text-sm">{t.mobileExperience.phones.dashboard.subtitle}</p>
                  </div>
                </div>
              </MobilePhone>
            </motion.div>
          </div>
          
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {t.mobileExperience.title}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {t.mobileExperience.description}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}