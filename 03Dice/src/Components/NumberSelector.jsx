import React from 'react'
import styled from 'styled-components'

function NumberSelector({selectedNumber,setSelectedNumber,error,setError}) {
const arrNumber=[1,2,3,4,5,6]

const numberSelectorHandler=(value)=>{
  setSelectedNumber(value);
 setError("")
}

// onClick={()=>setSelectedNumber(value)}   when we have to pass arguments in function then in onclick we pass anonymous function not functiona name only
  return (
    <NumberSelect>
      <p className='error'>{error}</p>
       <div className='flex'>
         {   arrNumber.map((value,i)=>(
                    <Box
                    $isselected={value===selectedNumber }      //props for styled bg change  //we use $ symbol here and  in styled also because it  return boolean value i thik it is not boolean attribute
                     onClick={()=>numberSelectorHandler(value)} 
                    key={i}>{value}</Box>
        ))
        }
       </div>
       <p>select Number</p>
      
    </NumberSelect>
  )
}

export default NumberSelector
const NumberSelect=styled.div`
display: flex;
flex-direction: column;
align-items: end;
    .flex{
        display: flex ;
        gap: 24px;
    }
    p{
    font-size: 24px;
    font-weight: 700px;
    }
    .error{
      color: red;
      font-weight: 500;

    }
`;

const Box =styled.div`
width: 72px;
height: 72px;
border: 1px solid black;
display: grid;
place-items:center ;
font-size: 24px;
font-weight: 700;
/* background-color: ${(props)=>props.isselected?"black":"white"};         //props use for background change of box */
color: ${({$isselected})=>!$isselected?"black":"white"};
background-color: ${({$isselected})=>$isselected?"black":"white"};

`;