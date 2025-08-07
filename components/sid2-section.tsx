"use client"

import type React from "react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { 
  Heart,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

// تعريف أنواع البيانات
interface DotData {
  left: number
  top: number
  duration: number
  delay: number
}

interface Benefit {
  icon: React.ComponentType<{ className?: string }>
  text: string
}

interface Sid2SectionProps {
  language: "en" | "ar"
}

export function Sid2Section({ language }: Sid2SectionProps) {
  const [dots, setDots] = useState<DotData[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // توليد القيم العشوائية مرة واحدة فقط على العميل
    const generated: DotData[] = Array.from({ length: 15 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
    setDots(generated)
    setMounted(true)
  }, [])

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
        buttons: {
          googlePlay: {
            text: "Get it on",
            store: "Google Play"
          },
          appStore: {
            text: "Download on the",
            store: "App Store"
          }
        }
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
        buttons: {
          googlePlay: {
            text: "حمّل من",
            store: "Google Play"
          },
          appStore: {
            text: "حمّل من",
            store: "App Store"
          }
        }
      }
    },
  } as const

  const t = translations[language]
  const isRTL = language === "ar"

  // تحديد الفوائد مع الأيقونات
  const benefits: Benefit[] = [
    { icon: CheckCircle, text: t.appDownload.benefits.instant },
    { icon: Shield, text: t.appDownload.benefits.secure },
    { icon: Heart, text: t.appDownload.benefits.affordable },
    { icon: Clock, text: t.appDownload.benefits.available },
  ]

  return (
    <section
      id="download"
      className={`py-20 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 text-white relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* عناصر الخلفية المتحركة */}
      <div className="absolute inset-0" aria-hidden="true">
        {mounted && dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
            }}
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                {t.appDownload.title}
              </h2>
              <h3 className="text-xl text-cyan-100">
                {t.appDownload.subtitle}
              </h3>
              <p className="text-lg text-cyan-100 leading-relaxed">
                {t.appDownload.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <benefit.icon className="h-5 w-5 text-green-300 flex-shrink-0" />
                  <span className="text-sm">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* زر Google Play */}
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-black/80 hover:bg-black text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full"
                >
                  <div className="w-6 h-6 mr-3 bg-white rounded flex items-center justify-center">
                    <span className="text-black text-xs font-bold">GP</span>
                  </div>
                  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    <div className="text-xs opacity-80">
                      {t.appDownload.buttons.googlePlay.text}
                    </div>
                    <div className="text-sm font-semibold">
                      {t.appDownload.buttons.googlePlay.store}
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* زر App Store */}
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-black/80 hover:bg-black text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full"
                >
                  <div className="w-6 h-6 mr-3 bg-white rounded flex items-center justify-center">
                    <span className="text-black text-xs font-bold">🍎</span>
                  </div>
                  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    <div className="text-xs opacity-80">
                      {t.appDownload.buttons.appStore.text}
                    </div>
                    <div className="text-sm font-semibold">
                      {t.appDownload.buttons.appStore.store}
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/2.webp"
                alt={isRTL ? "مميزات تطبيق بشرى.AI للهاتف المحمول" : "BASHRA.AI Mobile Features"}
                width={600}
                height={400}
                className="w-full h-auto"
                priority={false}
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}