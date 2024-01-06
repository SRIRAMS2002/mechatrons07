"use client";

import Image from "next/image";
import { motion, spring } from "framer-motion";
const Load = () => {
  return (
    <>
      <div className="flex flex-col gap-6 bg-violet-400 items-center justify-center min-h-screen w-screen overflow-hidden relative z-[10000]">
        {/* <Image width={1000} height={1000} objectFit="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110" src="/sma.gif" alt="sma" />
         */}
        <Image
          src="/mechatron.png"
          width={200}
          height={200}
          alt=""
          className=""
        />
        <motion.h1
          initial={{ scale: 0, opacity: 0, z: 1000 }}
          whileInView={{ opacity: 1, scale: 1.5, z: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
          className=" text-lg text-white font-semibold w-full text-center"
        >
        One Team...One Dream..One Family.
        </motion.h1>
      </div>
    </>
  )
}

export default Load