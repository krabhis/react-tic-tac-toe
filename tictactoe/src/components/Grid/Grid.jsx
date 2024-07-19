import React, { useState } from 'react'
import Card from '../Card/Card.jsx'
import isWinner from '../../helper/checkwinner.js';

function Grid({numberofcards}) {

    const [board , setBoard]=useState(Array(numberofcards).fill(""));
    const [turn , setTurn]=useState(true);//true=>0 , false=>X
    const [winner , setWinner]=useState(null);

    function play(index){
      if(turn ==true){
        board[index]="O";
      }else{
        board[index]="X";
      }
      const win= isWinner(board , turn ? "O" : "X");
      if(win){
        setWinner(win);
      }
      setBoard([...board]);
      setTurn(!turn);
    }



    function reset(){

      setTurn(true);
      setWinner(null);
      setBoard(Array(numberofcards).fill(""));

    }


  return (
    <>

      <div>
       <h1 className='text-neutral-950 text-3xl font-bold	ml-14 mt-4'>Current Turn : {(turn)? 'O':'X'}</h1> 

           <div className=" flex mt-8  w-96 flex-wrap justify-center	" >
              {board.map((el,idx)=><Card key={idx}  onPlay={play} player={el} index={idx}/>)}
            </div>
            {
              winner && ( 
                <>
                       <h1 className='font-semibold ml-28 text-2xl text-yellow-500 mt-4 mb-3 '>Winner is {winner}</h1>
                       <button className='rounded-full h-7 w-16 bg-slate-200  font-bold ml-32' onClick={reset}> Reset </button> 
                </>

               )
            }


      </div>
     


    
    </>


  )
}

export default Grid