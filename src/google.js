import axios from "axios";
import { useState } from "react"
import { API } from "./api";
import { useNavigate } from "react-router-dom";



export default function Gaccount(){
    const [name1,setName1]= useState();
    const [name2,setName2]= useState();
    const [number,setNumber]= useState();
    const [email,setEmail] = useState();
    const [address,setAddress]= useState();
    const [birth,setBirth]= useState();
    const [home,setHome]= useState();
    

    

    const d=(e)=>{
        e.preventDefault();
        axios.post(API,{name1,name2,number,email,address,birth,home})

        setName1("");
        setName2("");
        setNumber("");
        setEmail("");
        setAddress("");
        setBirth("");
        setHome("");
    }
    const navi = useNavigate();

const r=()=>[
    navi(`/read`)

]
   
    

    

    return(
    <div className="container pt-5 ">
            <div className="row border border-5 bg-primary">
                <div className="col-6 pt-3">
                    <img src="https://cdn.dribbble.com/users/5137863/screenshots/11240055/media/99347527f225773d273e9805a01e7d2a.gif" className="img-fluid rounded-pill" alt="" width={400} height={400}/>
                </div>
                <div className="col-6 fst-italic">
                    <h1>Google Contacts</h1>
            <form onSubmit={d}>
                <div className="pt-1">
                    <label className="col-3">First Name:</label>
                    <input type="name" className="col-9" value={name1} onChange={(e)=>setName1(e.target.value)}/>
                </div>
                
                <div className="pt-1">
                    <label className="col-3">Last Name:</label>
                    <input className="col-9" value={name2} onChange={(e)=>setName2(e.target.value)}/>
                </div>
                <div className="pt-1">
                    <label className="col-3">Phone No:</label>
                    <input className="col-9" type="phone number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
                    </div>
                <div className="pt-1">
                    <label className="col-3">E-mail:</label>
                    <input className="col-9" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="pt-1"> 
                    <label className="col-3">Address:</label>
                    <input className="col-9" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                <div className="pt-1">
                    <label className="col-3">Birthday:</label>
                    <input type="date" className="col-9" value={birth} onChange={(e)=>setBirth(e.target.value)}/>
                </div>
                <div className="pt-1">
                    <label className="col-3">Home:</label>
                    <input className="col-9" value={home} onChange={(e)=>setHome(e.target.value)}/>
                </div>
                <div className="pt-3">
                    <button type="submit" className="btn btn-warning  rounded-circle col-2">Save</button>
                    <button onClick={r} className="col-2 rounded-circle btn btn-warning">change</button>
                </div>
                </form>
                    </div>
    </div>
        </div>
    
    )
}