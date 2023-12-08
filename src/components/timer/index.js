import React, { useEffect, useState } from 'react'
import  './styles.css'

 const Timer = () => {
    const [time, setTime] = useState(0)
    const [startTimer, setStartTimer] = useState(false);
    const [timerId, setTimerId] = useState(0);

    useEffect(() =>{
        let intervalId = null;
        if(startTimer) {
            intervalId = setInterval(() => {
            setTime(prev => prev +=1);
            },1000);

            setTimerId(intervalId)
        } else {
            clearInterval(timerId);
        }

    }, [startTimer])



    return(
        <div className="container">
            <div className="time">{time}</div>
            <div className="button-wrap"></div>
             <button className="button btn-start" onClick={() => setStartTimer(true)}>Start</button>
             <button className="button btn-stop" onClick={() => setStartTimer(false)}>Stop</button>
        </div>
    )
}
export default Timer;
