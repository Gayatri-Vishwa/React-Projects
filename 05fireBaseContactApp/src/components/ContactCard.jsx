import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { deleteDoc ,doc} from 'firebase/firestore';
import { db } from "../config/firebase";
import AddAndUpdateContact from './AddAndUpdateContact';
import useDisclouse from "../hooks/useDisclouse";
import { toast } from 'react-toastify';


//this is for delete when we click on delete icon
function ContactCard({contact}) {
const  {isOpen,onClose,onOpen}=useDisclouse()

const deleteContact= async(id)=>{
  try{
    await  deleteDoc(doc(db,"contacts",id))
    toast.success("Contact deleted successfully")
  }catch(error){
    console.log(error)
  }
}

  return (
    <>
        
   <div key={contact.id} className="bg-yellow-200 flex justify-between items-center p-2 rounded-lg ">
    <div className="flex gap-3">
      <HiOutlineUserCircle className="text-orange-700 text-4xl"/>
    <div>
      <h2 className="font-medium">{contact.name}</h2>
      <p className="text-sm">{contact.email}</p>
    </div>
    </div>
    <div className="flex text-3xl">
      <RiEditCircleLine  onClick={onOpen} className='cursor-pointer'/>
      <IoMdTrash onClick={()=>deleteContact(contact.id)} className="text-orange-600" />
    </div>
  </div>
      <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
    </>
  )
}

export default ContactCard
