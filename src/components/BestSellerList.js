import React, {useState, useEffect} from 'react'
import BestSellerItem from './BestSellerItem'
import { Link } from 'react-router-dom'

const BestSellerList = () => {
  const [properties, setProperties] = useState([{
    id:0,
    type:"",
    featured:false,
    image:"",
    title:"",
    description:"",
    price:"",
    street:"",
    city:"",
    province:"",
    country:"",
    amenities:[],
    rules:[]
  }])

  useEffect(()=>{
    const URL = `https://rest-inn-json-server.herokuapp.com/properties`

    fetch(URL).then(response => response.json())
      .then(json => {

        setProperties(json);
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
          {properties.map(property => (property.featured) ? 
            (<div className='cell medium-auto'>
              <Link to={`/listing/${property.id}`}><BestSellerItem src={property.image} city={property.city} province={property.province} price={property.price}/></Link>
            </div>
          ):(<div></div>) )}
        </div>
      </div>
  )
}

export default BestSellerList