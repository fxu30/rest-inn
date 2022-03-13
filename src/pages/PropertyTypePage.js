import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PropertyList from '../components/PropertyList'

/* Filtered Version of Property Listing Page */
/* Route will be ./propertytype/:type  */

const PropertyTypePage = () => {
  return (
    <>
    <Header />
    <PropertyList />
    <Footer />
    </>
  )
}

export default PropertyTypePage