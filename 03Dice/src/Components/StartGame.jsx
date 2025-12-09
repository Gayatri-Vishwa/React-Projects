import React from 'react'
import Styled, { styled } from 'styled-components'
import {Button} from '../Styled/Buttons'


function StartGame({toggle}) {
  return (
    <Container >

     {/* <div className='image'>  <img src="https://www.pinclipart.com/picdir/big/25-250582_kisspng-dice-scalable-vector-graphics-clip-art-5a8730cb7c6d58.pngg" alt="dices" /> </div> */}

     <div className='image'>  <img src="https://m.media-amazon.com/images/I/61wDSwuhkqL._UF1000,1000_QL80_.jpg" alt="dices" /> </div>
        <div className='content'> 
            <h1>DICE GAME</h1>
            <Button onClick={toggle} >Play Game</Button>
           
        </div>
      
    </Container>
  )
}

export default StartGame


const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 10px;

  .content {
    font-size: 60px;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
  }

  .image {
    width: 50%;
    height: auto;
    display: flex;
    justify-content: center;
  }

  img {
    width: 100%;
    max-width: 520px;
    height: auto;
    object-fit: contain;
  }

  /* ----------------------------------
        RESPONSIVE
  ---------------------------------- */

  /* 900px - tablet */
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    height: auto;
    text-align: center;
    gap: 30px;

    .content {
      font-size: 48px;
      align-items: center;
    }

    .image {
      width: 80%;
    }
  }

  /* 600px - mobile */
  @media (max-width: 600px) {
    .content {
      font-size: 36px;
      gap: 16px;
    }

    img {
      max-width: 320px;
    }
  }

  /* 400px - small mobile */
  @media (max-width: 400px) {
    .content {
      font-size: 28px;
    }

    img {
      max-width: 260px;
    }
  }
`;



// const Container =styled.div`
// max-width:1180px ;
// height: 100vh;
// display: flex;
// align-items: center;
// margin: 0 auto;              //center k liye

// .content{
//     font-size: 60px;
//     white-space: nowrap;
//     display: flex;
//     flex-direction: column;
//   align-items: end;
// }
// .image{
//     width: 50%;
//     height: 400px;
 
// }
// img{
//     width: 522px;
//     height: 400px;
//     background-size: contain;
// }

// `;

