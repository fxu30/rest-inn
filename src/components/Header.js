import React from 'react'
import icon from '../assets/img/icon.png'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ButtonWithDropDown from './ButtonWithDropDown';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    
    <div className="top-bar">
      <div class="grid-container"><Link to="/"><img className='top-bar-icon' src={icon} alt="RestInn"/></Link></div>
      <div className="top-bar-left">
      <ul className="menu">
          <li><input type="search" placeholder="Search" /></li>
          <li><button type="button" className="button"><SearchIcon fontSize='small' /></button></li>
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