import './App.css';
import React,{ useState } from 'react';
import Props from './Props';
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

    <Props name="Nileshhh..."/>
    </div>
  );
}

export default App;
