import React from 'react'
import gsap from 'gsap';
import { useEffect } from 'react';
import logo from '../assets/car_logo-removebg-preview.png'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Svg = () => {

    useEffect(()=>{
        gsap.to('.data',{
          attr:{startOffset:'100%'},
          duration:5,
          scrollTrigger: {
            trigger: '.data',
            scroller:'body',
            start: "top 70%",
            end: "bottom 10%",
            scrub: true,
          },
        })
      })
      

  return (
    <div className="class sm:h-screen h-[50vh] ">
    <svg className="w-full h-full text-[1.5vw]" viewBox="0 0 250 90">
        <path
          id="curve"
          fill="none"
          stroke=""
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text className="data uppercase" style={{ fill: "#C04922" }}>
        
              <textPath className="data "  startOffset={"-250%"} href="#curve">
             <img src={logo} alt="logo" className="w-[6vw]"/> WE BELIEVES LIFE BEGINS AT 6000 RPM'S.
              </textPath>
             

        </text>
      </svg>
    </div>
  )
}

export default Svg