import React, { useEffect, useState } from 'react';
import "./Timer.css"
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RadialSeparators from './components/parts/RadialSeparators';

const default_minutes = 5;
const seconds = 60;
const minutes = 5;

export default function Time() {
  const [time, setTime] = useState(0);
  const [totalTime, setTotalTime] = useState(default_minutes * seconds);
  const [isPaused, setIsPaused] = useState(false);
  const [inputTime, setInputTime] = useState(null);

  const handleStartTimer = () => {
    if (inputTime) {
      const newTotalTime = +inputTime * 60;
      setTotalTime(newTotalTime);
      setTime(0);
    }
    setInputTime('')
  }

  useEffect(() => {
    let timer = setInterval(() => {
      if (isPaused) {
        return
      }
      if (time === totalTime) {
        setTime(0);
      }
      if (time !== totalTime) {
        setTime((prevState) => prevState + 1);
      } else {
        clearInterval(timer);
      }

    }, 1000);

    return () => clearInterval(timer);
  }, [time, isPaused, totalTime])


  let measuredTime = new Date(null);
  measuredTime.setSeconds(totalTime - time);
  let MHSTime = measuredTime.toISOString().substr(11, 8);
  const percentage = Math.round((time / totalTime) * 100)


  return (
    <div className='timer__container'>
      <div className='timer_controller__container'>
        <input
          placeholder='Dial time in minutes'
          type='number'
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
        />
        <button className={`${inputTime ? '' : 'disabled__btn'} timer__start enter_btn` }
          onClick={() => handleStartTimer()}
          disabled={inputTime ? false : true}
        >Start</button>
      </div>
      <div className='timer_controller__container'>
        {
          isPaused ? <button className='timer__start'
            onClick={() => setIsPaused(false)}
          >Start</button>
            :
            <button className='timer__start'
              onClick={() => setIsPaused(true)}
            >Pause</button>
        }
        <button className='timer__start'
          onClick={() => setTime(0)}
        >Reset</button>
      </div>
      <div className='timer_clock__Container'>
        <CircularProgressbarWithChildren
          value={percentage}
          text={MHSTime}
          strokeWidth={5}
          styles={buildStyles({
            strokeLinecap: "butt",
            pathColor: 'rgba(239, 100, 81)',
            textColor: 'rgb(176, 103, 243)',
          })}
        >
          <RadialSeparators
            count={150}
            style={{
              background: "#fff",
              width: "4px",
              // This needs to be equal to props.strokeWidth
              height: `${10}%`
            }}
          />
        </CircularProgressbarWithChildren>
      </div>
    </div>
  )
}
