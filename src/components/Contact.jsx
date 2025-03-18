import React from 'react'
import a_logo from '../assets/Apollo_logo_white.svg'
import shape from '../assets/clip-shape.png'

const Contact = () => {
  return (
    <div className=' bg-black/70 p-4'>
        <div className='grid grid-cols-2 h-full gap-4 '>
            <div className=' h-full   rounded-xl flex'>
            <div className='w-full h-[70%] self-end'>
                <img src={a_logo} alt=" Apollo Logo" className='object-contain w-full h-full' />
            </div>
            </div>
            <div className='  h-full flex flex-col gap-12 justify-center items-start px-6'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-white/50 text-[1.4vw]'>Hong Kong Office</h1>
                    <p className='text-white/80 text-[1vw]'>Unit 2001–02, 20/F, Li Po Chun Chambers 189 Des Voeux Road Central, Hong Kong</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-white/50 text-[1.4vw]'>Investor Relations</h1>
                    <div>
                        <p className='text-white/80 text-[1vw]'>info@apollo.com</p>
                        <p className='text-white/80 text-[1vw]'>+852 2999 9999</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact