import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}



const videoData = [
  {
    id:1,
    title: "Automatic Headlight Dimmer",
    thumbnail: "/Card1.webp",
    channel: "Team Mechatrons",
    link: "https://www.youtube.com/watch?v=XpvkIRvNJ3w&list=PLUdl9f4veCssUyE3f14yC5sKLsLffYvuS&index=4",
  },
  {
    id:2,
    title: "SIEP E-BIKE CHALLENGE 2023",
    thumbnail: "/card2.webp",
    channel: "Team Mechatrons",
    link: "https://www.youtube.com/watch?v=7sOSkvF0B7s&list=PLaDvXEa2eD20PTxdQAkpwKpA5Ymg4oAgz&index=11",
  },
  {
    id:3,
    title: "One Year of Mechatrons Achievement | Srit Mechatrons",
    thumbnail: "/Card4.webp",
    channel: "Team Mechatrons",
    link: "https://www.youtube.com/watch?v=5OVHVbmw73w",
  },
  {
    id:4,
    title: "Mechatrons07 E-Bike ",
    thumbnail: "/card3-2.webp",
    channel: "Team Mechatrons",
    link: "https://www.youtube.com/watch?v=68Jbv-tlzXY",
    
  },
  // Add more video data as needed
];

const VideoBox = () => {
  return (
    <div className="mx-auto  max-w-7xl">
    <Swiper  slidesPerView={1}
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
    className='mt-5'
    modules={[Pagination]}>
    {videoData.map((product) => (
        <SwiperSlide key={product.id}>
         <div className="max-w-[25rem] max-h-[25rem] my-10 relative">
  <a href={product.link} target="_blank" rel="noopener noreferrer" className="block">
    <div className="relative rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full h-40 object-cover" src={product.thumbnail} alt="" />

      <div className="p-2">
        <h2 className="font-bold text-gray-900 text-xl mb-2">{product.title}</h2>
        <div className='flex items-center justify-center'>
          <div className='h-10'>
          <img src="/youtube.svg" alt="" className="h-full w-full" />
          </div>
        
        <p className="text-gray-700 text-base mb-2">{product.channel}</p>
        </div>
        
      </div>
    </div>
  </a>
</div>

          
      
        <div className="swiper-pagination"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default VideoBox
