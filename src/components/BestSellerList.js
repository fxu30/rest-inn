import React, {useState, useEffect} from 'react'
import BestSellerItem from './BestSellerItem'
import { Link } from 'react-router-dom'
import axios from 'axios'

const BestSellerList = () => {
  const [properties, setProperties] = useState([])

  useEffect(()=>{
    const URL = `http://localhost:8081/Properties?featured=true`

    axios.get(URL).then(response => response.data)
      .then(json => {
        // randomly pick best seller properties
        const shuffled = [...json].sort(() => 0.5 - Math.random());
        // Max # of  best seller displays on home page is 6
        if (json.length >= 6){
          shuffled.slice(0, 6);
        }else{
          shuffled.slice(0, json.length);
        }
        setProperties(shuffled);
      })
      .catch(err => {
        console.log(`Error ${err}`);
      })
  },[])

  return (
    <div className="grid-container">
        <div className="grid-x">
          <div className="cell"><h4>Best Seller</h4></div>
        </div>
        <div className='grid-x align-center grid-margin-x small-up-2'>
          {properties.map(property =>
            (<div className='cell medium-auto'>
              <Link to={`/listing/${property.id}`}><BestSellerItem src={property.image} city={property.location.city} province={property.location.province} price={property.price}/></Link>
            </div>
          ))}
        </div>
      </div>
  )
}

export default BestSellerList