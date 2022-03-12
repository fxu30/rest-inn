import React from 'react'
import { Link } from 'react-router-dom'


const DropDownCard = ({data}) => {
  return (
        <ul className="submenu menu vertical" data-submenu>
            {data.map((item, i) => (
                <li key={i}><Link to={item.path}>{item.title}</Link></li>
            ))}
        </ul>
  )
}

export default DropDownCard