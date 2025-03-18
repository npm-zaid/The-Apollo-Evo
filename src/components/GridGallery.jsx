import React from 'react'
import shape from '../assets/clip-shape.png'
import shape2 from '../assets/clip_shape_2.png'
const GridGallery = () => {
  return (
    <>
    <div className='h-screen w-full bg-[#000000] flex items-center gap-10 justify-center text-2xl'>
        <div className="card h-[70vh] w-[27vw] rounded-xl bg-zinc-700 relative overflow-hidden"><img className='absolute top-0 right-0 w-[6vw] z-40' src={shape} alt="" /> <h1 className='absolute top-5 right-0 z-50 text-white num'>01</h1>
        <img className='h-full w-full object-cover rounded-xl hover:scale-110 transition-all duration-500' src='https://framerusercontent.com/images/Rb7jjcw9wCB9Zb8807hKxoZKcw.png'></img>
       
        </div>
        <div className="card h-[70vh] w-[27vw] rounded-xl bg-zinc-700 relative overflow-hidden"><img className='absolute top-0 right-0 w-[6vw] z-40' src={shape} alt="" /> <h1 className='absolute top-5 right-0 z-50 text-white num'>02</h1>
        <img className='h-full w-full object-cover rounded-xl hover:scale-110 transition-all duration-500' src='https://framerusercontent.com/images/QDcJB2OLe3UAxM2RM7hyw8eeCo.jpg?scale-down-to=4096'></img>
        </div>

        <div className="card h-[70vh] w-[27vw] rounded-xl bg-zinc-700 relative overflow-hidden"><img className='absolute top-0 right-0 w-[6vw] z-40' src={shape} alt="" /> <h1 className='absolute top-5 right-0 z-50 text-white num'>03</h1>
        <img className='h-full w-full object-cover  rounded-xl hover:scale-110 transition-all duration-500' src='https://framerusercontent.com/images/rGSjk4G3aonrralLZTrBn5SSQ.webp?scale-down-to=2048'></img>
        </div>
      
    </div>

    <div className='h-[90vh] w-[95%] m-auto relative bg-[#000000] flex items-center gap-10 justify-center text-2xl  overflow-hidden'>
      <img className='h-full w-full object-cover  rounded-xl object-top ' src='https://framerusercontent.com/images/QDcJB2OLe3UAxM2RM7hyw8eeCo.jpg?scale-down-to=4096'></img>
      <img className='absolute top-0 right-0 w-[40vw] z-30' src={shape2}/>

      <div className='flex absolute top-0 right-16 text-white gap-5  z-50 text-[1.5vw]'>
      <h1 
  className='text-black px-6 py-3 bg-[#A7201B] relative' 
  style={{ 
    clipPath: 'polygon(0% 0%, 90% 0%, 100% 100%, 0% 100%, 10% 100%, 0% 50%)'
  }}
>
  ABOUT
</h1>

<h1 
  className='text-black px-6 py-3 bg-[#A7201B] relative' 
  style={{ 
    clipPath: 'polygon(0% 0%, 90% 0%, 100% 100%, 0% 100%, 10% 100%, 0% 50%)'
  }}
>
  WORK
</h1>



      </div>
  
      <img className='absolute bottom-0 left-0 rotate-[180deg] w-[40vw] z-40' src={shape2}></img>
    </div>

    <div className='h-screen bg-zinc-800 my-10 relative overflow-hidden'>
    <svg width="1920" height="292" viewBox="0 0 1920 292" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M86 153.102C154.06 154.632 167.306 83.3973 235.333 85.6016C287.571 87.2942 301.973 128.2 354 132.102C406.06 136.006 433.388 90.9176 482.667 104.102C527.359 116.059 492.105 147.183 520.667 175.602C538.388 193.234 572.079 187.252 588.667 206.102C613.261 234.051 624.364 284.832 667.333 290.602C762.445 303.372 701.069 151.944 794 132.102C868.375 116.221 906.029 177.104 983.333 175.602C1044.54 174.412 1072.81 144.71 1134 143.102C1191 141.604 1220.4 166.608 1277.33 164.102C1332.9 161.656 1360.11 119.887 1413.33 132.102C1453.86 141.401 1452.48 178.653 1493.33 187.102C1517.18 192.032 1532.95 181.829 1556.67 187.102C1624.71 202.232 1577 287 1632.5 287C1696.5 287 1632.26 175.463 1722 152.602C1799.41 132.881 1920 203.602 1920 203.602V0H0V132.102C0 132.102 50.6955 152.308 86 153.102Z" fill='#000000'/>
</svg>

    </div>
    
    <div className='h-screen bg-black'></div>
  </>
  )
}

export default GridGallery