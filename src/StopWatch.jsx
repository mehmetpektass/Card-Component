import React,{useState , useEffect , useRef} from "react"

function StopWatch(){

    const [isRunning, setIsRunning] = useState(null);
    const [elapsedTime , setElapedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    const start = () =>{

    }
    const stop = () =>{

    }
    const reset = () =>{

    }
    const formatTime = () =>{

    }

    return(
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="control">
                <button className="start-button" onClick={start}>Start</button>
                <button className="stop-button" onClick={stop}>Stop</button>
                <button className="reset-button" onClick={reset}>Reset</button>
            </div>
        </div>
    );

}
export default StopWatch