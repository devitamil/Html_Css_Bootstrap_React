 import { useState } from "react";
 
 //Number Increment Decrement//
 export default function Number() {
   
    let [num,SetNum] = useState(0);
    let increment=()=>{
      if (num<5)
      {
        SetNum(num+1);
      }
    }
    let decrement=()=>{
      if(num>-2)
      {
        SetNum(num-1);
      }
    }
    let handle=()=>
    {
      SetNum();
    }
  
    return(
  <div>
    <center>
        <h1>Number IncreDec</h1>
      <input type="text"  className="btn btn-outline-warning" value={num} onChange={handle}></input><br/><br/>
      <button type="button" className="btn btn-outline-success" onClick={increment}>+</button>
      <button type="button"  className="btn btn-outline-success m-2" onClick={decrement}>-</button><br/>
      </center>
  </div>
    )
  }