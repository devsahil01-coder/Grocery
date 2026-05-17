import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Products from '../Products/Products'
import Discount from '../Discount/Discount'
import Progress from '../Progress/Progress'
import Testimonials from '../Testimonials/Testimonials'
import Layout from '../Layout/Layout'

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Values />
      <Products />
      <Discount />
      <Progress />
      <Testimonials />

    </div>
  )
}

export default Home
