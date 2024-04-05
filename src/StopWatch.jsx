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
        return "00:00:00"
    }

    return(
        <div className="stopwatch">
            <div className="stopwatch-display">{formatTime()}</div>
            <div className="stopwatch-control">
                <button className="stopwatch-start-button" onClick={start}>Start</button>
                <button className="stopwatch-stop-button" onClick={stop}>Stop</button>
                <button className="stopwatch-reset-button" onClick={reset}>Reset</button>
            </div>
        </div>
    );

}
export default StopWatch