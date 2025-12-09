import {Formik,Form,Field,FieldArray} from 'formik'
import React from 'react'
import './App.css'

function App() {
     // not type use as="select"  for select field
 

  return (
    <>
    <Formik
     initialValues={{name:"", phone:"" , password:"" , gender:"" ,date:"", income:"",about:"",
      social:{
        facebook:"",
        twitter:""

      }
     }}  //initial values are important for every field all name here
    onSubmit={(values)=>{console.log(values)}}>
      <Form>
        <label>Name</label>
        <Field name="name" type="text"/>
        <br /> <br />
        <label>Phone </label>
        <Field name="phone" type="number"/>
        <br />   <br />
        <label>Password </label>
        <Field name="password" type="password"/>
        <br />   <br />
        <label>Gender </label>
        <br />   <br />
        <label>Male </label>
        <Field name="gender" value="male" type="radio"/>
      
        <label>Female </label>
        <Field name="gender" value="female" type="radio"/>
        <br />   <br />
        <label>date </label>
        <Field name="date"  type="date"/>
        <br />   <br />
        
        <label>Income </label>
        <Field name="income"  as="select">       
        <option value="0">rs 0</option>
        <option value="100">rs 100</option>
        <option value="1000">rs 1000</option>
        </Field>
        <br />   <br />
        <label>About </label>
        <Field name="about"  as="textArea"/>
        <br />   <br />
         <label>Social</label>
         <br />
         <label>facebook</label>
        <Field name="social.facebook" type="text"/>
        <br />   <br />
         <label>Twitter</label>
        <Field name="social.twitter" type="text"/>
        <br />   <br />

       <FieldArray
             name="friends"
             render={arrayHelpers => (
               <div>
                 {values.friends && values.friends.length > 0 ? (
                   values.friends.map((friend, index) => (
                     <div key={index}>
                       <Field name={`friends.${index}`} />
                       <button
                         type="button"
                         onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                       >
                         -
                       </button>
                       <button
                         type="button"
                         onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                       >
                         +
                       </button>
                     </div>
                   ))
                 ) : (
                   <button type="button" onClick={() => arrayHelpers.push('')}>
                     {/* show this when user has removed all friends from the list */}
                     Add a friend
                   </button>
                 )}
                 <div>
                   <button type="submit">Submit</button>
                 </div>
               </div>
             )}
           />
        

        <button type='submit'>submit</button>
        <br />
      </Form>
    </Formik>
     
    </>
  )
}

export default App
