import React , {useState, useEffect} from 'react'
import PropertyListItem from './PropertyListItem';
import { Link, useParams, useLocation} from 'react-router-dom'

const PropertyList = () => {
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

  const { type } = useParams()

  if (type){
    return (
      <div className='grid-x'>
        {properties.filter( property => property.type == type).map(property => (
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
            location={`${property.city},${property.province} in ${property.country}`}
            title={property.title}
            description={property.description}
            price={property.price} 
            />
            </Link>
          </div>))}
        {/*<div className='cell'><PropertyListItem
                  img={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"}
                  location="Private room in center of London"
                  title="Stay at this spacious Edwardian House"
                  description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                  star={4.73}
                  price="£30 / night"
                  total="£117 total"
              /></div>
             <div className='cell'> <PropertyListItem
                  img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                  location="Private room in center of London"
                  title="Independant luxury studio apartment"
                  description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                  star={4.3}
                  price="£40 / night"
                  total="£157 total"
              /></div>*/}
      </div>
    )
  }
}

export default PropertyList