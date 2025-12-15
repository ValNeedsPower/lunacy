import React from 'react'
import TopProducts from './main/TopProducts'
import TopProductsSecond from './main/TopProductsSecond'

const Catalogue = () => {
  return (
    <>
      {' '}
      <div className="bg-[url(./bg_pattern.png)] inset-0 bg-no-repeat brightness-150 absolute  top-0 bg-top w-full h-[1200px]" />
      <div className="flex  h-screen flex-col ">
        <TopProducts />
        <TopProductsSecond />
      </div>
    </>
  )
}

export default Catalogue
