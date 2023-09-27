import { useState } from "react";

function UseState() {
    const [count , setCount] = useState(0)
    function increment() {
        setCount(prev=>prev+1);
        console.log(count)
    }
    return (
      <>
        <div className="container">
            <h1>Use State</h1>
            counter = {count}<br/>
            <button onClick={increment}>Increment</button>
        </div>
      </>
    );
  }
  
  export default UseState;
  