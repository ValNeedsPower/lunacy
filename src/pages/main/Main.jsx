import Categories from './Categories'
import HeroSection from './HeroSection'
import SecondHeroSection from './SecondHeroSection'
import TopProducts from './TopProducts'
import TopProductsSecond from './TopProductsSecond'

const Main = () => {
  return (
    <div className="relative">
      <HeroSection />
      <div className="bg-[url(./bg_pattern.png)] inset-0 bg-no-repeat brightness-150 absolute top-[600px] bg-top w-full h-[1200px]" />

      {/* TOP PRODUCTS LINE */}
      <TopProducts btn />
      <Categories />
      <TopProductsSecond btn />
      <SecondHeroSection />
    </div>
  )
}

export default Main
