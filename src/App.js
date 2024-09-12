import './App.css';
import React,{ useState } from 'react';
function App() {

let [data,setData]=useState("who is coding??");

const updateData=()=>{
  setData("Nilesh is coding..");
  alert(data);
}

  const demo=()=>{
    alert(data)
  }
  return (
    <div>
    <h1>{data}</h1>
    <button onClick={updateData}>Click me</button>
    </div>
  );
}

export default App;
