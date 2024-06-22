import React from 'react'
import './App.css'
import Card from  './components/Card/Card.jsx';
import Grid from  './components/Grid/Grid.jsx';

function App() {
  return (
  <>
  <h1 className='text-4xl italic hover:not-italic font-semibold tracking-tight hover:tracking-wide text-center duration-1000 mt-6 text-yellow-300	'>Tic-Tac-Toe</h1>


  <Card player='O'/>

  <Grid numberofcards={9}/>





  </>
    
  )

}

export default App
