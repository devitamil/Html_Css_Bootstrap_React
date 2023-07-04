 //button change will image//
import { useState } from "react";

 export default function Btn(){
    let img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCSHSS-ATxrKlmPN1FGdrHdvMatfLJSkYt2A&usqp=CAU";
    let img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxGK5RmZwvbA3TMta-vMGFL6kCU3aTUCq5Nw&usqp=CAU";
    const[a,b]=useState();
   
    return(
      
      // className="pt-5 position-absolute top-10 w-50 ps-5"
      <div>
            <h1>Button Image</h1>
                <img src={a}  style={ {width:"100px",height:"100px",border:"150px"}}></img>
                <button  className="btn btn-outline-success" onClick={()=>{b(img1)}}>TV</button>
                <button  className="btn btn-outline-success" onClick={()=>{b(img2)}}>PHONE</button>
          </div>
         
    )
}