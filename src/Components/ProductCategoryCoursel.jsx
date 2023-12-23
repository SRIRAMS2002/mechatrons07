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
import Kabliesh from "../../public/Team/Members/21-25 KABILESH.webp";
import Event1 from "../../public/Achievements/event1.jpg";
import Image from "next/image";
import { Award, MapPin, Users } from "lucide-react";
import {
  GlobeAsiaAustraliaIcon,
  MagnifyingGlassCircleIcon,
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
  PlusIcon,
  CalendarIcon,
} from "@heroicons/react/20/solid";

import FilterCard from "@/Components/FilterCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const people = [
  {
    id: 1,
    name: "International",
    category: "international",
    avatar:
      "https://as2.ftcdn.net/v2/jpg/06/39/19/89/1000_F_639198995_nTPckzyfTW69TnTdNoszH0Fj18tudJ6e.webp",
  },
  {
    id: 2,
    name: "National",
    category: "national",
    avatar:
      "https://t3.ftcdn.net/jpg/00/53/75/10/240_F_53751022_Qiwjwh8ouMpcFzpGWIVxBslMhLyt6TTM.jpg",
  },
  {
    id: 3,
    name: "Electric Bike ",
    category: "electric",
    avatar:
      "https://t3.ftcdn.net/jpg/06/40/08/46/240_F_640084628_NYJXdzoByX4dNVH2B9B522yP2yquXWir.jpg",
  },
  {
    id: 4,
    name: "Mini Dirt",
    category: "minidirt",
    avatar:
      "https://t3.ftcdn.net/jpg/06/59/71/46/240_F_659714662_iemqQv5nAGwOO7TLXNdZnbbmYF7QgCLr.jpg",
  },
  {
    id: 5,
    name: "Hackathon",
    category: "hackathon",
    avatar:
      "https://t4.ftcdn.net/jpg/06/73/11/43/240_F_673114357_yqaDvfidZePHVp2Eh5pngf5nHE1LV8zE.jpg",
  },
];

const products = [
  // International Events
  {
    id: 1,
    name: "I2CreaTE 2021 ",
    category: "international",
    image: "Event",
    venuedes: "Universiti Malaysia Perlis (UniMAP), Malaysia. ",
    Organiser: "Malaysia Research & Innovation Society (MyRIS) and Ministry of Education Malaysia (MOE)",
    date:"16 September, 2021",
    Awards: [
      { value: "Gold Award – 01" },
      { value: "Silver Award – 02" },
      { value: "Bronze Award - 02" },
    ],
  },
  {
    id: 2,
    name: "IN-VIDE 2021",
    category: "international",
    image: "Event",
    venuedes: "Universiti Malaysia Perlis (UniMAP), Malaysia",
    Organiser: "Malaysian Innovation Foundation (YIM) and National Planetarium, Malaysia",
    date:"31 October, 2021",
    Awards: [
      { value: "Silver Award – 02" },
      { value: "Bronze Award - 02" },
    ],
  },
  {
    id: 3,
    name: "IEEE YESIST12 2019",
    category: "international",
    image: "Event",
    venuedes: "Stamford International University, Thailand",
    Organiser: "IEEE",
    date:"07 - 08 September, 2019",
    Awards: [
      { value: "Grand Finale Event" },
    ],
  },

  // National Events
  {
    id: 4,
    name: "IDEATHON 2023 ",
    category: "national",
    image: "Event",
    venuedes: "Vinayaka Mission's Kirupananda Variyar Engineering College, Salem.",
    Organiser: "IIC & CIVIL ",
    date:"09 May 2023 ",
    Awards: [
      { value: "Best Innovative Idea – Rs.1000/- " },
    ],

  },
  {
    id: 5,
    name: "VISAI 2023",
    category: "national",
    image: "Event",
    venuedes: "Vel Tech Rangarajan    Dr.Sagunthala R&D    Institute of Science and    Technology, Chennai",
    Organiser: "A Joint Collaboration  Event with Indian    National Commission    for Cooperation with    UNESCO",
    date:"23 - 24 Feb 2023",
    Awards: [
      { value: "Second place - Rs.6,000/-" },
 
    ],

  },
  {
    id: 6,
    name: "National Level Project    Competition ",
    category: "national",
    image: "Event",
    venuedes: "Dhanalakshmi    Srinivasan College of    Engineering,    Coimbatore",
    Organiser: "All Departments",
    date:"20 May, 2022",
    Awards: [
      { value: "Best Project      Award – Rs.2000" },
     
    ],

  },
  // Electric Events
  {
    id: 7,
    name: "Electric Bike Challenge    Season 3    ",
    category: "electric",
    image: "Event",
    venuedes: "Galgotias University,    Noida.",
    Organiser: "Hero electric    &    ISIE India",
    date:"14th – 18th    April 2023",
    Awards: [
      { value: "Best Business Plan & Cost – Rs.10,000" },
      { value: "Best Hill Climb – Rs.10,000" },
      { value: "Future Award – Rs.5000" },
    ],

  },
  {
    id: 8,
    name: "National Electric Bike    Challenge (NEBC’23)    Season 1 ",
    category: "electric",
    image: "Event",
    venuedes: "Kumaraguru College of    Technology, Coimbatore",
    Organiser: "KCT Garage",
    date:"25 – 26    February 2023",
    Awards: [
      { value: "Overall Championship – Rs.50,000/-" },
      { value: "Best Endurance  – Rs.10,000" },
      { value: "Best Acceleration – Rs.5000" },
      { value: "Best Manoeuvrability – Rs.5000" },
      { value: "Best Bump Test – Rs.5000" },
      { value: "Best Autocross – Rs.5000" },
    ],

  },
// Mini-Dirt Event
  {
    id: 4,
    name: "National Level Mini Dirt    Bike Race (RIVALS’23)    Season 4",
    category: "minidirt",
    image: "Event",
    venuedes: "Karpagam Institute of    Technology, Coimbatore",
    Organiser: "Department of    Mechanical    Engineering",
    date:"4 Mar 2023",
    Awards: [
      { value: "Best Driver Award      " },
      
    ],

  },
  // Hackathon
  {
    id: 5,
    name: "Tech Zeal 2K23,    A 32 Hours State Level    Hackathon",
    category: "hackathon",
    image: "Event",
    venuedes: "Sona College of    Technology, Salem",
    Organiser: "Smart bridge India    Private Limited,    Hyderabad.",
    date:"10 - 11 Feb, 2023.",
    Awards: [
      { value: "Champions - Rs.10,000" },
      
    ],

  },
  {
    id: 6,
    name: "Tata Crucible Hackathon",
    category: "hackathon",
    image: "Event",
    venuedes: "Christ University,    Bangalore",
    Organiser: "TATA Groups",
    date:"16 March 2019",
    Awards: [
      { value: "Finalist" },
     
    ],

  },




  
];



