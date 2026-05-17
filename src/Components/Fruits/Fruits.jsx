import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'

import bgFruit from "../../assets/fruits-banner.jpg"

const Fruits = () => {
  return (
    <div className='max-w-[1400px] mx-auto'>
     <CategoryPage title={"Fruits & Veggies"} bgImage ={bgFruit} categories={["Fruits"]} />
    </div>
  )
}

export default Fruits
