"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Zap, Users, Star } from "lucide-react"

interface MobileAppShowcaseProps {
  language: "en" | "ar"
}

export function MobileAppShowcase({ language = "en" }: MobileAppShowcaseProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const translations = {
    en: {
      title: "Download Our Mobile App",
      subtitle: "Experience the power of our platform on the go with our feature-rich mobile application",
      features: [
        {
          title: "Lightning Fast",
          description: "Optimized performance for seamless user experience",
        },
        {
          title: "Secure & Private",
          description: "End-to-end encryption keeps your data safe",
        },
        {
          title: "Social Integration",
          description: "Connect and share with friends effortlessly",
        },
        {
          title: "Premium Features",
          description: "Advanced tools for power users",
        },
      ],
      buttons: {
        appStore: {
          text1: "Download on the",
          text2: "App Store"
        },
        googlePlay: {
          text1: "Get it on",
          text2: "Google Play"
        }
      },
      stats: {
        downloads: "Downloads",
        rating: "Rating",
        reviews: "Reviews"
      },
      altTexts: {
        ios: "iOS App Interface",
        android: "Android App Interface"
      }
    },
    ar: {
      title: "حمّل تطبيقنا للهاتف المحمول",
      subtitle: "اختبر قوة منصتنا أثناء التنقل مع تطبيقنا المحمول الغني بالميزات",
      features: [
        {
          title: "سرعة البرق",
          description: "أداء محسّن لتجربة مستخدم سلسة",
        },
        {
          title: "آمن وخاص",
          description: "التشفير من النهاية إلى النهاية يحافظ على أمان بياناتك",
        },
        {
          title: "التكامل الاجتماعي",
          description: "تواصل وشارك مع الأصدقاء بسهولة",
        },
        {
          title: "ميزات مميزة",
          description: "أدوات متقدمة للمستخدمين المحترفين",
        },
      ],
      buttons: {
        appStore: {
          text1: "حمّل من",
          text2: "متجر التطبيقات"
        },
        googlePlay: {
          text1: "احصل عليه من",
          text2: "جوجل بلاي"
        }
      },
      stats: {
        downloads: "التحميلات",
        rating: "التقييم",
        reviews: "المراجعات"
      },
      altTexts: {
        ios: "واجهة تطبيق iOS",
        android: "واجهة تطبيق Android"
      }
    },
  }

  const t = translations[language]
  const featureIcons = [Zap, Shield, Users, Star]

  const features = t.features.map((feature, index) => ({
    icon: featureIcons[index],
    ...feature
  }))

  return (
    <section ref={ref} className={`py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className={`grid lg:grid-cols-2 gap-16 items-center ${language === 'ar' ? 'lg:grid-cols-2' : ''}`}>
          {/* Phone Mockups */}
          <motion.div
            className="relative flex justify-center items-center order-2 lg:order-1"
            initial={{ x: language === 'ar' ? 100 : -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* iPhone Mockup */}
              <motion.div
                className="relative z-10"
                initial={{ y: 50, rotate: language === 'ar' ? 5 : -5 }}
                animate={isInView ? { y: 0, rotate: language === 'ar' ? 5 : -5 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
              >
                <div className="w-64 h-[520px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* iPhone notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                    {/* App screenshot */}
                    <img
                      src="/9.webp?height=500&width=250&text=iOS+App+Interface"
                      alt={t.altTexts.ios}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
                  </div>
                </div>
              </motion.div>

              {/* Android Mockup */}
              <motion.div
                className={`absolute ${language === 'ar' ? '-left-8' : '-right-8'} top-12 z-0`}
                initial={{ y: 50, rotate: language === 'ar' ? -5 : 5 }}
                animate={isInView ? { y: 0, rotate: language === 'ar' ? -5 : 5 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
              >
                <div className="w-56 h-[450px] bg-gray-800 rounded-[2.5rem] p-2 shadow-xl opacity-80">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* App screenshot */}
                    <img
                      src="/6.webp?height=450&width=220&text=Android+App+Interface"
                      alt={t.altTexts.android}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className={`absolute -top-4 ${language === 'ar' ? '-right-4' : '-left-4'} w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20`}
                animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.div
                className={`absolute -bottom-8 ${language === 'ar' ? '-left-12' : '-right-12'} w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-30`}
                animate={{ y: [0, 10, 0], x: [0, language === 'ar' ? -5 : 5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Features and Download */}
          <motion.div
            className="space-y-8 order-1 lg:order-2"
            initial={{ x: language === 'ar' ? -100 : 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`flex items-start ${language === 'ar' ? 'flex-row-reverse space-x-reverse space-x-4' : 'space-x-4'}`}>
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div className={language === 'ar' ? 'text-right' : 'text-left'}>
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* App Store Buttons */}
            <motion.div
              className={`flex flex-col sm:flex-row gap-4 ${language === 'ar' ? 'sm:flex-row-reverse' : ''}`}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* App Store Button */}
              <motion.button
                className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse space-x-reverse space-x-3' : 'space-x-3'}`}>
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className={language === 'ar' ? 'text-right' : 'text-left'}>
                    <div className="text-xs">{t.buttons.appStore.text1}</div>
                    <div className="text-sm font-semibold">{t.buttons.appStore.text2}</div>
                  </div>
                </div>
              </motion.button>

              {/* Google Play Button */}
              <motion.button
                className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse space-x-reverse space-x-3' : 'space-x-3'}`}>
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className={language === 'ar' ? 'text-right' : 'text-left'}>
                    <div className="text-xs">{t.buttons.googlePlay.text1}</div>
                    <div className="text-sm font-semibold">{t.buttons.googlePlay.text2}</div>
                  </div>
                </div>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className={`flex ${language === 'ar' ? 'justify-center sm:justify-end' : 'justify-center sm:justify-start'} space-x-8 pt-4 ${language === 'ar' ? 'space-x-reverse' : ''}`}
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1M+</div>
                <div className="text-sm text-gray-600">{t.stats.downloads}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.8★</div>
                <div className="text-sm text-gray-600">{t.stats.rating}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">{t.stats.reviews}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}