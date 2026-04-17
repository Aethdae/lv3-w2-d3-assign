import React, { useEffect } from "react";
import { useState } from "react";

import TimeCard from "./components/TimeCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TimeCalc from "./components/TimeCalc";
export default function App() {
  const [time, setTime] = useState(new Date());

  //Keep updates slower for real sites;
  useEffect(() => {
    setInterval(() => {
      updateTime();
    }, 16);
  }, []);

  function updateTime() {
    setTime(new Date());
  }

  return (
    <>
      <Header />
      <TimeCard time={time} />
      <TimeCalc
        timeMS={time.getMilliseconds()}
        timeOffset={time.getTimezoneOffset()}
        timeISO={time.toISOString()}
      />
      <Footer time={time} />
    </>
  );
}
