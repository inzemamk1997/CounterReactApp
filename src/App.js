import React, {useState} from "react";
import "./App.css"

const App = () => {
  const [count,setCount] = useState(0);
  return (
        <div className = "App">
          <h1>
          Three-State-Counter
          </h1>
          <h2>The current state counter is {count}</h2>
          <button onClick = {()=> (count>=10) ? "": setCount(count+1)}>Increase Count</button>
          <button onClick = {()=> (count<=0) ?"" : setCount(count-1)}>Decrease Count</button>
          <button onClick = {()=>setCount(0)}>Reset Count </button>
        </div>
);
}

export default App;