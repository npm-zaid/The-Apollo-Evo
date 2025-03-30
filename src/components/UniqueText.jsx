import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import qt from '../assets/quote-right-svgrepo-com.svg';

gsap.registerPlugin(ScrollTrigger);

const Intro2 = () => {
  useEffect(() => {
    gsap.fromTo(
        '.unique-text span',
        {
            "will-change": "opacity, transform",
            z: () => gsap.utils.random(500, 950),
            opacity: 0,
            xPercent: (pos) => gsap.utils.random(-100, 100),
            yPercent: (pos) => gsap.utils.random(-10, 10),
            rotationX: () => gsap.utils.random(-90, 90)
        },
        {
            ease: "expo",
            opacity: 1,
            rotationX: 0,
            rotationY: 0,
            xPercent: 0,
            yPercent: 0,
            z: 0,
            scrollTrigger: {
                trigger: '.unique-text-container',
                start: "center center",
                end: "+=300%",
                scrub: true,
                markers: true,
                pin: '.unique-text-container'
            },
            stagger: {
                each: 0.006,
                from: "random"
            }
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
    <section className="unique-text-container overflow-hidden px-[3vw] h-screen flex items-center justify-center">
     
        <div className="text-white/70 text-[1.2vw]  flex flex-col gap-4 relative">
          {textLines.map((line, index) => (
            <p key={index} className="unique-text" style={{ perspective: '1000px', whiteSpace: 'pre-wrap' }}>
              {line.split('').map((char, charIndex) => (
                <span key={charIndex} className="inline-block leading-[2vw]">
                  {char}
                </span>
              ))}
            </p>
          ))}
        </div>
    </section>
  );
};

export default Intro2;
