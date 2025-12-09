import React from 'react'
import "../App.css"

function Hero() {
  return (
    
   
      <div className= "hero max-w-[100vw] flex overflow-hidden pl-40">
        <div className="max-w-[50%]  flex flex-col p-12  space-y-2.5 md:w-[50%]   ">
          <h1 className="  text-2xl font-bold md:text-8xl max-w-[500px] ">YOUR FEET DESERVE THE BEST</h1>
          <p className="md:text-[14px] max-w-[400px] font-medium ">Your feet deserve the best Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto maxime, consectetur reiciendis tenetur placeat consequuntur perspiciatis ipsum quia quod.</p>
         
          <div className="flext justify-evenly space-x-5 m-7">
            <button className="bg-red-600  h-11 w-39 text-white font-bold">Shop now</button>
            <button className="border-2 border-black h-11 w-39">Category</button>
          </div>

          <p className='text-[15px]'>Also Available on</p>
          <div className='flex space-x-2 md:flex'>
            <img className='w-[30px] h-[30px]' src="shoes.svg" alt="" />
            <img  className='w-[30px] h-[30px]' src="shoes.svg" alt="" />
          </div>

        </div>


        <div className=" w-[50%]  h-[80%] mt-[20px] pt-[20]">
          <img className="" src="/shoes.svg" alt="" />
        
        </div>

    </div>
   
  )
}

export default Hero
