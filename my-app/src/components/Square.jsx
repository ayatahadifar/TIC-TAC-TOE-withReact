import React from 'react'
import '../style/square.css' 
import Cross from './Cross' 
import Circle from './Circle';


const Square = ({position,value,takeTurn}) => {

  const handleClick = () => {
    if(value === 'EMPTY') takeTurn(position)
  }
  return (
    <div className='square' onClick={handleClick}>
      {value === 'CIRCLE' && <Circle /> }  
      {value === 'CROSS' && <Cross /> }   
    </div>
  )
}

export default Square
