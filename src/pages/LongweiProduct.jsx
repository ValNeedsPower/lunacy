import ProductDescription from '../components/ui/product/ProductDescription'
import ProductPopUp from '../components/ui/product/ProductPopUp'
import SubHeading from '../components/ui/SubHeading'
import TopProductsSecond from './main/TopProductsSecond'

import { useEffect, useState } from 'react'

const SLIDE_DURATION = 4000
//const SLIDE_DURATION = 40000

const slides = [
  {
    bg: './longwei_big.png',
  },
  {
    bg: './longwei_big_back.png',
  },
  {
    bg: './longwei_big_side_1.png',
  },
  {
    bg: './longwei_big_side_2.png',
  },
  {
    bg: './longwei_big_another.png',
  },
]

const LongweiProduct = () => {
  const [open, setOpen] = useState(false)
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

  //TODO: дизайн комбо?

  return (
    <div className="h-[1000px]  overflow-hidden">
      {open && <ProductPopUp onClick={() => setOpen(false)} />}
      <div className="bg-[url(./bg_pattern.png)] bg-no-repeat brightness-150 absolute inset-0 top-0 bg-top w-full h-[800px]" />
      <div className="flex mt-20 gap-x-5 px-[112px] w-full">
        <div className="flex relative basis-3/5  border h-[337px] rounded-3xl border-[#5BC8F7]/25">
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
          <div className="absolute duration-300 transition-all bottom-5 opacity-50 left-1/2 -translate-x-1/2 flex gap-2">
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
        <ProductDescription onClick={() => setOpen(true)} />
      </div>

      <div className="flex w-full flex-col mt-20">
        {/* <div className="flex px-[112px] justify-start -mb-10">
          {' '}
          <SubHeading
            add="opacity-50"
            mode="light"
          >
            {' '}
            вам может понравиться
          </SubHeading>
        </div> */}
        <TopProductsSecond />
      </div>
    </div>
  )
}

export default LongweiProduct
