import ProductCard from '../../components/ProductCard'
import BtnSecondary from '../../components/ui/BtnSecondary'

const TopProductsSecond = ({ btn }) => {
  return (
    <>
      <div className="flex justify-between flex-wrap mt-20 mx-[112px]">
        <ProductCard
          productName={'Lunacy in Space'}
          price={'13 990'}
          productImg={'./products/kanagawa2_mini.png'}
        />
        <ProductCard
          novice
          limited
          productName={'Lunacy Snow Squad XL'}
          price={'2 490'}
          formerPrice={'3 500'}
          productImg={'./products/mousePad2_mini.png'}
        />
        <ProductCard
          productName={'Lunacy One'}
          price={'6 990'}
          productImg={'./products/mouse2_mini.png'}
        />
        <ProductCard
          productName={'Lunacy Moonlight'}
          price={'9 990'}
          formerPrice={'11 100'}
          productImg={'./products/longwei2_mini.png'}
        />
        <ProductCard
          limited
          productName={'Lunacy Night'}
          price={'6 990'}
          productImg={'./products/headphones2_mini.png'}
        />
      </div>
      {btn && (
        <div className="mt-10 flex justify-center items-center">
          <BtnSecondary>Посмотреть все товары</BtnSecondary>
        </div>
      )}
    </>
  )
}

export default TopProductsSecond
