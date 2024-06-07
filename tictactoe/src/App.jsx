import React from 'react'
import Square from './components/Square'
import './App.css'
function App() {
  return (
  <>
  <h1 className='text-4xl italic hover:not-italic font-semibold tracking-tight hover:tracking-wide text-center duration-1000 mt-6 text-yellow-300	'>Tic-Tac-Toe</h1>

  <Square />


  </>
    
  )

}

export default App
