"use client"

import type React from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { 
  Star
} from "lucide-react"
import Link from "next/link"

interface TestimonialsProps {
  language: "en" | "ar"
}

export function Testimonials({ language }: TestimonialsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

const translations = {
  en: {
    testimonials: {
      title: "What Our Users Say",
      subtitle: "Trusted by Thousands of Patients and Doctors",
      testimonials: [
        {
          name: "Sarah Johnson",
          role: "Patient",
          text: "BASHRA.AI has revolutionized how I manage my health. The AI diagnosis feature is incredibly accurate and the doctors are always available when I need them.",
        },
        {
          name: "Dr. Ahmed Hassan",
          role: "Cardiologist",
          text: "As a doctor, BASHRA.AI has helped me reach more patients and provide better care. The platform is intuitive and the support team is excellent.",
        },
        {
          name: "Maria Rodriguez",
          role: "Patient",
          text: "The convenience of having medical consultations from home is incredible. BASHRA.AI has made healthcare accessible for my entire family.",
        },
      ],
    },
  },
  ar: {
    testimonials: {
      title: "ماذا يقول مستخدمونا",
      subtitle: "موثوق من قبل آلاف المرضى والأطباء",
      testimonials: [
        {
          name: "سارة أحمد",
          role: "مريضة",
          text: "لقد غيرت BASHRA.AI الطريقة التي أدير بها صحتي. ميزة التشخيص بالذكاء الاصطناعي دقيقة بشكل لا يصدق والأطباء متوفرون دائماً عندما أحتاجهم.",
        },
        {
          name: "د. أحمد حسن",
          role: "طبيب قلب",
          text: "كطبيب، ساعدتني BASHRA.AI في الوصول إلى المزيد من المرضى وتقديم رعاية أفضل. المنصة سهلة الاستخدام وفريق الدعم ممتاز.",
        },
        {
          name: "مريم محمد",
          role: "مريضة",
          text: "راحة إجراء الاستشارات الطبية من المنزل أمر لا يصدق. جعلت BASHRA.AI الرعاية الصحية متاحة لعائلتي بأكملها.",
        },
      ],
    },
  },
}

  const t = translations[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <>
      {/* Testimonials Section */}
      <section className={`py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {t.testimonials.title}
              </span>
            </h2>
            <p className="text-xl text-gray-300">{t.testimonials.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 text-white">
                  <CardContent className="pt-6">
                    <div className={`flex items-center mb-4 ${language === 'ar' ? 'justify-end' : 'justify-start'}`}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className={`text-gray-300 mb-6 leading-relaxed italic ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      "{testimonial.text}"
                    </p>
                    <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center ${language === 'ar' ? 'ml-3' : 'mr-3'}`}>
                        <span className="text-white font-semibold text-sm">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className={language === 'ar' ? 'text-right' : 'text-left'}>
                        <div className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}