import { NavLink } from 'react-router-dom'
import BtnPrimary from './ui/BtnPrimary'
import BtnSecondary from './ui/BtnSecondary'
import ComboTag from './ui/tags/ComboTag'
import LimitedTag from './ui/tags/LimitedTag'
import NoviceTag from './ui/tags/NoviceTag'

const ProductCard = ({ productImg, combo, novice, limited, productName, price, formerPrice }) => {
  return (
    <div className="group  flex relative rounded-3xl basis-1/5  pt-[54px] pb-5 flex-col max-w-[226px] max-h-[226px] w-[226px] h-[226px]">
      {/* BLUE OVERLAY */}
      <div
        className="
        outline
        outline-offset-[-1px]
        outline-[#C4EBFC]/50
        backdrop-blur-sm
        z-30
    absolute inset-0
    rounded-3xl
    opacity-0
    transition-opacity duration-300
    group-hover:opacity-100

    bg-[radial-gradient(circle_at_center,#C4EBFC25_0%,#003B5525_70%)]

    shadow-[inset_0_-4px_10px_rgba(91,200,247,0.25),inset_0_4px_10px_rgba(0,146,210,0.4)]
        "
      >
        <div className="flex relative z-40 pt-20 items-center space-y-2 justify-center flex-col">
          <NavLink
            target="_blank"
            to="https://www.ozon.ru/product/klaviatura-besprovodnaya-lunacy-longwei-mousepad-g3ms-diamond-liswk03-red-3185996130/?af_dp=https%3A%2F%2Fozon.ru%2Fproduct%2F3185996130%3Fhs%3D1&hs=1&shortlink=a1bd1ruq&source_caller=api&utm_campaign=vendor_org_1456383&utm_content=longwei&utm_medium=button&utm_source=site"
          >
            {' '}
            <BtnPrimary add="w-[115px]">Купить</BtnPrimary>{' '}
          </NavLink>
          <NavLink to="/longwei">
            {' '}
            <BtnSecondary add="w-[115px]">Подробнее</BtnSecondary>{' '}
          </NavLink>
        </div>
      </div>

      {/* TAGS */}
      <div className="flex absolute top-[45px] w-full px-5 justify-between">
        {novice && <NoviceTag> NEW </NoviceTag>}
        {combo && <ComboTag> combo </ComboTag>}
        {limited && <LimitedTag>limited</LimitedTag>}
      </div>
      {/* PRODUCT_IMAGE */}
      <img
        className=" h-[100px] justify-center mx-auto items-center"
        src={productImg}
      />
      <div className="flex flex-col items-center">
        {/* PRODUCT_NAME */}
        <p className="text-white-100 leading-[22px] text-lg font-semibold">{productName}</p>
        {/* PRODUCT_PRICE */}
        <div className="flex items-center space-x-2">
          {price && <p className="text-sm  tracking-tight text-white-100/50">{price}₽</p>}
          {formerPrice && <p className="text-sm tracking-tight text-white-100/20 line-through">{formerPrice}₽</p>}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
