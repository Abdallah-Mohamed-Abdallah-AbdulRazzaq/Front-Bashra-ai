"use client"

import { motion } from "framer-motion"
import { Brain, Heart, Shield, Zap, Activity, Stethoscope } from "lucide-react"
import { useEffect, useState } from "react"

export function FloatingElements() {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 })
  const [mounted, setMounted] = useState(false)

  const elements = [
    { icon: Brain, color: "from-blue-400 to-cyan-400", delay: 0 },
    { icon: Heart, color: "from-red-400 to-pink-400", delay: 1 },
    { icon: Shield, color: "from-green-400 to-emerald-400", delay: 2 },
    { icon: Zap, color: "from-yellow-400 to-orange-400", delay: 3 },
    { icon: Activity, color: "from-purple-400 to-indigo-400", delay: 4 },
    { icon: Stethoscope, color: "from-teal-400 to-blue-400", delay: 5 },
  ]

  useEffect(() => {
    setMounted(true)
    
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Set initial dimensions
    updateDimensions()

    // Add event listener for window resize
    window.addEventListener('resize', updateDimensions)

    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Don't render anything until component is mounted on client
  if (!mounted) {
    return null
  }

  // Generate random positions for each element
  const getRandomPosition = () => ({
    x: Math.random() * dimensions.width,
    y: Math.random() * dimensions.height,
  })

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => {
        const initialPos = getRandomPosition()
        const animatePos = getRandomPosition()
        
        return (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0,
              x: initialPos.x,
              y: initialPos.y,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              x: animatePos.x,
              y: animatePos.y,
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              delay: element.delay,
              ease: "easeInOut",
            }}
            className={`absolute w-16 h-16 bg-gradient-to-r ${element.color} rounded-full flex items-center justify-center shadow-lg`}
          >
            <element.icon className="w-8 h-8 text-white" />
          </motion.div>
        )
      })}
    </div>
  )
}