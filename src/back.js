


//background image//

import d  from './devi/66550.jpg'

 export default function Back() {
    function on()
    {
          document.body.style.background=`url(${d})`;
    }
    let refresh=()=>{
      window.location.reload(false);
    }
    return(
      //     <div>className='d-flex justify-content-center mb-1 pt-5 mt-5'
      <div>
            <center>
            <h1>background Image</h1>
                <button onClick={on} className='btn btn-outline-info'>button</button>
                <button onClick={refresh} className='btn btn-warning'>Refresh btn</button>
                </center>
          </div>

    )
}