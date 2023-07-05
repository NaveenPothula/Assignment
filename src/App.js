import React from "react";
import { useState,useEffect } from "react";
import data from "./data.json"
import "./App.css";
import Left from "./Components/Left";
import Right from "./Components/Right";




 
const App =()=>{
  const [propName,setPropName]=useState("Shirt 3") 
 
  const nameList = data.map((item)=>item.Name)  
   

  

  const buttonHandler=(name)=>{
      
    setPropName(name)
   
   
  }

         
  return(
    <div className="App" >
      <Left names= {nameList} onSave={buttonHandler}/>  
      <Right name={propName}/>  
    </div>
  )
};

export default App;   