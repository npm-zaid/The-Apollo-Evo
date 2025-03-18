import React, { useEffect } from 'react';
import shape from '../assets/clip-shape.png'
import pic1 from '../assets/pic_1.jfif'
import pic2 from '../assets/pic_2.jfif'
import pic3 from '../assets/pic_3.jfif'   
import pic4 from '../assets/pic_4.jfif'
import pic5 from '../assets/pic_5.jfif'
import pic6 from '../assets/pic_6.jpg'
import pic7 from '../assets/pic_7.jpg'
import pic8 from '../assets/pic_8.jpg'
import pic9 from '../assets/pic_9.jpg'
import pic10 from '../assets/pic_10.jpg'
import pic11 from '../assets/pic_11.avif'
import pic12 from '../assets/pic_12.avif'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  useEffect(() => {
    // Assign data-origin for images that don't have it
    document.querySelectorAll('.img:not([data-origin])').forEach((image, idx) => {
      image.setAttribute('data-origin', idx % 2 === 0 ? 'left' : 'right');
    });

    gsap.set('.img', { scale: 0, force3D: true });

    const rows = document.querySelectorAll('.row');
    rows.forEach((row, index) => {
      const rowImages = row.querySelectorAll('.img');

      if (rowImages.length > 0) {
        row.setAttribute('id', `row-${index}`);

        ScrollTrigger.create({
          id: `scaleIn-${index}`,
          trigger: row,
          start: 'top bottom',
          end: 'bottom bottom-=10%',
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: function (self) {
            const progress = self.progress;
            const easedProgress = Math.min(1, progress * 1.2);
            const scaleValue = gsap.utils.interpolate(0, 1, easedProgress);

            rowImages.forEach((image) => {
              gsap.set(image, {
                scale: scaleValue,
                force3D: true,
              });
            });

            if (progress > 0.95) {
              gsap.set(rowImages, {
                scale: 1,
                force3D: true,
              });
            }
          },
          onLeave: function () {
            gsap.set(rowImages, {
              scale: 1,
              force3D: true,
            });
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill()); // Cleanup on unmount
    };
  }, []);

  return (
  
      <div className="w-full bg-black/70 z-50 relative px-[2vw] pt-24">
   <h1 className='text-[4vw] font-bold  relative leading-12 mb-10 bg-gradient-to-r from-[#C04922] to-zinc-900   animate-gradient bg-[length:200%] bg-clip-text text-transparent'>gallery
   <span className='absolute -bottom-4 left-0 w-full h-[4px] rounded-l-full bg-gradient-to-r from-[#C04922] to-transparent  '></span></h1>

        {/* Row 1 */}
        <div className="row">
          <div className="col"><div className="img">
          <img src="https://i.pinimg.com/474x/cc/71/3e/cc713eef8439a4aeb3c4800b3382256d.jpg" alt="" /></div></div>
          <div className="col"></div>
          <div className="col"><div className="img"><img src="https://i.pinimg.com/474x/1a/d2/06/1ad206ae3a3b1dc42e4e5b735dbde908.jpg" alt="" /></div></div>
          <div className="col"></div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="col"></div>
          <div className="col"><div className="img"><img src="https://i.pinimg.com/474x/6d/48/89/6d488981f749afc5bdc2100973a92a95.jpg" alt="" /></div></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>

        {/* Row 3 */}
        <div className="row">
          <div className="col"><div className="img"><img src="https://i.pinimg.com/474x/5c/1c/d0/5c1cd07d0e3311560b723c27ca1ef427.jpg" alt="" /></div></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"><div className="img"><img src="https://i.pinimg.com/474x/f8/2a/bd/f82abd6e75ea2f7487fad815a0b27428.jpg" alt="" /></div></div>
        </div>

        {/* Row 4 */}
        <div className="row">
          <div className="col"></div>
          <div className="col"><div className="img"><img src={pic11} alt="" /></div></div>
          <div className="col"><div className="img"><img src={pic12} alt="" /></div></div>
          <div className="col"></div>
        </div>

        {/* Row 5 */}
        <div className="row">
          <div className="col"><div className="img"><img src={pic7} alt="" /></div></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"><div className="img"><img src={pic5} alt="" /></div></div>
        </div>

        {/* Row 6 */}
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"><div className="img"><img src={pic9} alt="" /></div></div>
          <div className="col"></div>
        </div>

        {/* Row 7 */}
        <div className="row">
          <div className="col"></div>
          <div className="col"><div className="img"><img src={pic10} alt="" /></div></div>
          <div className="col"></div>
          <div className="col"><div className="img"><img src={pic6} alt="" /></div></div>
        </div>

        {/* Row 8 */}
        <div className="row">
          <div className="col"><div className="img"><img src={pic4} alt="" /></div></div>
          <div className="col"></div>
          <div className="col"><div className="img"><img src={pic8} alt="" /></div></div>
          <div className="col"></div>
        </div>

        {/* Row 9 */}
        <div className="row">
          <div className="col"></div>
          <div className="col"><div className="img"><img src={pic2} alt="" /></div></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>

        {/* Row 10 */}
        <div className="row">
          <div className="col"><div className="img"><img src={pic4} alt="" /></div></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"><div className="img"><img src={pic3} alt="" /></div></div>
        </div>
      </div>
  );
};

export default Gallery;
