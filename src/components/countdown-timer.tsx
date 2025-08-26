
"use client";

import { useState, useEffect } from 'react';

const CountdownBox = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 py-2 px-3 sm:py-4 sm:px-6 text-center w-20 sm:w-24">
    <div className="text-3xl sm:text-4xl font-bold font-headline">{value}</div>
    <div className="text-xs sm:text-sm opacity-80 uppercase tracking-widest">{label}</div>
  </div>
);

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set initial value on client mount to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const format = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex justify-center space-x-2 sm:space-x-4">
      <CountdownBox value={format(timeLeft.days)} label="Days" />
      <CountdownBox value={format(timeLeft.hours)} label="Hours" />
      <CountdownBox value={format(timeLeft.minutes)} label="Minutes" />
      <CountdownBox value={format(timeLeft.seconds)} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
