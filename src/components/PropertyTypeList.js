import React from 'react'
import PropertyTypeItem from './PropertyTypeItem'
import resortImg from '../assets/img/resort.jpg'
import hotelImg from '../assets/img/hotel.jpg'
import bnbImg from '../assets/img/bnb.jpg'
import motelImg from '../assets/img/motel.jpg'
import { Link } from 'react-router-dom'


const PropertyTypeList = () => {
  return (
      <div className="grid-container">
        <div class="grid-x">
          <div class="cell"><h4>Pick Your Property Type</h4></div>
        </div>
        <div className='grid-x align-center grid-margin-x small-up-2'>
          <div className='cell medium-auto'>
            <Link to="/Signup"><PropertyTypeItem src={resortImg} type="Resorts"/></Link>
          </div>
          <div className='cell medium-auto'>
            <PropertyTypeItem src={hotelImg} type="Hotels"/>
          </div>
          <div className='cell medium-auto'>
            <PropertyTypeItem src={bnbImg} type="Bed and Breakfasts"/>
          </div>
          <div className='cell medium-auto'>
            <PropertyTypeItem src={motelImg} type="Motels"/>
          </div>
        </div>
      </div>
  )
}

export default PropertyTypeList