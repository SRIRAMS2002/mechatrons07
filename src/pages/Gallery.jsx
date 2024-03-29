import React, { useState, useEffect } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import GalleryPage from "@/Components/GalleryPage";
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
  const [isSectionInView, setIsSectionInView] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20) {
        setIsSectionInView(true);
      } else {
        setIsSectionInView(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  const products = [
   {
    id:1,
    date:"05 Sep 2023",
    title:"Ideathon Season-3 2023",
    Desc:" Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas    in. Explicabo id ut laborum.",
    image1:"1G",
    image2:"2G",
    image3:"4G",
    

   }
  ];

  return (
    <div>
      <Navbar view={isSectionInView} />
      {/* Gallery-Hero Section */}
      <div className="mx-auto max-w-7xl mt-[7rem]  place-content-center place-items-center ">
         
        <div className=" p-5  mt-5 mx-5 grid  grid-cols-1 items-center  px-2  sm:py-5  lg:grid-cols-2 lg:px-8">
          <div className="lg:max-w-xl ">
            <span class="sm:hidden flex mb-5  font-medium text-gray-600 text-sm space-x-2 md:items-center">
              {" "}
              <a href="/">Home</a> / Gallery
            </span>
          
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Gallery
              </h2>
              <p className="text-lg pt-5 font-semibold leading-6 text-gray-600">
              We dared to dream beyond the numerical count of achievements lies
              a deeper impact. Our endeavors are not just about the bottom line;
              they resonate with apurpose that extends beyond profit margins.
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
          slidesPerView: 1,
          spaceBetween: 20,
        },
      }}
        watchSlidesProgress={true}
      
        className="mySwiper"
      >
       
        <SwiperSlide>
          <img
            className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg"
            src="/Gallery/1G.jpg"
            alt=""
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg"
            src="/Gallery/2G.jpg"
            alt=""
          />
        </SwiperSlide>{" "}
     
        <SwiperSlide>
          <img
            className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg"
            src="/Gallery/4G.jpg"
            alt=""
          />
        </SwiperSlide>{" "}
        
      </Swiper>
          </div>
        </div>
      </div>

 <div className="pb-5 ">
 {products.map((product) => (
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
        <div className="mt-10  flex items-center gap-x-4">
        <div className="h-px flex-auto hidden sm:flex bg-gray-400" />
              <h4 className=" text-sm  font-semibold leading-6 text-indigo-600">{product.date}</h4>
              <div className="h-px flex-auto bg-gray-400" />
            </div>
          <h2 className="text-3xl  mt-2 font-bold tracking-tight text-gray-900 sm:text-4xl">{product.title}</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
          {product.Desc}
          </p>
        </div>
        <div className="mx-auto  sm:p-3.5 rounded-3xl ring-1 ring-gray-200 mt-5 lg:mx-0 lg:flex">
        <Swiper
       autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
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
          slidesPerView: 2,
          spaceBetween: 20,
        },
        
      }}
        watchSlidesProgress={true}
      
        className="mySwiper"
      >
       
        <SwiperSlide>
          <img
            className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96px rounded-lg"
            src={`/Gallery/${product.image1}.jpg`}
            // src="/1G.jpg"
            alt=""
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg"
            src={`/Gallery/${product.image2}.jpg`}
            alt=""
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg"
            src={`/Gallery/${product.image3}.jpg`}
            alt=""
          />
        </SwiperSlide>{" "}

     

        
      </Swiper>
        </div>
      </div>
 ))}
    </div>
      <Footer />
    </div>
  );
};

export default Gallery;
