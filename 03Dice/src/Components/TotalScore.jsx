import React from 'react'
import styled from 'styled-components'

function TotalScore({score=0}) {
  return (
    <ScoreContainer>
       <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer=styled.div`
width: 200px;
text-align: center;
   h1{
     font-size: 100px;
      font-weight: 500px;
   }
   p{
    font-size: 24px;
   
   }

`;