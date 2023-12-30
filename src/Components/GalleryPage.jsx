import React from "react";
import { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
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
    return classes.filter(Boolean).join(' ')
  }

const GalleryPage = ({ location,date, name, Desc,image, image1, image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12}) => {
  const imageUrl = image ? `/Achievements/${image}.webp` : "/placeholder.gif";
  const imageUrl1 = image1
    ? `/Achievements/${image1}.webp`
    : "/placeholder.gif";
  const imageUrl2 = image2
    ? `/Achievements/${image2}.webp`
    : "/placeholder.gif";
    const imageUrl3 = image ? `/Achievements/${image3}.webp` : "/placeholder.gif";
    const imageUrl4 = image ? `/Achievements/${image4}.webp` : "/placeholder.gif";
    const imageUrl5 = image ? `/Achievements/${image5}.webp` : "/placeholder.gif";
    const imageUrl6 = image ? `/Achievements/${image6}.webp` : "/placeholder.gif";
    const imageUrl7 = image ? `/Achievements/${image7}.webp` : "/placeholder.gif";
    const imageUrl8 = image ? `/Achievements/${image8}.webp` : "/placeholder.gif";
    const imageUrl9 = image ? `/Achievements/${image9}.webp` : "/placeholder.gif";
    const imageUrl10 = image ? `/Achievements/${image10}.webp` : "/placeholder.gif";
    const imageUrl11 = image ? `/Achievements/${image11}.webp` : "/placeholder.gif";
    const imageUrl12 = image ? `/Achievements/${image12}.webp` : "/placeholder.gif";
  return (
    <div>
      {/* gallery -laptop*/}
      <div className="hidden lg:inline-block">
        <div className=" overflow-hidden pt-0  pb-40 p-0 lg:p-16 block  relative  sm:-mt-80  mg-10 sm:mb-16 lg:mb-40">
          <div className="h-[800px]   text-center items-center justify-center w-full max-w-[110%] block my-0 mx-auto">
            <div className="flex  items-center justify-center h-[535px] md:h-[700px]">
              <div className="  absolute top-6 left-1/2 -translate-x-1/2 grid place-items-center grid-cols-8 h-full w-[260%] sm:w-[150%] md:w-[1500px]">
                
                <div className="relative col-span-1 col-start-2 h-[800px] flex flex-col gap-6 items-center justify-center mt-60">
                  <div className="h-[100px] md:h-[163px]  w-[100px] md:w-[163px] grid place-items-center neomorphism">
                    {/* 1 */}
                    <img src={imageUrl2} alt="" />
                  </div>
                  <div className="h-[100px] md:h-[163px]  w-[100px] md:w-[163px] grid place-items-center neomorphism">
                    {/* 2 */}
                    <img src={imageUrl2} alt="" />
                  </div>
                  <div className="h-[100px] md:h-[163px] w-[100px] md:w-[163px] grid place-items-center neomorphism">
                    {/* 3 */}
                    <img src={imageUrl2} alt="" />
                  </div>
                  <div className="h-[100px] md:h-[163px]  w-[100px] md:w-[163px] grid place-items-center neomorphism">
                    {/* 4 */}
                    <img src={imageUrl2} alt="" />
                  </div>
                </div>

                <div className="relative  col-span-1 col-start-3 h-[800px] flex flex-col gap-6 items-center justify-center mt-40">
                  <div className="h-[100px] md:h-[163px]  w-[100px] md:w-[163px] grid place-items-center neomorphism">
                    {/* 8 */}
                    <img src={imageUrl2} alt="" />
                  </div>
                  <div className="h-[100px] md:h-[163px]  w-[100px] md:w-[163px] grid place-items-center neomorphism">
                    {/* 9 */}
                    <img src={imageUrl2} alt="" />
                  </div>
                </div>
                <div className="relative col-span-2 col-start-4 h-[800px] flex flex-col gap-6 items-start justify-center -mt-10">
                  <div className="h-[220px] md:h-[200px]  w-[220px] md:w-[356px] grid place-items-center neomorphism">
                    {/* center */}
                   
                    <img src={imageUrl}    alt="" />
                
                  </div>
                </div>
                <div className="relative col-span-1 col-start-6 h-[800px] flex flex-col gap-6 items-center justify-center mt-40">
                  <div className="h-[100px] md:h-[163px]  w-[100px] md:w-[163px] grid place-items-center neomorphism">
                    {/* 9 */}
                    <img src={imageUrl2} alt="" />
                  </div>
                  <div className="h-[100px] md:h-[163px]  w-[100px] md:w-[163px] grid place-items-center neomorphism">
                    {/* 8 */}
                    <img src={imageUrl2} alt="" />
                  </div>
                </div>
                <div className="relative  col-span-1 col-start-7 h-[800px] flex flex-col gap-6 items-center justify-center  mt-60">
                  <div className="h-[100px] md:h-[163px] w-[100px] md:w-[163px] grid place-items-center neomorphism">
                    {/* 4 */}
                    <img src={imageUrl2} alt="" />
                  </div>
                  <div className="h-[100px] md:h-[163px] w-[100px] md:w-[163px] grid place-items-center neomorphism">
                    {/* 3 */}
                    <img src={imageUrl2} alt="" />
                  </div>
                  <div className="h-[100px] md:h-[163px]  w-[100px] md:w-[163px] grid place-items-center neomorphism">
                    {/* 2 */}
                    <img src={imageUrl2} alt="" />
                  </div>
                  <div className="h-[100px] md:h-[163px]  w-[100px] md:w-[163px] grid place-items-center neomorphism">
                    {/* 1 */}
                    <img src={imageUrl2} className="h-full" alt="" />
                  </div>
                </div>
               
              </div>
            </div>
          </div>
          {/* text */}
          <div className="mx-auto w-[90vw] mt-0 sm:mt-40 lg:-mt-40 p-3 h-[10rem] sm:h-[13rem] lg:h-[20rem] flex items-center justify-start flex-col gap-6">
            <p className="text-slate-500 font-sans leading-3 font-semibold text-lg">
              {location}
            </p>
            <p className="text-indigo-800 font-sans leading-3 font-semibold text-lg">
              {date}
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold max-w-sm text-center">
         {name}
            </h1>
            <p className="text-sm md:text-lg font-normal text-center max-w-lg">
             {Desc}{" "}
            </p>
          </div>
        </div>
       
      </div>

      {/* gallery mobile */}
      <div className="lg:hidden mx-5">
      <div className="mx-auto space-y-3 text-center  bg-white p-5  rounded-lg shadow-lg hover:shadow-xl shadow-indigo-500/50 hover:shadow-indigo-500/50 mt-5  grid  grid-cols-1 items-center  px-2  sm:py-5  lg:grid-cols-2 lg:px-8">
        
        <p className="text-slate-500 font-sans leading-3 font-semibold text-lg">
              {location}
            </p>
            <p className="text-indigo-800 font-sans leading-3 font-semibold text-lg">
              {date}
            </p>
            <h1 className="mt-1 text-2xl font-semibold text-black sm:text-slate-900 md:text-2xl">
           {name}
          </h1>
            <p className="text-sm md:text-lg font-normal text-center mx-10">
             {Desc}{" "}
            </p>
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
                className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
                src={imageUrl}
                alt=""
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
          <div className="bg-white border-2 rounded-xl">
              <img
                className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
                src={imageUrl1}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-white border-2 rounded-xl">
              <img
                className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
                src={imageUrl2}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-white border-2 rounded-xl">
              <img
                 className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
                src={imageUrl3}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-white border-2 rounded-xl">
              <img
                className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
                src={imageUrl4}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-white border-2 rounded-xl">
              <img
                className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
                src={imageUrl5}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-white border-2 rounded-xl">
              <img
                className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
                src={imageUrl6}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-white border-2 rounded-xl">
              <img
                className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
                src={imageUrl7}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-white border-2 rounded-xl">
              <img
                className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
                src={imageUrl8}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-white border-2 rounded-xl">
              <img
                className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
                src={imageUrl9}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-white border-2 rounded-xl">
              <img
                className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
                src={imageUrl10}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-white border-2 rounded-xl">
              <img
                className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
                src={imageUrl11}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-white border-2 rounded-xl">
              <img
                className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
                src={imageUrl12}
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

export default GalleryPage;
