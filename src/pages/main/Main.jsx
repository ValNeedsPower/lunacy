import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Categories from './Categories'
import HeroSection from './HeroSection'
import SecondHeroSection from './SecondHeroSection'
import TopProducts from './TopProducts'
import TopProductsSecond from './TopProductsSecond'

gsap.registerPlugin(ScrollTrigger)

const Main = () => {
  const heroRef = useRef(null)
  const bgRef = useRef(null)
  const topRef = useRef(null)
  const categoriesRef = useRef(null)
  const topSecondRef = useRef(null)
  const secondHeroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animateSection = (ref, options = {}) => {
        gsap.from(ref, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          ...options,
        })
      }

      // Hero (first view)
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: 'power3.out',
      })

      // Background fade
      gsap.from(bgRef.current, {
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: bgRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      animateSection(topRef.current)
      animateSection(categoriesRef.current)
      animateSection(topSecondRef.current)
      animateSection(secondHeroRef.current, { y: 60 })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div ref={heroRef}>
        <HeroSection />

        <div
          ref={bgRef}
          className="bg-[url(./bg_pattern.png)] inset-0 bg-no-repeat brightness-150 absolute top-[600px] bg-top w-full h-[1200px]"
        />

        <TopProducts btn />
      </div>

      <div ref={categoriesRef}>
        <Categories />
      </div>

      <div ref={topSecondRef}>
        <TopProductsSecond btn />
      </div>

      <div ref={secondHeroRef}>
        <SecondHeroSection />
      </div>
    </div>
  )
}

export default Main
