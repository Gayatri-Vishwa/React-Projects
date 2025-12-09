import React from 'react'
import styled from 'styled-components'

function RoleDice({currentDice,roleDice}) {



  return (
    <Dicecontainer className='dice'>
        <div 
        onClick={roleDice}>
       <img src={`src/Images/${currentDice}dic.png`} alt="" />
        </div>

        <div >
           <p>Click the Dice to role</p>
        </div>  
      
    </Dicecontainer>
  )
}

export default RoleDice

const Dicecontainer=styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;
margin: 20px;
width: auto;


p{
    font-size: 24px;
    font-weight: 700;
}
img{
    width: 280px;
    height: 280px;
    cursor: pointer;
}

`;