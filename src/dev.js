    //documnet page button click and console page view// //dev.js page//

export default function Click(){
    const a='hello';
    
    return(
        <div className="d-grid gap-2 d-md-flex justify-content-md-end pe-5 pt-5 mt-2">
            <h1> Button Click Console Page View</h1>
            <br/>
        <button onClick={()=>console.log(a)} >click</button>
        </div>
    )
}