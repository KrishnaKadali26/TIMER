
import React, { useEffect, useState } from 'react';

const Timer = () =>{

    const [count,setCount] = useState(0);

    var timer;
    useEffect(()=>{

        timer= setInterval(() => {

            setCount(count+1);

        },1000)
        return () =>clearInterval(timer);

    } )
    return(
        <div>
          <h1>Timer</h1>
        </div>
    )
}
export default Timer