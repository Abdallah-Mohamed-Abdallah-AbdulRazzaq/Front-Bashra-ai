"use client"

import type React from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  MessageCircle, 
  Download
} from "lucide-react"
import Link from "next/link"

interface Sid1SectionProps {
  language: "en" | "ar"
}

export function Sid1Section({ language }: Sid1SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const content = {
    en: {
      title: "Get in Touch",
      subtitle: "Ready to transform your healthcare experience? Contact us today.",
      form: {
        name: "Full Name",
        email: "Email Address",
        message: "Your Message",
        submit: "Send Message",
      },
      contact: {
        email: "hello@bashra.ai",
        phone: "+1 (555) 123-4567",
        address: "Healthcare Innovation Center, Medical District",
      },
      social: {
        title: "Follow Us",
        description: "Stay updated with the latest in AI healthcare innovation",
      },
      footer: {
        description: "Revolutionizing healthcare through AI-powered diagnostics and personalized treatment recommendations for a better tomorrow.",
        quickLinks: "Quick Links",
        support: "Support",
        rights: "All rights reserved.",
      },
      nav: {
        home: "Home",
        features: "Features",
        forDoctors: "For Doctors",
        download: "Download",
        contact: "Contact",
      },
      features: {
        title: "BUILT FOR HEALTHCARE",
        subtitle: "Easy, Digital, Seamless medical management system",
        description: "Connect with patients, doctors, and specialists in the most convenient way. Advertise your services and boost your practice in the digital age, all with a few clicks.",
      },
      hero: {
        downloadApp: "Download App",
        learnMore: "Learn More",
      },
    },
    ar: {
      title: "تواصل معنا",
      subtitle: "مستعد لتحويل تجربة الرعاية الصحية؟ اتصل بنا اليوم.",
      form: {
        name: "الاسم الكامل",
        email: "عنوان البريد الإلكتروني",
        message: "رسالتك",
        submit: "إرسال الرسالة",
      },
      contact: {
        email: "hello@bashra.ai",
        phone: "+1 (555) 123-4567",
        address: "مركز الابتكار الصحي، المنطقة الطبية",
      },
      social: {
        title: "تابعنا",
        description: "ابق على اطلاع بأحدث الابتكارات في الرعاية الصحية بالذكاء الاصطناعي",
      },
      footer: {
        description: "ثورة في الرعاية الصحية من خلال التشخيص المدعم بالذكاء الاصطناعي وتوصيات العلاج الشخصية لغد أفضل.",
        quickLinks: "روابط سريعة",
        support: "الدعم",
        rights: "جميع الحقوق محفوظة.",
      },
      nav: {
        home: "الرئيسية",
        features: "المميزات",
        forDoctors: "للأطباء",
        download: "تحميل",
        contact: "اتصل بنا",
      },
      features: {
        title: "مصمم للرعاية الصحية",
        subtitle: "نظام إدارة طبية سهل ورقمي وسلس",
        description: "تواصل مع المرضى والأطباء والمختصين بأكثر الطرق ملاءمة. اعلن عن خدماتك وعزز ممارستك في العصر الرقمي، كل ذلك بنقرات قليلة.",
      },
      hero: {
        downloadApp: "تحميل التطبيق",
        learnMore: "اعرف المزيد",
      },
    },
  }

  const t = content[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <>
      {/* Features Section - Inspired by the mobile trio and features images */}
      <section
        id="features"
        className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)
            `,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mobile mockups */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/mobile-trio.png"
                  alt="BASHRA.AI Mobile Apps"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 text-sm font-semibold rounded-full">
                    01
                  </Badge>
                </motion.div>

                <motion.h2
                  className="text-3xl md:text-5xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {t.features.title}
                </motion.h2>

                <motion.h3
                  className="text-xl text-cyan-300 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {t.features.subtitle}
                </motion.h3>

                <motion.div
                  className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                />

                <motion.p
                  className="text-lg text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {t.features.description}
                </motion.p>

                <motion.div
                  className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    {t.hero.downloadApp}
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 bg-transparent"
                  >
                    {t.hero.learnMore}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


    </>
  )
}