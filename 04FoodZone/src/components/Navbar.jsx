import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import foodData from '../../data'

function Navbar() {

const { search, setSearch  , setFilteredData} = useContext(AppContext);
  // const reference=useRef()
  const navigate=useNavigate()

const inputHandler=(e)=>{
 const value = e.target.value;
  setSearch(value);
navigate('/')
const filtereddata=foodData.filter((item)=>item.name.toLowerCase().includes(value.toLowerCase()))
setFilteredData(filtereddata)
}



  return (
    <nav className='max-w-[100vw] bg-[#323334]  h-[269px] flex  flex-col justify-between  p-5  m-0-auto text-white'>
       
    <div className='h-[30%]  flex   items-center justify-around mt-15'>
    <img src="./logo.svg" alt="" srcset="" />
    <input onChange={(e)=>inputHandler(e)} type="text" value={search} placeholder='Search food'  className='text-white border-2 w-[200px] rounded-[8px] border-red-700 p-2 placeholder-white outline-none'/>
    </div>

    <div className='botm h-[40%] font-semibold flex justify-center items-start  gap-[20px] leading-0 pt-5'>
     <NavLink to={'/'}  className={({ isActive }) => `bg-red-700 w-12 p-1.5 text-xs text-center rounded-md hover:bg-red-800  ${isActive ? "border-1 border-white" : ""}`}>All</NavLink>
    <NavLink to={'/breakfast'}  className={({ isActive }) => `bg-red-700 w-19 p-1.5 text-xs text-center rounded-md hover:bg-red-800  ${isActive ? "border-1 border-white" : ""}`}>BreakFast</NavLink>
    <NavLink to={'/lunch'} className={({ isActive }) => `bg-red-700 w-15 p-1.5 text-xs text-center rounded-md hover:bg-red-800  ${isActive ? "border-1 border-white" : ""}`}>Lunch</NavLink>
    <NavLink to={'/dinner'}  className={({ isActive }) => `bg-red-700 w-16 p-1.5 text-xs text-center rounded-md hover:bg-red-800  ${isActive ? "border-1 border-white" : ""}`}>Dinner</NavLink>

    </div>
 
    </nav>

    

  )
}

export default Navbar
