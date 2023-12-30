import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import hero from "../../public/hero.png";
const NewHero = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center p-4 lg:p-8 h-fit w-full bg-gradient-to-b from-violet-200 to-transparent  bg-cover px-10">
        {/* bg-[url('/bgs/bgGradLine.svg')] */}
        <motion.div
          initial={{ x: -100, y: 100, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true }}
          className="flex flex-col gap-2 sm:gap-4 items-center lg:items-start justify-center w-full h-full -mt-20 lg:-mt-0"
        >
          <div className="w-fit cursor-pointer hidden text-sm lg:flex items-center justify-start border-black px-4 rounded-full border h-fit p-2 mb-10">
            Watch our History &rarr;
          </div>
          <h1 className="text-5xl sm:text-7xl text-center lg:text-left font-semibold w-full lg:w-[80%]">
            Hero{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-violet-800">
              Section
            </span>{" "}
            Power Title
          </h1>
          <p className="text-sm sm:text-xl text-center lg:text-left w-[80%]">
            Nostrud duis ex ad laboris amet non occaecat quis occaecat aliqua
            aliqua id fugiat.
          </p>
          <div className="w-[80%] flex items-center justify-stretch gap-4 pt-10">
            <div className="bg-violet-500 text-white rounded-lg p-4 flex-1 flex items-center justify-center">
              View Products
            </div>
            <div className="text-violet-500 bg-white border border-violet-500 rounded-lg p-4 flex-1 flex items-center justify-center">
              Contact
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true }}
          className="flex items-center justify-center relative w-full h-full -mr-0 lg:-mr-20 -mt-20 lg:-mt-0"
        >
          <Image
            src={hero}
            alt=""
            // width={800}
            // height={1000}
            // fill
            className="h-[32rem] lg:h-[40rem] w-[32rem] lg:w-[40rem] brightness-110 object-contain"
          />
        </motion.div>
      </div>
    </>
  );
};

export default NewHero;
