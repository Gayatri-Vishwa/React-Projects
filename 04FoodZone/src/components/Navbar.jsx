import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AppContext } from '../context/AppContext';
import foodData from '../../data';

function Navbar() {
  const { search, setSearch, setFilteredData } = useContext(AppContext);
  const navigate = useNavigate();



  const inputHandler = (e) => {
  const value = e.target.value;
  setSearch(value);

  // Only navigate to home if we are not already on home page
  if (window.location.pathname !== '/') {
    navigate('/');
  }

  const filteredData = foodData.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );
  setFilteredData(filteredData);
};


  return (
    <nav className='w-full bg-[#323334] text-white p-5 flex flex-col justify-between 
                    h-auto md:h-[269px]'>
      {/* Logo + Search */}
      <div className='flex flex-col mt-14 sm:flex-row items-center justify-around gap-4'>
        <img src="./logo.svg" alt="Logo" className='h-12 w-auto' />
        <input
          type="text"
          value={search}
          onChange={inputHandler}
          placeholder='Search food'
          className='text-white border-2 rounded-[8px] border-red-700 p-2 placeholder-white outline-none w-full sm:w-[200px]'
        />
      </div>

      {/* Navigation Links */}
      <div className='flex flex-col sm:flex-row justify-center items-start sm:items-center gap-2 sm:gap-5 pt-5'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `bg-red-700 w-full sm:w-12 p-1.5 text-xs text-center rounded-md hover:bg-red-800 ${
              isActive ? 'border border-white' : ''
            }`
          }
        >
          All
        </NavLink>
        <NavLink
          to='/breakfast'
          className={({ isActive }) =>
            `bg-red-700 w-full sm:w-19 p-1.5 text-xs text-center rounded-md hover:bg-red-800 ${
              isActive ? 'border border-white' : ''
            }`
          }
        >
          Breakfast
        </NavLink>
        <NavLink
          to='/lunch'
          className={({ isActive }) =>
            `bg-red-700 w-full sm:w-15 p-1.5 text-xs text-center rounded-md hover:bg-red-800 ${
              isActive ? 'border border-white' : ''
            }`
          }
        >
          Lunch
        </NavLink>
        <NavLink
          to='/dinner'
          className={({ isActive }) =>
            `bg-red-700 w-full sm:w-16 p-1.5 text-xs text-center rounded-md hover:bg-red-800 ${
              isActive ? 'border border-white' : ''
            }`
          }
        >
          Dinner
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
