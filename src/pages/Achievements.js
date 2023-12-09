import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Kabliesh from "../../public/Team/Members/21-25 KABILESH.webp";
import {
  GlobeAsiaAustraliaIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/20/solid";
import { LiaAwardSolid } from "react-icons/lia";
import { MdOutlineBikeScooter } from "react-icons/md";
import { MdOutlineElectricBike } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2x2Icon,
  GlobeAmericasIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";
import { Bike , BatteryCharging , Medal } from 'lucide-react';
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
    <div>
      <Navbar />
      

      {/* DEMO CHECK */}

      <div className="mx-auto flex-shrink-0 md:ml-20 px-4 py-10 sm:px-6 sm:py-10 lg:px-8">
        <div className=" md:flex ">
          {/* Section 3- */}
          <div className="  mb-5 flex sm:hidden">
            <input
              type="text"
              placeholder="Search ..."
              className="p-3 sm:p-4 flex-1 border-2 mx-5 border-gray-200 hover:border-gray-500 rounded-lg outline-none bg-transparent  text-md sm:text-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex">
            {/* Section 1 */}
            <div className="items-center">
              {/* ALL */}
              <button onClick={() => handleTabClick("section1")} className="group relative flex items-center rounded-lg p-4 text-md leading-6 hover:bg-gray-50">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    {/* <Squares2x2Icon
                      className="h-6 w-6 text-gray-600 group-hover:text-violet-600"
                      aria-hidden="true"
                    /> */}
                  </div>
                  <h1 className="block font-semibold text-gray-900">
                  ALL <span className="hidden sm:flex ml-2 ">CATEGORY EVENTS</span>
                    
                  </h1>
                </button>
            </div>
          

            {/* Section 2 */}
            <div className="">
              <div
                onClick={() => handleTabClick("section2")}
                className="hidden xl:flex"
              >
                {/* Inter */}
                <button onClick={() => handleCategoryChange("international")} className="group relative flex items-center rounded-lg p-4 text-md leading-6 hover:bg-gray-50">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <GlobeAmericasIcon
                      className="h-6 w-6 text-gray-600 group-hover:text-violet-600"
                      aria-hidden="true"
                    />
                  </div>
                  <h1 className="block font-semibold text-gray-900">
                  INTER-NATIONAL
                    
                  </h1>
                </button>

                {/* National */}
                <button onClick={() => handleCategoryChange("national")} className="group relative flex items-center rounded-lg p-4 text-md leading-6 hover:bg-gray-50">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <MapPinIcon
                      className="h-6 w-6 text-gray-600 group-hover:text-violet-600"
                      aria-hidden="true"
                    />
                  </div>
                  <h1 className="block font-semibold text-gray-900">
                  NATIONAL
                    
                  </h1>
                </button>

                {/* Electric */}
                <button onClick={() => handleCategoryChange("electric")} className="group relative flex items-center rounded-lg p-4 text-md leading-6 hover:bg-gray-50">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <BatteryCharging
                      className="h-6 w-6 text-gray-600 group-hover:text-violet-600"
                      aria-hidden="true"
                    />
                  </div>
                  <h1 className="block font-semibold text-gray-900">
                  ELECTRIC-BIKE
                    
                  </h1>
                </button>

                {/* Mini-Dirt */}
                <button onClick={() => handleCategoryChange("minidirt")} className="group relative flex items-center rounded-lg p-4 text-md leading-6 hover:bg-gray-50">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <Bike
                      className="h-6 w-6 text-gray-600 group-hover:text-violet-600"
                      aria-hidden="true"
                    />
                  </div>
                  <h1 className="block font-semibold text-gray-900">
                  MINI-DIRT BIKE
                    
                  </h1>
                </button>

                {/* Hackathon */}
                <button onClick={() => handleCategoryChange("hackathon")} className="group relative flex items-center rounded-lg p-4 text-md leading-6 hover:bg-gray-50">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <Medal
                      className="h-6 w-6 text-gray-600 group-hover:text-violet-600"
                      aria-hidden="true"
                    />
                  </div>
                  <h1 className="block font-semibold text-gray-900">
                  HACKATHON
                    
                  </h1>
                </button>
              </div>

              {/* Mobile */}

              <Menu as="div"   className="relative flex xl:hidden">
                <div>
                  <Menu.Button className="group px-10 pt-6 sm:pt-9 mx-10 my-auto items-center justify-center text-lg inline-flex font-semibold text-gray-900 ">
                    EVENTS
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items onClick={() => handleTabClick("section2")} className="absolute right-0 z-10 mt-12 w-60 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {/* ITEM-1 */}
                      <Menu.Item>
                        <div>
                          <button
                            onClick={() => handleCategoryChange("international")}
                            className={`mx-2 px-4 py-3  bg-white text-sm flex font-medium border-b-2 hover:border-violet-700 shadow-md rounded-sm  focus:outline-none ${
                              selectedCategory === "international"
                                ? "bg-white text-black"
                                : "bg-white text-gray-600"
                            }`}
                          >
                            <GlobeAmericasIcon
                              className="h-5 w-5 mx-2"
                              aria-hidden="true"
                            />
                            INTERNATIONAL
                          </button>
                        </div>
                      </Menu.Item>
                      {/* ITEM-2 */}
                      <Menu.Item>
                        <div>
                          <button
                            onClick={() => handleCategoryChange("national")}
                            className={`mx-2 px-4 py-3  bg-white text-sm flex font-medium border-b-2 hover:border-violet-700 shadow-md rounded-sm  focus:outline-none ${
                              selectedCategory === "international"
                                ? "bg-white text-black"
                                : "bg-white text-gray-600"
                            }`}
                          >
                            <MapPinIcon
                              className="h-5 w-5 mx-2"
                              aria-hidden="true"
                            />
                            NATIONAL  
                          </button>
                        </div>
                      </Menu.Item>
                      {/* ITEM-3 */}
                      <Menu.Item>
                        <div>
                          <button
                            onClick={() =>handleCategoryChange("electric")}
                            className={`mx-2 px-4 py-3  bg-white text-sm flex font-medium border-b-2 hover:border-violet-700 shadow-md rounded-sm  focus:outline-none ${
                              selectedCategory === "international"
                                ? "bg-white text-black"
                                : "bg-white text-gray-600"
                            }`}
                          >
                            <BatteryCharging
                              className="h-5 w-5 mx-2"
                              aria-hidden="true"
                            />
                            ELECTRIC BIKE EVENT
                          </button>
                        </div>
                      </Menu.Item>
                      {/* ITEM-4 */}
                      <Menu.Item>
                        <div>
                          <button
                            onClick={() => handleCategoryChange("minidirt")}
                            className={`mx-2 px-4 py-3  bg-white text-sm flex font-medium border-b-2 hover:border-violet-700 shadow-md rounded-sm  focus:outline-none ${
                              selectedCategory === "international"
                                ? "bg-white text-black"
                                : "bg-white text-gray-600"
                            }`}
                          >
                            <Bike
                              className="h-5 w-5 mx-2"
                              aria-hidden="true"
                            />
                            MINI-DIRT BIKE
                          </button>
                        </div>
                      </Menu.Item>
                      {/* ITEM-5 */}
                      <Menu.Item>
                        <div>
                          <button
                            onClick={() =>  handleCategoryChange("hackathon")}
                            className={`mx-2 px-4 py-3  bg-white text-sm flex font-medium border-b-2 hover:border-violet-700 shadow-md rounded-sm  focus:outline-none ${
                              selectedCategory === "international"
                                ? "bg-white text-black"
                                : "bg-white text-gray-600"
                            }`}
                          >
                            <Medal
                              className="h-5 w-5 mx-2"
                              aria-hidden="true"
                            />
                            HACKATHONS
                          </button>
                        </div>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>

            {/* Section 3- */}
            <div className=" my-5 ml-5 sm:flex hidden">
              <input
                type="text"
                placeholder="Search ..."
                className="px-3  flex-1 border-2 border-gray-200 hover:border-gray-500 outline-none bg-transparent rounded-lg text-lg  sm:text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>


          </div>
        </div>

        {/* Content */}
        <div className="mx-auto flex-shrink-0 max-w-3xl px-4 py-3 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-5">
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

        
      </div>
    </div>
  );
};

export default Achievements;
