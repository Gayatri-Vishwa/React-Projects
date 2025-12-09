import React from 'react'


function Button({name, icon,isOutline , ...rest}) {  //this ...rest property all bali k props in this ...OnClick{} ko handle liye 
  return (
    <div>

          <button {...rest}
      className={`w-60 h-17 flex items-center justify-center space-x-10 rounded-md 
        ${isOutline ? "bg-transparent text-black border-2 border-black  px-18 py-4 text-[26px] min-w-[220] justify-center w-[100%]": "bg-black text-white"}`}
    >
          {icon}{name}
        </button>
      
    </div>
  )
}

export default Button
