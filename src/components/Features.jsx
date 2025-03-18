import React from 'react'

const Features = () => {
  return (
    <section className=' h-screen text-white/70 text-[1.3vw]'>
    
    <h1 className='text-[4vw] font-bold  relative leading-12 mb-10 bg-gradient-to-r from-[#C04922] to-zinc-900   animate-gradient bg-[length:200%] bg-clip-text text-transparent'>FEATURES
    <span className='absolute -bottom-4 left-0 w-full h-[4px] rounded-l-full bg-gradient-to-r from-[#C04922] to-transparent  '></span></h1>
    <div className='flex  gap-8 justify-center'>
        <div className='w-1/3 bg-zinc-900/70 p-4'>
            <h1 className='text-[1.2vw] text-[#C04922]'>Advanced Composites :</h1>
            <p>"The EVO's chassis and body panels are constructed from a blend of high-strength carbon fiber and lightweight composites, providing exceptional rigidity and weight savings."</p>
        </div>
        <div className='w-1/3 bg-zinc-900/70 p-4'>
            <h1 className='text-[1.2vw] text-[#C04922]'>Active Suspension :</h1>
            <p>"The EVO features an advanced active suspension system that continuously adjusts to road conditions, providing a smooth and controlled ride."</p>
        </div>
        <div className='w-1/3'>
            <h1 className='text-[1.2vw] text-[#C04922]'>Telemetry System :</h1>
            <p>"An integrated telemetry system provides real-time data on the car's performance, allowing drivers to analyze and optimize their driving."</p>
        </div>

  
    </div>

   </section>
  )
}

export default Features