import BtnSecondary from './ui/BtnSecondary'

const CategoryCard = ({ productImg, catName, catIcon, mode }) => {
  return (
    <>
      {/* <div className="flex flex-col basis-1/4  justify-center  items-center ">
        <div className="group relative ">
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
            <div className="flex relative z-40 pt-[120px] items-center space-y-2 justify-center flex-col">
              <BtnSecondary add="w-[115px]">Подробнее</BtnSecondary>
            </div>
          </div>

          <div>
            <img
              src={productImg}
              alt={`${productImg}_category`}
              className="w-[284px] h-[284px] filter drop-shadow-[0_0_2px_rgba(255,243,231,0.2)]"
            />
          </div>
        </div>
        <BtnSecondary
          icon={catIcon}
          add="mt-6 flex space-x-2"
        >
          {catName}
        </BtnSecondary>
      </div> */}
      <div
        style={{ backgroundImage: `url(${productImg})` }}
        className="flex hover:scale-95 duration-300 cursor-pointer relative basis-[50%] filter drop-shadow-[0_0_2px_rgba(255,243,231,0.2)] bg-cover h-[300px] rounded-3xl"
      >
        <div className="flex absolute w-full h-fit justify-end bottom-6 right-6">
          <BtnSecondary
            mode={mode}
            icon={catIcon}
            add="mt-6"
          >
            {catName}
          </BtnSecondary>
        </div>
      </div>
    </>
  )
}

export default CategoryCard
