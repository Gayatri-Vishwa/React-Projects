import React from 'react'
import logos_firebase from "../assets/logos_firebase.svg"


function Navbar() {
  return (
    <div className='h-[60px]  bg-white my-4 rounded-lg  flex justify-center items-center gap-7 text-xl font-medium'>
 <div className='flex'>
  <img src={logos_firebase} alt="" />
  <h1>Firebase contact app</h1>

 </div>
    </div>
  )
}

export default Navbar
