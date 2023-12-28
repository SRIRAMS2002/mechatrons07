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



const FilterCard = ({ name, image,date,venue,Organiser, Awards,location }) => {
  const imageUrl = image ? `/Achievements/${image}.webp` : "/placeholder.gif";
  return (
    
    <div className="mx-auto   place-content-center place-items-center max-w-6xl">
    <div className="bg-white p-3 mx-2 rounded-xl shadow-lg hover:shadow-xl shadow-indigo-600 hover:shadow-indigo-600 mt-5  grid  grid-cols-1 items-center  px-2  sm:py-5 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div>
        <div>
          <p className="text-sm leading-4 font-medium text-slate-600">
            Event
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-black sm:text-slate-900 md:text-2xl">
           {name}
          </h1>
        </div>

        <dl className="mt-4 text-sm font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
          <dt className="sr-only">Reviews</dt>
          <dd className="text-indigo-400 flex items-center">
            <CalendarIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0  text-indigo-600"
              aria-hidden="true"
            />
            <span className="text-slate-600">{date}</span>
          </dd>
          <dt className="sr-only">Location</dt>
          <dd className="flex items-center text-slate-600">
            <svg
              width="2"
              height="2"
              aria-hidden="true"
              fill="currentColor"
              class="mx-3 text-slate-400"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
            <MapPin className="mr-1.5 h-4 w-5 flex-shrink-0 text-indigo-600" />
            {location}
          </dd>
        </dl>

        <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2  lg:gap-x-8">
          <div className="border-t border-gray-300 pt-4">
            <dt className="font-medium text-gray-900">Awards</dt>
            <dd className="mt-5  text-md text-gray-700">
              
              {Awards ? (
                Awards.map((award, index) => (
                  <div key={index} className="flex items-center">
                    <Award className="mr-1.5 h-5 w-5 flex-shrink-0 text-orange-500" />
                    <h1>{award.value}</h1>
                  </div>
                ))
              ) : (
                <p>No awards found</p>
              )}
            </dd>
          </div>
          <div className="border-t border-gray-300 pt-4">
            <dt className="font-medium text-gray-900">Venue</dt>
            <dd className="mt-5 flex text-md text-gray-500">
              <MapPin className="mr-1.5 h-5 w-5 flex-shrink-0 text-indigo-600" />
              {venue}
            </dd>
          </div>
          <div className="border-t border-gray-300 pt-4">
            <dt className="font-medium text-gray-900">Organiser</dt>
            <dd className="mt-5 flex text-md gap-x-2 text-gray-500">
              <Users className="mr-1.5 h-5 w-5 flex-shrink-0 text-indigo-600" />
              {Organiser}
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-5">
        
        <Swiper
      
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="max-w-[20rem] max-h-[25rem]"
        >
          <SwiperSlide>
            <div className=" bg-white border-2  text-center  rounded-xl">
              <img
                className="h-[12rem] w-[10rem] mx-auto"
                src={imageUrl}
                alt=""
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className=" bg-white border-2  text-center  rounded-xl">
              <img
                className="h-[12rem] w-[10rem]  mx-auto"
                src={imageUrl}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white border-2  text-center  rounded-xl">
              <img
                className="h-[12rem] w-[10rem] mx-auto"
                src={imageUrl}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white border-2  text-center  rounded-xl">
              <img
                className="h-[12rem] w-[10rem] mx-auto"
                src={imageUrl}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white border-2  text-center  rounded-xl">
              <img
                className="h-[12rem] w-[10rem]  mx-auto"
                src={imageUrl}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white border-2  text-center  rounded-xl">
              <img
                className="h-[12rem] w-[10rem] mx-auto"
                src={imageUrl}
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>


   
  </div>
  );
};

export default FilterCard;
