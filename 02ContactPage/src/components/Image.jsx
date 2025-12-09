import React from 'react'

function Image({name,email,text}) {
  return (
  <div className=" w-[50%] h-[500px]   ">
            <img className=' bg-cover w-[600px] h-[500px]' src="https://img.freepik.com/free-vector/service-24-7-concept-illustration_114360-7380.jpg?semt=ais_hybrid&w=740" alt="" />
       
        <div className='text-2xl'> Name:  {name}  Email:  {email}  Text: {text} </div>
        </div> 
     
       
  )
}

export default Image
