import React from "react";
import "./Right.css"
import data from "../data.json"

const Right= ({name})=>{
    
    const details= data.find((item)=>item.Name===name)    

    return(
        <div className="box">
            <div className="box4">
                 <h2>Card</h2>
             </div>
           
            <div className="box2">
            <h3>{details.Name}</h3>
            
            <h4>Price: {details.Price}</h4>
            <h4>item id: {details.id}</h4>
            </div>

        </div>
    )
}
export default Right;   