import React , { useState,useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useParams } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import RuleIcon from '@mui/icons-material/Rule';

const PropertyDescriptionPage = () => {
  const [property, setProperty] = useState([{
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
  const [amenities, setAmenities] = useState([{title:""}])
  const [rules, setRules] = useState([{title:""}])

  const { id } = useParams()
  useEffect(() => {



    const URL = `https://rest-inn-json-server.herokuapp.com/properties/${id}`
    //MAKE AN AJAX request

    fetch(URL) // GET
      .then(response => response.json())

      .then(json => {

        setProperty(json)
        setAmenities(json.amenities)
        setRules(json.rules)
      })
      .catch(err => console.log(err))

  }, [])


  return (
    <>
    <Header />
    <div className="row columns">
      <nav aria-label="You are here:" role="navigation">
        <ul className="breadcrumbs">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/listing'>Features</Link></li>
          <li>Property {id}</li>
        </ul>
      </nav>
    </div>

    <div className='grid-container fluid'>
    <div className="grid-x align-center grid-margin-x">
      <div className="cell medium-6">
      <div className='card'>
        <picture style={{ backgroundImage: `url(${property.image})`}}></picture>
      </div>
      </div>

      <div className="cell medium-6">
        <h3>{property.title}</h3>
        <p>{property.description}</p>

        <hr />
        <div><LocationOnIcon />{property.street}, {property.city}, {property.province} {property.country}</div>

        <hr />
        
        <h4>{property.price} / night</h4>

        <hr />

        <q>Its really a good place to stay. My family really enjoyed outselves...</q>

        <br />

        <a href='#'>View more reviews</a>
        <div className='cell'></div>
        <a href="#" className="button large expanded">Book Now</a>

        <div className="small secondary expanded button-group">
            <a className="button">Facebook</a>
            <a className="button">Twitter</a>
            <a className="button">Google</a>
          </div>
        </div>
    </div>
    </div>

    
      
      <ul className="tabs" data-tabs id="example-tabs">
        <li className="tabs-title is-active"><a href="#panel1" aria-selected="true">Detail</a></li>
      </ul>

      
      <h4>Amenities</h4>
      
      <div className='grid-x small-up-2'>
        {amenities.map(amenity => (
          <div className='cell medium-auto'>
            <ThumbUpIcon color='success'/>{amenity.title}
          </div>
        ))}
      </div>

      <h4>Rules</h4>
      <div className='grid-x small-up-2'>
        <div className='cell medium-6'>
          <div className='grid-y'>
            <div className='cell'>
              {rules.map(rule =>(
                <div className='cell'>
                  <RuleIcon />{rule.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </>
  )
}
/*
<PropertyDesc id={property.id} type={property.type} image={property.image} title={property.title} description={property.description} 
      price={property.price} streetAddress={property.location.streetAddress} city={property.location.city} province={property.location.province}/>*/
export default PropertyDescriptionPage