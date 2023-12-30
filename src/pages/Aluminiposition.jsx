import React from "react";

import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

import { TbMail } from "react-icons/tb";
import { motion } from "framer-motion";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Position = [
  {
    id: 1,
    name: "RAMYA T",
    image: "Founder-5-1",
    Company: "Booma Innovative Solutions Pvt Ltd, ",
    location: "Coimbatore.",
    role: "Design Engineer",
    email: "ramyaece278@gmail.com",
  },
  {
    id: 2,
    name: "VIJAYALAKSHIMI R",
    image: "Founder-2",
    Company: "Hexaware Technologies Ltd,",
    location: "Chennai.",
    role: "Software Developer",
    email: "vijiprabakar98@gmail.com",
  },
  {
    id: 3,
    name: "KEERTHANA M",
    image: "KEERTHANA-20",
    Company: "Financial Software & Systems Pvt Ltd,",
    location: "Chennai.",
    role: "Senior Software Engineer",
    email: "keerthu0926@gmail.com",
  },
  {
    id: 15,
    name: "RAMKUMAR K  ",

    image: "Ramkumar-21-1",
    Company: " National Innovative Technology,",
    location: "Cairo,Egypt.",
    role: "Design Engineer ",
    email: "ramkumar.1705117@gmail.com",
  },
  {
    id: 16,
    name: "ASKAR K  ",
    image: "Askar-21",
    Company: " National Innovative Technology,",
    location: "Cairo,Egypt.",
    role: "Design Engineer ",
    email: "askarkalil2000@gmail.com",
  },
  {
    id: 5,
    name: "VIBESH R  ",
    image: "vibesh-21",
    Company: "Al Futtaim Technologies LLC",
    location: "Dubai.",
    role: "Unified Communication Engineer",
    email: "vibeshraja@gmail.com",
  },
  {
    id: 6,
    name: "RUMAN B  ",
    image: "rumaan-21",
    Company: "Renault Nissan India Pvt Ltd",
    location: "Chennai.",
    role: "Design Engineer",
    email: "rumaanrbrsr2000@gmail.com",
  },
  {
    id: 4,
    name: "SIVAKUMAR B  ",
    image: "Sivakumar-1",
    Company: "LogixHealth Solutions Pvt Ltd",
    location: "Chennai.",
    role: "Senior Specialist",
    email: "sivakumarbaval@gmail.com",
  },

  {
    id: 8,
    name: "RAGU B  ",
    image: "ragu",
    Company: "Ingo Electric pvt ltd",
    location: "Bangalore.",
    role: "R&D Enginner (Simulation & Testing)",
    email: "raguragav692@gmail.com",
  },
  {
    id: 17,
    name: "RANJITHPRABU V S  ",
    image: "Ranjit-21",
    Company: " TEKsystems, Inc.,",
    location: "Chennai.",
    role: "Candidate Manager",
    email: "ranjithvs5351@gmail.com",
  },
  {
    id: 18,
    name: "VIGNESHWARAN C",
    image: "VIGNESHWARAN-21",
    Company: " CADOpt Technologies Pvt. Ltd.",
    location: "Coimbatore.",
    role: "Design Engineer trainee",
    email: "Vigneshwaranc@cadopt.com",
  },
  {
    id: 19,
    name: " SATHISH S",

    image: "Sathish21",
    Company: "Al qasaem trad & cont .co",
    location: "Muscat,Oman.",
    role: "Health & safety  engineer ",
    email: "sathissk2539@gmail.com",
  },
  {
    id: 21,
    name: "KIRTHIK R  ",
    image: "krithik-21",
    Company: "Shanthi Gears Ltd.",
    location: "Coimbatore.",
    role: "Graduate Engineer Trainee",
    email: "",
  },
  {
    id: 22,
    name: " Nithin S",
    image: "nithin21",
    Company: "Propel Industries Private Limited",
    location: "Coimbatore.",
    role: "Assistant Engineer",
    email: "",
  },
  {
    id: 20,
    name: "shanmathi C",
    image: "shanmathi1",
    Company: "Cognizant Technology Solutions  Pvt Ltd",
    location: "Coimbatore.",
    role: "Programmer Analyst",
    email: "shankcmathi@gmail.com",
  },
  {
    id: 7,
    name: "VIGNESHWARAN Y ",
    image: "Vigneshwaran 22",
    Company: "Ingo Electric pvt ltd",
    location: "Bangalore.",
    role: "R&D Enginner (Designer)",
    email: "vigneshwaranyuvaraj19@gmail.com",
  },

  {
    id: 9,
    name: "SIVARAMAKRISHNAN P   ",
    image: "Sivaramakrihanam-22",
    Company: "SecureKloud Technologies Ltd",
    location: "Chennai.",
    role: "Associate - Cloud",
    email: "sivaram28032001@gmail.com",
  },
  {
    id: 11,
    name: "BALAJI T",
    category: "2023",
    image: "balaji 23",
    Company: " Stanadyne India Pvt Ltd ",
    location: "Chennai.",
    role: "Production Engineer",
    email: "balathangaraj2@gmail.com",
  },

  {
    id: 12,
    name: "MAHESH BOOPATHI m",

    image: "Mahesh23",
    Company: "  ",
    location: ".",
    role: "",
    email: "@gmail.com",
  },
  {
    id: 13,
    name: "Dhanapal D",
    image: "Dhanapal 23",
    Company: "Shree sai Technologies",
    location: "Coimbatore.",
    role: "Design Engineer",
    email: "dharun16122001@gmail.com",
  },
  {
    id: 14,
    name: "Sathya  ",

    image: "Sathya23",
    Company: "Protiviti India Member pvt Ltd  ",
    location: "Coimbatore.",
    role: "Technology Consultant",
    email: "sathya.1902097@gmail.com",
  },

  {
    id: 22,
    name: "HARIRATHNA U",
    image: "harirathna23",
    Company: "Cognizant Technology Solutions Pvt Ltd",
    location: "Coimbatore.",
    role: "Assistant Engineer",
    email: "harirathna.u.k@gmail.com",
  },
];
const Aluminiposition = () => {
  const handleMailClick = (email) => {
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailComposeUrl, "_blank");
  };

  return (
    <div>
      <div>
        <Navbar />

        <div className="mx-auto max-w-7xl  px-4 py-10 sm:px-6 sm:py-10">
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
            className="max-w-7xl"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {" "}
              Alumini Positions- Meet our leadership
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse.
            </p>
          </motion.div>

          <div className="">
            <ul
              role="list"
              className="mt-20 grid gap-x-4 gap-y-5 sm:grid-cols-3 sm:gap-y-16 xl:col-span-3"
            >
              {Position.map((people, index) => (
                <motion.li
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
                >
                  <div className="flex items-center rounded-xl min-h-[14rem] p-3 gap-x-6 bg-white  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                    <div className="mx-auto ">
                      <div className="flex items-center gap-x-6">
                        <img
                          className="h-20 w-20 rounded-full border-2 border-violet-800"
                          src={`/Team/Founders/${people.image}.webp`}
                          alt=""
                        />
                        <div>
                          <h3 className="text-lg font-bold  uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-600 leading-6">
                            {people.name}
                          </h3>
                          <p className="text-sm font-semibold leading-6 text-red-800">
                            {people.role}
                          </p>
                          <p className="text-sm font-semibold leading-6 text-gray-700">
                            {people.Company}
                          </p>
                          <p className="text-sm font-semibold leading-6 text-gray-700">
                            {people.location}
                          </p>

                          <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                            {people.email}
                          </p>
                        </div>
                      </div>
                      <div className=" justify-evenly flex"></div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Aluminiposition;
