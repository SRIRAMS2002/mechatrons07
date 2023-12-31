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
      imageUrl: "Hero",
    },
    {
      id: 2,
      imageUrl: "Hero",
    },
    {
      id: 3,
      imageUrl: "Hero",
    },
    {
      id: 4,
      imageUrl: "Hero",
    },
  ];
const Recent = () => {
  return (
    <div>
      <div className="mx-auto  items-center lg:flex max-w-7xl">
      <div className="sm:max-w-lg mx-auto">
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
    <div className="bg-white p-5  mt-5  ">
   

      <div className=" md:ml-10 ">
      <Swiper
  autoplay={{
    delay: 7500,
    disableOnInteraction: false,
  }}
  modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
  slidesPerView={1}
  spaceBetween={10}
  navigation={true}

  pagination={{ clickable: true }}
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log("slide change")}
className='max-w-[40rem] max-h-[30rem]'
>
{Intro.map((people, index) => (
          <SwiperSlide>
            <div className="bg-white lg:ml-10 h-[17rem] w-[30rem]  border-2 rounded-xl">
              <img
                className=" object-cover w-full h-full"
                src={`/Achievements/${people.imageUrl}.webp`}
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
