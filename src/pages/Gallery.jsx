import React from 'react'
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import GalleryPage from '@/Components/GalleryPage';
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
const Gallery = () => {
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
  const products = [
    {
      id: 1,
      location:"Chattisgarh",
      date:"05 September 2023",
      name: "EBDC Season 2 ",
      Desc:"Collaborate on the open source framework, contribute to the package ecosystem on pub.dev, and find help when you need it.",
      image: "Hero",
      image1: "Hero",
      image2: "Thailand",
      image3: "",
      image4: "",
      image5: "",
      image6: "",
      image7: "",
      image8: "",
      image9: "",
      image10: "",
      image11: "",
      image12: "",
      
    },
    {
      id: 1,
      location:"Chattisgarh",
      date:"05 September 2023",
      name: "EBDC Season 2 ",
      Desc:"Collaborate on the open source framework, contribute to the package ecosystem on pub.dev, and find help when you need it.",
      image: "Hero",
      image1: "Hero",
      image2: "Thailand",
      image3: "",
      image4: "",
      image5: "",
      image6: "",
      image7: "",
      image8: "",
      image9: "",
      image10: "",
      image11: "",
      image12: "",
      
    },
   
  ];

  return (
    <div>
      <Navbar className=""/>

      <div className=" max-w-lg mx-auto">
      <div className=" space-y-3 text-center   bg-white p-5 mt-5 ">
            <h1 className="mt-1 text-3xl font-semibold text-black sm:text-slate-900 md:text-2xl">
         Gallery
          </h1>
            <p className="text-sm md:text-lg font-normal text-center mx-10">
            Collaborate on the open source framework, contribute to the package ecosystem on pub.dev, and find{" "}
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

      <div className=''>

{products.map((product) => (
            <GalleryPage
              key={product.id}
              location={product.location}
              date={product.date}
              name={product.name}
              Desc={product.Desc}
              image={product.image}
              image1={product.image1}
              image2={product.image2}
              image3={product.image3}
              image4={product.image4}
              image5={product.image5}
              image6={product.image6}
              image7={product.image7}
              image8={product.image8}
              image9={product.image9}
              image10={product.image10}
              image11={product.image11}
              image12={product.image12}
             
              
            />
          ))}
       
      </div>

      <Footer/>
   
    </div>
  )
}

export default Gallery
