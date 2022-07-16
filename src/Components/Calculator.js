import React, { useState } from "react";

const Calculator = () => {
  const[val , setVal] = useState("");
  const clickHandler = (e)=>{
       setVal(val.concat(e.target.value))
  }
  const clickHandler2 = ()=>{
    setVal (" ");
  }
 const clickHandler3 =()=>{
  setVal(eval(val).toString());
 }
  return (
    <div class="container-fluid ">
    <div class="container p-t-1">
      <h1 class="display-4 text-xs-center m-b-2">Calculator</h1>
      <div class="jumbotron col-xl-4 col-xl-offset-4 col-md-6 col-md-offset-3 p-x-3 p-y-3 col-xs-12 bg-inverse">
        <div class="input-group input-group-sm col-xs-12 p-a-0">
          <input class="col-xs-12 form-control text-xs-right" value={val} id="calcscreen" type="text"/>
        </div>

        <div class="input-group input-group-lg col-xs-12 p-a-0"> 
          <input class="form-control text-xs-right" id="numberscreen" type="text"/>
        </div>
        <div class="col-xs-7 calc__numberpad p-a-0">
          <button class="btn btn-lg btn-secondary col-xs-4 numbers" value="1" onClick={clickHandler} type="button">1</button>
          <button class="btn btn-lg btn-secondary col-xs-4 numbers" value="2" onClick={clickHandler}  type="button">2</button>
          <button class="btn btn-lg btn-secondary col-xs-4 numbers" value="3" onClick={clickHandler} type="button">3</button>
          <button class="btn btn-lg btn-secondary col-xs-4 numbers" value="4" onClick={clickHandler} type="button">4</button>
          <button class="btn btn-lg btn-secondary col-xs-4 numbers" value="5" onClick={clickHandler} type="button">5</button>
          <button class="btn btn-lg btn-secondary col-xs-4 numbers" value="6" onClick={clickHandler}    type="button">6</button>
          <button class="btn btn-lg btn-secondary col-xs-4 numbers" value="7"  onClick={clickHandler}  type="button">7</button>
          <button class="btn btn-lg btn-secondary col-xs-4 numbers" value="8" onClick={clickHandler}   type="button">8</button>
          <button class="btn btn-lg btn-secondary col-xs-4 numbers" value="9" onClick={clickHandler}  type="button">9</button>
          <button class="btn btn-lg btn-secondary col-xs-8 numbers" value="0" onClick={clickHandler} type="button">0  </button>
          <button class="btn btn-lg btn-secondary col-xs-4 numbers" value="."  onClick={clickHandler}  type="button">.</button>
          <button class="btn btn-lg btn-secondary col-xs-4 numbers" value=" " onClick={clickHandler2} type="button">C</button>

        </div>
        <div class="col-xs-5 calc__operatorpad p-a-0">    
          <button class="btn btn-lg btn-secondary col-xs-6 operator" value="/"  onClick={clickHandler}   type="button">/ </button>
          <button class="btn btn-lg btn-secondary col-xs-6 operator" value="%"  onClick={clickHandler}  type="button">% </button>
          <button class="btn btn-lg btn-secondary col-xs-6 operator" value="*"  onClick={clickHandler}  type="button">* </button>
          <button class="btn btn-lg btn-secondary col-xs-6 operator" value="-" onClick={clickHandler}   type="button">- </button>
          <button class="btn btn-lg btn-secondary col-xs-6 operator" value="+"  onClick={clickHandler}  type="button">+ </button>
          <button class="btn btn-lg btn-primary col-xs-12" id="equals" value="="  onClick={clickHandler3} type="button"> =</button>
        </div>
      </div>
      
    </div>
  </div>
  );
};

export default Calculator;
