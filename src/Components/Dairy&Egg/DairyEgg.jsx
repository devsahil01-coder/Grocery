import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgDairy from "../../assets/dairy-banner.jpg"

const DairyEgg = () => {
  return (
    <div className='max-w-[1400px] mx-auto'>
      <CategoryPage title={'Dairy & Eggs'} bgImage={bgDairy}  categories={['Dairy']}/>
    </div>
  )
}

export default DairyEgg
