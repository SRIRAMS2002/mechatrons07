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
import Aluminicard from '@/Components/AluminiCard';
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
    id: 5,
    name: "Vijayalakshmi R",
    image: "Founder-2",
    category: "2020",
    dept: "ECE",
    role: "Software Developer",
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
    id: 7,
    name: "VIDHYAPRIYA S  ",
    category: "2020",
    image: "Vidhyapriya-20",
    dept: "ECE",
    role: "Controller Design",
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
    id: 12,
    name: "RAMKUMAR K  ",
    category: "2021",
    image: "Ramkumar-21-1",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 13,
    name: "SIVAKUMAR B  ",
    category: "2021",
    image: "Sivakumar-1",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 14,
    name: "VIGNESHWARAN C",
    category: "2021",
    image: "VIGNESHWARAN-21",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 15,
    name: "VIBESH R  ",
    category: "2021",
    image: "vibesh-21",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 16,
    name: "ASKAR K  ",
    category: "2021",
    image: "Askar-21",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 17,
    name: "RAGU B  ",
    category: "2021",
    image: "ragu",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 18,
    name: "RUMAAN B  ",
    category: "2021",
    image: "rumaan-21",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 19,
    name: "RANJITHPRABU V S  ",
    category: "2021",
    image: "Ranjit-21",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 20,
    name: "NITHEESHRAJ M  ",
    category: "2021",
    image: "Nitheeshraj-21",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 21,
    name: "KIRTHIK R  ",
    category: "2021",
    image: "krithik-21",
    dept: "Mechanical",
    role: " ",
  },

  {
    id: 22,
    name: " SACHIN AAKASH ",
    category: "2021",
    image: "",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 23,
    name: " SATHISH ",
    category: "2021",
    image: "",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 24,
    name: "RABINASRI V",
    category: "2021",
    image: "",
    dept: "CSE",
    role: " ",
  },
  {
    id: 25,
    name: "RAJADHARSHINI S",
    category: "2021",
    image: "",
    dept: "CSE",
    role: " ",
  },
  {
    id: 26,
    name: "RAJASREE R",
    category: "2021",
    image: "",
    dept: "ECE",
    role: " ",
  },
  // 2022
  {
    id: 27,
    name: "VIGNESHRAM V",
    category: "2022",
    image: "",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 28,
    name: "VIGNESHWARAN Y",
    category: "2022",
    image: "Vigneshwaran 22",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 29,
    name: "RAMKUMAR K",
    category: "2022",
    image: "Ramkumar 22",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 30,
    name: "SIVARAMAKRISHNAN P",
    category: "2022",
    image: "Sivaramakrihanam-22",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 31,
    name: "SELVAKUMAR D",
    category: "2022",
    image: "",
    dept: "Mechanical",
    role: " ",
  },
 
  {
    id: 32,
    name: "MADHUBALAN ",
    category: "2022",
    image: "",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 33,
    name: "VENKATESH J",
    category: "2022",
    image: "Venktaesh22",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 34,
    name: "UDHAYAKUMAR ",
    category: "2022",
    image: "Udhaya22",
    dept: "Mechanical",
    role: " ",
  },
  // 2023
  {
    id: 35,
    name: "KABILAN J ",
    category: "2023",
    image: "",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 36,
    name: "BUVANESWARAN S ",
    category: "2023",
    image: "",
    dept: "Mechanical",
    role: " ",
  },

 
  {
    id: 37,
    name: "POOBESH GUPTA M",
    category: "2023",
    image: "",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 38,
    name: "BALAJI T",
    category: "2023",
    image: "",
    dept: "Mechanical",
    role: "CHIEF TECHNICIAN (MECHANICAL)",
  },
  {
    id: 39,
    name: "naveen r",
    category: "2023",
    image: "",
    dept: "Mechanical",
    role: "DESIGN TEAM MEMBER",
  },
  {
    id: 40,
    name: "prabahar v m",
    category: "2023",
    image: "",
    dept: "Mechanical",
    role: "TEAM MANAGER",
  },
  {
    id: 41,
    name: "Sakthi S",
    category: "2023",
    image: "",
    dept: "Mechanical",
    role: "CHIEF TECHNICIAN (ELECTRONICS)",
  },
  {
    id: 42,
    name: " VIJAYKARTHIKEYAN K",
    category: "2023",
    image: "",
    dept: "Mechanical",
    role: "TECHNICAL TEAM MEMBER",
  },
  {
    id: 43,
    name: "MAKESH BOOPATHI m",
    category: "2023",
    image: "",
    dept: "Mechanical",
    role: "TECHNICAL TEAM MEMBER",
  },
  {
    id: 44,
    name: "ARUN KUMAR  T",
    category: "2023",
    image: "",
    dept: "Mechanical",
    role: "TECHNICAL TEAM MEMBER ",
  },
  {
    id: 45,
    name: "KARTHICK B",
    category: "2023",
    image: "",
    dept: "Mechanical",
    role: "TECHNICAL TEAM MEMBER",
  },
  {
    id: 46,
    name: "GOWTHAM S",
    category: "2023",
    image: "",
    dept: "Mechanical",
    role: " DESIGN TEAM MEMBER",
  },
  {
    id: 47,
    name: "THENAPPAN R",
    category: "2023",
    image: "",
    dept: "Mechanical",
    role: "DESIGN TEAM MEMBER ",
  },
  {
    id: 48,
    name: "DINESH M",
    category: "2023",
    image: "",
    dept: "Mechanical",
    role: "INNOVATION TEAM MEMBER",
  },
  {
    id: 49,
    name: "MATHIVANAN S",
    category: "2023",
    image: "",
    dept: "CSE",
    role: "INNOVATION TEAM MEMBER",
  },

  {
    id: 50,
    name: "HARIRATHNA U",
    category: "2023",
    image: "",
    dept: "CSE",
    role: "INNOVATION TEAM MEMBER",
  },
  {
    id: 51,
    name: "KARTHICK  T",
    category: "2023",
    image: "",
    dept: "CSE",
    role: "INNOVATION TEAM MEMBER",
  },
  {
    id: 52,
    name: " SREEJA G",
    category: "2023",
    image: "",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 53,
    name: "PUJA S",
    category: "2023",
    image: "",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 54,
    name: " Nithin S",
    category: "2021",
    image: "nithin21",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 55,
    name: "Kowshik B",
    category: "2021",
    image: "Kowshik21",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 56,
    name: "shanmathi ",
    category: "2021",
    image: "",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 57,
    name: "Sudharasan ",
    category: "2021",
    image: "Sudharasan21",
    dept: "Mechanical",
    role: " ",
  },
  {
    id: 58,
    name: "Surya ",
    category: "2022",
    image: "SuryaCS22",
    dept: "CSE",
    role: " ",
  },
  {
    id: 59,
    name: "Uthish Krishnan ",
    category: "2022",
    image: "Uthish Krishnan...Mech....2022",
    dept: "Mechanical",
    role: " ",
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
  
  return (
    <div>
    <Navbar />
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-10">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Alumini
      </h2>
      <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
        A diverse team of individuals with unique talents and backgrounds,
        united by a common goal and exceptional teamwork.
      </p>
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
          {filteredProducts.map((product) => (
            <Aluminicard
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
  )
}

export default Alumini
