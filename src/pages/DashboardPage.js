import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import Header from '../components/Header'

const DashboardPage = () => {
  const user = useSelector(state => state.user.currentUser);
  return (
    <>
    <Header />
    <div className="grid-container">
      <div className="grid-x">
        {/* title */}
        <h3 className='cell medium-5'><strong>Dashboard</strong></h3>
        <div className='cell medium-3'></div>
        <div className='cell medium-3'></div>
        {/* show full name */}
        <div className='cell medium-4'></div>
            <h6 className='cell medium-5'><strong>Hello, {user.firstname} {user.lastname}</strong></h6>
        <div className='cell medium-3'></div>
        {/* user ID */}
        <div className='cell medium-4'></div>
            <h6 className='cell medium-5'><strong>User ID: {user.id}  </strong></h6>
        <div className='cell medium-3'></div>
        {/* email address */}
        <div className='cell medium-4'></div>
            <h6 className='cell medium-5'><strong>Email Address:  {user.email} </strong></h6>
        <div className='cell medium-3'></div>
        


      </div>
    </div>
    <Footer />
    </>
  )
}

export default DashboardPage