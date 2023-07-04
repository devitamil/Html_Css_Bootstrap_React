import dev from "./devi/66f51d64c6dddf26da8b50ffb89439cc.gif"
import dd from "./devi/email-western-libraries-12.png"
import dd1 from "./devi/6146587.png"
import axios from "axios";
import { useState } from "react"
import { API, API1 } from "./api";
// import { useNavigate } from "react-router-dom";



export default function Design(){
    

const [name,setName]=useState();
const [name1,setName1]=useState();
const [name2,setName2]=useState();
const [name3,setName3]=useState();
const [name4,setName4]=useState();


const h=(e)=>{
    
    e.preventDefault();

    axios.post(API,{name,name1})
    setName('')
    setName1('')

    
}




// const d=(e)=>{
    
//     e.preventDefault();

//     axios.post(API1,{name2,name3,name4})
//     setName2('')
//     setName3('')
//     setName4('')
// }
// const navi = useNavigate()

// const r=()=>[
//     // console.log("Hi")
//     navi('/read')
// ]

    return(
        
        
        <div className=" container d-flex  pt-5">
            <div className="row  border border-5  bg-warning" >
    
    <div className="col pt-5">
    <img src={dev} width={400} height={350} alt=""/>
    </div>
    
    <div className="col pt-3">
    <h1> welcome back::-</h1>
    <form  onSubmit={h}>
        <br></br>
        <div>
        <div>
        <img src={dd} height={40} width={50} alt=""></img>
        <input type="email" className="  btn btn-outline-info w-75 bg-light" placeholder="E-mail" value={name} onChange={(e)=>setName(e.target.value)} required/>
        </div>
        </div>

        <br></br>

        <div>
        <div>
            <img src={dd1} height={40} width={50}  alt=""></img>
            
        <input type="password" className=" btn btn-outline-info w-75 bg-light" placeholder="Password" value={name1} onChange={(e)=>setName1(e.target.value)}/>
        </div>

            </div>
      <br></br>

      
      <div className="row">
      <div className="col ">
        <input type="checkbox" checked/>
        <label>Remember Me</label>
        <a href="#!" className="ps-5 ms-3">Forget Password</a>
        </div>
      </div>
        <div >
            <br></br>
            <div>
                <button className="rounded-pill btn btn-outline-success">Login</button> 
        <div className="float-end  me-5 "> 
                <button className="rounded-pill btn btn-outline-success">Sign Up</button>
            </div>
            </div>
            </div>
             <br></br>  
        <div className="ps-5 ms-5 "> 
                <button type="submit" className="rounded-pill btn btn-outline-success"  >Submit</button></div>
            </form>
            </div>
            </div>   
            

                

  <div className="ps-3 ">
    <form className="border border-danger text-dark bg-info">
    <h1 className="text-center text-primary">Sign Up</h1>
    <div className="ps-3">
        
        <label>UserName:</label>
        <input type="text"value={name2} onChange={(e)=>setName2(e.target.value)} ></input>
    </div>
    <div className="pt-3 ps-3">
        <label>Password:</label>
        <input type="password" value={name3} onChange={(e)=>setName3(e.target.value)}></input>
    </div>
    <div className="pt-3 ps-3">
        <label>Confirm Password:</label>
        <input type="password" value={name4} onChange={(e)=>setName4(e.target.value)}></input>
    </div>
        <div className="text-center pt-3">
            <button className="btn btn-outline-danger">submit</button>
        </div>
    </form>
  </div>


  <div>
    {/* <button onClick={r} >Read</button> */}
  </div>
    
            </div>
        
    
           
           
           

      
    )
}