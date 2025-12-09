import React from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button,OutlineButton } from '../Styled/Buttons'
import Rules from './Rules'
import { ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function GamePlay() {
const [selectedNumber,setSelectedNumber]=useState()
const [currentDice,setCurrentDice]=useState(1) 
const [score,setScore]=useState(0)
const [error,setError]=useState("")         //t show error if not selected any number
const [visibleRules,setVisibleRules]=useState(false)

const handler=()=>{
  setVisibleRules((prev)=>!prev)

  
}

    const generateRandomNo=(min,max)=>{
        return Math.floor(Math.random()* (max-min) +min) ;         //math.floor will remove decimal numbr
       
    }
    const roleDice=()=>{
        const randomNumber=generateRandomNo(1,7)
        setCurrentDice(randomNumber);
      
          if(!selectedNumber){
          setError("You have not selected any number")
          return;
          }                                             // if not selected any number
         if(selectedNumber===randomNumber){
          setScore(score+randomNumber)
          // toast.success("Your score increased")
           toast.success(` Correct! Score increased by ${selectedNumber}`);
         }
        else{
        setScore(score-1)
          // toast.error("Your score decreased")
          toast.error(`Wrong! Score decreased by 1`);
         }
      setSelectedNumber(undefined) //ater one change selected number will be unselected

    }


  return (
    <MainContainer>
     <ToastContainer position="top-center" autoClose={3000} />
<div className='div1'>
       <TotalScore score={score}/>
     <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber}     setSelectedNumber={setSelectedNumber}   /> 
</div>

  <div className='div2'>
     <RoleDice  currentDice={currentDice} roleDice={roleDice}/>
  </div>

  <div className="btns">
   <OutlineButton onClick={()=>setScore(0)}>Reset Score</OutlineButton>
    <Button 
    onClick={ handler} >
      {visibleRules? "Hide":"Show"}Rules</Button>
  </div>

  {visibleRules && <Rules/>} 
    </MainContainer>
  )
}

export default GamePlay

const MainContainer=styled.main`
.div1{
    display: flex;
justify-content: space-around;
padding-top: 70px
}
.btns{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  font-size: 24px;

}


`;