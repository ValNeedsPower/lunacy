import Heading from '../../components/ui/Heading'
import SubHeading from '../../components/ui/SubHeading'

const SecondHeroSection = () => {
  return (
    <div className="w-full mt-20 h-full">
      <div
        className={`h-[592px]
            bg-cover bg-center
            duration-1000
           
          `}
        style={{ backgroundImage: `url(./productBanners/banner_5.png)` }}
      >
        <div className="flex   justify-center  items-center flex-col">
          <Heading>
            ЧИСТЫЙ <br />
            ГЕЙМИНГ
          </Heading>
          <SubHeading add="leading-[28px] opacity-60 text-center">
            создано геймером <br /> а не маркетологами
          </SubHeading>
          {/* <p className="max-w-[400px] mt-6 text-center text-sm text-[#050625] leading-[18px] tracking-tight">
            LUNACY основал Слава Бустер — геймер, который знает, каким должен быть идеальный девайс <br /> через его руки прошли десятки мышек,
            клавиатур и наушников топовых брендов <br /> в поисках идеала он решил сделать своё: устройства, созданные для настоящих фанатов игр —
            LUNACY
          </p> */}
          <div className="flex mt-20 opacity-50 space-x-8">
            <img
              src="./partners/ozon_logo.svg"
              alt="ozon_logotype"
            />
            <img
              src="./partners/mvideo_logo.svg"
              alt="mvideo_logotype"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondHeroSection
