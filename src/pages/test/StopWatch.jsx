import React, { useState, useRef } from 'react';

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);


  // handling the start function
  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10); // Update every 10 milliseconds
    }
  };

  // handling the stop function
  const handleStop = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  };

  // handling the reset function
  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
    setLaps([]);
  };

  // handling the lap function
  const handleLap = () => {
    setLaps([...laps, time]);
  };

  // handling the time in 4 units
  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const getSeconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
    const getMinutes = `0${Math.floor(time / 60000) % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600000)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}.${getMilliseconds}`;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>#Task</h1>
      <h1>Stopwatch</h1>
      <div style={{ fontSize: '48px', marginBottom: '20px' }}>
        {formatTime(time)}
      </div>
      <div>
        {!isRunning ? (
          <button onClick={handleStart} style={{ marginRight: '10px' }}>Start</button>
        ) : (
          <button onClick={handleStop} style={{ marginRight: '10px' }}>Stop</button>
        )}
        <button onClick={handleReset} style={{ marginRight: '10px' }}>Reset</button>
        <button onClick={handleLap} style={{ marginRight: '10px' }} disabled={!isRunning}>Lap</button>
      </div>
      {laps.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Laps</h2>
          <ul>
            {laps.map((lap, index) => (
              <li key={index} style={{ listStyleType: 'none' }}>
                Lap {index + 1}: {formatTime(lap)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StopWatch;
