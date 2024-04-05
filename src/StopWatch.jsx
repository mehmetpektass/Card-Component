import React,{useState , useEffect , useRef} from "react"

function StopWatch(){

    const [isRunning, setIsRunning] = useState(null);
    const [elapsedTime , setElapedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() =>{

        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapedTime(Date.now() - startTimeRef.current)
            }, 10);
        }
        
        return () =>{
            clearInterval(intervalIdRef.current);
        }

    },[isRunning])

    const start = () =>{
        setIsRunning(true);
        startTimeRef.current = Date.now()-elapsedTime ;
        console.log(startTimeRef);
    }
    const stop = () =>{
        setIsRunning(false);
    }
    const reset = () =>{
        setElapedTime(0);
        setIsRunning(false);
    }
    const formatTime = () =>{

        let minutes = Math.floor(elapsedTime / (1000 * 60) %60)
        let seconds = Math.floor(elapsedTime / (1000) %60)
        let milliseconds = Math.floor((elapsedTime % 1000)/10)

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");


        return `${minutes}:${seconds}:${milliseconds}`
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