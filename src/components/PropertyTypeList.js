import React, {useState,useEffect} from 'react'
import PropertyTypeItem from './PropertyTypeItem'
import { Link } from 'react-router-dom'


const PropertyTypeList = () => {

  const [propertyType, setPropertyType] = useState([{
    id:0,
    title:"",
    image: null
  }])
  
  useEffect(() => {
    fetch("http://localhost:3004/propertyType").then(response => response.json())
      .then(json => {

        setPropertyType(json);
      })
      .catch(err => {
        console.log(`Error ${err}`);
      })

  }, [])

  return (
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell"><h4>Pick Your Property Type</h4></div>
        </div>
        <div className='grid-x align-center grid-margin-x small-up-2'>
          {propertyType.map(type =>
            (<div className='cell medium-auto'>
            <Link to="/Signup"><PropertyTypeItem src={type.image} type={type.title}/></Link>
          </div>))}
        </div>
      </div>
  )
}

export default PropertyTypeList