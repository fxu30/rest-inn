import React , {useState, useEffect} from 'react'
import PropertyListItem from './PropertyListItem';
import { Link, useParams} from 'react-router-dom'
import axios from 'axios';

const PropertyList = () => {
  const [properties, setProperties] = useState([])

  useEffect(()=>{
    const URL = `http://localhost:8081/Properties`
    
    axios.get(URL).then(response => response.data)
      .then(json => {

        setProperties(json);
        console.log(json);
      })
      .catch(err => {
        console.log(`Error ${err}`);
      })
  },[])

  const { type } = useParams()

  if (type){
    return (
      <div className='grid-x'>
        {properties.filter( property => property.type === type).map(property => (
          <div className='cell'>
          <Link to={`/listing/${property.id}`}>
          <PropertyListItem 
          img={property.image} 
          location={`${property.city},${property.province} in ${property.country}`}
          title={property.title}
          description={property.description}
          price={property.price} 
          />
          </Link>
        </div>
        ))}
      </div>
    )

  } else{
    return (
      <div className='grid-x'>
        {properties.map(property => (
          <div className='cell'>
            <Link to={`/listing/${property.id}`}>
            <PropertyListItem 
            img={property.image} 
            location={`${property.location.city}, ${property.location.province} in ${property.location.country}`}
            title={property.title}
            description={property.description}
            price={`$ ${property.price} / Night`}
            />
            </Link>
          </div>))}
      </div>
    )
  }
}

export default PropertyList