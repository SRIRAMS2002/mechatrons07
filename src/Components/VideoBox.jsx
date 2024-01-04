import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import ReactPlayer from "react-player";

import { Navigation } from 'swiper/modules';



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const products = [
  {
    id :1,
    link :"https://www.youtube.com/watch?v=5OVHVbmw73w",
  },
  {
    id :2,
    link :"https://www.youtube.com/watch?v=7sOSkvF0B7s&list=PLaDvXEa2eD20PTxdQAkpwKpA5Ymg4oAgz&index=11",
  },
  {
    id :3,
    link :"https://www.youtube.com/watch?v=68Jbv-tlzXY",
  },
  {
    id :4,
    link :"https://www.youtube.com/watch?v=XpvkIRvNJ3w&list=PLUdl9f4veCssUyE3f14yC5sKLsLffYvuS&index=4",
  },


];
const VideoBox = () => {
  return (
    <div className="mx-auto my-20 max-w-7xl">
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="block m-0 items-center justify-start p-2 lg:p-20 relative z-30 overflow-hidden">
            <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 sm:flex items-center justify-center rounded-2xl bg-black relative overflow-hidden">
              <ReactPlayer
                playing={true}
                loop={true}
                controls={false}
                light={true}
                volume={0}
                muted={true}
                playbackRate={1.5}
                height={'100%'}
                width={'100%'}
                className="opacity-100 w-full h-full rounded-xl"
                url={product.link}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default VideoBox
