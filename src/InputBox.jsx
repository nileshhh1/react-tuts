import React, { useState } from 'react'
import './App.css'
function InputBox() {
    const [inputValue, setValue]=useState("");
    const [inputShow, setInputHide]=useState(false)
    const handleChange =(event)=>{
        console.log(event.target.value);
        setValue(event.target.value);

        // remove
        setInputHide(false);
    }
  return (
    <div>
        {/* <h1>Get InputBox Value</h1> */}
        {/* <h1>{inputValue}</h1> */}
        <h3>{inputShow ? inputValue: ''}</h3>
        <input type="text" onChange={handleChange} />
        <button onClick={()=>setInputHide(true)}>Submit</button>

    </div>
  )
}

export default InputBox