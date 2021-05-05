import React, { useState } from 'react';

const SimpleCalculatorComponent=()=>{
  // declare state
  
  const [x,setX] = useState(0);
  const [y,setY] = useState(0);
  const [res,setRes] = useState(0);

  const add=()=>{
      setRes(x+y);
  }
  const clear=()=>{
      setX(0);
      setY(0);
  }
  return (
    <div className="container">
    <div className="form-group">
        {/* onChange={(evt)=> setX(parseInt(evt.target.value))} will update the init value of x to next new value entered in text element based on change event */}
        <label>Num1</label>
        <input type="text" className="form-control"
         value={x} name="num1" onChange={(evt)=> setX(parseInt(evt.target.value))}/>
    </div>
    <div className="form-group">
        <label>Num2</label>
        <input type="text" className="form-control"
        value={y} name="num2"  onChange={(evt)=> setY(parseInt(evt.target.value))}/>
    </div>
    <div className="form-group">
        <label>Result</label>
        <input type="text" className="form-control"
        value={res} readOnly/>
    </div>
    <div className="form-group">
       <input type="buttont" className="btn btn-primary" value="clear"
        onClick={clear}/>
       <input type="buttont" className="btn btn-success" value="add"
         onClick={add}/>
    </div>
</div>
  );
};

export default SimpleCalculatorComponent;
