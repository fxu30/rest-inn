import React from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';

const Button = ({onClick}) => {
  return (
    <a onClick={onClick}>
        <DehazeIcon />
    </a>
  )
}

export default Button