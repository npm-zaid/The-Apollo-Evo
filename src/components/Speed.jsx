// import React, { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const Speed = () => {
//   const sectionRef = useRef(null);
//   const [horsepower, setHorsepower] = useState(0);
//   const [topSpeed, setTopSpeed] = useState(0);
//   const [boostPower, setBoostPower] = useState(0);

//   const stats = [
//     { label: "power", unit: "hp", target: 900 },
//     { label: "speed", unit: "km/h", target: 400 },
//     { label: "boost power", unit: "hp", target: 200 },
//   ];

//   useEffect(() => {
//     const el = sectionRef.current;

//     if (!el) return;

//     const animateNumber = (target, setter) => {
//       gsap.to(
//         { value: 0 }, 
//         {
//           value: target,
//           duration: 2,
//           ease: 'power2.out',
//           onUpdate: function () {
//             setter(Math.floor(this.targets()[0].value));
//           }
//         }
//       );
//     };

//     ScrollTrigger.create({
//       trigger: el,
//       start: "top 80%",
//       onEnter: () => {
//         animateNumber(900, setHorsepower);
//         animateNumber(400, setTopSpeed);
//         animateNumber(200, setBoostPower);
//       },
//       onLeaveBack: () => {
//         setHorsepower(0);
//         setTopSpeed(0);
//         setBoostPower(0);
//       },
//     });

//   }, []);

//   return (
//     <div ref={sectionRef} className='absolute bottom-0 right-0 w-full flex items-center justify-between bg-zinc-900/70 text-white/70 text-[1.5vw]'>
//       <div className='border-l flex-1 border-[#C04922] border-l-[4px] p-4'>
//         <p>{horsepower}<span className='ml-2 text-[1.2vw]'>hp</span></p>
//         <p className='text-[.9vw]'>power</p>
//       </div>
//       <div className='border-l flex-1 border-[#C04922] border-l-[4px] p-4'>
//         <p>{topSpeed}<span className='ml-2 text-[1.2vw]'>km/h</span></p>
//         <p className='text-[.9vw]'>speed</p>
//       </div>
//       <div className='border-l flex-1 border-[#C04922] border-l-[4px] p-4'>
//         <p>{boostPower}<span className='ml-2 text-[1.2vw]'>hp</span></p>
//         <p className='text-[.9vw]'>boost power</p>
//       </div>
//     </div>
//   );
// };

// export default Speed;

'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import NumberFlow from '@number-flow/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Speed = () => {
  const sectionRef = useRef(null);
  const [values, setValues] = useState(["000", "000", "000"]);

  const stats = [
    { label: "power", unit: "hp", target: 900 },
    { label: "speed", unit: "km/h", target: 400 },
    { label: "boost power", unit: "hp", target: 200 },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      onEnter: () => {
        stats.forEach((stat, index) => {
          gsap.to(
            { value: 0 },
            {
              value: stat.target,
              duration: 2,
              ease: "power2.out",
              onUpdate: function () {
                setValues((prev) => {
                  const newValues = [...prev];
                  newValues[index] = String(Math.floor(this.targets()[0].value)).padStart(3, "0");
                  return newValues;
                });
              }
            }
          );
        });
      },
      onLeaveBack: () => setValues(["000", "000", "000"]), // Reset on scroll out
    });
  }, []);

  return (
    <div ref={sectionRef} className='px-[3vw] absolute bottom-0 right-0 w-full flex items-center justify-between  text-white/70 text-[1.5vw]'>
      {stats.map((stat, index) => (
        <div key={index} className='bg-zinc-900/70 flex-1 border-[#C04922] border-l-[4px] p-4'>
          <p className='flex items-center'>
            {values[index].split('').map((digit, i) => (
              <motion.span
                key={i}
                className="inline-block w-[2vw]"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              >
                <NumberFlow value={digit} />
              </motion.span>
            ))}
            <span className='ml-2 text-[1.2vw]'>{stat.unit}</span>
          </p>
          <p className='text-[.9vw]'>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Speed;

