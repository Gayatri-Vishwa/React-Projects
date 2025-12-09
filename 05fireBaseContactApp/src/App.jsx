import { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import { CiSearch } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { collection,getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import useDisclouse from "./hooks/useDisclouse";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
  import { ToastContainer, toast } from 'react-toastify';



const App=()=> {
 const [contacts,setContacts]=useState([])
const  {isOpen,onClose,onOpen}=useDisclouse()


useEffect(()=>{
const getContacts=async ()=>{
try{
const contactsRef = collection(db, "contacts");        // collection is already define ,firebase  se path config file se
onSnapshot(contactsRef,(snapshot)=>{
  const contactList =snapshot.docs.map((doc)=> {
  return{
    id: doc.id,
    ...doc.data()
  }
  });
    setContacts(contactList)
  })

}catch(error){
  console.log(error)
}

  };
  getContacts()

  },[])

const filterContacts=(e)=>{
  const value=e.target.value;

  const contactsRef = collection(db, "contacts");
onSnapshot(contactsRef,(snapshot)=>{
  const contactList =snapshot.docs.map((doc)=> {
  return{
    id: doc.id,
    ...doc.data()
  }
  });
  const filterContacts=contactList.filter(contact=>contact.name.toLowerCase().includes(value.toLowerCase()))
    setContacts(filterContacts)
  
  });

}

  


  return (
    <>
  <div className="px-4 max-w-[370px] mx-auto">
    <Navbar/>

   <div className="flex items-center gap-4">
      <div className="flex relative items-center flex-grow">
      <CiSearch className="absolute ml-1  text-white text-3xl" />
      <input onChange={filterContacts} type="text" className="transparent text-white pl-9 border-white border-2 rounded-md h-10 flex-grow " />
    </div>
    <FaCirclePlus  onClick={onOpen} className="text-5xl text-white "/>
    </div>                    

    <div className="mt-4  flex flex-col gap-3">
      {  contacts.map((contact) => (
           <ContactCard key={contact.id} contact={contact}/>

    ))
    }
    <AddAndUpdateContact   onClose={onClose} isOpen={isOpen}/>
    <ToastContainer position="bottom-center"/>
    </div>


  </div>

    </>
  )}


export default App

