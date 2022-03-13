import React from 'react'

const PropertyTypeItem = ({src, type}) => {
  return (
    <div className='card'>
      <picture style={{ backgroundImage: `url(${src})`}}> 
      </picture>
      
      <div className='card-section'>
        <h4>{type}</h4>
      </div>
    </div>
  )
}

export default PropertyTypeItem