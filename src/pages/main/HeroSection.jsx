import { useEffect, useState } from 'react'
import BtnSecondary from '../../components/ui/BtnSecondary'
import BtnPrimary from '../../components/ui/BtnPrimary'
import Heading from '../../components/ui/Heading'
import SubHeading from '../../components/ui/SubHeading'

const SLIDE_DURATION = 4000
//const SLIDE_DURATION = 40000

const slides = [
  {
    bg: './productBanners/banner_1.png',
    heading: (
      <>
        АЗИАТСКИЙ
        <br />
        СТИЛЬ
      </>
    ),

    sub: 'Longwei & Kanagawa ',
    headingMode: 'light',
  },
  {
    bg: './productBanners/banner_2.png',
    heading: (
      <>
        СДЕЛАЙ
        <br />
        ГРОМЧЕ
      </>
    ),

    sub: 'Lunacy Louder',
    headingMode: 'dark',
  },
  {
    bg: './productBanners/banner_3.png',
    heading: (
      <>
        ЕЩЕ БОЛЬШЕ <br /> КОНТРОЛЯ{' '}
      </>
    ),
    sub: 'Lunacy Another One ',
    headingMode: 'light',
  },
  {
    bg: './productBanners/banner_4.png',
    heading: (
      <>
        СПОКОЙНАЯ <br /> ТОЧНОСТЬ{' '}
      </>
    ),
    sub: 'white sakura XL',
    headingMode: 'dark',
  },
]

const HeroSection = () => {
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)

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
    <div className="relative w-full h-[592px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`
            absolute inset-0 bg-cover bg-center
            transition-opacity duration-1000
            ${i === index ? 'opacity-100' : 'opacity-0'}
          `}
          style={{ backgroundImage: `url(${slide.bg})` }}
        >
          {i === index && (
            <div className="flex  absolute  right-[200px] flex-col items-center justify-center text-center">
              <Heading mode={slide.headingMode}>{slide.heading}</Heading>

              <SubHeading mode={slide.headingMode}>{slide.sub}</SubHeading>

              <div className="flex relative z-20 space-x-3 mt-6">
                <BtnSecondary
                  mode={slide.headingMode}
                  add="w-[115px]"
                >
                  Подробнее
                </BtnSecondary>
                <BtnPrimary add="w-[115px]">Купить</BtnPrimary>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute duration-300 transition-all bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) =>
          i === index ? (
            // Active → progress bar
            <div
              key={i}
              className="w-[100px] h-5 duration-700 transition-all bg-white-100/20 backdrop-blur-sm outline outline-1 outline-offset-[-1px] outline-[#FF835F]/90 rounded-full overflow-hidden"
            >
              <div
                className="h-full shadow-[inset_0_2px_5px_#FFA085,inset_0_-2px_1px_#FF420B] bg-gradient-to-b rounded-full from-[#FF835F]/50 to-[#D22F00]/50 transition-[width] duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          ) : (
            // Inactive → dot
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="
              duration-300
    w-5 h-5 rounded-full
    shadow-[inset_0_2px_5px_#B4B4B4,inset_0_-2px_1px_#8F8F8F]
    bg-gradient-to-t from-[#999999]/50 to-[#717171]/50
    backdrop-blur-sm
    outline outline-1 outline-offset-[-1px] outline-[#AFAFAF]/90
    transition-transform 
    hover:scale-110
    active:scale-95
    cursor-pointer
  "
            />
          ),
        )}
      </div>
    </div>
  )
}

export default HeroSection
