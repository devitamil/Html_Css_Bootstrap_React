import { useState } from "react";
import "./user.css";
import axios from "axios";
import { API, API1 } from "./api";
import { useNavigate } from "react-router-dom";


export default function Book(){
    const [name,setName]= useState();
    const [name1,setName1]= useState();
    const [name2,setName2]= useState();
    const [name3,setName3]= useState();
    const [name4,setName4]= useState();
    const [name5,setName5]= useState();
    const [name6,setName6]= useState();
    const [name7,setName7]= useState();
    const [name8,setName8]= useState();
    const [name9,setName9]= useState();


 
        
    


    const h=(e)=>{
        e.preventDefault();
        axios.post(API1,{name2,name3,name4,name5,name6,name7,name8,name9})
        setName2("");
        setName3("");
        setName4("");
        setName5("");
        setName6("");
        setName7("");
        setName8("");
        setName9("");
    }
    const navi = useNavigate();

    const r=()=>[
        navi(`/read`)
    ]




    const d=(s)=>{
        s.preventDefault();
        axios.post(API,{name,name1})
        setName("");
        setName1("");
    }

    return(
        <div className="container dev">
        <div className="row">
        <div className="d-flex justify-content-between bg-primary">
            <div className="mt-4 text-dark">
                <h1>facebook</h1>
            </div>
            <form onSubmit={d}>
            <div className="row">
                <div className="col">
                <label className="text-dark"><b>Email</b></label>
                <input type="email" className="form-control" value={name} onChange={(s)=>setName(s.target.value)}/>                
                <input type="checkbox" className="form-check-input"></input>
                <label className="text-dark">Keep me logged in</label>
                </div>
                <div className="col">
                <label className="text-dark"><b>password </b></label>
                <input type="password" className="form-control" value={name1} onChange={(s)=>setName1(s.target.value)} />
                <a href="#!" className=" link text-dark">forget your password?</a>
                </div>  
                 <div className="col mt-4">
                 <button type="submit"className="btn btn-info text-white"><b>Log in</b></button>
                 
                </div>
                </div>
                </form>
                
            </div> 
            
            </div>

<div className="row pt-5 ps-5">
    <div className="col-7 ">
     <h4 className="text-dark pb-5"><b>Facebook helps you connect and share with<br></br>the people in you life.</b></h4>
     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEU7V53///82U5soSpbx8/izvdlofLA5VZw/XKHd4eyrt9QzUZpec6v2+PuFlb/o6/S8xdxzhbdEYKPX3eugrM19j71ZcKv09vrl6fLHz+JVbaovTpmWpMlPaah1h7hid67O1eaRn8aWpMoPO5AjRZW/EryeAAAEb0lEQVR4nO3dC4+iSBSG4aJED1rQIDcvqNiz+/9/48DYvbOXBEvZ4pyqfG8mnXQybXiCgBRQquhRXjRtqUKpbJsi/5KpXz/jOlWaiHvB/reItErr+Lew2msdDu8Rab2vvoVFaULzjZEpi4ewKjX3wjhKl9UojG+Ge0mcZW7xIKyD2wR/R7qOVJ6G+h4d02muChXuKhxW4uBrwt0Kx0yj2pBX4bASW1UGLgznoyhCCCGEEEIIIYQQchaNV8lIf0fDb+OP8eKZ/8Nng8EQJeW57Tdf9X2ftufz9Vom43/Qxhh/r0eQ0UnbXHane3XM4/hwiMfy/HjcVtX9fiqKdV1/ftw258RDI+muS/a7e37IoqmybHAfPbxuplX7cYonbX9nfvgmNGqz3k6vO5+FZFb9X3dQhCgk1a9f4vkm1El9fBXok5C6c/Gyzych6c/XNkDfhJRcXtiBeijUqj68BfRFSOqdTdAjISW7d4F+CEm/uQ16I+w+3wd6IdTntw4T/ggpeXsv44eQqJ4D9ECoN69/FvVLuJr1HvVAqDfzgOKFMz7MeCI0e+sBGT+FM48UHgh1P29HKl/Yfc4FChdSVwUu1NcZH7m9EJqP2UDhQnUKXEjXbeBC/eLhPntcYvtnueSnRewHL7L8frn1pdLdfxN8+ZCU7UWK7aVPxsu9ROPzS//6J7nEbkeT1WdPL2bT2ep4H28kvxEno95mBCr+6LgX9O303mYgf8e9mDMyjcWu1OsnlK1OLC6Cj3ZP6y4WwrPHq1CtLAZKK2/3o2MriwtO6xX3Us5pZfGRpg5dmHl8MFR2QsknDs+zEB72oQvjjc8HCwgh9CAIIZQfhBDKD0II5QchhPKDEEL5QeiHkCayEpqpVyABT3QnE3U2wslXGOP1UXvfTmRxr8lx6u/HCt4BVZ3OeZLCqhPvsP8Cwl3wwjp0IffFKffCeM97wHQvzFPeA6J7YXUNXXhingXZvZB7snX3wh3z51LnwuwH87mHc+GB+04G58Lh7Cpw4ZH7KwGcCyvurwRwLjxxn+I7F66573B3LvzBfcuUcyH7XG3OhT33YKNrYcZ8ZuFemLN/lZpr4Zb9DmLXwlPwwl3wwgv7XeCOhdxDie6F3EOJ7oVH/u/8cyzkHkp0L+QeSnQv5B5KVOOUAvVuoufzDWTF1N837MCBuJroj+fPrsXpnxMvwH3q9LQw7sWYCkII5QchhPKDEEL5QQih/CCEUH4QQig/CCGUH4QQyg9CCOUHIYTygxBC+UEIofwghFB+EEIoPwghlB+EEMoPQgjlByGE8oMQQvlBCKH8IIRQfhBCKD8IIZQfhBC+ENPkC4sJSSU8xKWEVCqmSUAXE7aKaarapYSmUUzzvCwkpMGX88y3tJBQp7mKapaJTpcRkq4jFcUs84AuIzS3eBBGVcnwPl1EqMsqGoVRUS4/UeYCQjJlET2EUbXXS2+MzoWk9b6KvoVRXKdKL/oFUW6FRFql9WM2NfX1cnnRtEvO8eZWWLZN8T1b3E8GyF19lc9R6AAAAABJRU5ErkJggg==" alt="" height={400} width={450} className="ps-5 img-fluid"></img>
         </div>
   
    <div className="col-5 ps-5">
        <h1 className="text-dark">Sign Up </h1>
        <h6 className="text-dark">It's free and always will be</h6>
        <hr/>
        <form onSubmit={h}>
        <div className="inputBox">
             <input type="text" className="col-9" required="required" value={name2} onChange={(e)=>setName2(e.target.value)}/>
             <span>First Name</span>
        </div>
        <div className=" inputBox pt-2">
        <input type="text" className="col-9" required="required" value={name3} onChange={(e)=>setName3(e.target.value)}/>
        <span >Last Name</span>
        </div>
        <div className=" inputBox pt-2">
        <input type="text" className="col-9" required="required" value={name4} onChange={(e)=>setName4(e.target.value)}/>
        <span>Enter Email</span>
        </div>
        <div className=" inputBox pt-2">
        <input type="text" className="col-9" required="required"  value={name5} onChange={(e)=>setName5(e.target.value)}/>
        <span>Phone No</span>
      </div>
      <div className=" inputBox pt-2">
        <input type="text" className="col-9" required="required" value={name6}  onChange={(e)=>setName6(e.target.value)}/>
        <span>Password</span>
        </div>
        <div className=" inputBox pt-2">
        <input type="text" className="col-9" required="required"  value={name7} onChange={(e)=>setName7(e.target.value)}/>
        <span>Con-Password</span>
       </div>
       <div className=" inputBox pt-2">
       
        <select type="text" className="col-9" required="required"  size="0" value={name8} onChange={(e)=>setName8(e.target.value)}>
            <option>Select Sex</option>
            <option value="1">Female</option>
            <option value="2">Male</option>
            <option value="3">Other</option>
       </select>
        </div>
        
        <div className=" inputBox pt-2">
        <input type="date" className="col-9" required="required" value={name9} onChange={(e)=>setName9(e.target.value)}/>
       </div>
        
        
        <div className=" col-12 pt-3">
        <h6 className="text-white">Why did I need to provide my birthday?</h6>
        <h6 className="text-white">By clicking Sign Up,you agree to our Tearms and that you have read and understand our data Use Policy.</h6>
        </div>
        
        <div className="row">
        <div className="col-6">
            <button className="">Sign Up</button>
        </div>
        <div className="col-6">
            <button onClick={r}>Result</button>
        </div>
        </div>
        <hr/>
        </form>
        </div>
    </div>
    </div>
    )
    }
