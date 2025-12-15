import ProductDescription from '../components/ui/product/ProductDescription'
import ProductPopUp from '../components/ui/product/ProductPopUp'
import TopProductsSecond from './main/TopProductsSecond'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const SLIDE_DURATION = 4000

const slides = [
  { bg: './longwei_big.png' },
  { bg: './longwei_big_back.png' },
  { bg: './longwei_big_side_1.png' },
  { bg: './longwei_big_side_2.png' },
  { bg: './longwei_big_another.png' },
]

const LongweiProduct = () => {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  // 🔹 GSAP refs
  const bgRef = useRef(null)
  const sliderRef = useRef(null)
  const descRef = useRef(null)
  const bottomRef = useRef(null)

  // 🔹 Section entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from(bgRef.current, {
        opacity: 0,
        duration: 0.4,
      })
        .from(
          sliderRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.5,
          },
          '-=0.2',
        )
        .from(
          descRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.5,
          },
          '-=0.35',
        )
        .from(
          bottomRef.current,
          {
            opacity: 0,
            y: 60,
            duration: 0.6,
          },
          '-=0.2',
        )
    })

    return () => ctx.revert()
  }, [])

  // 🔹 Slider logic (unchanged)
  useEffect(() => {
    setProgress(0)

    const progressInterval = setInterval(() => {
      setProgress((p) => Math.min(p + 1, 100))
    }, SLIDE_DURATION / 100)

    const slideTimeout = setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, SLIDE_DURATION)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(slideTimeout)
    }
  }, [index])

  const goToSlide = (i) => {
    setIndex(i)
    setProgress(0)
  }

  return (
    <div className="h-[1000px] overflow-hidden relative">
      {open && <ProductPopUp onClick={() => setOpen(false)} />}

      {/* Background */}
      <div
        ref={bgRef}
        className="bg-[url(./bg_pattern.png)] bg-no-repeat brightness-150 absolute inset-0 top-0 bg-top w-full h-[800px]"
      />

      {/* Top section */}
      <div className="flex mt-20 gap-x-5 px-[112px] w-full relative z-10">
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex relative basis-3/5 border h-[337px] rounded-3xl border-[#5BC8F7]/25"
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`
                w-full h-full inset-0 absolute
                transition-opacity duration-1000
                ${i === index ? 'opacity-100' : 'opacity-0'}
              `}
            >
              <img src={slide.bg} />
            </div>
          ))}

          {/* Indicators */}
          <div className="absolute bottom-5 opacity-50 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) =>
              i === index ? (
                <div
                  key={i}
                  className="w-[100px] h-5 bg-white-100/20 rounded-full overflow-hidden"
                >
                  <div
                    className="h-full bg-gradient-to-b from-[#FF835F]/50 to-[#D22F00]/50 transition-[width] duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              ) : (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className="w-5 h-5 rounded-full bg-[#888]/50 hover:scale-110 duration-300"
                />
              ),
            )}
          </div>
        </div>

        {/* Description */}
        <div ref={descRef}>
          <ProductDescription onClick={() => setOpen(true)} />
        </div>
      </div>

      {/* Bottom section */}
      <div
        ref={bottomRef}
        className="flex w-full flex-col mt-20"
      >
        <TopProductsSecond />
      </div>
    </div>
  )
}

export default LongweiProduct
