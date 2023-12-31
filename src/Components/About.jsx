import React from "react";
import CountUp, { useCountUp } from "react-countup";
import { motion } from "framer-motion";
const About = () => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <>
      <div className=" py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-20 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
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
            className="max-w-2xl"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to Mechatrons, a vibrant environment where innovation is
              our lifeblood and creativity and technology dances together. Here,
              we don&#39;t just tell stories; we unfold adventures. Our roots
              delve into a passion for pushing boundaries, and our branches
              reach for the skies of endless possibilities.
            </p>
          </motion.div>
          <motion.ul
            role="list"
            className="  grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <motion.li
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.5 + 1 * 0.1,
                type: "spring",
                stiffness: 100,
              }}
            >
              <div className="bg-[#fffafa] flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    National Events
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={30} enableScrollSpy />+
                  </p>
                </div>
              </div>
            </motion.li>
            <motion.li
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.5 + 2 * 0.1,
                type: "spring",
                stiffness: 100,
              }}
            >
              <div className="bg-[#fffafa] flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    Inter-National Events
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={4} enableScrollSpy />+
                  </p>
                </div>
              </div>
            </motion.li>
            <motion.li
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.5 + 3 * 0.1,
                type: "spring",
                stiffness: 100,
              }}
            >
              <div className="bg-[#fffafa] flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    Projects
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={20} enableScrollSpy /> +
                  </p>
                </div>
              </div>
            </motion.li>
            <motion.li
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.5 + 4 * 0.1,
                type: "spring",
                stiffness: 100,
              }}
            >
              <div className="bg-[#fffafa] flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    Cash Awards
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={250000} enableScrollSpy />+
                  </p>
                </div>
              </div>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </>
  );
};

export default About;
