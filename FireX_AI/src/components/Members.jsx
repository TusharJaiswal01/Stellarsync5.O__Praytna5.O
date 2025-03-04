import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Members = () => {
  useEffect(() => {
    gsap.utils.toArray(".animate-text").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: -50, scale: 0.9, },
        {
      
          y: 0,
       
          scale: 1,
          duration: 1.2,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 50%",
            once: true, // ✅ Runs only once per element
          },
        }
      );
    });
  }, []);

  return (
    <div className="flex justify-center mt-40">
      {/* Safe & Secure Payments Section */}
      <div className="w-[45%] bg-[#8D8AFF] rounded-3xl mr-3">
        {/* Payment Images */}
        <div className="flex overflow-x-hidden mt-20">
          <img src="payment1.png" className="h-28 w-44 ml-[-70px]" alt="" />
          <img src="payment2.png" className="h-28 w-44 ml-4" alt="" />
          <img src="payment3.png" className="h-28 w-44 ml-4" alt="" />
        </div>
        <div className="flex justify-evenly overflow-hidden mt-10 ml-18">
          <img src="payment4.png" className="h-28 w-44 ml-4" alt="" />
          <img src="payment5.png" className="h-28 w-44 ml-4" alt="" />
          <img src="payment6.png" className="h-28 w-44 ml-4" alt="" />
        </div>

        {/* Safe & Secure Text */}
        <div className="mt-40 ml-12 w-3/4">
          <h1 className="text-6xl text-white font-bold animate-text">
            Safe & secure
          </h1>
          <h1 className="text-6xl text-white font-bold animate-text">payments</h1>
          <p className="text-white mt-8 font-semibold animate-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A atque
            quod minus quisquam reiciendis, non distinctio
          </p>
        </div>
      </div>

      {/* Members Section */}
      <div className="w-[47%] bg-black ml-4 rounded-3xl">
        <div className="flex flex-col pl-14 mt-10">
          <h1 className="text-white text-6xl font-bold animate-text">
            Members get much more
          </h1>
          <h1 className="text-xl text-white mt-6 w-[85%] animate-text">
            Join our members waiting list to get exclusive access to more
            deals, VIP benefits and inspiration than ever before.
          </h1>
          <button className="bg-[#CDE06A] w-2/3 h-16 mt-12 font-medium rounded-lg">
            Sign up to our newsletter
          </button>
        </div>

        {/* Members Images */}
        <div className="flex">
          <img src="membersboy.png" className="w-[60%]" alt="" />
          <div className="flex flex-col">
            <img src="membersimg1.png" className="w-4/5 ml-5 mt-10" alt="" />
            <img src="membersimg2.png" className="w-4/5 mt-4" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
