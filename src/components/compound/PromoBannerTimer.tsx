import { useState, useEffect } from "react";

const PromoBannerTimer: React.FC = () => {
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
  }, [setTimeLeft]);

  return (
    <div className="flex space-x-4 text-center font-poppins">
      {Object.entries(timeLeft).map(([interval, value]) => (
        <div
          key={interval}
          className="bg-primary w-[3rem] h-[3rem] sm:w-[4.4rem] sm:h-[4.4rem] pb-[0.15rem] flex flex-col justify-center sm:-space-y-[0.4rem] -space-y-[0.2rem] text-text2 rounded-full"
        >
          <p className=" text-[10px] sm:text-lg font-semibold ">{value}</p>
          <p className=" text-[10px] sm:text-[0.8rem]  capitalize  font-medium ">
            {interval}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PromoBannerTimer;
