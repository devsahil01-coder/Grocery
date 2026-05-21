import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgAllImage from "../../assets/all-banner.jpg"
import { productsLists } from '../ProductLists/ProductsLists'
const AllProducts = () => {
  return (
    <div className='max-w-[1400px] mx-auto'>
      
      <CategoryPage title={'All Products'} bgImage={bgAllImage} categories={productsLists} />
    </div>
  )
}

export default AllProducts
