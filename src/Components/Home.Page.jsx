"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/Components/Navbar";
import Load from "@/Components/Load";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import News from "@/Components/News";
import Projects from "@/Components/Projects";
import Testimonials from "@/Components/Testimonials";
import Footer from "@/Components/Footer";

import NewNavbar from "@/Components/NewNavbar";
import NewHero from "@/Components/NewHero";

const HomePage = () => {
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
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <Load />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-start w-screen min-h-screen h-fit">
          {/* <Navbar />
        <Hero />
        <About />
        <Projects />
        <News />
        <Testimonials />
        <Footer /> */}
          <div className="w-full" id="target">
            <NewNavbar view={isSectionInView} />
          </div>
          <div className="inline-block min-h-[5rem] sm:min-h-[4rem] lg:hidden w-full" />
          <NewHero />
          <About />
          <Projects />
          <News />
          <Footer />
        </div>
      )}
    </>
  );
};

export default HomePage;