const Achievements = () => {
  const [activeTab, setActiveTab] = useState("section1");
  const [selectedCategory, setSelectedCategory] = useState("all");
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
      {/* Main content */}
      <div  className=" fixed z-20 top-0 lg:top-0 left-0 right-0 ">
      <Navbar />
      <div className="sm:hidden mx-5 bg-white ">
            {/* Search Fn1 */}
            <div className="flex rounded-md  shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                Events/
              </span>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Search Here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
      </div>
      <div>
       
        <div className=" pb-5 mt-[11rem] sm:mt-[8rem] sm:flex space-y-5 items-center  gap-8 mx-auto flex-shrink-0 max-w-3xl px-4  sm:px-6  lg:max-w-7xl bg-white ">
          
          {/* Section all */}
          <div className="items-center">
            {/* ALL */}
            <button onClick={() => handleTabClick("section1")} className="">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                All Events
              </h2>
            </button>
          </div>
          

          {/* Section list */}
          <div className="sm:hidden">
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <>
                  <div className="relative mt-2">
                    <Listbox.Button
                      onClick={() => handleTabClick("section2")}
                      className="block w-full sm:w-[15rem] px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <span className="flex items-center">
                        <img
                          src={selected.avatar}
                          alt=""
                          className="h-5 w-5 flex-shrink-0 rounded-full"
                        />
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
                                  <img
                                    src={person.avatar}
                                    alt=""
                                    className="h-5 w-5 flex-shrink-0 rounded-full"
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
        

          {/* Search fn 2 */}
          <div className="sm:flex hidden ">
            <div className="flex rounded-md  shadow-sm ring-1 ring-inset ring-indigo-600 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                Events/
              </span>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="Search Here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto  flex-shrink-0 max-w-3xl px-4 py-3 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-5">
        {activeTab === "section1" && (
          <div>
            {/* Content for Section 1 */}
            <p className="">Section 1 Content Goes Here</p>
          </div>
        )}
        {activeTab === "section2" && (
          <div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
              {filteredProducts.map((product) => (
                <FilterCard
                  key={product.id}
                  name={product.name}
                  image={product.image}
                  venue={product.venuedes}
                  Organiser={product.Organiser}
                  date={product.date}
                  Awards={product.Awards}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      
                  

      <Footer />
    </>
  );
};

export default Achievements;
