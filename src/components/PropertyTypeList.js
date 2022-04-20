import PropertyTypeItem from './PropertyTypeItem'
import { Link} from 'react-router-dom'


const PropertyTypeList = () => {

  return (
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell"><h4>Pick Your Property Type</h4></div>
        </div>
        <div className='grid-x align-center grid-margin-x small-up-2'>
          {/* No more propertyType table inside database*/}
          {/*propertyType.map(type =>
            (<div className='cell medium-auto'>
            <Link to={`/propertytype/${type.title}`}><PropertyTypeItem src={type.image} type={type.title}/></Link>
          </div>))*/}
          <div className='cell medium-auto'>
            <Link to={`/listing/search?type=resort`}><PropertyTypeItem src="/resort.jpg" type="Resorts"/></Link>
          </div>
          <div className='cell medium-auto'>
            <Link to={`/listing/search?type=hotel`}><PropertyTypeItem src="/hotel.jpg" type="Hotels"/></Link>
          </div>
          <div className='cell medium-auto'>
            <Link to={`/listing/search/?type=bed and breakfast`}><PropertyTypeItem src="/bnb.jpg" type="Bed and Breakfasts"/></Link>
          </div>
          <div className='cell medium-auto'>
            <Link to={`/listing/search/?type=motel`}><PropertyTypeItem src="/motel.jpg" type="Motels"/></Link>
          </div>
        </div>
      </div>
  )
}

export default PropertyTypeList