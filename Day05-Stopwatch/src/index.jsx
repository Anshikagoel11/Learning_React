import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style.css"; // Import CSS

const WatchApp = () => {
  const [showStopwatch, setShowStopwatch] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      console.log("Timer cleared");
      clearInterval(timer);
    };
  }, []);

  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setStopwatchTime((prev) => prev + 1);
      }, 1000);
    } else if (!isRunning && stopwatchTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  
  return (
    <div className="watch-container">
      <button className="toggle-button" onClick={() => setShowStopwatch((prev) => !prev)}>
        {showStopwatch ? "Show Clock" : "Show Stopwatch"}
      </button>


      {!showStopwatch ? (
        <h1 className="clock-time">{currentTime.toLocaleTimeString()}</h1>
      ) : (
        <div className="stopwatch-box">
          <h1 className="stopwatch-time">{formatTime(stopwatchTime)}</h1>
          <div className="stopwatch-buttons">
            <button onClick={() => setIsRunning(true)}>Start</button>
            <button onClick={() => setIsRunning(false)}>Pause</button>
            <button onClick={() => setStopwatchTime(0)}>Reset</button>
          </div>
        </div>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WatchApp />);
