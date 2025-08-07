"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Globe, Zap, Shield, BarChart3, Users, Smartphone, ArrowRight, Play } from "lucide-react"

interface WebAppPromotionProps {
  language: "en" | "ar"
}

export function WebAppPromotion({ language = "en" }: WebAppPromotionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const translations = {
    en: {
      title: "Powerful Web Platform",
      subtitle: "Transform your workflow with our comprehensive web application designed for modern businesses",
      keyFeatures: "Key Features",
      whyChooseUs: "Why Choose Us?",
      features: [
        {
          title: "Global Access",
          description: "Access from anywhere, anytime",
        },
        {
          title: "Real-time Sync",
          description: "Instant updates across all devices",
        },
        {
          title: "Advanced Analytics",
          description: "Detailed insights and reporting",
        },
        {
          title: "Enterprise Security",
          description: "Bank-level security protocols",
        },
        {
          title: "Team Collaboration",
          description: "Work together seamlessly",
        },
        {
          title: "Mobile Responsive",
          description: "Perfect on any device",
        },
      ],
      benefits: [
        "Increase productivity by 300%",
        "Save 10+ hours per week",
        "Reduce operational costs",
        "Scale your business efficiently",
      ],
      buttons: {
        startTrial: "Start Free Trial",
        watchDemo: "Watch Demo"
      },
      trustIndicator: "Trusted by 10,000+ companies worldwide",
      altText: "Web Application Interface"
    },
    ar: {
      title: "منصة ويب قوية",
      subtitle: "حوّل سير عملك مع تطبيق الويب الشامل المصمم للأعمال الحديثة",
      keyFeatures: "الميزات الرئيسية",
      whyChooseUs: "لماذا تختارنا؟",
      features: [
        {
          title: "وصول عالمي",
          description: "الوصول من أي مكان، في أي وقت",
        },
        {
          title: "مزامنة فورية",
          description: "تحديثات فورية عبر جميع الأجهزة",
        },
        {
          title: "تحليلات متقدمة",
          description: "رؤى مفصلة وتقارير شاملة",
        },
        {
          title: "أمان المؤسسات",
          description: "بروتوكولات أمان بمستوى البنوك",
        },
        {
          title: "تعاون الفريق",
          description: "العمل معاً بسلاسة",
        },
        {
          title: "متجاوب مع الجوال",
          description: "مثالي على أي جهاز",
        },
      ],
      benefits: [
        "زيادة الإنتاجية بنسبة 300%",
        "توفير 10+ ساعات أسبوعياً",
        "تقليل التكاليف التشغيلية",
        "توسيع عملك بكفاءة",
      ],
      buttons: {
        startTrial: "ابدأ النسخة التجريبية",
        watchDemo: "شاهد العرض"
      },
      trustIndicator: "موثوق من قبل 10,000+ شركة حول العالم",
      altText: "واجهة تطبيق الويب"
    },
  }

  const t = translations[language]
  const featureIcons = [Globe, Zap, BarChart3, Shield, Users, Smartphone]

  const features = t.features.map((feature, index) => ({
    icon: featureIcons[index],
    ...feature
  }))

  return (
    <section ref={ref} className={`py-20 bg-gray-900 text-white overflow-hidden ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            {t.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
          {/* Features and Benefits */}
          <motion.div
            className="space-y-8 order-2 lg:order-1"
            initial={{ x: language === 'ar' ? 100 : -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">{t.keyFeatures}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                    initial={{ y: 30, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -2, scale: 1.02 }}
                  >
                    <div className={`flex items-start ${language === 'ar' ? 'flex-row-reverse space-x-reverse space-x-3' : 'space-x-3'}`}>
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <div className={language === 'ar' ? 'text-right' : 'text-left'}>
                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-400">{t.whyChooseUs}</h3>
              <div className="space-y-3">
                {t.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center ${language === 'ar' ? 'flex-row-reverse space-x-reverse space-x-3' : 'space-x-3'}`}
                    initial={{ x: language === 'ar' ? 20 : -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className={`flex flex-col sm:flex-row gap-4 pt-4 ${language === 'ar' ? 'sm:flex-row-reverse' : ''}`}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.buttons.startTrial}
                <ArrowRight className={`${language === 'ar' ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'} w-5 h-5 transition-transform`} />
              </motion.button>
              <motion.button
                className="border-2 border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className={`${language === 'ar' ? 'ml-2 rotate-180' : 'mr-2'} w-5 h-5`} />
                {t.buttons.watchDemo}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Laptop Mockup */}
          <motion.div
            className="relative flex justify-center items-center order-1 lg:order-2"
            initial={{ x: language === 'ar' ? -100 : 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Laptop Mockup */}
              <motion.div
                className="relative"
                initial={{ y: 50, rotateX: 25 }}
                animate={isInView ? { y: 0, rotateX: 15 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                whileHover={{ rotateX: 0, y: -10 }}
                style={{ perspective: "1000px" }}
              >
                {/* Laptop Screen */}
                <div className="w-96 h-64 bg-gray-800 rounded-t-2xl p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-lg overflow-hidden relative">
                    {/* Browser Chrome */}
                    <div className="h-8 bg-gray-100 flex items-center px-4 border-b">
                      <div className={`flex space-x-2 ${language === 'ar' ? 'order-2' : 'order-1'}`}>
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className={`flex-1 mx-4 ${language === 'ar' ? 'order-1' : 'order-2'}`}>
                        <div className="h-4 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                    {/* Website Interface */}
                    <img
                      src="/10.webp?height=220&width=360&text=Web+Dashboard+Interface"
                      alt={t.altText}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent"></div>
                  </div>
                </div>
                {/* Laptop Base */}
                <div className="w-[420px] h-6 bg-gray-700 rounded-b-2xl -mt-1 shadow-lg"></div>
                <div className="w-16 h-2 bg-gray-600 rounded-b-lg mx-auto"></div>
              </motion.div>

              {/* Floating UI Elements */}
              <motion.div
                className={`absolute -top-8 ${language === 'ar' ? '-left-8' : '-right-8'} w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center`}
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <BarChart3 className="w-8 h-8 text-blue-400" />
              </motion.div>

              <motion.div
                className={`absolute -bottom-4 ${language === 'ar' ? '-right-8' : '-left-8'} w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-xl backdrop-blur-sm border border-white/10 flex items-center justify-center`}
                animate={{ y: [0, 10, 0], x: [0, language === 'ar' ? 5 : -5, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Users className="w-6 h-6 text-purple-400" />
              </motion.div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl -z-10 scale-110"></div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        {/* <motion.div
          className="mt-20 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <p className="text-gray-400 mb-8">{t.trustIndicator}</p>
          <div className={`flex justify-center items-center ${language === 'ar' ? 'space-x-reverse space-x-12' : 'space-x-12'} opacity-60`}>
            <div className="text-2xl font-bold">شركة أ</div>
            <div className="text-2xl font-bold">شركة ب</div>
            <div className="text-2xl font-bold">شركة ج</div>
            <div className="text-2xl font-bold">شركة د</div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}