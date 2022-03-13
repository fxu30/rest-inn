import React from 'react'
import BestSellerList from '../components/BestSellerList'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import PropertyTypeList from '../components/PropertyTypeList'

const Homepage = () => {
  return (
    <>
    <Header />
    
    <Hero />
    <hr />
    <PropertyTypeList />
    <BestSellerList />
    
    <Footer />
    </>
  )
}
export default Homepage