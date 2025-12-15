import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import SubHeading from '../SubHeading'
import LimitedTag from '../tags/LimitedTag'

const ProductPopUp = ({ onClick }) => {
  const overlayRef = useRef(null)
  const panelRef = useRef(null)

  const inTheBox = [
    'Клавиатура',
    'Коврик',
    'Руководство пользователя',
    'Гарантийный талон',
    'Металлический пуллер Lunacy',
    'Запасные свитчи (4)',
    'Lunacy кабель (type-c coiled) 1.8m',
    'Плейт (поликарбонат)',
    'Шумоизоляция (паралон и силикон) (2)',
    'Дополнительные кейкапы',
  ]

  const specs1 = [
    { label: 'свитчи', value: 'g3ms diamond' },
    { label: 'hot-swap', value: 'да' },
    { label: 'крепление', value: 'gasket mount' },
    { label: 'плейт', value: 'металл' },
    { label: 'кейкапы', value: 'pbt' },
  ]

  const specs2 = [
    { label: 'подключение', value: 'провод/радиоканал/bluetooth' },
    { label: 'клавиши', value: '98 штук (96% )' },
    { label: 'aккумулятор', value: '4000 mah' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' })

      gsap.fromTo(panelRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', delay: 0.05 })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999]
        backdrop-blur-sm
        bg-[radial-gradient(circle_at_center,#011016_0%,#003B5525_70%)]
      "
      onClick={onClick}
    >
      <div
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col mx-auto mt-[114px] rounded-3xl w-[389px]"
      >
        {/* Header */}
        <div className="flex px-5 pt-5 pb-2.5 items-center justify-between">
          <div className="flex space-x-2">
            <img
              src="./icons/inbox.svg"
              alt="in_the_box_icon"
            />
            <SubHeading
              mode="light"
              add="font-semibold mb-2 flex tracking-tight opacity-60"
            >
              В комплекте
            </SubHeading>
          </div>

          <div
            onClick={onClick}
            className="opacity-80 cursor-pointer hover:opacity-100 duration-300"
          >
            <img
              src="./icons/close.svg"
              alt="close_pop_up_icon"
            />
          </div>
        </div>

        {/* In the box */}
        <ul className="flex px-5 flex-col py-2.5 border-y-[0.5px] border-white-100/20 space-y-1">
          {inTheBox.map((item, index) => (
            <li
              className="text-sm text-white-100/80 tracking-tight"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Specs 1 */}
        <div className="flex space-y-[14px] flex-col px-5 py-2.5">
          {specs1.map((spec, index) => (
            <div
              className="flex justify-between items-center"
              key={index}
            >
              <LimitedTag>{spec.label}</LimitedTag>
              <p className="text-sm tracking-tight text-white-100/80">{spec.value}</p>
            </div>
          ))}
        </div>

        {/* Specs 2 */}
        <div className="flex space-y-[14px] border-t-[0.5px] border-white-100/20 flex-col px-5 pt-2.5">
          {specs2.map((spec, index) => (
            <div
              className="flex justify-between items-center"
              key={index}
            >
              <LimitedTag>{spec.label}</LimitedTag>
              <p className="text-sm tracking-tight text-white-100/80">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductPopUp
