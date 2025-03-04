import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Text from './Text';
const Deals = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imgRef=useRef(null);
  const moveRefs=useRef(null)
  useEffect(()=>{
  gsap.to(imgRef.current,
   
    {  
    y:-60,
    ease:"power2.out",
    scrollTrigger: {
      trigger: imgRef.current,
      start: "top 80%",
      end:"bottom 20%",
      scrub:2,

    },
  },
    );
    gsap.to(moveRefs.current,
   
      {  
      y:-20,
      ease:"power2.out",
      scrollTrigger: {
        trigger: moveRefs.current,
        start: "top 80%",
    
  
      },
    },
      )
  })


  return (
    <div className=''>
    <div className='flex justify-center mt-44'>
    <h1 className='text-6xl  w-2/5 font-bold text-center' >Deals to make your eyes water</h1>
    </div>
    <div className='flex justify-center  mt-44'>
    <div className='w-1/2 relative'>
    <img  ref={imgRef}  src="Girl.png" className=' w-[70%]' alt="" />
    <div className='absolute top-3 left-72 z-30 '>
    <img src="GirlPhone.png" alt="" className='w-[70%]' />
    </div>
    </div>
    <Text className='mt-20' textOne='Event exclusives' textTwo='VIP benefits only available with EventBeds™'/>
    {/* <div className='mt-20 '>
     <h1 className='text-5xl w-1/3 font-bold'></h1>
     <h1 className='text-xl w-[70%]'></h1>
    </div> */}
    </div>




    <div className='flex justify-evenly items-center mt-80'>
    <div className='w-1/2 flex justify-center items-center'>
    <Text className='text-start w-1/2' textOne='Brand discounts'
    textTwo='Unlock secret prices at your favourite brands with powerful discounts'/>
    {/* <div className='text-start w-1/2 '>
    <h1 className='text-5xl  font-bold'></h1>
    <h1 className='text-xl mt-8 opacity-60  '></h1>
    </div> */}
    </div>
    <div className='w-1/2 relative' ref={moveRefs}>
    <img src="empireEstate.png" className='w-4/5' alt="" />
    <div className='absolute top-48 -left-20'>
    <img src="Hilton.png"  className='w-28 move 'alt="" />
    </div>
    <div className='absolute top-16 left-64'>
    <img src="99.png"  className='w-44 move 'alt="" />
    </div>

    <div className='absolute top-72 left-96'>
    <img src="Marriot.png"  className='w-36 move 'alt="" />
    </div>

    <div className='absolute bottom-18 left-20'>
    <img src="hyatt.png"  className='w-32 move'alt="" />
    </div>

    <div className='absolute bottom-18 left-56'>
    <img src="119.png"  className='w-44 move 'alt="" />
    </div>
    </div>
    </div>
   
    

   
    <div className='flex justify-center  items-center mt-28'>
    <div className='w-1/2 relative'>
    <img   src="referalScheme.png" className=' w-[75%]' alt="" />
    
    <div className='absolute top-20 left-96'>
  <img src="sharelove.png"  className='w-64 move 'alt="" />
    </div>
    <div className='absolute bottom-4 -left-8'>
    <img src="exclusiveDiscounts.png"  className='w-72 move 'alt="" />
    </div>
    </div>
    <Text className='w-1/5 ml-20' textOne='Referal schemes' textTwo='Send your exclusive discounts to other event attendees. Share the love'/>
   
    </div>
    </div>
  )
}

export default Deals

