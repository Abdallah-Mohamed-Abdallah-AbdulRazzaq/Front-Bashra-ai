"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Linkedin, 
  MessageCircle, 
  Twitter, 
  Send, 
  Heart,
  Instagram,
  Youtube,
  ArrowRight // أضف هذا السطر
} from "lucide-react"
import Link from "next/link"

interface ContactSectionProps {
  language: "en" | "ar"
}

export function ContactSection({ language }: ContactSectionProps) {
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
    },
  }

  const t = content[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { icon: MessageCircle, href: "#", color: "hover:text-green-600" },
    { icon: Twitter, href: "#", color: "hover:text-sky-500" },
  ]

  return (
    <>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t.title}
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">{t.subtitle}</p>

              <div className="space-y-6">
                {[
                  { icon: MapPin, text: t.contact.address, color: "text-blue-600" },
                  { icon: Phone, text: t.contact.phone, color: "text-green-600" },
                  { icon: Mail, text: t.contact.email, color: "text-purple-600" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center group cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div
                      className={`w-12 h-12 ${item.color} bg-blue-50 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-100 transition-colors`}
                    >
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.social.title}</h3>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href="#"
                        className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
                      >
                        <Icon className="h-5 w-5" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t.form.name}
                      className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t.form.email}
                      className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t.form.message}
                      rows={4}
                      className="border-2 border-gray-200 focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {t.form.submit}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              className="col-span-1 md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Heart className="h-10 w-10 text-red-400" />
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  BASHRA.AI
                </span>
              </div>
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed">{t.footer.description}</p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="#"
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {[
              {
                title: t.footer.quickLinks,
                links: [t.nav.home, t.nav.features, t.nav.forDoctors, t.nav.download],
              },
              {
                title: t.footer.support,
                links: ["Help Center", "Privacy Policy", "Terms of Service", t.nav.contact],
              },
            ].map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (sectionIndex + 1) * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-6 text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href="#"
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="border-t border-gray-700/50 mt-12 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400">© 2024 BASHRA.AI. {t.footer.rights}</p>
          </motion.div>
        </div>
      </footer>
    </>
  )
}