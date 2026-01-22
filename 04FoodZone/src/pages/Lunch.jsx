import React from 'react'
import Card from '../components/Card'
import foodData from '../../data'


function Lunch() {
const filteredData=foodData.filter((item)=> item.type=='lunch')

  return (
     <div   
    className="w-full h-[100vh]  bg-cover bg-center  flex justify-center"
  style={{ backgroundImage: `url(${'./bg.png'})` }}
  >


    <div className='w-[70%] mt-22 flex flex-wrap justify-center mx-auto px-auto gap-x-6   '>
    {/* <div className='w-[70%] mt-22 mx-auto px-auto gap-x-6   grid grid-cols-3 gap-0'> */}
      {filteredData.map((item,idx)=>(
        <div key={idx} className=' h-[180px] '>
          <Card img={item.image} name={item.name}  price={item.price}   text={item.text} />
        </div>
      
      ))}
    </div>
     
    </div>




  )
}

export default  Lunch 



