// import React from 'react'
// import Modal from './Modal'
// import { Form, Formik,Field } from 'formik'
// import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
// import { db } from "../config/firebase";
//   import { toast } from 'react-toastify';



// function AddAndUpdateContact({isOpen,onClose,isUpdate,contact, filterContacts}) {


//   // this will add new data 
// const addContact=async (contact)=>{
//   try{
//     const contactRef=collection(db,"contacts");
//     await addDoc(contactRef,contact)
//       onClose();
//           toast.success("Contact Added successfully")
      
   
//   }catch(error){
//     console.log(contact)
   
//   }
// };
// const UpdateContact=async (contact,id)=>{
//   try{
//     const contactRef=doc(db,"contacts",id);
//     await updateDoc(contactRef,contact)
//        onClose();
//      toast.success("Contact Updated successfully")
           
       
   
//   }catch(error){
//     console.log(contact)
   
//   }
// };



//   return (
//     <>
//           <Modal isOpen={isOpen} onClose={onClose}>
//             <Formik initialValues={ isUpdate?{
//               name: contact.name,
//               email: contact.email
//             }: {
//               name:"",
//               email:""
//             }}
//             onSubmit={(values)=> isUpdate? UpdateContact(values,contact.id) :addContact(values)}>

//               <Form className='flex flex-col gap-4'>
//                <div className='flex flex-col gap-1'>
//                  <label htmlFor="name">Name</label>
//                 <Field  name="name" className="border-2 border-black  h-10"/>
//                </div>
//                <div className='flex flex-col gap-1'>
//                  <label htmlFor="email">Email</label>
//                 <Field name="email" className="border-2 border-black  h-10"/>
//                </div>
//                <button type='submit' className='bg-orange-300 border-1 border-black px-3 py-1 self-end '> {isUpdate? "Update " :"Add"} Contact</button>
//               </Form>
//             </Formik>
//             </Modal> 
      
//     </>
//   )
// }

// export default AddAndUpdateContact







import React from 'react'
import Modal from './Modal'
import { Form, Formik, Field } from 'formik'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { db } from "../config/firebase"
import { toast } from 'react-toastify'

function AddAndUpdateContact({ isOpen, onClose, isUpdate, contact }) {

  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts")
      await addDoc(contactRef, contact)
      onClose()
      toast.success("Contact Added successfully")
    } catch (error) {
      console.log(error)
    }
  }

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id)
      await updateDoc(contactRef, contact)
      onClose()
      toast.success("Contact Updated successfully")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Formik
        initialValues={
          isUpdate
            ? { name: contact.name, email: contact.email }
            : { name: "", email: "" }
        }
        onSubmit={(values) =>
          isUpdate
            ? updateContact(values, contact.id)
            : addContact(values)
        }
      >
        <Form className="flex flex-col gap-4 w-full">
          <h2 className="text-center font-semibold text-lg sm:text-xl">
            {isUpdate ? "Update Contact" : "Add Contact"}
          </h2>

          <div className="flex flex-col gap-1">
            <label className="text-sm sm:text-base">Name</label>
            <Field
              name="name"
              className="border-2 border-black rounded-md h-10 px-2 text-sm sm:text-base"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm sm:text-base">Email</label>
            <Field
              name="email"
              className="border-2 border-black rounded-md h-10 px-2 text-sm sm:text-base"
            />
          </div>

          <button
            type="submit"
            className="
            bg-orange-300 hover:bg-orange-400 transition
            border border-black rounded-md
            px-4 py-2
            text-sm sm:text-base
            w-full sm:w-auto
            self-end
            "
          >
            {isUpdate ? "Update" : "Add"} Contact
          </button>
        </Form>
      </Formik>
    </Modal>
  )
}

export default AddAndUpdateContact













