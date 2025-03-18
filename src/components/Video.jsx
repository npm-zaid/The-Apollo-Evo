
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vid from '../assets/high.mp4'
const Video = () => {
  const sectionRef = useRef(null);
  const scaleBoxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top", 
        end: "bottom top", 
        scrub: 1.2,
        pin: true, 
        anticipatePin: 1, 
      },
    });
  
    tl.to(scaleBoxRef.current, { scale: 1, borderRadius: "0px", ease: "power2.out" });
  
    return () => {
      tl.kill(); 
    };
  }, []);
  return (
    <div>
      <div className="h-screen bg-black/70  relative z-50  w-full flex flex-col items-center justify-center "
        ref={sectionRef}>
        <div className="h-full scale-[0.3] w-full rounded-3xl overflow-hidden"
          ref={scaleBoxRef}>
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover "
            src={vid}
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
