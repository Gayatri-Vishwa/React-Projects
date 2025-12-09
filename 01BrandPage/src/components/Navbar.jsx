import React from 'react'

function Navbar() {
  return (
 
         <nav className="max-w-[100vw] h-[72px] flex justify-between items-center p-5  m-0-auto" >
      <div className="logo"> 
        <img src="logoo.svg" alt="logo" />
      </div>
    <ul className="flex justify-evenly space-x-16.5 ">
      <li href="#">Menu</li>
      <li href="#">Location</li>
      <li href="#">About</li>
      <li href="#">contact</li>
     </ul>
    <button className="text-white bg-gray-100 shadow-2xs w-18 h-9 bg-red-600">Login</button>
  </nav>
      
 
  )
}

export default Navbar
