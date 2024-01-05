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



const FilterCard = ({ name, image1 ,image2 ,image3 ,image4 ,image5 ,date,venue,Organiser, Awards,location }) => {
  const imageUrl1 = image1 ? `/Achievements/${image1}.webp` : "/placeholder.gif";
  const imageUrl2 = image2 ? `/Achievements/${image2}.webp` : "/placeholder.gif";
  const imageUrl3 = image3 ? `/Achievements/${image3}.webp` : "/placeholder.gif";
  const imageUrl4 = image4 ? `/Achievements/${image4}.webp` : "/placeholder.gif";
  const imageUrl5 = image5 ? `/Achievements/${image5}.webp` : "/placeholder.gif";
  return (
    
    <div className="mx-auto   place-content-center place-items-center max-w-5xl">
   <div className="mx-auto my-5 bg-white rounded-xl shadow-md overflow-hidden">
<div className="p-6 lg:p-8 flex flex-col lg:flex-row">
  <div className="lg:w-1/2 md:max-h-[20rem]">
  <Swiper
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
  slidesPerView={1}
  spaceBetween={10}
  navigation={true}

  pagination={{ clickable: true }}
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log("slide change")}

>
          <SwiperSlide>
            <div className="bg-white border-2 rounded-xl">
            <img
      className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg"
      src={imageUrl1}
      alt=""
    />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
          <div className="bg-white border-2 rounded-xl">
          <img
      className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg"
      src={imageUrl1}
      alt=""
    />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-white border-2 rounded-xl">
          <img
      className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg"
      src={imageUrl1}
      alt=""
    />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-white border-2 rounded-xl">
          <img
      className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg"
      src={imageUrl1} alt=""
    />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-white border-2 rounded-xl">
          <img
      className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg"
      src={imageUrl1}
      alt=""
    />
            </div>
          </SwiperSlide>
         
        </Swiper>
    {/* <img
      className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg"
      src={`/Achievements/${product.image}.webp`}
      alt={product.name}
    /> */}
  </div>
  <div className="lg:w-1/2 mt-5 lg:pl-8">

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
          <dd className="flex items-center ml-2 text-slate-600">
           
            <MapPin className="mr-1.5 h-4 w-5 flex-shrink-0 text-indigo-600" />
            {location}
          </dd>
        </dl>

        <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2  lg:gap-x-8">
          <div className="border-t border-gray-300 pt-4">
            <dt className="font-semibold text-gray-900">Awards</dt>
            <dd className="mt-5  text-md text-gray-800">
              
              {Awards ? (
                Awards.map((award, index) => (
                  <div key={index} className="flex items-center">
                    <Award className="mr-1.5 h-5 w-5 flex-shrink-0 text-indigo-700" />
                    <h1>{award.value}</h1>
                  </div>
                ))
              ) : (
                <p>No awards found</p>
              )}
            </dd>
          </div>
          <div className="border-t border-gray-300 pt-4">
            <dt className="font-semibold text-gray-900">Venue</dt>
            <dd className="mt-5 flex text-md text-gray-800">
              <MapPin className="mr-1.5 h-5 w-5 flex-shrink-0 text-indigo-700" />
              {venue}
            </dd>
          </div>
          <div className="border-t border-gray-300 pt-4">
            <dt className="font-semibold text-gray-900">Organiser</dt>
            <dd className="mt-5 flex text-md gap-x-2 text-gray-800">
              <Users className="mr-1.5 h-5 w-5 flex-shrink-0 text-indigo-700" />
              {Organiser}
            </dd>
          </div>
        </dl>


  </div>
</div>
</div>


   
  </div>
  );
};

export default FilterCard;
