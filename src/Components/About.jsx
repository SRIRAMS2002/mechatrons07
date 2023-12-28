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
      <div className=" py-10 lg:py-6">
        <div className="mx-auto grid gap-x-20 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 w-full">
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
            className=""
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse. Libero fames
              augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum
              enim vitae ullamcorper suspendisse. Libero fames augue nisl
              porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae
              ullamcorper suspendisse.
            </p>
          </motion.div>
          <motion.ul
            initial={{ x: -100, y: 100, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.5 + 2 * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            role="list"
            className="  grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
          </motion.ul>
        </div>
      </div>
    </>
  );
};

export default About;
