import { useEffect, useState } from "react";

function UseEffect() {
    const [count , setCount] = useState(0)
    const [countA , setA] = useState(0)

    useEffect(()=>{
      console.log("hello")
    },[count])
    
    return (
      <>
        <div className="container">
            <h1>Use Effect</h1>
            counter = {count}<br/>
            <button onClick={()=>{setCount(prev=>prev+1)}}>Increment</button><br/>
            counter  A= {countA}<br/>
            <button onClick={()=>{setA(prev=>prev+1)}}>Increment</button>
        </div>
      </>
    );
}

export default UseEffect;
