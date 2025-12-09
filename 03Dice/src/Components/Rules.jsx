import React from 'react'
import styled from 'styled-components'

function Rules() {
  return (
    <RulesContainer>
        <h2>How to play Game</h2>
        <div className="text">
        <p>Select any Number</p>
        <p>Click on Dice</p>
        <p>After click on dice ,if Selected number equal to the dice number you will get same point at dice {""}</p>
        <p>if you get wrong guess then 1 point will be deducted</p>
      </div>
    </RulesContainer>
  )
}


export default Rules

const RulesContainer=styled.div`
margin:0 auto;
margin-top: 40px;
border-radius: 10px;
    background-color: #fbf1f1;
    padding: 20px;
    max-width: 800px;

    h2{
        font-size: 34px;
      
    }
    .text{
        margin-top: 34px;
        font-weight: 300px;

    }
`;