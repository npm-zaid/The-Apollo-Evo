
import React from "react"

const UniqueCard=()=>{
 return(
<div className="min-h-screen bg-black/70 pt-20  my-20 sm:px-8">
    
  
<h1 className='text-[4vw] font-bold  relative leading-12 mb-10 bg-gradient-to-r from-[#C04922] to-zinc-900   animate-gradient bg-[length:200%] bg-clip-text text-transparent'>FEATURES
    <span className='absolute -bottom-4 left-0 w-full h-[4px] rounded-l-full bg-gradient-to-r from-[#C04922] to-transparent  '></span></h1>
    
    <div className="w-full flex sm:flex-row flex-col justify-center items-center gap-8">
        
    <div className="boxes h-[70vh] sm:w-[27vw] w-[70vw]  relative group">
        <div className="absoute top-0 left-0 z-50 inset-0 bg-blue-400/30"></div>
    <div className="sub-box rounded-xl group-hover:rounded-b-none h-[50%] w-full absolute text-center transition-all duration-500  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:top-0 group-hover:-translate-y-0 z-10  face1 flex items-center justify-center text-white/70 sm:text-[1.3vw] text-[5vw] bg-zinc-900"><h1>Advanced Composites</h1></div>
    <div className="sub-box text-white/70 border-2 border-dashed border-[#C04922]  group-hover:rounded-b-xl sm:text-[1vw] text-[2.7vw] p-3  h-[50%] w-full absolute  transition-all duration-500  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:top-full group-hover:-translate-y-full  flex flex-col gap-2 items-center justify-center  ">
    <p>"The EVO's chassis and body panels are constructed from a blend of high-strength carbon fiber and lightweight composites, providing exceptional rigidity and weight savings."</p>
    </div>
    </div>

    <div className="boxes h-[70vh] sm:w-[27vw] w-[70vw]  relative group">
    <div className="sub-box rounded-xl group-hover:rounded-b-none h-[50%] w-full absolute  transition-all duration-500  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:top-0 group-hover:-translate-y-0 z-10 face1 flex items-center justify-center text-white/70 sm:text-[1.3vw] text-[5vw] bg-zinc-900"><h1>Suspension</h1></div>
    <div className="sub-box text-white/70 border-2 border-dashed border-[#C04922]  group-hover:rounded-b-xl sm:text-[1vw] text-[2.7vw] p-3   h-[50%] w-full absolute  transition-all duration-500  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:top-full group-hover:-translate-y-full flex flex-col gap-2 items-center justify-center  ">
    <p>"The EVO features an advanced active suspension system that continuously adjusts to road conditions, providing a smooth and controlled ride."</p>
    </div>
    </div>

    <div className="boxes h-[70vh] sm:w-[27vw] w-[70vw]  relative group">
    <div className="sub-box rounded-xl group-hover:rounded-b-none h-[50%] w-full text-center absolute  transition-all duration-500  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:top-0 group-hover:-translate-y-0 z-10 face1 flex items-center justify-center text-white/70 sm:text-[1.3vw] text-[5vw] bg-zinc-900"><h1>Telemetry System</h1></div>
    <div className="sub-box text-white/70 border-2 border-dashed border-[#C04922]  group-hover:rounded-b-xl sm:text-[1vw] text-[2.7vw] p-3   h-[50%] w-full absolute  transition-all duration-500  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:top-full group-hover:-translate-y-full  flex flex-col gap-2 items-center justify-center  ">
    <p>"An integrated telemetry system provides real-time data on the car's performance, allowing drivers to analyze and optimize their driving."</p></div>
    </div>

    </div>

    
</div>
 )
}

export default UniqueCard
