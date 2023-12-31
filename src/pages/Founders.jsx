"use client"
import React, {useState, useEffect} from "react";
import Load from "@/Components/Load"
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

const Founders = [
  {
    id: 1,
    name: "Sedhu Madhavan K",
    image: "Founder-4",
    dept: "ECE",
    role: "Team Leader",
  },
  {
    id: 2,
    name: "Ramya T",
    image: "Founder-5-1",
    dept: "ECE",
    role: "Team Manager",
  },
  {
    id: 5,
    name: "Vijayalakshmi R",
    image: "Founder-2",
    dept: "ECE",
    role: "Software Developer",
  },
  {
    id: 6,
    name: "Saranya U",
    image: "Founder-1",
    dept: "ECE",
    role: "PCB Designer",
  },
  {
    id: 13,
    name: "SIVAKUMAR B  ",
    image: "Sivakumar-1",
    dept: "Mechanical",
    role: "Design Engineer",
  },
  
];

const FoundersPage = () => {
  const [isSectionInView, setIsSectionInView] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsSectionInView(true);
      } else {
        setIsSectionInView(false);
      }
    };
  

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <Load />
        </div>
      ) : (
        <div>
          <Navbar view={isSectionInView} />
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-10">
            <h2 className="sr-only">Founders</h2>
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
              className="mx-auto mt-[5rem]"
            >
              <span class="sm:hidden flex mb-5 font-medium text-gray-600 text-sm space-x-2 md:items-center">
                {" "}
                
                <a href="/">
                Home 
                </a>{" "}
                / Founders
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Founders
              </h2>
              <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                A diverse team of individuals with unique talents and
                backgrounds, united by a common goal and exceptional teamwork.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-10">
              {Founders.map((people, index) => (
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
                    src={`/Team/Founders/${people.image}.webp`}
                    alt={people.name}
                    className="h-[23rem] w-[20rem] rounded-t-lg object-cover object-center group-hover:opacity-75"
                  />
                  <div className="p-5 text-center">
                    <p className="text-xl font-bold  uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-600 leading-6">
                      {people.name}
                    </p>
                    <div className="flex items-center justify-evenly mt-4">
                      <p className="mt-1 truncate font-semibold text-sm leading-5 text-gray-600">
                        {people.dept}
                      </p>

                      <p className="mt-1 truncate font-semibold leading-6 text-indigo-600">
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
      )}
    </>
  );
};

export default FoundersPage;
