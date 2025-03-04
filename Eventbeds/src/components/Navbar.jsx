

import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 0.01], ["95%", "55%"]);

  return (
    <motion.nav
      style={{ width }}
      className="fixed z-50 mx-auto flex justify-between items-center border border-gray-300 bg-gray-100 px-2 h-[4.3rem] mt-2 rounded-lg transition-all duration-300"
    >

      <div className="flex items-center space-x-3">
      <svg
      width="30"
      height="30"
      viewBox="0 0 143 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M71.6847 0.157227C32.098 0.157227 0 32.2552 0 71.8419V143.515H71.6847C91.4837 143.515 109.402 135.491 122.362 122.519C135.333 109.559 143.358 91.641 143.358 71.8419C143.358 32.2552 111.271 0.157227 71.6847 0.157227ZM110.417 109.696L109.242 116.695C99.1549 125.016 86.1492 130.054 71.9582 130.019C48.1013 129.974 25.2817 115.692 16.4707 89.7602L64.2985 83.4683L107.852 104.533C109.733 105.547 110.77 107.61 110.417 109.696ZM119.638 105.49C119.638 105.49 119.832 103.245 119.934 102.116C120.094 100.27 119.056 98.5256 117.335 97.7391L73.2576 78.0427L88.1326 66.2795C89.5574 64.6951 91.7801 64.0568 93.8432 64.6381C104.66 67.6929 115.466 70.7477 126.272 73.8024C128.472 74.4179 130.022 76.6863 129.794 78.9203C128.745 88.3582 125.428 97.1122 119.638 105.49Z"
        fill="black"
      />
    </svg>
        <span className="text-black text-2xl font-bold">eventbeds</span>
      </div>


      <div className="flex space-x-4">
        <button className="bg-[#252525] text-white px-6 py-3 text-sm font-semibold rounded-md">Book Demo</button>
        <button className="bg-gray-200 text-black px-6 py-3 font-semibold text-sm rounded-md">Menu :</button>
      </div>
    </motion.nav>
  );
}
