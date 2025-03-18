import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  useEffect(() => {
    gsap.fromTo(
      '.story-text span',
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
          trigger: '.story-container',
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
    "The Apollo EVO is the culmination of years of research and development by a team of passionate engineers and designers.",
    "It represents the pinnacle of hypercar engineering, pushing the boundaries of performance and design.",
    "Inspired by the golden age of motorsport, the EVO pays homage to the legendary racing machines of the past while embracing the technology of the future.",
    "The vibrant orange paintwork is a nod to the iconic racing liveries of the past, while the exposed carbon fiber elements showcase the car's lightweight construction."
  ];

  return (
    <div className='min-h-screen mt-24 text-white/70 text-[1.3vw] story-container overflow-hidden'>
      <h1 className='text-[4vw] font-bold relative leading-12 mb-10 bg-gradient-to-r from-[#C04922] to-zinc-900 animate-gradient bg-[length:200%] bg-clip-text text-transparent'>
        Our Story
        <span className='absolute -bottom-4 left-0 w-full h-[4px] rounded-l-full bg-gradient-to-r from-[#C04922] to-transparent'></span>
      </h1>

      <div className='flex flex-col gap-8 justify-center w-[60vw]'>
        {textLines.map((line, index) => (
          <p key={index} className="story-text" style={{ perspective: '1000px', whiteSpace: 'pre-wrap' }}>
            {line.split('').map((char, charIndex) => (
              <span key={charIndex} className="inline-block leading-[2.5vw]">
                {char}
              </span>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Story;
