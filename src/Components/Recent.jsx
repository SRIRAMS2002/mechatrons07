import { Fragment, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { Award, MapPin, Users } from "lucide-react";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
  CheckIcon,
  CalendarIcon,
} from "@heroicons/react/20/solid";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const products = [
  {
    id: 1,
    name: " National Electric Tractor Design Challenge (NETDC'23)",
   
    
    image: "NETDC23",
   
    venue: "Bannari Amman Institute of Technology",
    Organiser: " Department of Agricultural Engineering&amp; BIT-IIC",
    date: "18 - 19 Aug 2023",
    Awards: [{ value: "Overall Champions" }],
    location:"Erode",
  },
  {
    id: 2,
    name: "  National Electric    Bike Challenge    (NEBC’23  Season 1)",
   
    
    image: "NEBC23",
   
    venue: "Kumaraguru College    of Technology",
    Organiser: "KCT Garage    &    Society for Smart    E-Mobility(SSEM)",
    date: "25 - 26 Feb 2023",
    Awards: [{ value: "Overall Champions – ₹50,000/-" },
    { value: "Best Endurance–₹10,000/-" },
    { value: "Best Acceleration–₹5,000/-" },
    { value: "Best Manoeuvrability–₹5,000/-" },
    { value: "Best Bump Test–₹5,000/-" }
  ,{ value: "Best Autocross–₹5,000/-" }],
    location:"Coimbatore.",
  },
  {
    id: 3,
    name: "SIEP’23    Electric Bike    Challenge    (Season 3)",
   
    
    image: "SIEP23",
   
    venue: "Galgotias University,    Noida.",
    Organiser: "Hero electric &    ISIE India",
    date: "14 - 18 Apr 2023",
    Awards: [{ value: "Best Business    Plan and Cost-    Rs.10,000/- + Trophy" },
    { value: "Hill    Climb Test Winner- Rs.10,000/- + Trophy" },
    { value: "FutureAward-Rs.5,000/-    +Trophy" },],
    location:"New Delhi.",
  },
  {
    id: 4,
    name: "SIEP’21    Electric Bike    Challenge    (Season 2)",
   
    
    image: "SIEP21",
   
    venue: "Chandigarh Group of    College",
    Organiser: "Hero electric &    ISIE India",
    date: "25 - 28 Dec 2021",
    Awards: [{ value: "Overall Championship     Award - Rs.50,000/-" },
    { value: "Best Acceleration    Winner - Rs.10,000/-" },
    { value: "Off Road Test Winner -    Rs.10,000/-" },
    { value: "Sled Pull Test Winner -    Rs.10,000/-" },
    { value: "Future Award -    Rs.5,000/-" },
    { value: "Hill Climb Test -    Runner-up" },],
    location:"Punjab.",
  },
  {
    id: 5,
    name: "National Level Mini    Dirt Bike    (DIRTRASH’22) ",
   
    
    image: "DIRTRASH22",
   
    venue: "Sri Ramakrishna    Engineering College,    ",
    Organiser: "Department of    Mechanical    Engineering",
    date: "19 Oct 2022",
    Awards: [{ value: "Overall Runner up –    Rs.7,500" },],
    location:"Coimbatore.",
  },
];
const Recent = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Recent TRIUMPHS
      </h1>
      <p className="mt-4 text-xl text-gray-500">
        We dared to dream beyond the numerical count of achievements lies a
        deeper impact. Our endeavors are not just about the bottom line; they
        resonate with apurpose that extends beyond profit margins.
      </p>

      {/* content */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
     
       
        {products.map((product) => (
           <SwiperSlide> 
          <div className="mx-auto   place-content-center place-items-center max-w-7xl">
        <div className="bg-white p-5  rounded-lg  mt-5  grid  grid-cols-1 items-center  px-2  sm:py-5  lg:grid-cols-2 lg:px-8">
          <div className="">
            <div className=" text-left">
              <p className="text-sm leading-4 font-medium text-slate-600">
                Event
              </p>
              <h1 className="mt-1 text-2xl font-semibold text-black sm:text-slate-900 md:text-2xl">
               {product.name}
              </h1>
            </div>

            <dl className="mt-4 text-sm font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
              <dt className="sr-only">Reviews</dt>
              <dd className="text-indigo-400 flex items-center">
                <CalendarIcon
                  className="mr-1.5 h-5 w-5 flex-shrink-0  text-indigo-600"
                  aria-hidden="true"
                />
                <span className="text-slate-600">{product.date}</span>
              </dd>
              <dt className="sr-only">Location</dt>
              <dd className="flex items-center ml-2 text-slate-600">
                <MapPin className="mr-1.5 h-4 w-5 flex-shrink-0 text-indigo-600" />
               {product.location}
              </dd>
            </dl>

            <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2  lg:gap-x-8">
              <div className="border-t border-gray-300 pt-4">
                <dt className="font-semibold text-gray-900">Awards</dt>
                <dd className="mt-5  text-md text-gray-800">
                  <div className="flex items-center">
                    
                    <h1>
              {product.Awards ? (
                product.Awards.map((award, index) => (
                  <div key={index} className="flex items-center">
                    <Award className="mr-1.5 h-5 w-5 flex-shrink-0 text-indigo-700" />
                    <h1>{award.value}</h1>
                  </div>
                ))
              ) : (
                <p>No awards found</p>
              )}</h1>
                  </div>
                </dd>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <dt className="font-semibold text-gray-900">Venue</dt>
                <dd className="mt-5 flex text-md text-gray-800">
                  <MapPin className="mr-1.5 h-5 w-5 flex-shrink-0 text-indigo-700" />
                  {product.venue}
                </dd>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <dt className="font-semibold text-gray-900">Organiser</dt>
                <dd className="mt-5 flex text-md gap-x-2 text-gray-800">
                  <Users className="mr-1.5 h-5 w-5 flex-shrink-0 text-indigo-700" />
                 {product.Organiser}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-5 md:ml-10 ">
          <div className="bg-white border-2 w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl">
                  <img
                    className="object-cover "
                    src={`/Achievements/${product.image}.webp`}
                    alt=""
                  />
                </div>
          </div>
        </div>
      </div>
      </SwiperSlide>
        ))}

      
      
        
      </Swiper>

     
    </div>
  );
};

export default Recent;
