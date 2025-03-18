import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaShieldAlt, FaTachometerAlt } from 'react-icons/fa';

const Safety = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 }); // Removed once: true, added threshold

  useEffect(() => {
    if (isInView) {
      // Trigger animation
    }
  }, [isInView]);

  return (
    <section className="relative py-24 overflow-hidden">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className='text-[4vw] font-bold relative leading-12 mb-10 bg-gradient-to-r from-[#C04922] to-zinc-900 animate-gradient bg-[length:200%] bg-clip-text text-transparent'>
        Safety First
        <span className='absolute -bottom-4 left-0 w-full h-[4px] rounded-l-full bg-gradient-to-r from-[#C04922] to-transparent'></span>
      </h1>

        <div className="flex items-center justify-between gap-8" ref={ref}>
          <motion.div
            className="bg-zinc-900/80 w-[33vw] rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -150 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            key={`safety-card-1-${isInView}`} // Added key
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[1.5vw] font-semibold text-[#BE4822]">Driver-Focused Cockpit</h2>
              <div className="flex items-center justify-center bg-gradient-to-r from-[#BE4822]/50 to-[#BE4822]/10 p-4 rounded-full"><FaShieldAlt className="text-[#BE4822]  text-[2vw]" /></div>
            </div>
            <p className="text-white/70 text-[1vw]">
              "The EVO's interior is designed with the driver in mind, featuring a minimalist layout and intuitive controls."
            </p>
          </motion.div>

          <motion.div
            className="bg-zinc-900/80 w-[33vw] rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: 150 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            key={`safety-card-2-${isInView}`} // Added key
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[1.5vw] font-semibold text-[#BE4822]">Digital Instrument Cluster</h2>
              <div className="flex items-center justify-center bg-gradient-to-r from-[#BE4822]/50 to-[#BE4822]/10 p-4 rounded-full"><FaTachometerAlt className="text-[#BE4822]  text-[2vw]" /></div>
            </div>
            <p className="text-white/70 text-[1vw]">
              "A high-resolution cluster provides essential driving information, including speed, RPM, and lap times."
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Safety;