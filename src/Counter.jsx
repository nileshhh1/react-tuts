import React,{useState} from "react";
// useState with function component 
function Counter(){
    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }

return(
<div>

    <p>Count:{count}</p>
    <button onClick={increment}>Increment</button>
    <br />
    <button onClick={decrement}>decrement</button>
    <br />
    <button onClick={reset}>reset</button>
    <br />
</div>

)
}
export default Counter;