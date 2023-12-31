import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
// Import Swiper styles

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

  const posts = [
    {
      id: 1,
      title:
        "பெட்ரோல், பேட்டரி மூலம் இயங்கும் வாகனம்: ஸ்ரீ ராமகிருஷ்ணா கல்லூரி மாணவர்கள் சாதனை",
      href: "https://www.covaimail.com/?p=53397",
      description:
        "ஸ்ரீ ராமகிருஷ்ணா தொழில்நுட்பக் கல்லூரியின் இயந்திரவியல் மற்றும் மின்னியல், மற்றும் தொடர்பியல் துறை சார்ந்த இறுதி ஆண்டு மற்றும் முன்னாள் மாணவர்கள் பேட்டரி மற்றும் பெட்ரோல் மூலமாக இயங்கக்கூடிய இருசக்கர வாகனத்தை தயாரிக்கும் முயற்சியில் வெற்றி கண்டு சாதனை படைத்துள்ளனர்.",
      date: "Nov 06, 2021",
      datetime: "2021-11-06",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Covai Mail",
        role: "Newspaper",
        href: "#",
        imageUrl:
          "https://pbs.twimg.com/profile_images/841202864336732160/WpjQxv0c_400x400.jpg",
      },
    },
    {
      id: 2,
      title: "Tamil Nadu government opens doors for electric vehicle makers",
      href: "https://www.business-standard.com/article/companies/tamil-nadu-government-opens-doors-for-electric-vehicle-makers-121100400043_1.html",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Oct 04, 2021",
      datetime: "2021-10-04",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Business-Standard",
        role: "Co-Founder / CTO",
        href: "https://www.business-standard.com/",
        imageUrl:
          "https://www.business-standard.com/assets/web-assets/images/business-standard-logo-placeholder.jpg",
      },
    },
    {
      id: 3,
      title:
        "கோவையில் கலக்கும் ஸ்டார்ட் அப்; பெட்ரோல் ஸ்கூட்டருக்கு தீர்வு காணும் கிட்!",
      href: "https://tamil.samayam.com/latest-news/state-news/coimbatore-start-up-has-created-an-electric-conversion-kit-that-will-convert-petrol-scooter-to-hybrid/articleshow/85865857.cms",
      description:
        "கோவையை சேர்ந்த ஸ்டார்ட் அப் நிறுவனம் ஒன்று பெட்ரோல் ஸ்கூட்டரை எலக்ட்ரிக்-ஹைபிரிட் ஸ்கூட்டராக மாற்றும் கிட் ஒன்றை கண்டுபிடித்துள்ளது",
      date: "Sep 03, 2021",
      datetime: "2021-09-03",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "The Times of India- Samayam",
        role: "Newspaper",
        href: "https://tamil.samayam.com/",
        imageUrl:
          "https://play-lh.googleusercontent.com/k8eIgpF1iXamn64rd6w_kxpsmEO2VqVGhupV5oSAynhgtPNq56gvTnr4WG8mhBKFYjLX",
      },
    },
  ];
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
      {/* Recent */}
      <Recent/>
    {/* </Recent> */}
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
