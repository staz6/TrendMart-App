import React, { useEffect, useState } from "react";

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (number: number) =>
    number < 10 ? `0${number}` : number;

  return (
    <div className="flex items-center space-x-2 font-inter">
      <div className="flex flex-col items-center">
        <span className="text-sm text-text2 font-poppins font-medium">
          Days
        </span>
        <span className="text-4xl font-bold tracking-wider">
          {formatNumber(timeLeft.days)}
        </span>
      </div>
      <span className="text-2xl text-red-500 mt-4">:</span>
      <div className="flex flex-col items-center">
        <span className="text-sm text-text2 font-poppins font-medium">
          Hours
        </span>
        <span className="text-4xl font-bold tracking-wider">
          {formatNumber(timeLeft.hours)}
        </span>
      </div>
      <span className="text-2xl text-red-500 mt-4">:</span>
      <div className="flex flex-col items-center">
        <span className="text-sm text-text2 font-poppins font-medium">
          Minutes
        </span>
        <span className="text-4xl font-bold tracking-wider">
          {formatNumber(timeLeft.minutes)}
        </span>
      </div>
      <span className="text-2xl text-red-500 mt-4">:</span>
      <div className="flex flex-col items-center">
        <span className="text-sm text-text2 font-poppins font-medium">
          Seconds
        </span>
        <span className="text-4xl font-bold tracking-wider">
          {formatNumber(timeLeft.seconds)}
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
