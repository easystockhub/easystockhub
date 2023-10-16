"use client"
import { useEffect, useState } from "react";
import { CommonEventTimer } from "./CommonEventTimer";

function Days({count}: {count: number}) {
    return <CommonEventTimer count={count} name="DAYS"/>
}
function Hours({count}: {count: number}) {
    return <CommonEventTimer count={count} name="HOURS"/>
}
function Minutes({count}: {count: number}) {
    return <CommonEventTimer count={count} name="MINUTES"/>

}
function Seconds({count}: {count: number}) {
    return <CommonEventTimer count={count} name="SECONDS"/>

}

type Time = {
  days: number
  hours: number
  minutes: number
  seconds: number

}


export function EventTimer() {

  const [time, setTime] = useState<Time>({
    days: 0,
    hours:0,
    minutes: 0,
    seconds: 0
  })

  const calculate = () => {
    const futureDate = new Date('2023-10-17T23:00:00'); // Replace with your desired future date and time

    const currentDate = new Date();
    const timeDifference = futureDate.getTime() - currentDate.getTime();
  
    if (timeDifference < 0) {
      console.log("The future date is in the past.", timeDifference);
      return;
    }
  
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    setTime({
      days,
      hours,
      minutes,
      seconds
    })
  }

  useEffect(()=> {
    setInterval(()=> {
      calculate()
    }, 1000)
  }, [])

  return <div style={{ display: "flex", justifyContent: "center" }}>
    <Days count={time.days}/>
    <Hours count={time.hours}/>
    <Minutes count={time.minutes}/>
    <Seconds count={time.seconds}/>

  </div>;
}
