import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgAllImage from "../../assets/all-banner.jpg"
const AllProducts = () => {
  return (
    <div className='max-w-[1400px] mx-auto'>
      
      <CategoryPage title={'All Products'} bgImage={bgAllImage} />
    </div>
  )
}

export default AllProducts
