import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { motion } from "framer-motion";

const MentorList = [
  {
    id: 1,
    name: "Mr.S.Veerakumar M.E,(Ph.D)",
    image: "Veerakumar1",
    dept: "",
    role: "Electic & Hybrid Vechicles Technology",
  },
  {
    id: 2,
    name: "Mr. B.Varun M.E,(Ph.D)",
    image: "varun1",
    dept: "Mechanical",
    role: "Design Engineer",
  },
  {
    id: 3,
    name: "Mr. L.JerryRajKumar M.E",
    image: "jeery1",
    dept: "Mechanical",
    role: "R & D Head",
  },
  {
    id: 4,
    name: "Mr. R.Tamilselvan M.E,(Ph.D)",
    image: "Tamilselvan",
    dept: "Mechanical",
    role: "Electrical Head",
  },
  {
    id: 5,
    name: "Dr. M.Veeramani M.E,Ph.D",
    image: "veeramani1",
    dept: "Mechanical",
    role: "Innovation Head",
  },
  {
    id: 5,
    name: "Dr. D.Binu M.E,Ph.D",
    image: "Binu Founder",
    dept: "ECE",
    role: "Internet of Things",
  },
  // Add more members as needed
];

const Mentors = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-10">
        <motion.h2
          initial={{ x: -100, y: 100, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Mentors
        </motion.h2>
        <motion.p
          initial={{ x: -100, y: 100, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true }}
          className="text-lg pt-5 font-semibold leading-6 text-indigo-600"
        >
          A diverse team of individuals with unique talents and backgrounds,
          united by a common goal and exceptional teamwork.
        </motion.p>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-10">
          {MentorList.map((people, index) => (
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
              key={index}
              className="mx-auto bg-white rounded-lg shadow-lg hover:shadow-xl shadow-indigo-500/50 hover:shadow-indigo-500/50 overflow-hidden"
            >
              <img
                src={`/Team/Mentors/${people.image}.webp`}
                alt={people.name}
                className="h-[23rem] w-[20rem] rounded-t-lg object-cover object-center group-hover:opacity-75"
              />
              <div className="p-5 text-center">
                <p className="text-xl font-bold   text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-600 leading-6">
                  {people.name}
                </p>
                <div className="flex items-center justify-evenly mt-4">
                  <p className="mt-1 truncate font-semibold text-sm leading-5 text-gray-600">
                    {people.dept}
                  </p>

                  <p className="mt-1 truncate text-center font-semibold leading-6 text-indigo-600">
                    {people.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mentors;
