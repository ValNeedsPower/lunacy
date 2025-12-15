import BtnSecondary from '../BtnSecondary'
import BtnPrimary from '../BtnPrimary'
import SubHeading from '../SubHeading'
import NoviceTag from '../tags/noviceTag'
import LimitedTag from '../tags/LimitedTag'
import ComboTag from '../tags/ComboTag'
const ProductDescription = ({ onClick }) => {
  return (
    <div className="flex flex-col justify-between basis-2/5">
      <div className="flex flex-col">
        <SubHeading
          add="font-semibold"
          mode="light"
        >
          {' '}
          Lunacy Longwei
        </SubHeading>
        <div className="flex space-x-2 mt-2">
          <NoviceTag>NEW</NoviceTag>
          <LimitedTag>limited</LimitedTag>
          <ComboTag>combo</ComboTag>
        </div>
        <div className="flex items-center mt-3 space-x-2">
          <p className="text-sm  tracking-tight text-white-100/50">12 990₽</p>
          <p className="text-sm tracking-tight text-white-100/20 line-through">13 500₽</p>
        </div>
        <BtnSecondary
          onClick={onClick}
          add="mt-4 w-fit rounded-[10px]"
          icon="./icons/specs.svg"
        >
          Характеристики
        </BtnSecondary>
        <p className="lowercase text-sm tracking-tight text-white-100/80 leading-[19px] mt-4">
          Лимитированная серия клавиатур Lunacy In Space <br /> вдохновлена мотивами традиционного восточного искусства <br /> о китайском драконе{' '}
          <br /> Премиальные свитчи и коврик в комплекте
        </p>
      </div>
      <BtnPrimary>
        {' '}
        Купить на <b>OZON </b>
      </BtnPrimary>
    </div>
  )
}

export default ProductDescription
