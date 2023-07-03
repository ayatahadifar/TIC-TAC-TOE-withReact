import React from 'react'
import '../style/result.css'

const Result = ({winner,reset}) => {
  return (
    <div className='result'>
      {winner === 'CIRCLE' && 'Circle won the game'}  
      {winner === 'CROSS' && 'Cross won the game'} 
      {winner === 'It is a Tie!' && 'It is a Tie!'}  
      <button onClick={reset} className='btn'>Reset</button>
      
    </div>
  )
}

export default Result
