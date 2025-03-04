
// // export default EasySearch;
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const EasySearch = () => {
//   gsap.registerPlugin(ScrollTrigger);

//   const sectionRef = useRef(null);
//   const mob1Ref = useRef(null);
//   const mob2Ref = useRef(null);
//   const mob3Ref = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       mob1Ref.current,
//       { x: 100, y: -300, opacity: 0 }, // Initial: Right & Top
//       {
//         x: -100, y: 0, opacity: 1, // Final: Left & Down
//         duration: 1.5,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           end: "top 40%",
//           scrub: true,
//         },
//       }
//     );

//     gsap.fromTo(
//       mob2Ref.current,
//       { y: -300, opacity: 0 }, // Initial: Top
//       {
//         y: 0, opacity: 1, // Final: Down
//         duration: 1.5,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           end: "top 40%",
//           scrub: true,
//         },
//       }
//     );

//     gsap.fromTo(
//       mob3Ref.current,
//       { x: -160, y: -300, opacity: 0 }, // Initial: Left & Top
//       {
//         x: 100, y: 0, opacity: 1, // Final: Right & Down
//         duration: 3.5,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           end: "top 40%",
//           scrub: true,
//         },
//       }
//     );
//   }, []);

//   return (
//     <div ref={sectionRef} className="overflow-hidden bg-black min-h-screen flex flex-col justify-center">
//       <h1 className="text-3xl text-center text-white">Discover</h1>
//       <h1 className="text-5xl text-center text-white mb-12">Easy Search</h1>

//       <div className="flex justify-evenly w-[70%] mx-auto">
//         <img ref={mob1Ref} src="mob1.png" alt="Mobile 1" className="w-60" />
//         <img ref={mob2Ref} src="mob2.png" alt="Mobile 2" className="w-60" />
//         <img ref={mob3Ref} src="mob3.png" alt="Mobile 3" className="w-60" />
//       </div>
//     </div>
//   );
// };

// export default EasySearch;

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const EasySearch = () => {
//   gsap.registerPlugin(ScrollTrigger);

//   const sectionRef = useRef(null);
//   const mob1Ref = useRef(null);
//   const mob2Ref = useRef(null);
//   const mob3Ref = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       mob1Ref.current,
      // { x: 100, y: -300, opacity: 0 },
//       {
//         x: -100, y: 0, opacity: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           end: "top 20%", // More distance for slower effect
//           scrub: 2, // Adds smoothness
//         },
//       }
//     );

//     gsap.fromTo(
//       mob2Ref.current,
//       { y: -300, opacity: 0 },
//       {
//         y: 0, opacity: 1,
//         ease: "power2.out",
        // scrollTrigger: {
        //   trigger: sectionRef.current,
        //   start: "top 80%",
        //   end: "top 20%",
        //   scrub: 2,
        // },
//       }
//     );

//     gsap.fromTo(
//       mob3Ref.current,
//       { x: -160, y: -300, opacity: 0 },
//       {
//         x: 100, y: 0, opacity: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           end: "top 10%", // Takes longer to finish
//           scrub: 2, 
//         },
//       }
//     );
//   }, []);

//   return (
//     <div ref={sectionRef} className="overflow-hidden bg-black min-h-screen flex flex-col justify-center">
//       <h1 className="text-3xl text-center text-white">Discover</h1>
//       <h1 className="text-5xl text-center text-white mb-12">Easy Search</h1>

//       <div className="flex justify-evenly w-[70%] mx-auto">
//         <img ref={mob1Ref} src="mob1.png" alt="Mobile 1" className="w-60" />
//         <img ref={mob2Ref} src="mob2.png" alt="Mobile 2" className="w-60" />
//         <img ref={mob3Ref} src="mob3.png" alt="Mobile 3" className="w-60" />
//       </div>
//     </div>
//   );
// };

// export default EasySearch;


import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EasySearch = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);
  const mob1Ref = useRef(null);
  const mob2Ref = useRef(null);
  const mob3Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      mob1Ref.current,
      { x: 100, y: -150, opacity: 0 }, 
      {
        x: 0, y: 0, opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 5%",
          scrub: 3, 
        },
      }
    );

    gsap.fromTo(
      mob2Ref.current,
      { y: -150, opacity: 0 },
      {
        y: 0, opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 5%",
          scrub: 3,
        },
      }
    );

    gsap.fromTo(
      mob3Ref.current,
      { x: -100, y: -150, opacity: 0 },
      {
        x: 0, y: 0, opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 5%",
          scrub: 3,
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef}  className=" mt-10 overflow-hidden bg-black min-h-screen flex flex-col justify-center">
      <h1 className="text- mt-8 opacity-80 xl text-center text-white">Discover</h1>
      <h1 className="text-6xl text-center font-bold text-white mb-12">Easy Search</h1>
      
      <div className="flex  justify-evenly ">
        <div className=" ">
        <img ref={mob1Ref} src="mob1.png" alt="Mobile 1" className="w-60" />
        <h1 className="text-3xl text-center mt-8  text-white font-bold">Book</h1>
        <div className=" flex justify-center">
        <h1 className="text-lg  mt-2 text-center opacity-40 w-52   text-white ">Nearest hotels to your event are shown on an easy-to-use map., .</h1>
        </div>
        </div>
        <div className=" ">
        <img ref={mob2Ref} src="mob2.png" alt="Mobile 2" className="w-60" />
        <h1 className="text-3xl text-center mt-8  text-white font-bold">Book</h1>
        <div className=" flex justify-center">
        <h1 className="text-lg  mt-2 text-center opacity-40 w-52   text-white ">Nearest hotels to your event are shown on an easy-to-use map., .</h1>
        </div>
        </div>
        <div className="">
        <img ref={mob3Ref} src="mob3.png" alt="Mobile 3" className="w-60" />
        <h1 className="text-3xl text-center mt-8  text-white font-bold">Book</h1>
        <div className=" flex justify-center">
        <h1 className="text-lg  mt-2 text-center opacity-40 w-52   text-white ">Nearest hotels to your event are shown on an easy-to-use map., .</h1>
        </div>
        </div>
       
       
      </div>
    </div>
  );
};

export default EasySearch;
