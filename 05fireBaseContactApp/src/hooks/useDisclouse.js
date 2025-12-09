import React from 'react'
import { useState } from 'react'
import { GiHook } from 'react-icons/gi'

function useDisclouse() {
 const [isOpen,setOpen]=useState(false)
 const onOpen=()=>{
  setOpen(true)
 }
 const onClose=()=>{
  setOpen(false)
 }


  return {isOpen,onClose,onOpen};
}

export default useDisclouse

//custom hook that return 

// to use this GiHook
// const  {isOpen,onClose,onOpen}=useDisclouse()