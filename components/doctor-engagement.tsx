"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Users, TrendingUp, MessageSquare, BarChart3, Stethoscope, Clock, Shield, Award } from "lucide-react"

interface DoctorEngagementProps {
  language: "en" | "ar"
}

export function DoctorEngagement({ language }: DoctorEngagementProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const content = {
    en: {
      title: "For Healthcare Professionals",
      subtitle: "Expand your practice and enhance patient care with AI-powered insights",
      description:
        "Join thousands of doctors who are revolutionizing their practice with BASHRA.AI. Our platform provides you with advanced tools to serve more patients efficiently while maintaining the highest standards of care.",
      benefits: [
        {
          icon: Users,
          title: "Wider Patient Base",
          description: "Connect with patients globally and expand your practice beyond geographical limitations.",
          color: "from-blue-500 to-cyan-500",
        },
        {
          icon: TrendingUp,
          title: "Automated Diagnosis Assistant",
          description: "AI-powered preliminary analysis helps you make faster, more accurate diagnoses.",
          color: "from-green-500 to-emerald-500",
        },
        {
          icon: MessageSquare,
          title: "Streamlined Communication",
          description: "Efficient patient communication tools with integrated messaging and video calls.",
          color: "from-purple-500 to-pink-500",
        },
        {
          icon: BarChart3,
          title: "Data Insights & Reports",
          description: "Comprehensive analytics and reporting tools to track patient outcomes and practice growth.",
          color: "from-orange-500 to-red-500",
        },
      ],
      stats: [
        { number: "5,000+", label: "Active Doctors" },
        { number: "98%", label: "Satisfaction Rate" },
        { number: "50%", label: "Time Saved" },
        { number: "24/7", label: "Support" },
      ],
      cta: "Join the Network",
    },
    ar: {
      title: "للمهنيين الصحيين",
      subtitle: "وسع ممارستك وعزز رعاية المرضى برؤى مدعومة بالذكاء الاصطناعي",
      description:
        "انضم إلى آلاف الأطباء الذين يثورون في ممارستهم مع BASHRA.AI. توفر منصتنا لك أدوات متقدمة لخدمة المزيد من المرضى بكفاءة مع الحفاظ على أعلى معايير الرعاية.",
      benefits: [
        {
          icon: Users,
          title: "قاعدة مرضى أوسع",
          description: "تواصل مع المرضى عالمياً ووسع ممارستك خارج القيود الجغرافية.",
          color: "from-blue-500 to-cyan-500",
        },
        {
          icon: TrendingUp,
          title: "مساعد التشخيص الآلي",
          description: "التحليل الأولي المدعوم بالذكاء الاصطناعي يساعدك على إجراء تشخيصات أسرع وأكثر دقة.",
          color: "from-green-500 to-emerald-500",
        },
        {
          icon: MessageSquare,
          title: "التواصل المبسط",
          description: "أدوات تواصل فعالة مع المرضى مع الرسائل المتكاملة والمكالمات المرئية.",
          color: "from-purple-500 to-pink-500",
        },
        {
          icon: BarChart3,
          title: "رؤى البيانات والتقارير",
          description: "أدوات تحليلية وتقارير شاملة لتتبع نتائج المرضى ونمو الممارسة.",
          color: "from-orange-500 to-red-500",
        },
      ],
      stats: [
        { number: "5,000+", label: "طبيب نشط" },
        { number: "98%", label: "معدل الرضا" },
        { number: "50%", label: "وقت موفر" },
        { number: "24/7", label: "دعم" },
      ],
      cta: "انضم إلى الشبكة",
    },
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={`${language === "ar" ? "lg:order-2" : ""}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6"
            >
              <Stethoscope className="w-4 h-4 mr-2" />
              {language === "en" ? "For Medical Professionals" : "للمهنيين الطبيين"}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {content[language].title}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              {content[language].description}
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid md:grid-cols-2 gap-6 mb-8"
            >
              {content[language].benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 transition-all duration-300"
                >
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                {content[language].cta}
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual & Stats */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`relative ${language === "ar" ? "lg:order-1" : ""} scale-90 -ml-[5px]`}
          >
            {/* Main Visual */}
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-8 shadow-2xl"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {content[language].stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="bg-white/30 backdrop-blur-sm rounded-xl p-4 text-center"
                      >
                        <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                        <div className="text-white/80 text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Doctor Icons */}
                  <div className="flex justify-center space-x-4">
                    <motion.div
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center"
                    >
                      <Stethoscope className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.div
                      animate={{ y: [5, -5, 5] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                      className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center"
                    >
                      <Award className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.div
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                      className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center"
                    >
                      <Shield className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg"
              >
                <Clock className="w-6 h-6 text-indigo-600" />
              </motion.div>

              <motion.div
                animate={{
                  y: [10, -10, 10],
                  rotate: [0, -5, 0],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg"
              >
                <TrendingUp className="w-6 h-6 text-green-600" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
