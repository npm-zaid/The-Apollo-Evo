import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import qt from '../assets/quote-right-svgrepo-com.svg';

gsap.registerPlugin(ScrollTrigger);

const Intro2 = () => {
  useEffect(() => {
    gsap.fromTo(
      '.intro-text span',
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
        stagger: 0.03,
        scrollTrigger: {
          trigger: '.intro-container',
          start: 'top 80%',
          end: 'bottom top+=20%',
          scrub: true,
          toggleActions: "play none none reverse"
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const textLines = [
    "The Apollo EVO is a testament to the fusion of raw performance and cutting-edge design. Born from a vision to redefine the boundaries of hypercar engineering, the EVO is a symphony of aerodynamic precision and electrifying power.",
    "This vehicle is engineered for those who demand an unparalleled driving experience, where every curve and straightaway becomes a canvas for automotive artistry."
  ];

  return (
    <section className="intro-container overflow-hidden">
      <div className="flex gap-10 ml-auto w-fit">
        <img src={qt} alt="" className="h-fit w-[8vw] z-0 opacity-70" />
        <div className="text-white/70 text-[1.2vw] w-[40vw] flex flex-col gap-4 relative">
          {textLines.map((line, index) => (
            <p key={index} className="intro-text" style={{ perspective: '1000px', whiteSpace: 'pre-wrap' }}>
              {line.split('').map((char, charIndex) => (
                <span key={charIndex} className="inline-block leading-[2vw]">
                  {char}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro2;
