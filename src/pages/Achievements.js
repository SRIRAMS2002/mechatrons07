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
  MagnifyingGlassCircleIcon,
  CheckIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/20/solid";

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
  {
    id: 1,
    name: "International ",
    category: "international",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },
  {
    id: 2,
    name: "National",
    category: "national",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },
  {
    id: 3,
    name: "Electric",
    category: "electric",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },
  {
    id: 4,
    name: "Minidirt",
    category: "minidirt",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },
  {
    id: 5,
    name: "Hackathon",
    category: "hackathon",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },
  {
    id: 6,
    name: "RIVALS 2023",
    category: "minidirt",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },
  {
    id: 7,
    name: "Tata 3.0",
    category: "hackathon",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },
  {
    id: 8,
    name: "EBDC Season3",
    category: "electric",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },
  {
    id: 9,
    name: "Meetup 5.0",
    category: "national",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },
  {
    id: 10,
    name: "i2create 2029",
    category: "international",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },
  {
    id: 11,
    name: "Hackathon 2.0",
    category: "hackathon",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },
  {
    id: 12,
    name: "RIVALS 2024",
    category: "minidirt",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },
  {
    id: 13,
    name: "Tata 3.2",
    category: "hackathon",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },
  {
    id: 14,
    name: "EBDC Season4",
    category: "electric",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },
  {
    id: 15,
    name: "Meetup 6.0",
    category: "national",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },
  {
    id: 16,
    name: "i2create 2023",
    category: "international",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },
  {
    id: 17,
    name: "Hackathon 3.0",
    category: "hackathon",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },
  {
    id: 18,
    name: "RIVALS 2023 2.0",
    category: "minidirt",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },
  {
    id: 19,
    name: "Tata 4.0",
    category: "hackathon",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },
  {
    id: 20,
    name: "EBDC Season3 - 3.0",
    category: "electric",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },
  {
    id: 21,
    name: "Meetup 4.0",
    category: "national",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },
  {
    id: 22,
    name: "i2create 2025",
    category: "international",
    image:
      "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
  },

  // Add more products here
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

      <div className=" fixed top-0 lg:top-0 left-0 right-0 pb-5 ">
      <Navbar />
      <div className=" normal sm:flex space-y-5 items-center gap-8 mx-auto flex-shrink-0 max-w-3xl px-4  sm:px-6  lg:max-w-7xl bg-white ">
        <div className="sm:hidden ">
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
        {/* Section 1 */}
        <div className="items-center">
          {/* ALL */}
          <button
            onClick={() => handleTabClick("section1")}
            className=""
          >
            
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              All Events
            </h2>
          </button>
        </div>

        {/* Section 2 */}
        <div className=" ">
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
                                    selected ? "font-semibold" : "font-normal",
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

        {/* Section 3 */}
        <div className="md:flex hidden ">
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
      </div>

     

      {/* Content */}
      <div className="mx-auto mt-[17rem] sm:mt-[15rem] flex-shrink-0 max-w-3xl px-4 py-3 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-5">
        {activeTab === "section1" && (
          <div>
            {/* Content for Section 1 */}
            <p>Section 1 Content Goes Here</p>
          </div>
        )}
        {activeTab === "section2" && (
          <div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-300 p-4 rounded-md"
                >
                  <div className=" mx-auto   ">
                    <img
                      src={product.image}
                      className="h-[20rem] w-[22rem] rounded-lg object-cover object-center group-hover:opacity-75"
                      alt="h"
                      width={250}
                      height={400}
                    />
                    <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                      <p className="text-lg font-semibold leading-6 text-gray-900">
                        {product.name}
                      </p>
                      <div className="flex text-black justify-between">
                        <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                          DEMO CONTENT
                        </p>
                        <p>df</p>
                      </div>
                    </div>
                  </div>
                </div>
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
