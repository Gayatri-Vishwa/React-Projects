import React from 'react'
import Card from '../components/Card'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import foodData from '../../data'


function All() {
  const {  filteredData} = useContext(AppContext);
  return (
     <div   
    className="w-full min-h-screen bg-cover bg-center  flex justify-center"
  style={{ backgroundImage: `url(${'./bg.png'})` }}
  >


    <div className='w-[70%] mt-22 flex flex-wrap justify-center mx-auto px-auto gap-x-6   '>
    {/* <div className='w-[70%] mt-22 mx-auto px-auto gap-x-6   grid grid-cols-3 gap-0'> */}
      { filteredData ? filteredData.map((item,idx)=>(
        <div key={idx} className=' h-[180px] '>
          <Card img={item.image} name={item.name}  price={item.price}   text={item.text} />
        </div>
         ))
        :
      foodData.map((item,idx)=>(
        <div key={idx} className=' h-[180px] '>
          <Card img={item.image} name={item.name}  price={item.price}   text={item.text} />
        </div>
      
      ))}
    </div>
     
    </div>




  )
}

export default All



