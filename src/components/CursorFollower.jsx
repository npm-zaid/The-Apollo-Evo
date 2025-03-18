import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

const CursorFollower = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            if (!cursorRef.current) return;

            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: .7,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

  return (
    <div ref={cursorRef} className='fixed top-0 left-0 w-6 h-6 rounded-full bg-[#C04922] mix-blend-difference pointer-events-none z-50 border-[#C04922] flex items-center justify-center'>
    <div className='h-4 w-4 rounded-full bg-black/80 animate-spin border-[#C04922] border-2 border-dotted flex items-center justify-center'>
    <div className='h-1 w-1 rounded-full bg-[#C04922]'></div>
    </div>
    </div>
  )
}

export default CursorFollower