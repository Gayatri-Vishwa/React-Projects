import React, { useState } from 'react'
import Button from './Button'
import { MdOutlineMessage } from "react-icons/md"; //it is a component for icon firsly we have to install =npm install react-icons
import {FaPhoneAlt} from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import Image from './Image';

function ContactForm() {
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [text,setText]=useState("")



const onSubmit=(e)=>{   //all event triiger when we clixk on submit button /we did not pass these onclick method to button component but can get by button component by {...rest} value  in button             //to stop the default behaviour to stop referesh form
    e.preventDefault()
  //  setName(e.target[0].value)       not working this type so we use in input field onchange() and value
  //  setEmail(e.target[1].value)
  //  setText(e.target[2].value)
   console.log(name,email,text)
//  value={name} onChange={(e)=> setName(e.target.value)}  //or can use it in input tag

}


  return (
    <div className='box-border flex '>
          <form className=''  onSubmit={onSubmit}> 
            <div className='w-[700px] h-[100%] px-17  mx-30 relative flex flex-col space-y-7  text-lg p-3' >
          <div className='flex  justify-between'>
            <Button  name={"viewsupportChat"} icon={<MdOutlineMessage />} isOutline={false}/>
              <Button  name={"Via Call"}  icon={<FaPhoneAlt />} isOutline={false}/>

          </div>
             <Button  name={" Via Email Form"}  icon={<MdEmail />} isOutline={true}/>
              
       
             <label className='absolute top-45 left-22  bg-white p-1 ' htmlFor="name">Name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)}  className='border-2 border-black h-[40px] p-4 rounded-lg w-full'   type="text"  placeholder='Enter name' id='name'/>
        
       
           <label className='absolute top-62 left-22  bg-white p-0.7 ' htmlFor="email">Gmail</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)}    className='border-2 border-black  h-[40px] p-4  rounded-lg w-full'  type="text " placeholder='Enter email-id ' id='email' />
      
 
       
             <label className='absolute top-79 left-22  bg-white p-1'htmlFor="text">Text</label>
          <textarea value={text} onChange={(e)=>setText(e.target.value)}  className='border-2 border-black h-40 rounded-lg w-full' type="textArea" placeholder='Enter text' id='text' />
    

        <div className='px-60'>
            <Button  name={"submit"} icon={""} isOutline={false}/>
        </div>
      

           </div>

          </form>
  <Image name={name} email={email} text={text} />
         </div >


  )
}

export default ContactForm
