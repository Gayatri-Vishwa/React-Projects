import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className='h-dvh w-dvw flex justify-center duration-200 ' style={{backgroundColor:color}}>

<h2 className='text-gray-100 font-bold text-4xl mt-20'>Background Color Changer</h2>

      <div className='fixed bottom-4 w-[90%] h-12 bg-white border-2 border-black pt-1.5 rounded-full'>
        <div className='flex justify-between items-center px-3'>
        <button onClick={()=>setColor("red")} 
          className='border-2 border-black w-20 py-1 h-full rounded-full px-1.5 flex justify-center text-white font-bold' style={{backgroundColor:"red"}}> Red</button>
       
           <div 
           onClick={()=>setColor("green")}  className='border-2 border-black w-20 py-1 h-full rounded-2xl px-1.5 flex justify-center  text-white font-bold' style={{backgroundColor:"green"}}>
        <button  >Green</button>
          </div>
          <div onClick={()=>{setColor("blue")}}
          className='border-2 border-black w-20 py-1 h-full rounded-2xl px-1.5 flex justify-center text-white font-bold' style={{backgroundColor:"blue"}}>
        <button >blue</button>
          </div>
          <div  onClick={()=>{setColor("yellow")}}
           className='border-2 border-black w-20 py-1 h-full rounded-2xl px-1.5 flex justify-center text-white font-bold' style={{backgroundColor:"yellow"}}>
        <button>yellow</button>
          </div>
          <div onClick={()=>{setColor("purple")}}
           className='border-2 border-black w-20 py-1 h-full rounded-full px-1.5 flex justify-center text-white font-bold' style={{backgroundColor:"purple"}}>
        <button >purple</button>
          </div>
           
        </div>
      </div>
    </div>
    </>
  )
}

export default App
