import React, {useState} from 'react'
import icon from '../assets/img/icon.png'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ButtonWithDropDown from './ButtonWithDropDown';
import { Link, useNavigate } from 'react-router-dom';



const Header = () => {

  const [searchContent, setSearchContent] = useState("")
  const navigate = useNavigate;

  return (
    
    <div className="top-bar">
      <div class="grid-container"><Link to="/"><img className='top-bar-icon' src={icon} alt="RestInn"/></Link></div>
      <div className="top-bar-left">
      <ul className="menu">
          <li><input type="search" placeholder="Search" value={searchContent} onChange={event => setSearchContent(event.target.value)}/></li>
          {(searchContent !== '')? <li><Link to={`/listing/search?title=${searchContent}`}><button type="button" className="button"><SearchIcon fontSize='small' /></button></Link></li>
          :<button type="button" className="button"><SearchIcon fontSize='small' /></button>}
        </ul>
      </div>
      <div className="top-bar-right">
      <ul className="dropdown menu" data-dropdown-menu>
          <li><a href="#"><Link to="/Listing">Vacation Properties</Link></a></li>
          <li><a href="#"><LanguageIcon /></a></li>
          
          <li><a href="#"><AccountCircleIcon /></a></li>
          <li className="has-submenu">
            <ButtonWithDropDown />  
          </li>
          
        </ul>
        </div>
    </div>

  )
}

export default Header