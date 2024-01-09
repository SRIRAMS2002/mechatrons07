"use client";
import React, { useState, useEffect, Fragment } from "react";
import Load from "@/Components/Load";
import {
  Dialog,
  Disclosure,
  Menu,
  Listbox,
  Transition,
} from "@headlessui/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Aluminicard from "@/Components/AluminiCard";
import {
  GlobeAsiaAustraliaIcon,
  MagnifyingGlassIcon,
  CheckIcon,
  ChevronUpDownIcon,
  GlobeAmericasIcon,
  XMarkIcon,
  MinusIcon,
  PlusIcon,
  CalendarIcon,
  AcademicCapIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const people = [
  {
    id: 1,
    name: "Batch-2020",
    category: "2020",
  },
  {
    id: 2,
    name: "Batch-2021",
    category: "2021",
    icon: "",
  },
  {
    id: 3,
    name: "Batch-2022 ",
    category: "2022",
  },
  {
    id: 4,
    name: "Batch-2023",
    category: "2023",
  },
];

const products = [
  {
    id: 1,
    name: "Sedhu Madhavan K",
    image: "Founder-4",
    category: "2020",
    dept: "ECE",
    role: "Team Leader (Hackathon)",
  },
  {
    id: 2,
    name: "Selvakumar S K",
    category: "2020",
    image: "Selvakumar",
    dept: "Mechanical",
    role: "Team Captain (E-Bike)",
  },
  {
    id: 3,
    name: "Dhanakumar D",
    category: "2020",
    image: "Dhanakumar",
    dept: "Mechanical",
    role: "Vice Captain  (E-Bike)",
  },
  {
    id: 4,
    name: "Ramya T",
    image: "Founder-5-1",
    category: "2020",
    dept: "ECE",
    role: "Team Manager",
  },

  {
    id: 6,
    name: "Saranya U",
    image: "Founder-1",
    category: "2020",
    dept: "ECE",
    role: "PCB Designer",
  },

  {
    id: 5,
    name: "Vijayalakshmi R",
    image: "Vijalakshmi20",
    category: "2020",
    dept: "ECE",
    role: "Software Developer",
  },
  {
    id: 8,
    name: "KEERTHANA M  ",
    category: "2020",
    image: "KEERTHANA-20",
    dept: "CSE",
    role: "App Developer",
  },
  {
    id: 7,
    name: "VIDHYAPRIYA S  ",
    category: "2020",
    image: "Vidhyapriya-20",
    dept: "ECE",
    role: "Controller Design",
  },
  {
    id: 9,
    name: "INDHU V  ",
    category: "2020",
    image: "indhu-20",
    dept: "ECE",
    role: "Hardware Designer",
  },

  {
    id: 10,
    name: "SNEHA S  ",
    category: "2020",
    image: "Sneha-20",
    dept: "ECE",
    role: "Wireless Communication",
  },

  // 2021
  {
    id: 11,
    name: "RAMKUMAR K  ",
    category: "2021",
    image: "Ramkumar-21-1",
    dept: "Mechanical",
    role: "Team Captain",
  },
  {
    id: 16,
    name: "SIVAKUMAR B  ",
    category: "2021",
    image: "Sivakumar-1",
    dept: "Mechanical",
    role: "Vice Captain",
  },
  {
    id: 12,
    name: "RAGU B  ",
    category: "2021",
    image: "ragu",
    dept: "Mechanical",
    role: " R&D Head",
  },
  {
    id: 13,
    name: "ASKAR K  ",
    category: "2021",
    image: "Askar-21",
    dept: "Mechanical",
    role: "Driver",
  },
  {
    id: 14,
    name: "VIBESH R  ",
    category: "2021",
    image: "vibesh-21",
    dept: "Mechanical",
    role: "Co-Driver",
  },
  {
    id: 15,
    name: "RUMAAN B  ",
    category: "2021",
    image: "rumaan-21",
    dept: "Mechanical",
    role: "Cheif Technician",
  },

  {
    id: 20,
    name: "NITHEESHRAJ M  ",
    category: "2021",
    image: "Nitheeshraj-21",
    dept: "Mechanical",
    role: "Team Manager",
  },
  {
    id: 17,
    name: "VIGNESHWARAN C",
    category: "2021",
    image: "VIGNESHWARAN-21",
    dept: "Mechanical",
    role: "Design Engineer",
  },
  {
    id: 18,
    name: "RANJITHPRABU V S  ",
    category: "2021",
    image: "Ranjit-21",
    dept: "Mechanical",
    role: "Team Admin",
  },

  {
    id: 21,
    name: "KIRTHIK R  ",
    category: "2021",
    image: "krithik-21",
    dept: "Mechanical",
    role: "CAE Analyst",
  },
  {
    id: 54,
    name: " Nithin S",
    category: "2021",
    image: "nithin21",
    dept: "Mechanical",
    role: "CFD Analyst",
  },
  {
    id: 57,
    name: "Sudharasan S",
    category: "2021",
    image: "Sudharasan21",
    dept: "Mechanical",
    role: "Modelling & Drafting",
  },

  {
    id: 22,
    name: " SACHIN AAKASH ",
    category: "2021",
    image: "sachin21",
    dept: "Mechanical",
    role: "PowerTrain",
  },
  {
    id: 23,
    name: " SATHISH S",
    category: "2021",
    image: "Sathish21",
    dept: "Mechanical",
    role: "Chassis & Suspension",
  },

  {
    id: 55,
    name: "Kowshik B",
    category: "2021",
    image: "Kowshik21",
    dept: "Mechanical",
    role: " Electrical System",
  },

  {
    id: 24,
    name: "RABINASRI V",
    category: "2021",
    image: "Rabina21",
    dept: "CSE",
    role: "Software Analyst",
  },
  {
    id: 25,
    name: "RAJADHARSHINI S",
    category: "2021",
    image: "Rajadharsini-21",
    dept: "CSE",
    role: "Software Developer",
  },
  {
    id: 26,
    name: "RAJASREE R",
    category: "2021",
    image: "Rajashree21",
    dept: "ECE",
    role: "Innovation Head",
  },
  {
    id: 56,
    name: "shanmathi C",
    category: "2021",
    image: "shanmathi1",
    dept: "EEE",
    role: "Controller Designer",
  },

  // 2022
  {
    id: 27,
    name: "VIGNESHRAM V",
    category: "2022",
    image: "Vigneshram22",
    dept: "Mechanical",
    role: "Team Captain",
  },
  {
    id: 30,
    name: "SIVARAMAKRISHNAN P",
    category: "2022",
    image: "Sivaramakrihanam-22",
    dept: "Mechanical",
    role: "Vice Captain",
  },
  {
    id: 28,
    name: "VIGNESHWARAN Y",
    category: "2022",
    image: "Vigneshwaran 22",
    dept: "Mechanical",
    role: "Co Driver",
  },
  {
    id: 29,
    name: "RAMKUMAR K",
    category: "2022",
    image: "Ramkumar 22",
    dept: "Mechanical",
    role: "Design Engineer",
  },

  {
    id: 58,
    name: "Surya ",
    category: "2022",
    image: "SuryaCS22",
    dept: "CSE",
    role: "Software Developer",
  },

  {
    id: 60,
    name: "Praveen Kumar",
    category: "2022",
    image: "Praveen22",
    dept: "ECE",
    role: "Innovation Member",
  },
  {
    id: 64,
    name: "Reyman  ",
    category: "2022",
    image: "Reyman22",
    dept: "Mechanical",
    role: "CAD /CAE",
  },

  {
    id: 31,
    name: "SELVAKUMAR D",
    category: "2022",
    image: "selvakumar22",
    dept: "Mechanical",
    role: "Team Manager",
  },

  {
    id: 65,
    name: "Prasanth B K  ",
    category: "2022",
    image: "prasanth22",
    dept: "Mechanical",
    role: "CFD Analyst",
  },
  {
    id: 33,
    name: "VENKATESH J",
    category: "2022",
    image: "Venktaesh22",
    dept: "Mechanical",
    role: "Cheif Technician",
  },
  {
    id: 34,
    name: "UDHAYAKUMAR ",
    category: "2022",
    image: "Udhaya22",
    dept: "Mechanical",
    role: "Electrical Engineer",
  },
  {
    id: 59,
    name: "Uthish Krishnan ",
    category: "2022",
    image: "Uthish Krishnan...Mech....2022",
    dept: "Mechanical",
    role: "Innovation Team",
  },

  // 2023
  {
    id: 35,
    name: "KABILAN J ",
    category: "2023",
    image: "Kabilan23",
    dept: "Mechanical",
    role: "Team Captain",
  },
  {
    id: 38,
    name: "BALAJI T",
    category: "2023",
    image: "balaji 23",
    dept: "Mechanical",
    role: "Vice Captain",
  },
  {
    id: 36,
    name: "BUVANESWARAN S ",
    category: "2023",
    image: "Bhuvanesh23",
    dept: "Mechanical",
    role: "Driver",
  },

  {
    id: 41,
    name: "Sakthi S",
    category: "2023",
    image: "Sakthi23",
    dept: "Mechanical",
    role: "Team Manager",
  },
  {
    id: 42,
    name: " VIJAY KARTHIKEYAN K",
    category: "2023",
    image: "Vijay 23",
    dept: "Mechanical",
    role: "Chassis & Suspension",
  },
  {
    id: 46,
    name: "GOWTHAM S",
    category: "2023",
    image: "Gowtham23",
    dept: "Mechanical",
    role: "CAD / CAE ",
  },
  {
    id: 60,
    name: "Dhanapal D",
    category: "2023",
    image: "Dhanapal 23",
    dept: "Mechanical",
    role: "Chief Mechanic",
  },
  {
    id: 43,
    name: "MAHESH BOOPATHI m",
    category: "2023",
    image: "Mahesh23",
    dept: "Mechanical",
    role: "Chief Mechanic",
  },

  {
    id: 45,
    name: "KARTHICK B",
    category: "2023",
    image: "Karthi23",
    dept: "Mechanical",
    role: "Chief Technician",
  },

  {
    id: 40,
    name: "prabahar v m",
    category: "2023",
    image: "Prabaharan23",
    dept: "Mechanical",
    role: "Chief Technician",
  },
  {
    id: 39,
    name: "naveen r",
    category: "2023",
    image: "Naveen23",
    dept: "Mechanical",
    role: "Technician",
  },

  {
    id: 44,
    name: "ARUNKUMAR  T",
    category: "2023",
    image: "Arun23",
    dept: "Mechanical",
    role: "Technician",
  },
  {
    id: 48,
    name: "DINESH M",
    category: "2023",
    image: "DINESH23",
    dept: "CSE",
    role: "Web Developer",
  },
  {
    id: 49,
    name: "MATHIVANAN S",
    category: "2023",
    image: "S. Mathivanan23",
    dept: "CSE",
    role: "Software Analyst",
  },
  {
    id: 37,
    name: "POOBESH GUPTA M",
    category: "2023",
    image: "Poobesh23",
    dept: "CSE",
    role: "Software Developer",
  },

  {
    id: 50,
    name: "HARIRATHNA U",
    category: "2023",
    image: "harirathna23",
    dept: "CSE",
    role: "UI Designer",
  },
  {
    id: 51,
    name: "KARTHICK  T",
    category: "2023",
    image: "KARTHICKCse23",
    dept: "CSE",
    role: "UX Designer",
  },
  {
    id: 52,
    name: " SREEJA G",
    category: "2023",
    image: "sreeja23",
    dept: "ECE",
    role: "Team Captain",
  },

  {
    id: 53,
    name: "PUJA S",
    category: "2023",
    image: "Puja23",
    dept: "ECE",
    role: "Driver",
  },
  {
    id: 63,
    name: "Sathya  ",
    category: "2023",
    image: "Sathya23",
    dept: "CSE",
    role: "Co Driver",
  },

  {
    id: 61,
    name: "Sruthi B ",
    category: "2023",
    image: "sruthi23",
    dept: "CSE",
    role: "Software Developer",
  },
  {
    id: 62,
    name: "Sujithra K ",
    category: "2023",
    image: "Sujithra23",
    dept: "ECE",
    role: "Internet Of Things",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Alumini = () => {
  const [selectedCategory, setSelectedCategory] = useState("2020");
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState(people[0]);


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchQuery("");
  };

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "all" && !searchQuery) {
      return true;
    }

    if (selectedCategory !== "all" && searchQuery) {
      return (
        product.category === selectedCategory &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      return product.category === selectedCategory;
    }

    return product.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
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
              className="text-3xl mt-[5rem] font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              <span class="sm:hidden flex mb-5 font-medium text-gray-600 text-sm space-x-2 md:items-center">
                {" "}
                
                <a href="/">
                Home 
                </a>{" "}
                / Alumini
              </span>
              Alumini
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
            {/* Fliter content */}
            <div className="flex mt-10 items-center justify-evenly">
              {/* Category Tabs */}

              <div className="hidden lg:block space-x-5 border-b-2 border-gray-400">
                {/* All */}

                {/* Events Buttons */}
                {people.map((person, index) => (
                  <button
                    key={person.id}
                    className={classNames(
                      "py-2 px-4 hover:shadow-xl  uppercase focus:outline-none border-b-2",
                      selectedCategory === person.category
                        ? "border-b-indigo-900 shadow-lg text-gray-900"
                        : "text-gray-600 hover:border-indigo-600"
                    )}
                  >
                    <div
                      className="flex items-center"
                      onClick={() => handleCategoryChange(person.category)}
                    >
                      {/* <person.icon
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        aria-hidden="true"
                      /> */}
                      <span
                        className={classNames(
                          selected ? "font-semibold" : "font-normal",
                          "ml-1 block truncate"
                        )}
                      >
                        {person.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Mobile Category Dropdown */}
              <div className="lg:hidden flex space-x-5">
                <Listbox value={selected} onChange={setSelected} className=" ">
                  {({ open }) => (
                    <>
                      <div className="relative mt-2">
                        <Listbox.Button className="block w-full  px-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                          <span className="flex items-center">
                            {/* <person.icon src={selected.icon}
                                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true"/> */}
                            <span className="ml-3 block truncate">
                              {selected.name}
                            </span>
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {people.map((person) => (
                              <Listbox.Option key={person.id} value={person}>
                                {({ selected, active }) => (
                                  <div
                                    className={classNames(
                                      active
                                        ? "bg-indigo-600 text-white"
                                        : "text-gray-900",
                                      "relative cursor-default select-none py-2 pl-3 pr-9"
                                    )}
                                    onClick={() =>
                                      handleCategoryChange(person.category)
                                    } // Update selected value
                                  >
                                    <div className="flex items-center">
                                      {/* <person.icon
                                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                        aria-hidden="true"
                                      /> */}

                                      <span
                                        className={classNames(
                                          selected
                                            ? "font-semibold"
                                            : "font-normal",
                                          "ml-3 block truncate"
                                        )}
                                      >
                                        {person.name}
                                      </span>
                                    </div>
                                    {selected && (
                                      <span
                                        className={classNames(
                                          active
                                            ? "text-white"
                                            : "text-indigo-600",
                                          "absolute inset-y-0 right-0 flex items-center pr-4"
                                        )}
                                      >
                                        <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    )}
                                  </div>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
              </div>
            </div>

            <div className="mt-[2rem] place-content-center place-items-center grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
              {filteredProducts.map((product, index) => (
                <Aluminicard
                  index={index}
                  key={product.id}
                  name={product.name}
                  image={product.image}
                  dept={product.dept}
                  role={product.role}
                />
              ))}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Alumini;
