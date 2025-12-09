
import styled from "styled-components";

export const Button=styled.button`  //now we have to EXport use this component as button
background-color: black;
width: 220px;
height: 44px;
font-size: 20;
color: white;
padding: 10px 18px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
border: none;
border: 1px solid transparent;
cursor: pointer;
transition: 0.4s background-color ease-in;

&:hover{
    background-color: white;
    border: 1px solid black;
    color: #0a0a0a;
    font-weight: 800;
    transition: 0.4s background-color ease-in;
}

`;


export const OutlineButton =styled(Button)`         //it is cpoied upper component (it is calles varient) we can overwrite any oproperty
   background-color: white;
    border: 1px solid black;
    color: black;

&:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
    font-weight: 800;
    transition: 0.4s background-color ease-in;
}

`;