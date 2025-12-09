import React from 'react'

function Card({img,text,name,price}) {
  return (
    // <div className=" flex backdrop-blur-md bg-white/10 rounded-xl shadow-lg p-4">

     <div className='flex border-2 border-white h-[170px] w-[340px] rounded-2xl   backdrop-blur-md bg-white/3 rounded-xl shadow-lg p-2'> 
     <div className='w-[50%] flex justify-center items-center'>
    <img src={img} alt="" srcset="" className='h-full w-full'/>
     </div>


     <div className='text-white ml-2 w-[50%]  mt-3 flex flex-col'>
    <p className='text-md w-full leading-tight font-semibold'>{name}</p>
     <p className='mt-1 text-xs '> {text}</p>
    
        <div className='text-white flex items-end justify-end'>
       <p className='text-sm fixed bottom-0 right-0 p-1.5 flex justify-center bg-red-600 rounded-[8px] m-1.5 w-17 '> ${price.toFixed(2)}</p>
     </div>

  
      
     </div>
     

   
    </div>
  )
}

export default Card
