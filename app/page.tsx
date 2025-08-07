"use client"

import { useRef, useState, useEffect, useCallback, memo } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react"
import Image from "next/image"
import dynamic from "next/dynamic"

// Lazy load heavy components katcj
const HeroSection = dynamic(() => import("@/components/hero-section").then(mod => ({ default: mod.HeroSection })), {
  loading: () => <div className="h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" />
})

const Sid1Section = dynamic(() => import("@/components/sid1-section").then(mod => ({ default: mod.Sid1Section })))
const Sid2Section = dynamic(() => import("@/components/sid2-section").then(mod => ({ default: mod.Sid2Section })))
const AboutPlatform = dynamic(() => import("@/components/about-platform").then(mod => ({ default: mod.AboutPlatform })))
const AppFeatures = dynamic(() => import("@/components/app-features").then(mod => ({ default: mod.AppFeatures })))
const Testimonials = dynamic(() => import("@/components/testimonials").then(mod => ({ default: mod.Testimonials })))
const DoctorEngagement = dynamic(() => import("@/components/doctor-engagement").then(mod => ({ default: mod.DoctorEngagement })))
const MatchingMobile = dynamic(() => import("@/components/matching-mobile").then(mod => ({ default: mod.MatchingMobile })))
const RevealCards = dynamic(() => import("@/components/reveal-cards").then(mod => ({ default: mod.RevealCards })))
const WebPlatformTeaser = dynamic(() => import("@/components/web-platform-teaser").then(mod => ({ default: mod.WebPlatformTeaser })))
const ContactSection = dynamic(() => import("@/components/contact-section").then(mod => ({ default: mod.ContactSection })))
const MobileAppShowcase = dynamic(() => import("@/components/mobile-app-showcase").then(mod => ({ default: mod.MobileAppShowcase })))
const WebAppPromotion = dynamic(() => import("@/components/web-app-promotion").then(mod => ({ default: mod.WebAppPromotion })))
const Navbar = dynamic(() => import("@/components/navbar").then(mod => ({ default: mod.Navbar })))
const ParticleBackground = dynamic(() => import("@/components/particle-background").then(mod => ({ default: mod.ParticleBackground })))

// Types
interface HeroSection1Props {
  parallaxY: any
  opacity: any
}

interface Card {
  title: string
  category: string
  image: string
}

interface Slide {
  title: string
  subtitle: string
  image: string
}

interface Section {
  title: string
  description: string
  image: string
  reverse: boolean
}

export default function Home() {
  const [language, setLanguage] = useState<"en" | "ar">("en")
  // const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    // target: containerRef,
    // offset: ["start start", "end start"],
  })
  
  // Optimize transforms with reduced calculations
  // const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 50])
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100])

  // Memoize language change handler
  const handleLanguageChange = useCallback((newLanguage: "en" | "ar") => {
    setLanguage(newLanguage)
  }, [])

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 ${language === "ar" ? "font-arabic" : ""}`}>
      <ParticleBackground />

      <motion.div
        className="fixed inset-0 opacity-30 pointer-events-none will-change-transform"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
          y: backgroundY,
        }}
      />

      <Navbar language={language} setLanguage={handleLanguageChange} />

      <main className="relative z-10">
        {/* <div ref={containerRef} className="min-h-screen bg-white" /> */}

        {/* Hero Section with Parallax */}
        {/* <HeroSection1 parallaxY={parallaxY} opacity={opacity} /> */}

        <HeroSection language={language} />
        <Sid1Section language={language} />
        <Sid2Section language={language} />
        <AboutPlatform language={language} />
        <AppFeatures language={language} />
        <Testimonials language={language} />
        <MatchingMobile language={language} />
        <DoctorEngagement language={language} />
        <RevealCards language={language} />
        <MobileAppShowcase language={language} />
        <WebAppPromotion language={language} />
        <WebPlatformTeaser language={language} />


        {/* Optimized sections */}
        <FullWidthBanner />
        <FeaturedCardsSection />
        <CarouselSection />
        <SplitScreenSection />

        <ContactSection language={language} />

      </main>
    </div>
  )
}

// Memoized HeroSection1 component
// const HeroSection1 = memo(function HeroSection1({ parallaxY, opacity }: HeroSection1Props) {
//   return (
//     <section className="relative h-screen overflow-hidden">
//       <motion.div 
//         className="absolute inset-0 z-0 will-change-transform" 
//         style={{ y: parallaxY }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/60 to-indigo-900/80 z-10" />
//         <Image
//           src="/a.png"
//           alt="Hero background"
//           fill
//           className="object-cover"
//           priority
//           quality={85}
//           sizes="100vw"
//         />
//       </motion.div>

//       <motion.div
//         className="relative z-20 flex items-center justify-center h-full text-white text-center px-4 will-change-transform"
//         style={{ opacity }}
//       >
//         <div className="max-w-4xl">
//           <motion.h1
//             className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1, delay: 0.2 }}
//           >
//             Visual Showcase
//           </motion.h1>
//           <motion.p
//             className="text-xl md:text-2xl mb-8 text-blue-100"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           >
//             Experience the future of digital storytelling
//           </motion.p>
//           <motion.button
//             className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1, delay: 0.8 }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Explore Now
//           </motion.button>
//         </div>
//       </motion.div>
//     </section>
//   )
// })

// Memoized FeaturedCardsSection
const FeaturedCardsSection = memo(function FeaturedCardsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const cards: Card[] = [
    { title: "Digital Art", category: "Creative", image: "/13.1.webp" },
    { title: "Architecture", category: "Design", image: "/13.2.webp" },
    { title: "Nature", category: "Photography", image: "/13.3.webp" },
    { title: "Technology", category: "Innovation", image: "/13.4.webp" },
    { title: "Fashion", category: "Style", image: "/13.5.webp" },
    { title: "Travel", category: "Adventure", image: "/13.6.webp" },
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Collections</h2>
          <p className="text-xl text-gray-600">Discover our curated selection of visual experiences</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={`card-${index}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-sm font-medium text-blue-300 mb-2 block">{card.category}</span>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <button className="flex items-center text-sm font-medium hover:text-blue-300 transition-colors">
                  Explore <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

