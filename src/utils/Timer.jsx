import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        const totalSeconds = Math.max(prevTime - 1, 0);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        if (totalSeconds === 0) {
          clearInterval(timer);
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="text-center text-white text-4xl font-bold">
        <div className="text-6xl">{String(time.hours).padStart(2, '0')}</div>
        <div className="text-4xl">
          <span className="mx-2">:</span>
          <span className="mx-2">{String(time.minutes).padStart(2, '0')}</span>
          <span className="mx-2">:</span>
          <span className="mx-2">{String(time.seconds).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
