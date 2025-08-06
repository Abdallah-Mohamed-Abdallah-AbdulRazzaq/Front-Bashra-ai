"use client"

import { motion, useInView } from "framer-motion"
import { useRef, memo, useMemo} from "react"
import { Upload, Brain, UserCheck, BarChart3, ArrowRight } from "lucide-react"

interface AboutPlatformProps {
  language: "en" | "ar"
}

export function AboutPlatform({ language }: AboutPlatformProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const content = {
    en: {
      title: "How BASHRA.AI Works",
      subtitle: "Four simple steps to revolutionize your healthcare experience",
      steps: [
        {
          icon: Upload,
          title: "Upload Medical Data",
          description:
            "Securely upload symptoms, medical history, or diagnostic images through our intuitive interface.",
        },
        {
          icon: Brain,
          title: "AI Analysis",
          description: "Our advanced AI algorithms analyze your data using cutting-edge machine learning models.",
        },
        {
          icon: UserCheck,
          title: "Doctor Review",
          description: "Licensed medical professionals review and validate AI-generated insights for accuracy.",
        },
        {
          icon: BarChart3,
          title: "Patient Insights",
          description: "Receive comprehensive reports with actionable insights and treatment recommendations.",
        },
      ],
    },
    ar: {
      title: "كيف يعمل BASHRA.AI",
      subtitle: "أربع خطوات بسيطة لثورة في تجربة الرعاية الصحية",
      steps: [
        {
          icon: Upload,
          title: "رفع البيانات الطبية",
          description: "ارفع الأعراض والتاريخ الطبي أو الصور التشخيصية بأمان من خلال واجهتنا البديهية.",
        },
        {
          icon: Brain,
          title: "تحليل الذكاء الاصطناعي",
          description: "تحلل خوارزميات الذكاء الاصطناعي المتقدمة بياناتك باستخدام نماذج التعلم الآلي المتطورة.",
        },
        {
          icon: UserCheck,
          title: "مراجعة الطبيب",
          description: "يراجع المهنيون الطبيون المرخصون ويتحققون من دقة الرؤى المولدة بالذكاء الاصطناعي.",
        },
        {
          icon: BarChart3,
          title: "رؤى المريض",
          description: "احصل على تقارير شاملة مع رؤى قابلة للتنفيذ وتوصيات العلاج.",
        },
      ],
    },
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#0a1833] via-[#0c2340] to-[#101c2c]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {content[language].title}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{content[language].subtitle}</p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/30 to-blue-500/20 transform -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content[language].steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-white/10 group hover:scale-105 hover:bg-white/10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300"
                  >
                    <step.icon className="w-8 h-8 text-blue-400" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>

                  {/* Arrow for next step */}
                  {index < content[language].steps.length - 1 && (
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="hidden lg:flex absolute right-0 translate-x-7.5 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full shadow-lg items-center justify-center border border-white/10"
                    >
                      <ArrowRight className={`w-4 h-4 text-blue-400 ${language === "ar" ? "rotate-180" : ""}`} />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 cursor-pointer hover:scale-105">
            <span className="mr-2">
              {language === "en" ? "Experience the Future of Healthcare" : "اختبر مستقبل الرعاية الصحية"}
            </span>
            <ArrowRight className={`w-4 h-4 ${language === "ar" ? "rotate-180" : ""}`} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
