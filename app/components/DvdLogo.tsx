"use client"

import { useEffect, useRef } from "react"
import styles from "./DvdLogo.module.css"

export default function DvdLogo() {
  const logoRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!logoRef.current || !containerRef.current) return

    let x = 0
    let y = 0
    let vx = 2
    let vy = 2

    const animate = () => {
      if (!logoRef.current || !containerRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const logoRect = logoRef.current.getBoundingClientRect()

      x += vx
      y += vy

      if (x + logoRect.width > containerRect.width || x < 0) {
        vx = -vx
        changeColor()
      }
      if (y + logoRect.height > containerRect.height || y < 0) {
        vy = -vy
        changeColor()
      }

      logoRef.current.style.transform = `translate(${x}px, ${y}px)`

      requestAnimationFrame(animate)
    }

    const changeColor = () => {
      if (logoRef.current) {
        logoRef.current.style.filter = `hue-rotate(${Math.random() * 360}deg)`
      }
    }

    animate()
  }, [])

  return (
    <div ref={containerRef} className={styles.container} aria-label="Animated DVD Logo">
      <div ref={logoRef} className={styles.logo}>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NpfKItjai8mVMm4rBloOVlIeBPdkkO.png"
          alt="DVD Logo"
          className={styles.image}
        />
      </div>
    </div>
  )
}

