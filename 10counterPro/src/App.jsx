import React, { useState } from 'react'
import './App.css'



function App() {
let [counter,setcounter]=useState(0)
// let counter=2;

  return (
    <>


<div class="bg-slate-900 h-dvh w-dvw flex flex-col items-center justify-center mx-0 fixed top-[0px] left-[0px]">
  <div className='h-100 w-200 border-2 border-white bg-gray-800 space-y-19 rounded-lg '>


     <h2 class="text-4xl text-white font-bold mt-10">Hey Counter {counter}</h2> 
      <h1 className='text-3xl text-white font-bold mt-10:'>Hello {counter}</h1>  
      <div className='flex  justify-center items-center space-x-20 text-red-500'>
  <button  className='  text-white border-2 border-white rounded-lg p-3  hover:bg-white hover:text-black  ' onClick={(()=>{
        (counter>0)?   setcounter(counter-1): setcounter(counter)
    })}>Decreament button</button>

       <button className='text-white border-2 border-white rounded-lg p-3  hover:bg-white hover:text-black ' onClick={(()=>{
       (counter<20)?   setcounter(counter+1): setcounter(counter)
    })}>Increament button</button>
      </div>

    
  </div>
       </div>
    </>
  )
}

export default App
