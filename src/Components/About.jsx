import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const SlowCountUp = ({ end, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const duration = 10; // Set the duration in seconds
      const framesPerSecond = 30; // Adjust this value as needed

      const increment = (end / (duration * framesPerSecond)) || 1;

      const interval = setInterval(() => {
        setCount((prevCount) => {
          const newCount = prevCount + increment;
          return newCount >= end ? end : newCount;
        });
      }, 1000 / framesPerSecond);

      return () => clearInterval(interval);
    }
  }, [end, inView]);

  return <span>{Math.round(count)}</span>;
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div className=" py-10 sm:py-15">
        <div className="mx-auto grid max-w-7xl gap-x-20 gap-y-10 px-6 lg:px-8 xl:grid-cols-3">
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
            <p className="mt-6 text-lg leading-8 text-gray-600 justify-text">
              Welcome to Team Mechatrons, an official Electric Bike team from
              Sri Ramakrishna Institute of Technology, Coimbatore comprises 40
              enthusiastic students driven by innovation. Here, we don&#39;t
              just tell stories; we unfold our adventures and Victories. Our roots delve into a
              passion for pushing boundaries, and our branches reach for the
              skies of endless possibilities. <span className="font-semibold text-gray-800">We strive to devise an eco-friendly and efficient electric bike using cutting-edge technology that would help us "One Team...One Dream..One Family."</span>
            </p>
          </motion.div>
          <motion.ul
           ref={ref}
            role="list"
            className="  grid gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-15 xl:col-span-2"
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
                  <p className="text-3xl pt-5 font-semibold leading-6 text-indigo-600">
                {" "}
               
                <SlowCountUp end={30} inView={inView} />
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
                    International Events
                  </h3>
                  <p className="text-3xl pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <SlowCountUp end={30} inView={inView} />+
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
                    No of Projects
                  </h3>
                  <p className="text-3xl pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <SlowCountUp end={30} inView={inView} />+
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
                    Cash Rewards
                  </h3>
                  <p className="text-3xl pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <SlowCountUp end={3000000} inView={inView} />+
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
