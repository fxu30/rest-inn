import React from 'react'
import BestSellerItem from './BestSellerItem'
import resortImg from '../assets/img/resort.jpg'
import hotelImg from '../assets/img/hotel.jpg'
import bnbImg from '../assets/img/bnb.jpg'
import motelImg from '../assets/img/motel.jpg'

const BestSellerList = () => {
  return (
    <div className="grid-container">
        <div class="grid-x">
          <div class="cell"><h4>Best Seller</h4></div>
        </div>
        <div className='grid-x align-center grid-margin-x small-up-2'>
          <div className='cell medium-auto'>
            <BestSellerItem src={resortImg} city="niagara" province="ontario" price="160"/>
          </div>
          <div className='cell medium-auto'>
            <BestSellerItem src={hotelImg} city="niagara" province="ontario" price="160"/>
          </div>
          <div className='cell medium-auto'>
            <BestSellerItem src={bnbImg} city="niagara" province="ontario" price="160"/>
          </div>
          <div className='cell medium-auto'>
            <BestSellerItem src={motelImg} city="niagara" province="ontario" price="160"/>
          </div>
        </div>
      </div>
  )
}

export default BestSellerList