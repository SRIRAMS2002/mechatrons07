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
import { GiIndiaGate } from "react-icons/gi";
import { TbScooterElectric } from "react-icons/tb";
import { RiMotorbikeFill } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";

import FilterCard from "@/Components/FilterCard";
import AllEvent from "@/Components/AllEventPage";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const people = [
  {
    id: 1,
    name: "International",
    category: "international",
    icon: GlobeAmericasIcon,
  },
  {
    id: 2,
    name: "National",
    category: "national",
    icon: GiIndiaGate,
  },
  {
    id: 3,
    name: "Electric Bike ",
    category: "electric",
    icon: TbScooterElectric,
  },
  {
    id: 4,
    name: "Mini Dirt",
    category: "minidirt",
    icon: RiMotorbikeFill,
  },
  {
    id: 5,
    name: "Hackathon",
    category: "hackathon",
    icon: AcademicCapIcon,
  },
];

const products = [
  // International Events
  {
    id: 1,
    name: "I2CreaTE 2021 ",
    category: "international",
    image1: "-1",
    image2: "-2",
    image3: "-3",
    image4: "-4",
    image5: "-5",
    venuedes: "Universiti Malaysia Perlis (UniMAP), Malaysia. ",
    Organiser:
      "Malaysia Research & Innovation Society (MyRIS) and Ministry of Education Malaysia (MOE)",
    date: "16 September, 2021",
    Awards: [
      { value: "Gold Award – 01" },
      { value: "Silver Award – 02" },
      { value: "Bronze Award - 02" },
    ],
    location:"Malaysia",
  },
  {
    id: 2,
    name: "IN-VIDE 2021",
    category: "international",
    image1: "-1",
    image2: "-2",
    image3: "-3",
    image4: "-4",
    image5: "-5",
    venuedes: "Universiti Malaysia Perlis (UniMAP), Malaysia",
    Organiser:
      "Malaysian Innovation Foundation (YIM) and National Planetarium, Malaysia",
    date: "31 October, 2021",
    Awards: [{ value: "Silver Award – 02" }, { value: "Bronze Award - 02" }],
    location:"Malaysia",
  },
  {
    id: 3,
    name: "IEEE YESIST12 2019",
    category: "international",
    image1: "Thailand",
    image2: "Thailand-2",
    image3: "Thailand-3",
    image4: "Thailand-4",
    image5: "Thailand-1",
    venuedes: "Stamford International University, Thailand",
    Organiser: "IEEE",
    date: "07 - 08 September, 2019",
    Awards: [{ value: "Grand Finale Event" }],
    location:"Thailand",
  },

  // National Events
  {
    id: 4,
    name: "IDEATHON 2023 ",
    category: "national",
    image1: "-1",
    image2: "-2",
    image3: "-3",
    image4: "-4",
    image5: "-5",
    venuedes:
      "Vinayaka Mission's Kirupananda Variyar Engineering College, Salem.",
    Organiser: "IIC & CIVIL ",
    date: "09 May 2023 ",
    Awards: [{ value: "Best Innovative Idea – Rs.1000/- " }],
    location:"Salem",
  },
  {
    id: 5,
    name: "VISAI 2023",
    category: "national",
    image1: "-1",
    image2: "-2",
    image3: "-3",
    image4: "-4",
    image5: "-5",
    venuedes:
      "Vel Tech Rangarajan    Dr.Sagunthala R&D    Institute of Science and    Technology, Chennai",
    Organiser:
      "A Joint Collaboration  Event with Indian    National Commission    for Cooperation with    UNESCO",
    date: "23 - 24 Feb 2023",
    Awards: [{ value: "Second place - Rs.6,000/-" }],
    location:"Chennai",
  },
  {
    id: 6,
    name: "National Level Project    Competition ",
    category: "national",
    image1: "-1",
    image2: "-2",
    image3: "-3",
    image4: "-4",
    image5: "-5",
    venuedes:
      "Dhanalakshmi    Srinivasan College of    Engineering,    Coimbatore",
    Organiser: "All Departments",
    date: "20 May, 2022",
    Awards: [{ value: "Best Project      Award – Rs.2000" }],
    location:"Coimbatore",
  },
  // Electric Events
  {
    id: 7,
    name: "Electric Bike Challenge    Season 3    ",
    category: "electric",
    image1: "-1",
    image2: "-2",
    image3: "-3",
    image4: "-4",
    image5: "-5",
    venuedes: "Galgotias University,    Noida.",
    Organiser: "Hero electric    &    ISIE India",
    date: "14th – 18th    April 2023",
    Awards: [
      { value: "Best Business Plan & Cost – Rs.10,000" },
      { value: "Best Hill Climb – Rs.10,000" },
      { value: "Future Award – Rs.5000" },
    ],
    location:"Noida",
  },
  {
    id: 8,
    name: "National Electric Bike    Challenge (NEBC’23)    Season 1 ",
    category: "electric",
    image1: "-1",
    image2: "-2",
    image3: "-3",
    image4: "-4",
    image5: "-5",
    venuedes: "Kumaraguru College of    Technology, Coimbatore",
    Organiser: "KCT Garage",
    date: "25 – 26    February 2023",
    Awards: [
      { value: "Overall Championship – Rs.50,000/-" },
      { value: "Best Endurance  – Rs.10,000" },
      { value: "Best Acceleration – Rs.5000" },
      { value: "Best Manoeuvrability – Rs.5000" },
      { value: "Best Bump Test – Rs.5000" },
      { value: "Best Autocross – Rs.5000" },
    ],
    location:"Coimbatore",
  },
  // Mini-Dirt Event
  {
    id: 4,
    name: "National Level Mini Dirt    Bike Race (RIVALS’23)    Season 4",
    category: "minidirt",
    image1: "-1",
    image2: "-2",
    image3: "-3",
    image4: "-4",
    image5: "-5",
    venuedes: "Karpagam Institute of    Technology, Coimbatore",
    Organiser: "Department of    Mechanical    Engineering",
    date: "4 Mar 2023",
    Awards: [{ value: "Best Driver Award      " }],
    location:"Coimbatore",
  },
  // Hackathon
  {
    id: 5,
    name: "Tech Zeal 2K23,    A 32 Hours State Level    Hackathon",
    category: "hackathon",
    image1: "-1",
    image2: "-2",
    image3: "-3",
    image4: "-4",
    image5: "-5",
    venuedes: "Sona College of    Technology, Salem",
    Organiser: "Smart bridge India    Private Limited,    Hyderabad.",
    date: "10 - 11 Feb, 2023.",
    Awards: [{ value: "Champions - Rs.10,000" }],
    location:"Hyderabad",
  },
  {
    id: 6,
    name: "Tata Crucible Hackathon",
    category: "hackathon",
    image1: "-1",
    image2: "-2",
    image3: "-3",
    image4: "-4",
    image5: "-5",
    venuedes: "Christ University,    Bangalore",
    Organiser: "TATA Groups",
    date: "16 March 2019",
    Awards: [{ value: "Finalist" }],
    location:"Bangalore",
  },
];

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("section1");
  const [selectedCategory, setSelectedCategory] = useState("international");
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState(people[0]);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
    <>
      <Navbar className="text-black bg-white"/>
      <div className="mt-[8rem] min-h-screen pb-24">
        <div className="px-4 sm:px-6 lg:px-8 py-2">
          {/* Search bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex items-center border-b-2 border-indigo-400 hover:border-indigo-900">
              <span className="text-gray-500 mr-2 sm:text-lg">Events/</span>

              <input
                type="text"
                className="flex-1 bg-transparent py-2 px-2 sm:text-lg placeholder-gray-400 focus:outline-none"
                placeholder="Search Here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery === "" ? (
                <MagnifyingGlassIcon className="h-5 w-5 text-zinc-500   bg-white" />
              ) : (
                <XMarkIcon
                  onClick={() => {
                    setSearchQuery("");
                  }}
                  className="h-8 w-8 cursor-pointer animate-pulse text-zinc-700    bg-slate-300/70 rounded-full p-2"
                />
              )}
            </div>
          </div>

          <div className="max-w-7xl mx-auto ">
            <div className="flex items-center justify-evenly">
              {/* Category Tabs */}

              <div className="hidden lg:block space-x-5 border-b-2 border-gray-400">
                {/* All */}
               
                <button
                  className={classNames(
                    "py-2 px-2 border-b-2 shadow-lg hover:shadow-xl hover:border-b-indigo-900 uppercase focus:outline-none",
                   
                  )}
                  onClick={() => handleTabClick("section1")}
                >
                  <div className="flex items-center">
                    <BiCategoryAlt className="mr-1.5 h-8 w-6 flex-shrink-0 text-gray-400" />
                    <span className="font-semibold">
                      All <span className="lg:hidden">Events</span>
                    </span>
                  </div>
                </button>
                 

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
                    onClick={() => handleTabClick("section2")}
                  >
                    <div
                      className="flex items-center"
                      onClick={() => handleCategoryChange(person.category)}
                    >
                      <person.icon
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
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
                <button
                  className={classNames(
                    "py-2 px-2 border-b-2 shadow-lg hover:shadow-xl border-b-indigo-400 hover:border-b-indigo-900 uppercase focus:outline-none"
                  )}
                  onClick={() => handleTabClick("section1")}
                >
                  <div className="flex items-center">
                    <BiCategoryAlt className="mr-1 h-8 w-6 flex-shrink-0 text-gray-400" />
                    <span className="font-semibold">All</span>
                  </div>
                </button>

                <Listbox value={selected} onChange={setSelected} className=" ">
                  {({ open }) => (
                    <>
                      <div className="relative mt-2">
                        <Listbox.Button
                          onClick={() => handleTabClick("section2")}
                          className="block w-full  px-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
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
                                      <person.icon
                                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                        aria-hidden="true"
                                      />

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

           
          </div>
        </div>

         {/* Content */}
         <div className="mx-auto flex-shrink-0 max-w-7xl ">
              {activeTab === "section1" && (
                <div className="text-center mt-10 px-4 sm:px-6 lg:px-8">
                  <AllEvent />
                </div>
              )}
              {activeTab === "section2" && (
                <div className="mt-[2rem] place-content-center place-items-center ">
                  {filteredProducts.map((product) => (
                    <FilterCard
                      key={product.id}
                      name={product.name}
                      image1={product.image1}
                      image2={product.image2}
                      image3={product.image3}
                      image4={product.image4}
                      image5={product.image5}
                      venue={product.venuedes}
                      Organiser={product.Organiser}
                      date={product.date}
                      Awards={product.Awards}
                      location={product.location}
                    />
                  ))}
                </div>
              )}
            </div>
      </div>

      <Footer />
    </>
  );
};

export default Achievements;
