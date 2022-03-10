import React from 'react'
import BestSellerList from '../components/BestSellerList'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import PropertyTypeList from '../components/PropertyTypeList'

const Homepage = () => {
  return (
      <div className="app">

        <Header/>
        <Hero />
        
    </div>
  )
}
/*
<main>
          <Hero />
          <PropertyTypeList />
          <br />
          <BestSellerList />
        </main>
        <Footer />
        */
export default Homepage