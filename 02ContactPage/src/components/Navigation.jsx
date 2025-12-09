import React from 'react'

function Navigation() {
  return (
    <div className="flex h-[72px]  justify-between items-center px-20 " >
      <img  className='h-full' src="../docoding.jpg" alt="" />
      <ul className='flex w-[20%] justify-between text-xl font-bold'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navigation
