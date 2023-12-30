import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import hero from "../../public/hero.png";
const NewHero = () => {
  return (
    <>
      <div className="flex flex-col-reverse relative min-h-screen h-fit lg:flex-row items-center justify-center p-4 lg:p-8 w-full bg-[url('/3.jpeg')] bg-opacity-30 bg-black bg-center bg-blend-darken bg-cover px-10 text-white">
        {/* <div className="flex items-center justify-center"></div> */}
        {/* bg-[url('/bgs/bgGradLine.svg')] */}
        <div className="flex flex-col gap-2 sm:gap-4 items-center justify-center w-full h-full mt-36 lg:mt-2">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="w-fit cursor-pointer hidden text-sm lg:flex items-center justify-start border-black px-4 rounded-full border h-fit p-2 mb-10"
          >
            Watch our History &rarr;
          </motion.div>
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
            className="text-5xl sm:text-7xl text-center font-semibold w-full drop-shadow-md"
          >
            Hero{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-violet-600">
              Section
            </span>{" "}
            Power Title
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
            className="text-sm sm:text-xl text-center w-full px-10"
          >
            Nostrud duis ex ad laboris amet non occaecat quis occaecat aliqua
            aliqua id fugiat.
          </motion.p>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="w-full px-10 lg:px-40 flex items-center justify-stretch gap-4 pt-10"
          >
            <div className="bg-violet-500 text-white rounded-lg p-4 flex-1 flex items-center justify-center">
              View Products
            </div>
            <div className="text-violet-500 bg-white border border-violet-500 rounded-lg p-4 flex-1 flex items-center justify-center">
              Contact
            </div>
          </motion.div>
        </div>
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </>
  );
};

export default NewHero;
