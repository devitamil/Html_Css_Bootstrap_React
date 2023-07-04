    // button 


import useState from "react";
            
            export default function Numcount(){
                const[Count,SetCount] = useState(0);  
                const handle=()=>{
                      SetCount(Count+1);
                }
               
                
                return(
                      <div>
                      <button onClick={handle}>click me "{Count}"</button>
                      </div>
                )
          }