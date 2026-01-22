// import React from 'react'
// import { createPortal } from 'react-dom'
// import { AiOutlineClose } from 'react-icons/ai'

// function Modal({onClose,isOpen,children}) {
//   return createPortal (
//     <>
//       {isOpen && 
//       <>
//       <div className='min-h-[230px] max-w-[18%] bg-white p-4 z-50 relative m-auto'>
//         <div className='flex justify-end'>
//           <AiOutlineClose onClick={onClose}  className='text-2xl'/>
//         </div>
//         {children}
//       </div> 
     
//       <div onClick={onClose} className='backdrop-blur h-screen w-screen absolute top-0 z-40 '/>    
//       </>
//       }
//     </>,
//   document.getElementById("Model-root"))
// }

// export default Modal







import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

function Modal({ onClose, isOpen, children }) {
  if (!isOpen) return null

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      />

      {/* Modal box */}
  <div
  className="
  fixed z-50
  top-14 left-1/2
  -translate-x-1/2
  w-[90vw] max-w-[360px]
  sm:w-[400px]
  bg-white
  p-4
  rounded-lg
  shadow-xl
  "
>

        <div className="flex justify-end">
          <AiOutlineClose
            onClick={onClose}
            className="text-2xl cursor-pointer"
          />
        </div>

        {children}
      </div>
    </>,
    document.getElementById("Model-root")
  )
}

export default Modal
