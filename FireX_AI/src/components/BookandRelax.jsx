import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BookandRelax() {
  useEffect(() => {
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".building-image",
        start: "top 40%",
        end: "top 20%",
        scrub: true,
      },
    });
  
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".building-image",
        start: "top 11%",
        end: "top -10%",
        scrub: true,
      },
    });
  
    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".building-image",
        start: "bottom 180%",
        end: "bottom 150%",
        scrub: true,
      },
    });
  
    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".building-image",
        start: "bottom 150%",
        end: "bottom 120%",
        scrub: true,
      },
    });
  
    // First Set Animation (Window + Feature Card 1)
    tl1.fromTo(
      ".window-img",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    )
    .fromTo(
      ".feature-img",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.5" // Slight overlap in animations
    );
  
    // Second Set Animation (Window + Feature Card 2)
    tl2.fromTo(
      ".wind",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    )
    .fromTo(
      ".img",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.5"
    );
  
    // Third Set Animation (Window + Feature Card 3)
    tl3.fromTo(
      ".windyy",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    )
    .fromTo(
      ".imgy",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.5"
    );
  
    // Fourth Set Animation (Window + Feature Card 4)
    tl4.fromTo(
      ".winder",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    )
    .fromTo(
      ".imger",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.5"
    );
  
  }, []);
  

  return (
    <div className='container flex flex-col h-auto w-full'>
      <div className='bg-[#191919] h-[250px]'>
      <h1 className='text-center  mt-20 text-6xl font-bold text-white'>Book and Relax</h1>
      <div className='flex justify-center mt-10 '>
      <h1 className='text-center text-xl opacity-60 w-96 text-white'> Flexible options give you more time to get ready for your trip and less time stressing if things change.</h1>
      </div>
      </div>
      <div className='bg-[#191919] h-[150px]'>123</div>

      {/* Parent Background Image */}
      <div className="building-image h-[290vh] bg-[url('https://cdn.prod.website-files.com/64d9d44b74f7cd98eec10d8d/6501532a35aaea1cbaf189a9_hotel-grey.png')] bg-cover  md:bg-center  relative">
        
        {/* First Set */}
        <div className='absolute lg:top-12  xl:top-[-23px] window-img '>
          <img
            src="https://cdn.prod.website-files.com/64d9d44b74f7cd98eec10d8d/650153251c66adada4f3bac9_hotel-window-4.png"
            alt=""
          />
        </div>
        <div className='absolute top-52 left-48 feature-img'>
          <img
            src="https://cdn.prod.website-files.com/64d9d44b74f7cd98eec10d8d/6501547c6e9c7bac7330972c_hotel-card-1.png"
            alt=""
            className='h-[300px]'
          />
        </div>

        {/* Second Set (Appears later when scrolling down) */}
        <div className='absolute  xl:top-[-23px]  wind'>
          <img
            src="https://cdn.prod.website-files.com/64d9d44b74f7cd98eec10d8d/65015326dabf1eae4b2bf026_hotel-window-3.png"
            alt=""
          />
        </div>
        <div className='absolute top-96 right-56 img'>
          <img
            src="https://cdn.prod.website-files.com/64d9d44b74f7cd98eec10d8d/6501547c35aaea1cbaf383e0_hotel-card-3.png"
            alt=""
            className='h-[300px]'
          />
        </div>



        {/* Third Set  */}

        <div className='absolute  xl:top-[-23px] windyy'>
          <img
            src="https://cdn.prod.website-files.com/64d9d44b74f7cd98eec10d8d/650153271e2bd5d192e6dc7f_hotel-window-2.png"
            alt=""
          />
        </div>
        <div className='absolute imgy left-60 bottom-[36%]'>
          <img
            src="https://cdn.prod.website-files.com/64d9d44b74f7cd98eec10d8d/6501547c76037eb549778290_hotel-card-2.png"
            alt=""
            className='h-[300px]'
          />
        </div>


        {/* Fourth set */}


        <div className='absolute  lg:top-6  xl:top-[-23px] winder'>
          <img
            src="https://cdn.prod.website-files.com/64d9d44b74f7cd98eec10d8d/650153279726dbc3245c9b86_hotel-window-1.png"
            alt=""
          />
        </div>
        <div className='absolute imger right-56 bottom-[25%]'>
          <img
            src="https://cdn.prod.website-files.com/64d9d44b74f7cd98eec10d8d/6501547c876f06945d63e806_hotel-card-4.png"
            alt=""
            className='h-[300px]'
          />
        </div>






      </div>

      
    </div>
  );
}