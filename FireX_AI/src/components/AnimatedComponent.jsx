import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedComponent = () => {
  useEffect(() => {
    gsap.to("#animatedDiv", {
      y: "100vh", // Moves down to center of Page 2
      ease: "power2.out", // Smooth easing
      scrollTrigger: {
        trigger: "#page2", // Page 2 as the trigger point
        start: "top center", // When top of Page 2 reaches center
        end: "center top", // Animation ends when bottom of Page 2 reaches top
        scrub: true, // Makes it react dynamically to scroll speed
      }
    });
  }, []);

  return (
    <div className="relative h-[200vh]">
      <div id="page1" className="h-screen flex items-center justify-center bg-blue-500">
        <h1 className="text-white text-3xl">Page 1</h1>
      </div>
      <div id="animatedDiv" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 p-5 text-white text-lg font-bold rounded-lg shadow-lg">
        Moving Div
      </div>
      <div id="page2" className="h-screen flex items-center justify-center bg-green-500">
        <h1 className="text-white text-3xl">Page 2</h1>
      </div>
    </div>
  );
};

export default AnimatedComponent;
