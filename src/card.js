import Back from "./back";
import Btn from "./button";
import Color from "./color";
import Number from "./number";



export default function Card(){
  const h={height:180}
    return(
        <div>
        <div className="border border-5 pt-5 h-50  pb-3 mt-3 bg-secondary" > 
        <center><h1 className="text-danger">UseState</h1></center>
        <div className="row w-100 ps-3 ">
          <br></br>
        <div class="col-sm-4 ">
    <div class="card" style={h}>
      <Color name={"lion"}></Color>
      <div class="card-body">
        </div>
        </div>
      </div>
        
        
  <div class="col-sm-4">
    <div class="card" style={h}>
      <div class="card-body">
   <Back></Back>
        
        </div>
        </div>
      </div>

      


      <div class="col-sm-4">
    <div class="card " style={h}>
      <div class="card-body">
        <Btn></Btn> 
        </div>
        </div>
        </div>
      
      <div className=" row pt-3">
        <center>
      <div class="col-sm-4 mt-5">
    <div class="card " style={h}>
      <div class="card-body">
       <Number></Number> 
        </div>
        </div>
        </div>
        </center>
        </div>
        </div>
        </div>
{/* <div>
  <div class="row">
<div class="col-sm-4">
    <div class="card " style={h}>
      <div class="card-body">
</div>
</div>
</div>
</div>
</div> */}

        </div>
    )
}