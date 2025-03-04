// // import React, { useEffect, useRef } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // const MobileSection = () => {
// //   const containerRef = useRef(null);

// //   useEffect(() => {
// //     const container = containerRef.current;

// //     gsap.fromTo(
// //       container,
// //       { y: -500, opacity: 1 }, // Start position (higher up)
// //       {
// //         y: 0, // Moves to actual position
// //         opacity: 1,
// //         duration: 3.5,
// //         ease: "power2.out",
// //         scrollTrigger: {
// //           trigger: container,
// //           start: "top 20%", // Animation starts when 80% of the section is in viewport
// //           end: "top 50%",
// //           scrub: true, // Smooth animation while scrolling
// //           toggleActions: "play reverse play reverse", // Runs animation when scrolling up & down
// //         },
// //       }
// //     );
// //   }, []);

// //   return (
// //     <div className="flex justify-between py-32">
// //       <div>shyam</div>
// //       <div className="absolute left-80">
// //         <div
// //           ref={containerRef}
// //           className="mobile relative w-72 h-[30rem] bg-contain bg-no-repeat bg-center"
// //           style={{
// //             backgroundImage:
// //               "url(https://cdn.prod.website-files.com/64d9d44b74f7cd98eec10d8d/64df7fea83c1605d10797310_mobile-frame-p-500.png)",
// //           }}
// //         >
// //           <div className="absolute top-[12%] left-[13%] w-[73%] h-[85%] rounded-3xl">
// //             <img
// //               className="w-full h-full rounded-3xl"
// //               src="https://cdn.prod.website-files.com/64d9d44b74f7cd98eec10d8d/651c5a55268670ad5ce725b4_event-stadium-p-500.png"
// //               alt=""
// //             />
// //           </div>
// //         </div>
// //       </div>
// //       <div>ram</div>
// //     </div>
// //   );
// // };

// // export default MobileSection;


import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MobileSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll();
  
  
  const yOffset = useTransform(scrollYProgress, [0, 0.08], [-650, -10]);

  return (
    <div className="relative ">
      <div className="w-full flex justify-center">
      <h1 className="text-center text-6xl w-1/2 mt-44 mb-5 font-bold ">The webs best hotel
      deals for events</h1>
      </div>
      <div className="flex justify-evenly mt-4">
        <div className="w-1/3 flex justify-center mt-10">
        <div className="w-60"> 
        <h1 className="text-2xl text-black"> Search event-exclusive deals & unlock secret prices</h1>
        <h1 className="text-xl mt-5 opacity-50 text-black font-medium">from your favourite hotel brands and apartments.</h1> 
        <img src="webhostel-left.png"  className='pt-10' alt="" />
        </div>
        </div>
        <div className="relative">
          <motion.div
            ref={containerRef}
            className="mobile relative w-[30rem]   h-[36rem]  bg-contain bg-no-repeat bg-center z-10"
            style={{
              backgroundImage:
                "url(https://cdn.prod.website-files.com/64d9d44b74f7cd98eec10d8d/651c5a55268670ad5ce725b4_event-stadium-p-500.png)",
              y: yOffset, 
            }}
          >
         
          <div className="absolute   left-[19.3%] w-[61%] -top-3  rounded-4xl z-0">
              <img
                className="w-full h-full rounded-4xl "
                src="https://cdn.prod.website-files.com/64d9d44b74f7cd98eec10d8d/64df7fea83c1605d10797310_mobile-frame-p-500.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>



        <div className="w-1/3 flex justify-center ">
        <div className="w-60"> 
        <img src="1m.png"  className='' alt="" />
        <h1 className="text-xl text-black mt-10" > Flexible rates, massive savings and a choice of</h1>
        <h1 className="text-xl mt-4  opacity-50 text-black font-medium">over</h1> 
        <h1 className="text-9xl   font-bold text-black ">1M</h1> 
        <h1 className="text-xl  ml-10 opacity-50 text-black font-medium">properties</h1> 
        </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSection;
   //https://cdn.prod.website-files.com/64d9d44b74f7cd98eec10d8d/651c5a55268670ad5ce725b4_event-stadium-p-500.png