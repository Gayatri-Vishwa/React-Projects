//not tailwind we will use styled component here  it can be used upperside or lowerside of function first intall it===npm install styled-components

import {  useState } from 'react';
import StartGame from './Components/StartGame';
import GamePlay from './Components/GamePlay';



function App() {
 const [isGamestarted,setIsGameStarted]=useState(false)

 const toggleGamePlay=(prev)=>{
  setIsGameStarted((prev)=> !prev)       //true ko false ,,false ko true
  console.log(prev)
 }


  return (
    <>
  {
    isGamestarted?  <GamePlay />:    <StartGame toggle={toggleGamePlay} /> 
  }
  

   
    </>
  )
}

export default App

