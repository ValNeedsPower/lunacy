import { NavLink } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'
import BtnSecondary from '../../components/ui/BtnSecondary'

const TopProducts = ({ btn }) => {
  return (
    <>
      <div className="flex justify-between flex-wrap mt-20 mx-[112px]">
        <ProductCard
          novice
          limited
          productName={'Lunacy Kanagawa'}
          price={'12 990'}
          formerPrice={'13 400'}
          productImg={'./products/kanagawa_mini.png'}
        />
        <ProductCard
          productName={'Lunacy Louder'}
          price={'12 990'}
          productImg={'./products/headphones_mini.png'}
        />
        <ProductCard
          combo
          novice
          productName={'Lunacy Longwei'}
          price={'12 990'}
          formerPrice={'14 400'}
          productImg={'./products/longwei_mini.png'}
        />
        <ProductCard
          productName={'Lunacy Another One'}
          price={'11 999'}
          formerPrice={'12 100'}
          productImg={'./products/mouse_mini.png'}
        />
        <ProductCard
          limited
          productName={'Moonway XL'}
          price={'2499'}
          productImg={'./products/mousePad_mini.png'}
        />
      </div>

      {btn && (
        <div className="mt-10 flex justify-center items-center">
          <NavLink
            to="/catalogue"
            end
          >
            {' '}
            <BtnSecondary>Посмотреть все товары</BtnSecondary>{' '}
          </NavLink>
        </div>
      )}
    </>
  )
}

export default TopProducts
