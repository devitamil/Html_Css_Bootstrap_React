

// import Calc from "./calc";

// import Task1 from "./task";

// import Back from "./back";
import Book from "./face";

// import Form1 from "./form1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Devi from "./app1";
// import Dq from "./d";
// import Gaccount from "./google";

import Read from "./read";
// import Loop from "./loop";
// import Card from "./card";


// // import Form from "./form";

// // import Numcount from "./counting";


// import One from " ./one";
// import Three from "./three";
// import Two from "./two";


export default function App(){

    // let  name="jimin";
    // let b="devi";
    
    return(
        <div>
              
           {/* <Numcount></Numcount>  */}
            {/* <One></One> */}
           {/* <Two></Two> */}
           {/* <Three></Three> */}
            {/* <Calc></Calc> */}
            {/* <Form></Form> */}
                
            {/* <Form1></Form1> */}
            {/* <Read></Read> */}
        
            
            {/* <Devi></Devi>  */}
            {/* <Dq s={name} d={b}></Dq> */}
            {/* <Gaccount></Gaccount> */}
            {/* <Card></Card> */}
            {/* <Back></Back> */}

        {/* <Book></Book> */}

            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Book/>}/>
                <Route  path="/read"  element={<Read/>}/>
            </Routes> 
             </BrowserRouter>


            {/* loop */}
            {/* <Loop></Loop> */}
            {/* <Task1></Task1> */}

           
        </div>

    )
}




            
             


             

            


                 
       




           





