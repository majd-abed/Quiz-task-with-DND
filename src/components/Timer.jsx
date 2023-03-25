import React, { useEffect } from "react";
import { useGlobal } from "../context/context";

const Timer = () => {
  const { seconds, setSeconds, minutes, setMinutes,setShowResult } = useGlobal();
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      if (seconds + minutes > 0) {
        if (seconds === 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else setSeconds(seconds - 1);
      }
      if(seconds + minutes === 0) setShowResult(true);
    }, 1000);
    return () => clearInterval(timer);
  });
  return (
    <div className={`${seconds <= 30 && minutes === 0 ? "text-red-600" : ""}`}>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};
export default Timer;
