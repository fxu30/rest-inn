import React from 'react'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import { Link } from 'react-router-dom';

const PropertyListItem = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className='grid-x propertyItem'>
        <div className='cell large-4 propertyItem__img'>
        <div className='card'>
          <picture style={{ backgroundImage: `url(${img})` }}>
          </picture>
        </div>
        </div>

        <div className='cell large-6'>
        <div className='propertyItem__info'>
                <div className="propertyItem__infoTop">
                    <p>{location}</p>
                    <Link to="/"><h3>{title}</h3></Link>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="propertyItem__infoBottom">
                    <div className="propertyItem__star">
                        <StarIcon className="propertyItem__stars" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className='cell large-2'>
          <FavoriteBorderIcon className="propertyItem__heart" />
          <div className='propertyItem__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
        </div>



            
    </div>
  )
}

export default PropertyListItem