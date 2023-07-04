import { useState } from "react"

export default function Task1(){
  const[no,setNo]=useState(1);
  let increment=()=>{
    setNo(no+1);
    console.log(no);
  }
    return(
        <div>
            <button type="button" onClick={increment}>Click</button>
        </div>
    )
}