import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
// Import Swiper styles
import VideoBox from "@/Components/VideoBox";
import React, {useState,useEffect} from "react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import News from "@/Components/News";
import Projects from "@/Components/Projects";
import Recent from "@/Components/Recent";
import Testimonials from "@/Components/Testimonials";
import Footer from "@/Components/Footer";
import { motion } from "framer-motion";
import "swiper/css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Bike from "../../public/bike3W.webp";
import Image from "next/image";
import CountUp, { useCountUp } from "react-countup";
const index = () => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });


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
      if (scrollPosition > 500) {
        setIsSectionInView(true);
      } else {
        setIsSectionInView(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    
    <div className="BG-BLACK">
       <div className="w-full" id="target">
            <Navbar view={isSectionInView} />
          </div>
      
      {/* Hero */}
      <Hero/>
      {/* <Hero /> */}
      {/* About US */}
      <About />
      {/* Recent */}
      <Recent/>
    {/* </Recent> */}
     
      {/* Projects */}
      <Projects />
   

   
         {/* News */}
         <News />

         {/* VideoBox */}

         {/* <VideoBox/> */}
      {/* Testimonials */}
      <Testimonials />



      <Footer />
    </div>
  );
};

export default index;
