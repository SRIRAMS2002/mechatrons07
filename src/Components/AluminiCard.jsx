import React from "react";
import { motion } from "framer-motion";
const Aluminicard = ({ index, name, image, dept, role }) => {
  const imageUrl = image ? `/Team/Founders/${image}.webp` : "/placeholder.gif";
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.3 + (index % 3) * 0.2,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
    >
      <div className="mx-auto bg-white rounded-lg shadow-lg hover:shadow-xl shadow-indigo-500/50 hover:shadow-indigo-500/50 overflow-hidden">
        <img
          src={imageUrl}
          alt=""
          className="h-[23rem] w-[20rem] rounded-t-lg object-cover object-center group-hover:opacity-75"
        />
        <div className="p-5 text-center">
          <p className="text-xl font-bold  uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-600 leading-6">
            {name}
          </p>
          <div className="flex justify-center space-x-5 items-center mt-2">
            <p className="mt-1 truncate font-semibold text-sm leading-5 text-gray-600">
              {dept}
            </p>

            <p className="mt-1 truncate font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              {role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Aluminicard;
