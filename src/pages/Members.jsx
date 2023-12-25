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

const people = [
  {
    id: 1,
    name: "Batch-2018",
    category: "2018",
  },
  {
    id: 2,
    name: "Batch-2019",
    category: "2019",
    icon: "",
  },
  {
    id: 3,
    name: "Batch-2020 ",
    category: "2020",
  },
  {
    id: 4,
    name: "Batch-2021",
    category: "2021",
  },
  {
    id: 5,
    name: "Batch-2022",
    category: "2022",
  },
];

const products = [
  {
    id: 1,
    name: "Sriram -18",
    category: "2018",
    image: "Founder-1",
    dept: "CSE",
    role: "Team Leader",
  },
  {
    id: 1,
    name: "Sriram 18",
    category: "2018",
    image: "Founder-2",
    dept: "CSE",
    role: "Team Leader",
  },

  {
    id: 1,
    name: "Sriram 18",
    category: "2018",
    image: "Founder-3",
    dept: "CSE",
    role: "Team Leader",
  },
  {
    id: 1,
    name: "Sriram 18",
    category: "2018",
    image: "Founder-1",
    dept: "CSE",
    role: "Team Leader",
  },
  {
    id: 1,
    name: "Sriram 19",
    category: "2019",
    image: "Founder-1",
    dept: "CSE",
    role: "Team Leader",
  },
  {
    id: 1,
    name: "Sriram 19",
    category: "2019",
    image: "Founder-3",
    dept: "CSE",
    role: "Team Leader",
  },

  {
    id: 1,
    name: "Sriram 20",
    category: "2020",
    image: "Founder-3",
    dept: "CSE",
    role: "Team Leader",
  },

  {
    id: 1,
    name: "Sriram",
    category: "2021",
    image: "Founder-2",
    dept: "CSE",
    role: "Team Leader",
  },
  {
    id: 1,
    name: "Sriram 22",
    category: "2022",
    image: "Founder-3",
    dept: "CSE",
    role: "Team Leader",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Members = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
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
            <MembersCard
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
