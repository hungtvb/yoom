'use client'

import React, { useEffect, useState } from 'react'

const HeroBanner = () => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
  
      const nowInterval = setInterval(() => {
          setNow(new Date());
      }, 1000);
  
      return () => clearInterval(nowInterval);
    },[])
  
    const time = now.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
    const date = (new Intl.DateTimeFormat('en-US', {dateStyle: 'full'})).format(now);
  
    return (
        <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
          <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
            <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">Upcoming Meeting at: 12:00 PM</h2>
            <div className="flex flex-col gap-2">
              <h1 className="font-extrabold text-4xl lg:text-7xl">{time}</h1>
              <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
            </div>
          </div>
        </div>
    )
}

export default HeroBanner