// Optimized CarouselSection
function CarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const slides: Slide[] = [
    { title: "Innovation Hub", subtitle: "Where ideas come to life", image: "/16.webp" },
    { title: "Creative Studio", subtitle: "Unleashing artistic potential", image: "/15.webp" },
    { title: "Digital Frontier", subtitle: "Exploring new possibilities", image: "/14.webp" },
    { title: "Nature's Canvas", subtitle: "Beauty in its purest form", image: "/13.6.webp" },
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  // Auto-slide with cleanup
  useEffect(() => {
    if (isInView) {
      intervalRef.current = setInterval(nextSlide, 5000)
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isInView, nextSlide])

  // Pause auto-slide on hover
  const pauseAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }, [])

  const resumeAutoSlide = useCallback(() => {
    intervalRef.current = setInterval(nextSlide, 5000)
  }, [nextSlide])

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Stories</h2>
          <p className="text-xl text-gray-300">Immersive experiences that inspire</p>
        </motion.div>

        <div 
          className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden"
          onMouseEnter={pauseAutoSlide}
          onMouseLeave={resumeAutoSlide}
        >
          {slides.map((slide, index) => (
            <motion.div
              key={`slide-${index}`}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: index === currentSlide ? 1 : 0,
                x: index === currentSlide ? 0 : index < currentSlide ? -100 : 100,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                sizes="100vw"
                loading={index === 0 ? "eager" : "lazy"}
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-2xl px-8 md:px-25 text-white">
                  <motion.h3
                    className="text-4xl md:text-6xl font-bold mb-4"
                    initial={{ y: 50, opacity: 0 }}
                    animate={index === currentSlide ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {slide.title}
                  </motion.h3>
                  <motion.p
                    className="text-xl md:text-2xl text-gray-200 mb-8"
                    initial={{ y: 30, opacity: 0 }}
                    animate={index === currentSlide ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.button
                    className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={index === currentSlide ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Discover More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            type="button"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            type="button"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Memoized SplitScreenSection
const SplitScreenSection = memo(function SplitScreenSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const sections: Section[] = [
    {
      title: "Crafted with Precision",
      description: "Every detail matters in creating exceptional digital experiences. Our approach combines artistic vision with technical excellence.",
      image: "/14.webp",
      reverse: false,
    },
    {
      title: "Powered by Innovation",
      description: "Cutting-edge technology meets creative storytelling. We push boundaries to deliver experiences that captivate and inspire.",
      image: "/15.webp",
      reverse: true,
    },
    {
      title: "Built for Tomorrow",
      description: "Future-ready solutions that adapt and evolve. We create digital experiences that stand the test of time.",
      image: "/16.webp",
      reverse: false,
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <motion.div
            key={`section-${index}`}
            className={`flex flex-col ${section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center mb-20 last:mb-0`}
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="lg:w-1/2 px-4 lg:px-8">
              <div className={`max-w-lg ${section.reverse ? "lg:ml-auto" : ""}`}>
                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                  initial={{ x: section.reverse ? 50 : -50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                >
                  {section.title}
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-600 mb-8 leading-relaxed"
                  initial={{ x: section.reverse ? 50 : -50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                >
                  {section.description}
                </motion.p>
                <motion.button
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  initial={{ x: section.reverse ? 50 : -50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  Learn More
                </motion.button>
              </div>
            </div>
<motion.div
  className="lg:w-1/2 mt-8 lg:mt-0 flex items-center justify-center"
  initial={{ x: section.reverse ? -100 : 100, opacity: 0 }}
  animate={isInView ? { x: 0, opacity: 1 } : {}}
  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
>
  <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full h-80">
    <img
      src={section.image}
      alt={section.title}
      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
      style={{ zIndex: 10, position: "relative" }} // أضف هذا السطر
    />
    {/* جرب حذف أو تعديل الشفافية هنا */}
    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" /> */}
  </div>
</motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
})

// Optimized FullWidthBanner
function FullWidthBanner() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 30])

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div className="absolute inset-0 will-change-transform" style={{ y }}>
        <Image
          src="/12.webp"
          alt="Full width banner"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
          quality={85}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
        <motion.div
          className="max-w-4xl"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Beyond Imagination
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Where creativity meets technology to create extraordinary digital experiences that push the boundaries of what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}