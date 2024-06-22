import React, { useState } from 'react'
import Card from '../Card/Card.jsx'

function Grid({numberofcards}) {

    const [board , setBoard]=useState(Array(numberofcards).fill(""));
  return (
    <>
<div>

    {board.map((el,idx)=><Card key={idx} />)}


</div>

    
    
    </>


  )
}

export default Grid