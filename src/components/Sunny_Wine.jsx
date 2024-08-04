import '../index.css'
import Timer from '../utils/Timer'
import React, { useState, useEffect } from 'react';

const Sunny_Wine = () => {
    const [timeLeft, setTimeLeft] = useState(86400); // Initial time in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
    const initialTime = 360;
  return (
    <>
      <section className='relative flex items-center justify-center h-[40rem] md:h-[32rem] text-white bg-neutral-900'>
        <div 
          className="absolute md:text-[15rem] text-7xl font-bold text-neutral-700 opacity-25"
          style={{ WebkitTextStroke: '0.5px', zIndex: 0 }}
        >
          RIESLING
        </div>
        <div className="absolute flex flex-col  md:flex-row justify-center items-center gap-5">
        <div className='flex flex-col justify-center items-center w-[18rem] gap-1 md:gap-4'>
            <div className='text-yellow-700 text-2xl'>What's New?</div>
            <div className='text-center font-tinos text-4xl md:text-6xl'>A Sunny Wine Icon</div>
            <div className="w-12 " style={{ height: '2px', backgroundColor: '#FFF' }}/>
        </div>
        <img 
          src="src/assets/Wine_bottle_2.png" 
          alt="Wine Bottle"
          className='w-64 md:w-auto md:my-2'
          style={{ zIndex: 1 }}
        />
        <div>
           <div className='flex flex-col gap-5'>
                <div className='flex flex-row gap-3'>
                    <div className='line-through text-yellow-700 text-2xl'>
                        $189.99
                    </div>
                    <div className='text-2xl'>
                        $99.9
                    </div>
                </div>
                    <div className="flex gap-2 text-center text-5xl font-thin ">
                        <div className="flex flex-col text-5xl font-semibold">
                            {hours.toString().padStart(2, '0')} 
                            <div className='font-normal text-2xl opacity-50'>Hours</div>
                        </div>
                        |
                        <div className="flex flex-col text-5xl font-semibold">
                            {minutes.toString().padStart(2, '0')} 
                            <div className='font-normal text-2xl opacity-50'>Minutes</div>
                        </div>
                        |
                        <div className="flex flex-col text-5xl font-semibold">{seconds.toString().padStart(2, '0')}
                        <div className='font-normal text-2xl opacity-50'>Seconds</div>
                        </div>
                    </div>
                <div className='text-yellow-700 text-2xl hover:cursor-pointer '>
                    Shop now  →
                </div>
           </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Sunny_Wine
