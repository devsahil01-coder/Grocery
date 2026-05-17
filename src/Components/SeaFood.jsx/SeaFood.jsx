import React from 'react'
import Banner from '../Banner/Banner'
import bgSeaFood from "../../assets/seafood-banner.jpg"

import CategoryPage from '../CategoryPage/CategoryPage'

const SeaFood = () => {
  return (
    <div className='max-w-[1400px] mx-auto'>
      <CategoryPage title={"SeaFood"} bgImage={bgSeaFood}  categories={['SeaFood']} />
    </div>
  )
}

export default SeaFood
