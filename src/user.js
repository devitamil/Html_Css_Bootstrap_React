 //Username and password//
 import "./user.css"
 export default function User(){
     
     
    return(
          <div className="dev" >
            
            <center> 
            <h1>Login Form</h1>   
          <div className="d-flex align-items-center">
                <div className="container">
                      <div className="m-5 sambavam col-3 border border-5 bg-secondary" >
                            <label className="pb-3">user icon</label>
                            <br/>

                            <input type="login" className='text-center'placeholder="login"></input><br/>
                            

                            <input type="password"  className='text-center'placeholder="password"></input>
                            <br/>

                            <button className="btn btn-primary" type="submit">Login</button>
                            <br/>
                            <a href="#!" className="text-body">forget password</a>
                      </div>
                </div>

          </div>
          </center>
          </div>
    )
}