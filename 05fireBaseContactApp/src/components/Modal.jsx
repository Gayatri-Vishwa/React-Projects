import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

function Modal({onClose,isOpen,children}) {
  return createPortal (
    <>
      {isOpen && 
      <>
      <div className='min-h-[230px] max-w-[18%] bg-white p-4 z-50 relative m-auto'>
        <div className='flex justify-end'>
          <AiOutlineClose onClick={onClose}  className='text-2xl'/>
        </div>
        {children}
      </div> 
     x
      <div onClick={onClose} className='backdrop-blur h-screen w-screen absolute top-0 z-40 '/>    
      </>
      }
    </>,
  document.getElementById("Model-root"))
}

export default Modal

