
import qt from '../assets/quote-right-svgrepo-com.svg'
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Info2 = () => {
  useEffect(() => {
    gsap.fromTo(
      '.page3 h1 span',
      {
        willChange: 'opacity, transform',
        transformOrigin: '50% 0%',
        opacity: 0,
        rotationX: -90,
        z: -200,
      },
      {
        ease: 'power1',
        opacity: 1,
        rotationX: 0,
        z: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.page3',
          start: 'top 80%',
          end: 'bottom top+=20%',
          scrub: true,
          toggleActions: "play none none reverse"
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const textLines = [
    "The Apollo EVO is a testament to the fusion of raw performance and cutting-edge design. Born from a vision to redefine the boundaries of hypercar engineering, the EVO is a symphony of aerodynamic precision and electrifying power.",
    "This vehicle is engineered for those who demand an unparalleled driving experience, where every curve and straightaway becomes a canvas for automotive artistry.",
  ];

  return (
    <div className=" overflow-hidden">
        <section className='flex gap-10 page3   '>
            <img src={qt} alt=""  className='h-fit w-[8vw] z-0 opacity-70'/>
            <div className='flex flex-col gap-10'>
      {textLines.map((line, index) => (
        <h1 key={index} className='text-start text-wrap text-white/70 text-[1.3vw] ' style={{ perspective: '1000px', whiteSpace: 'pre-wrap' }}> {/* Add whiteSpace */}
          {line.split('').map((char, charIndex) => (
            <span key={charIndex} className="inline-block leading-[2.5vw]">
              {char}
            </span>
          ))}
        </h1>
      ))}
            </div>
      </section>
    </div>
  );
};

export default Info2;
