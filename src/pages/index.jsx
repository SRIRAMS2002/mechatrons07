<<<<<<< HEAD
import React from 'react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import {motion} from "framer-motion"
=======
import React from "react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import News from "@/Components/News";
import Projects from "@/Components/Projects";
import Testimonials from "@/Components/Testimonials";
import Footer from "@/Components/Footer";
import Headerimg from "../../public/2.jpg";
import { motion } from "framer-motion";
>>>>>>> ac73d0c (hero and motion added {not good})
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
const index = () => {
  return (
    <div className="BG-BLACK">
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About US */}
      <About />

      {/* Projects */}
      <Projects />

      {/* News */}
      <News />

      {/* Testimonials */}
      {/* <Testimonials /> */}

      <Footer />
    </div>
  );
};

export default index;
