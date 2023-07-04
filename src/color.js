//color change Method//
export default function Color({name,age}) {
  //  let {funny}=props;
    var a1 = Math.floor(Math.random()*200);
    var a2 = Math.floor(Math.random()*200);
    var a3 = Math.floor(Math.random()*200);
    var bgcolor="rgb("+a1+","+a2+","+a3+")";
    console.log(bgcolor);
    console.log(name);
    document.body.style.backgroundColor=bgcolor;
    console.log('five');
    return(
  
  <div>
    <center>
    <h1>Color Change</h1><br/>
    
  <button  onClick={Color} className="btn btn-outline-primary">color</button></center>
  </div>
  
    )
  }