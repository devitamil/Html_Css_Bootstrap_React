import { useState } from "react"

export default function Calc(){
    const[input,setInput]=useState('');
    const[result,setResult]=useState('');

    function addInput(val){
        setInput(input + val);
    }

    function clearInput(){
        setInput('');
        setResult('');
    }

    function calculate(){
        try {
            const res = eval(input);
            setResult(res.toString());
        } catch (error) {
            setResult('Error');
        }
    }
   
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className=" col-12">
                        <h1 className="display-5 fw-bolder text-center text primary">Calculator</h1>
                    
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="card border-primary mb-5">
                                    <div className="card-body text-primary">
                                        <div>
                                    <input type="text" className="form-control form-control-sm" value={input}onChange={(e)=>setInput(e.target.value)}></input>
                                    <div className="text-danger text-end">{result}</div></div><br/>
                                    <div className="row">
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-5"value="1" onClick={()=> addInput('1')}>1</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-5"value="2" onClick={()=> addInput('2')}>2</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-5"value="3" onClick={()=> addInput('3')}>3</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-5"value="+" onClick={()=> addInput('+')}>+</button>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                    <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-5"value="4" onClick={()=> addInput('4')}>4</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-5"value="5" onClick={()=> addInput('5')}>5</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-5"value="6" onClick={()=> addInput('6')}>6</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-5"value="-" onClick={()=> addInput('-')}>-</button>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                    <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-5"value="7" onClick={()=> addInput('7')}>7</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-5"value="8" onClick={()=> addInput('8')}>8</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-5"value="9" onClick={()=> addInput('9')}>9</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-5"value="*" onClick={()=> addInput('*')}>*</button>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                    <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-5"value="." onClick={()=> addInput('.')}>.</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-5"value="0" onClick={()=> addInput('0')}>0</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-5"value="=" onClick={()=> calculate()}>=</button>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow p-4 fs-5"value="/" onClick={()=> addInput('/')}>/</button>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                    <div className="">
                                            <button className="d-grid gap-2 col-12 border btn btn-outline-warning"value="C" onClick={()=> clearInput()}>CLEAR</button>
                                        </div>
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}