import React from 'react'
import styled from 'styled-components';
import { BASE_URL } from '../App';
import { Button } from '../App';
import {Container} from '../App';

function SearchResults({data}) {    // now data as foods 
  return (
    <div>
        <FoodCardsContainer>
          <Container>
    <FoodCards>
    {   
           data?.map((food)=>(        //we use it by destructuring {name,text,image} ,   tofixed(2)  for decimal values 2 
       <FoodCard key={food.name}>
          <div className="foodImage">
          <img src={BASE_URL+ food.image} alt="" />
          </div>
          <div className='foodInfo'>
             <div className="info">
               <h3>{food.name}</h3>
               <p>{food.text}</p>
             </div>
             <Button>${food.price.toFixed(2)} </Button>       
          </div>
       </FoodCard>
       ))
  }
    

    </FoodCards>
    </Container>
    </FoodCardsContainer>
     
    </div>
  )
}

export default SearchResults


const FoodCardsContainer=styled.section` 
min-height:calc(100vh - 230px);
background-image:url("/bg.png");
background-size: cover;
`;

const FoodCards=styled.div`
display: flex;
flex-wrap: wrap;
row-gap: 32px;
column-gap: 20px;
justify-content: center;
align-items: center;
padding-top: 80px;


`;
const FoodCard=styled.div`
width: 340px;
height: 167px;
  border: 0.66px solid;
  display: flex;
  padding: 8px;
  border-radius: 17px;

.foodInfo{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;

  h3{
    margin-top: 8px;
    font-size: 16px;
    font-weight: 500;
  }
  p{
    margin-top: 4px;
    font-size: 12px;
  }
  button{

  }

}

 //gradient sometimes not work with css  here also not working
  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );
`;







            // data?.map(({name,image,text})=>(            //we  destructuring  instead of data.map((food)=>{})  food.name
            //     <FoodCard key={name}>
            //        <div className="foodImage">
            //         <img src={BASE_URL+image} alt="" />
            //        </div>
            //        <div className='foodInfo'>
            //           <div className="info">
            //             <h3>{name}</h3>
            //             <p>{text}</p>
            //           </div>
            //  <Button>{price} </Button>
            // 
            //        </div>
            //     </FoodCard>
            //     ))














            