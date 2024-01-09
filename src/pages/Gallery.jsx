import React, {useState,useEffect} from 'react'
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
      <Navbar view={isSectionInView}/>

      <div className="mx-auto mt-[5rem]  place-content-center place-items-center max-w-5xl">
    <div className=" p-5  mt-5  grid  grid-cols-1 items-center  px-2  sm:py-5  lg:grid-cols-2 lg:px-8">
    <div className="sm:max-w-lg">
    <span class="sm:hidden flex mb-5 font-medium text-gray-600 text-sm space-x-2 md:items-center">
                {" "}
                
                <a href="/">
                Home 
                </a>{" "}
                / Gallery
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Gallery
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
            <div className=" lg:ml-10 h-[20rem] w-[22rem] place-content-center place-items-center border-2 rounded-xl">
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
