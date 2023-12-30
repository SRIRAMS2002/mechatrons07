import React, { useState, useEffect, Fragment } from "react";
import {
  Dialog,
  Disclosure,
  Menu,
  Listbox,
  Transition,
} from "@headlessui/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import MembersCard from "@/Components/MembersCard";
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
    name: "Batch-2024",
    category: "2024",
  },
  {
    id: 2,
    name: "Batch-2025",
    category: "2025",
    icon: "",
  },
  {
    id: 3,
    name: "Batch-2026 ",
    category: "2026",
  },
];

const products = [
  {
    id: 1,
    name: "DURGADASS V C",
    category: "2024",
    image: "20-24 DURGADASS V C",
    dept: "Mechanical",
    role: "Team Captain",
  },
  {
    id: 5,
    name: "VIGNESH J V",
    category: "2024",
    image: "20-24 VIGNESH J V",
    dept: "Mechanical",
    role: "Vice Captain",
  },
  {
    id: 3,
    name: "MOHAMED ASRAF M",
    category: "2024",
    image: "20-24 MOHAMED ASRAF M",
    dept: "Mechanical",
    role: "Co Driver",
  },
  {
    id: 22,
    name: " KARTHIGEYAN L",
    category: "2024",
    image: "Karthikeyan24",
    dept: "Mechanical",
    role: "Design Engineer",
  },
  {
    id: 2,
    name: "MAHENDRA PRABU T",
    category: "2024",
    image: "20-24 MAHENDRA PRABU T",
    dept: "Mechanical",
    role: "Team Manager",
  },

  {
    id: 4,
    name: "SIFAS S",
    category: "2024",
    image: "20-24 SIFAS S",
    dept: "Mechanical",
    role: "Team Admin",
  },

  {
    id: 6,
    name: "VISHNU PRASATH  J",
    category: "2024",
    image: "20-24 VISHNU PRASATH  J",
    dept: "Mechanical",
    role: "Technician",
  },

  {
    id: 9,
    name: "SRIRAM S",
    category: "2024",
    image: "ezgif-3-2c2d1a0b24",
    dept: "CSE",
    role: "Full Stack Web Developer",
  },
  {
    id: 10,
    name: "ROGAN PRASANTH",
    category: "2024",
    image: "Rogan-24",
    dept: "CSE",
    role: "Software Developer",
  },
  {
    id: 40,
    name: "Mounica",
    category: "2024",
    image: "Mounica24",
    dept: "CSE",
    role: "Driver",
  },
  {
    id: 7,
    name: "TUSITA M",
    category: "2024",
    image: "20-24 TUSITA M",
    dept: "CSE",
    role: " UX Designer",
  },
  {
    id: 8,
    name: "SHRIMATHI C M",
    category: "2024",
    image: "20-24 SHRIMATHI C M",
    dept: "CSE",
    role: "UI  Designer",
  },
  // 2025
  {
    id: 16,
    name: "KABILESH S",
    category: "2025",
    image: "21-25 KABILESH",
    dept: "Mechanical",
    role: "Team Captain",
  },
  {
    id: 11,
    name: "AKSHANTH ROA G",
    category: "2025",
    image: "21-25 AKSHANTH ROA G",
    dept: "Mechanical",
    role: " Vice Captain",
  },
  {
    id: 18,
    name: " SURYA M",
    category: "2025",
    image: "21-25 SURYA M",
    dept: "Mechanical",
    role: "Driver",
  },
  {
    id: 12,
    name: " BALAMURUGAN S",
    category: "2025",
    image: "21-25 BALAMURUGAN S",
    dept: "Mechanical",
    role: "Cheif Technician",
  },

  {
    id: 13,
    name: "DHEEPAN CHAKRAVARTHI",
    category: "2025",
    image: "21-25 DHEEDAN CHAKRAVARTHI",
    dept: "EEE",
    role: "Electrical Technician",
  },
  {
    id: 14,
    name: "HAREVASHANTHAN",
    category: "2025",
    image: "21-25 HAREVASHANTHAN",
    dept: "EEE",
    role: "Cheif Electrician",
  },
  {
    id: 15,
    name: "JEEVABHARATHI M A",
    category: "2025",
    image: "21-25 JEEVABHARATHI M A",
    dept: "EEE",
    role: "R&D Head",
  },

  {
    id: 17,
    name: "MARI ESWAR S ",
    category: "2025",
    image: "21-25 MARI ESWAR S",
    dept: "Mechanical",
    role: "Technician",
  },

  {
    id: 19,
    name: "THIRUMALAINAMBI M ",
    category: "2025",
    image: "21-25 THIRUMALAINAMBI M",
    dept: "Mechanical",
    role: "Design Engineer",
  },
  {
    id: 20,
    name: "YUKENDRAN S ",
    category: "2025",
    image: "21-25 YUKENDRAN S",
    dept: "EEE",
    role: "PowerTrain",
  },
  {
    id: 21,
    name: " MOHANA SUNDAR ",
    category: "2025",
    image: "21-25 MOHANA SUNDAR",
    dept: "Mechanical",
    role: "Technician",
  },

  {
    id: 23,
    name: " TANISH ",
    category: "2025",
    image: "21-25 TANISH",
    dept: "IT",
    role: "Software Developer",
  },
  {
    id: 24,
    name: " HARIHARAN ",
    category: "2025",
    image: "21 - 26 HARIHARAN",
    dept: "EEE",
    role: "Electical Technician",
  },
  // 2026
  {
    id: 25,
    name: "ASHWANTH N",
    category: "2026",
    image: "ASHWANTH N26",
    dept: "Mechanical",
    role: "Team Captain",
  },
  {
    id: 28,
    name: "LAKSHAY RAAJ T",
    category: "2026",
    image: "Lakshaay26",
    dept: "Mechanical",
    role: "Vice Captain",
  },
  {
    id: 26,
    name: "GOKUL RAJ ",
    category: "2026",
    image: "gokul26",
    dept: "Mechanical",
    role: "Driver",
  },
  {
    id: 27,
    name: "NARENDRAN M",
    category: "2026",
    image: "Narendran26",
    dept: "Mechanical",
    role: "Cheif Technician",
  },

  {
    id: 29,
    name: "DHANAJEYAN A",
    category: "2026",
    image: "Dhanajeyan 26",
    dept: "Mechanical",
    role: "Cheif Electrician",
  },
  {
    id: 30,
    name: "SYED HAROON FAREED S",
    category: "2026",
    image: "Syed26",
    dept: "Mechanical",
    role: "Team Manager",
  },
  {
    id: 31,
    name: "IMAYAVARANBHAN K S",
    category: "2026",
    image: "IMAYAVARANBHAN K S26",
    dept: "Mechanical",
    role: "Design Engineer",
  },
  {
    id: 32,
    name: "vithya lakshimi A",
    category: "2025",
    image: "vithya25",
    dept: "ECE",
    role: "Innovation Head",
  },
  {
    id: 33,
    name: "Monica M",
    category: "2025",
    image: "monika25",
    dept: "ECE",
    role: "Internet Of Things",
  },
  {
    id: 34,
    name: "Harini S V",
    category: "2025",
    image: "Haraini-26",
    dept: "ECE",
    role: "Wireless Communication",
  },
  {
    id: 35,
    name: "Nivetha S",
    category: "2025",
    image: "nivetha25",
    dept: "ECE",
    role: "Controller Designer",
  },
  {
    id: 39,
    name: "Ashwathi",
    category: "2025",
    image: "aswathi25",
    dept: "ECE",
    role: "Technician",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Members = () => {
  const [selectedCategory, setSelectedCategory] = useState("2024");
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
          Members
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
            {people.map((person) => (
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
                                      active ? "text-white" : "text-indigo-600",
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
            <MembersCard
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
  );
};

export default Members;
