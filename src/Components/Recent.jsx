import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
// Import Swiper styles
const Intro = [
    {
      id: 1,
      imageUrl: "Founder-4",
    },
    {
      id: 2,
      imageUrl: "Founder-4",
    },
    {
      id: 3,
      imageUrl: "Founder-4",
    },
    {
      id: 4,
      imageUrl: "Founder-4",
    },
  ];
const Recent = () => {
  return (
    <div>
      <div className="mx-auto   place-content-center place-items-center max-w-5xl">
    <div className="bg-white p-5  mt-5  grid  grid-cols-1 items-center  px-2  sm:py-5  lg:grid-cols-2 lg:px-8">
    <div className="sm:max-w-lg">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Recent TRIUMPHS
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                We dared to dream beyond the numerical count of achievements
                lies a deeper impact. Our endeavors are not just about the
                bottom line; they resonate with apurpose that extends beyond
                profit margins.
              </p>
            </div>

      <div className="mt-5 md:ml-10 ">
      <Swiper
  autoplay={{
    delay: 3500,
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
{Intro.map((people, index) => (
          <SwiperSlide>
            <div className="bg-white lg:ml-10 h-[20rem] w-[22rem] place-content-center place-items-center border-2 rounded-xl">
              <img
                className="object-cover w-full h-full"
                src={`/Team/Founders/${people.imageUrl}.webp`}
                alt=""
              />
            </div>
          </SwiperSlide>
              ))}
        
         
        </Swiper>
     
      </div>

    </div>


   
  </div>
    </div>
  )
}

export default Recent
