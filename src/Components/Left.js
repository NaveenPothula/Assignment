import React from "react";
import "./Left.css"
import {useState} from "react"

const Left= (props)=>{
    const[ string,setString ] = useState("List of Items")
    const buttonHandler=(e)=>{
        const value= e.target.innerHTML
        props.onSave(value)  
            setString(value)
    }


    return(
        <div>
            <div className="Heading"><h4>{string}</h4></div>  
            {props.names.map((name)=>(   
                < button key={name} onClick={buttonHandler} className="button">{name}</button>
            ))}  

        </div>
    )
}
export default Left