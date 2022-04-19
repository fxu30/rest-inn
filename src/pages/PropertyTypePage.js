import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PropertyList from '../components/PropertyList'

/* Filtered Version of Property Listing Page */
/* Route will be /listing/search?type={targetType}&title=  */

const PropertyTypePage = () => {
  return (
    <>
    <Header />
    <PropertyList searchType={true} searchTitle={false} />
    <Footer />
    </>
  )
}

export default PropertyTypePage