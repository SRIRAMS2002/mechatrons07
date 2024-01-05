import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col-reverse relative min-h-screen h-fit lg:flex-row items-center p-4 lg:p-8 w-full bg-[url('/3.jpeg')] bg-opacity-30 bg-black bg-center bg-blend-darken bg-cover px-10 text-white">
        {/* <div className="flex items-center justify-center"></div> */}
        {/* bg-[url('/bgs/bgGradLine.svg')] */}
        <div className="flex flex-col gap-2 sm:gap-4 items-center w-full h-full mb-20 lg:mt-36">
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
            className="text-4xl sm:text-7xl text-center  md:text-end font-semibold w-full drop-shadow-md"
          >
            Team
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-orange-700 to-yellow-400">
              Mechatrons
            </span>
          </motion.h1>

          <motion.p
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
            className="text-sm  sm:text-2xl  text-center  md:text-end w-full "
          >
            One Team...One Dream..One Family.
          </motion.p>

          
        </div>
      </div>
    </>
  );
};

export default Hero;