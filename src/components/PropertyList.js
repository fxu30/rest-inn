import React , {useState, useEffect} from 'react'
import PropertyListItem from './PropertyListItem';
import { Link, useSearchParams} from 'react-router-dom'
import axios from 'axios';
import configData from "../config.json"

const PropertyList = () => {
  const [properties, setProperties] = useState([])
  const [displayHeader, setDisplayHeader] = useState("")
  const [searchParams] = useSearchParams();

  useEffect(()=>{
    let URL;
    let type = searchParams.get("type")
    let title = searchParams.get("title")
    

    if (type !== null && title !== null){
      URL = `${configData.SERVER_URL}/Properties/search?type=${type}&title=${title}`
      setDisplayHeader(`All ${type} Properties with title '${title}' `)
    } else if (type !== null){
      URL = `${configData.SERVER_URL}/Properties/search?type=${type}&title=`
      setDisplayHeader(`All ${type} Properties`)
    } else if (title !== null){
      URL = `${configData.SERVER_URL}/Properties/search?type=&title=${title}`
      setDisplayHeader(`All Properties with title '${title}' `)
    } else {
      URL = `${configData.SERVER_URL}/Properties`
      setDisplayHeader(`All Properties`)
    }
    axios.get(URL).then(response => response.data)
      .then(json => {

        setProperties(json);
        console.log(json);
      })
      .catch(err => {
        console.log(`Error ${err}`);
      })
  },[])

  /*if (type){
    return (
      <div className='grid-x'>
        {properties.filter( property => property.type === type).map(property => (
          <div className='cell'>
          <Link to={`/listing/${property.id}`}>
          <PropertyListItem 
          img={property.image} 
          location={`${property.location.city},${property.location.province} in ${property.location.country}`}
          title={property.title}
          description={property.description}
          price={property.price} 
          />
          </Link>
        </div>
        ))}
      </div>
    )

  } else{*/
    return (
      <div className='grid-x'>
        <div className='cell'>
          <h2>{displayHeader}</h2>
        </div>
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
  //}
}

export default PropertyList