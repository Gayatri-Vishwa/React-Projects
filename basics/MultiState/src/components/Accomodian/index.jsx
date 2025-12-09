//singe selection
//multi selection
import React from "react";
import data from "./data";
import { useState } from "react";
import './style.css'

export default function Accordian() {

  const [selected, setSelected] = useState(null);
  const [enable, setEnable] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);
  
  function singleHandle(id){
   setSelected(id)
  }

  function multiHandle(id){
   if(enable){
    if(multiSelected.includes(id)){
      const filtered= multiSelected.filter((item)=> item !== id)
      setMultiSelected(filtered)
    }else{
      setMultiSelected([...multiSelected, id])
    } 
  }}

  return <div className="wrapper">
    <div>
      <h2 onClick={()=>setEnable(true) }>Enable multi selection</h2>
      <h2 onClick={()=>setEnable(false) }>Disable multi selection</h2>
     { enable && <p>enable</p>}
      {/* <h4 onClick={()=>setEnable(false)}>Disable multi selection</h4> */}
    </div>
    <div className="accordian"> 
      {
        data && data.length>0 ? 
        data.map((item)=> (
          <div className="item" key={item.id}>
            <div className="title" onClick={() => multiHandle(item.id)}>
               <h3>  {item.question}</h3>
                   <span >+</span>
            </div>
            <div className="content">
            {/* {selected === item.id  && <p>{item.answer}</p> } */}
            { (selected === item.id || multiSelected.includes(item.id)) ?<p>{item.answer}</p> :null}
            {/* { multiSelected.includes(item.id) && <p>{item.answer}</p> } */}
            </div>
            </div>
            
        ))
        : <p>No data found</p>
      }
    </div>
    
  </div>;
}
