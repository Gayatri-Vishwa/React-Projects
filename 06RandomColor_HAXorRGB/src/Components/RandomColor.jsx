import React from 'react'
import { useState } from 'react'

function RandomColor() {
  
  const [typeOfColor, setTypeOfColor] = useState('hex') 
  const [color, setColor] = useState('#090909')


 const setHexColor=()=>{
    let hex = '#'
    const hexChars = '0123456789ABCDEF'
    if(typeOfColor==='hex'){
      for(let i=0; i<6; i++){
        hex += hexChars[Math.floor(Math.random()*16)]
      }  
      setColor(hex)
      console.log(hex)
    }   
        
  }
const setRgbColor = () => {
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    setColor(`rgb(${r},${g},${b})`)
    console.log(`rgb(${r},${g},${b})`)
  }
  return (
    <div style={{backgroundColor: color, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
        <button onClick={()=>setTypeOfColor('hex')}>Create HEX Color</button>
        <button onClick={()=>setTypeOfColor('rgb')}>Create RGB Color</button>
        <button onClick={typeOfColor==='hex'?setHexColor :setRgbColor}>Random color Generator</button>
        <h1>{color}</h1>
      
    </div>
  )
}

export default RandomColor
