import React, {useState} from "react"

function Counter(){

    const [count , setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    }
    const decrement = () =>{
        setCount(count -1);
    }
    const reset = () =>{
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="count-paragraph">{count}</p>
            <button className="counter-button" onClick={increment}>INCREMENT</button>
            <button className="counter-button" onClick={decrement}>DECREMENT</button>
            <button className="counter-button" onClick={reset}>RESET</button>
        </div>
    );
}
export default Counter