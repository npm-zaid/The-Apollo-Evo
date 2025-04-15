import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import logo from '../assets/car_logo-removebg-preview.png';
import shape2 from '../assets/clip_shape_2.png'

const Hero = () => {
  const textRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      logoRef.current,
      { opacity: 0 , scale: 0.2},
      { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' }
    );
    tl.fromTo(
      textRef.current.querySelectorAll('span'),
      { y: 300, opacity: 0 },
      { y: 0, opacity: 1, duration: 3, stagger: 0.5, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="rounded-xl bg-gradient-to-r from-[#C04922] to-[#131314] relative w-full h-[93vh] mb-16  flex items-center justify-center">
      
      {/* Logo */}
      <img ref={logoRef} src={logo} alt="logo" className="w-[6vw] absolute top-4 left-4" />
      
      {/* Background Shape */}
      <img className="absolute top-0 right-0 w-[40vw] z-30" src={shape2} alt="shape" />
      
      {/* Animated Text */}
      <h1 
        ref={textRef} 
        className="text-[20vw] font-bold text-[#C04922]/40 absolute top-1/2 right-10 -translate-y-1/2 leading-none overflow-hidden"
      >
        {'0001'.split('').map((char, index) => (
          <span key={index} className="inline-block">{char}</span>
        ))}
      </h1>
    
    </div>
  );
};

export default Hero;
