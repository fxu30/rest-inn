import React from 'react'

const BestSellerItem = ({src, city,province,price}) => {
  return (
    <div className='card'>
      <picture style={{ backgroundImage: `url(${src})`}}> 
      </picture>
      
      <div className='card-section'>
        <div className='grid-x'>
          <div className='cell aligh-left'>
          <h5>{city},{province}</h5>
          </div>
          <div className='cell aligh-right'>
            <p>$ {price} / night</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestSellerItem