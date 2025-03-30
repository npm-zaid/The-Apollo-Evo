import React, { useState, useRef, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import ModelSection from './components/ModelSection';
import CursorFollower from './components/CursorFollower';
import Loader from './components/Loader';
const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < window.innerHeight);
  const lenisRef = useRef(null);

  // Detect if the device is in portrait mode
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < window.innerHeight);
    };

    handleResize(); // Initialize on mount
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Initialize smooth scrolling only if not on mobile
  useEffect(() => {
    if (isMobile) return; // Skip Lenis on mobile for better UX

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: true,
      touchMultiplier: 2,
      infinite: false,
      lerp: 0.02,
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, [isMobile]); // Re-run effect if mobile state changes

  return (
    <div className="overflow-hidden">
      {isMobile ? (
        <div className="mobile-overlay h-screen w-full bg-[#C04922] flex justify-center items-center p-6 text-center">
          <h1 className="text-black text-[5vw] leading-[8vw]">
            Please rotate your device
          </h1>
        </div>
      ) : (
        <>
       <ModelSection/>
        
        </>
      )}
    </div>
  );
};

export default App;
