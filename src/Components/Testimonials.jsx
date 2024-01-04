import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';


const Testi = [
  {
    id:1,
    name:"Vijayalakshmi R",
    description:"aaaaa",
    position:"Software Developer",
    image:"Founder-2",
  },
  {
    id:2,
    name:"Ramya T",
    description:"aaaaa",
    position:"Design Engineer",
    image:"Founder-5-1",
  },
  {
    id:1,
    name:"RAGU B ",
    description:"aaaaa",
    position:"R&D Enginner (Simulation & Testing)",
    image:"ragu",
  },
  {
    id:1,
    name:"RAMKUMAR K",
    description:"aaaaa",
    position:"Design Engineer ",
    image:"Ramkumar-21-1",
  },
  {
    id:1,
    name: "VIGNESHWARAN C",
    image: "VIGNESHWARAN-21",
    description:"aaaaa",
    position:"Design Engineer trainee",
  },
  {
    id:1,
    name: "SIVARAMAKRISHNAN P   ",
    image: "Sivaramakrihanam-22",
    position: "Associate - Cloud",
    description:"aaaaa",
    
  },
  {
    id:1,
    name: "Dhanapal D",
    image: "Dhanapal 23",
    position: "Design Engineer",
    description:"aaaaa",
  },
  {
    id:1,
    name: " SREEJA G",
    image: "sreeja23",
    description:"aaaaa",
    position:"Team Leader",
    
  },
];

const Testimonials = () => {
  return (
    <div className='mx-auto max-w-7xl my-10'> <Swiper    slidesPerView={1}
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }}
    className=''
    modules={[Pagination]}>
      {Testi.map((people, index) => (
      <SwiperSlide> <div className="mx-auto rounded-lg bg-gray-800 space-y-6 py-5 text-center max-w-sm">
        <div className='mx-auto rounded-full bg-white p-1.5 shadow-2xl shadow-white object-cover h-32 w-32 '>
        <img
              className="mx-auto w-full h-full rounded-full"
              src={`/Team/Founders/${people.image}.webp`}
              alt=""
             
            />
        </div>
            
            <p className="text-gray-400 mx-2">
              <span className="text-lg font-semibold leading-none ">"</span>{people.description}<span className="font-serif"> "</span>
            </p>
           
            <div>
            <h4 class="text-2xl text-white font-semibold ">{people.name}</h4>
          <span class="block text-sm text-gray-300">{people.position}</span>
            </div>
            </div></SwiperSlide>
             ))}
           
            
      </Swiper></div>
   
  );
};

export default Testimonials;
