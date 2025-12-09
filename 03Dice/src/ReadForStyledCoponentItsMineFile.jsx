//not tailwind we will use styled component here  it can be used upperside or lowerside of function first intall it===npm install styled-components
//also we can use norml css prperty in this like .container{ } insite styled component

import Styled, { styled } from 'styled-components'



function App() {


  return (
    <>
    <Button>click me</Button>
   
    </>
  )
}

export default App


const Button=styled.button`  //now we have to use this component not button
background-color: black;
width: 100px;
color: white;
padding: 3px;
`;
