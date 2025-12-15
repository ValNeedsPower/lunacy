import CategoryCard from '../../components/CategoryCard'
import BtnSecondary from '../../components/ui/BtnSecondary'

const Categories = () => {
  const categories = [
    {
      img: './productBanners/banner_1.png',
      catName: 'Клавиатуры',
      catIcon: './icons/keyboard.svg',
      mode: 'light',
    },
    {
      img: './productBanners/banner_4.png',
      catName: 'Коврики',
      catIcon: './icons/mousepad.svg',
      mode: 'dark',
    },
    {
      img: './productBanners/banner_2.png',
      catName: 'Наушники',
      catIcon: './icons/headphones.svg',
      mode: 'dark',
    },
    {
      img: './productBanners/banner_3.png',
      catName: 'Мыши',
      catIcon: './icons/mouse.svg',
      mode: 'light',
    },
  ]

  return (
    <div className="mx-[112px] gap-x-5 gap-y-6  grid grid-cols-2 grid-rows-2  mt-20">
      {categories.map((cat, i) => (
        <CategoryCard
          key={i}
          mode={cat.mode}
          productImg={cat.img}
          catName={cat.catName}
          catIcon={cat.catIcon}
        />
      ))}
    </div>
  )
}

export default Categories
