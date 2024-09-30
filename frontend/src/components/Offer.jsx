
import React, {useEffect, useState} from 'react'

const Offer = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2024-10-19T12:15:00") - +new Date();
        let timeLeft = {};
      
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }else{
            timeLeft={
                days:0,
                hours:0,
                minutes:0,
                seconds:0
            }
        }
      
        return timeLeft;
      };

      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
      });
  return (
    <section className='mx-auto max-w-[1440px] px-6 lg:px-12 bg-banner bg-center bg-cover h-[555px] p-8 rounded-xl my-8'>
        <div className='flex items-center flex-col gap-1 mt-40 max-w-xl'>
            <h3 className='uppercase text-[20px] font-[600]'>Sales Fever</h3>
            <h2 className='bold-44 uppercase'>20% Off Everything</h2>
            <span className='italic font-ace'>Offer ends in</span>
        <div className='flex gap-x-4 xs:gap-x-7 mt-2'>
            <div className='bg-white p-2 rounded-lg'>
                <span className='font-bold text-4xl '>{timeLeft.days}</span>
                <span className='block'>Days</span>
            </div>
            <div className='bg-white p-2 rounded-lg'>
                <span className='font-bold text-4xl '>{timeLeft.hours}</span>
                <span className='block'>Hours</span>
            </div>
            <div className='bg-white p-2 rounded-lg'>
                <span className='font-bold text-4xl '>{timeLeft.minutes}</span>
                <span className='block'>Minutes</span>
            </div>
            <div className='bg-white p-2 rounded-lg'>
                <span className='font-bold text-4xl '>{timeLeft.seconds}</span>
                <span className='block'>Seconds</span>
            </div>
        </div></div>
    </section>
  )
}

export default Offer