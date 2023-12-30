import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
// Import Swiper styles

import React from "react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import News from "@/Components/News";
import Projects from "@/Components/Projects";
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

      {/* section-3 */}
      <div className="mx-auto max-w-7xl ">
        {/* Achievements */}
        <div className="relative overflow-hidden bg-white">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Achievements
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  We dared to dream beyond the numerical count of achievements
                  lies a deeper impact. Our endeavors are not just about the
                  bottom line; they resonate with a purpose that extends beyond
                  profit margins.
                </p>
              </div>

              {/* image */}
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        {/* grid-1 */}
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg  sm:mt-0 sm:opacity-0 lg:opacity-100">
                            <Image
                              src={Bike}
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg opacity-0 sm:opacity-100">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        {/* grid-2 */}
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden  sm:opacity-100 -top-40 lg:opacity-0 rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden opacity-0 sm:opacity-85 rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        {/* grid-3 */}
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg opacity-0 xl:opacity-100">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg opacity-0 xl:opacity-100">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="/Achievements"
                    className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}

        <div>
          {/* Tab & Lap Projects */}
          <div className=" overflow-hidden hidden md:flex bg-white">
            <div className=" pt-10  sm:pt-12  lg:pt-0">
              <div className="flex items-center space-x-10 mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                {/* image */}
                <div className="hidden md:flex items-start   overflow-hidden  lg:space-x-8">
                  {/* grid-1 */}
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg   lg:opacity-100">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg opacity-0 sm:opacity-100">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  {/* grid-2 */}
                  <div className="grid mt-[10rem] flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg opacity-0 lg:opacity-100">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden  opacity-0 lg:opacity-100 rounded-lg">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  {/* grid-3 */}
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg opacity-0 xl:opacity-100">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg opacity-0 xl:opacity-100">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                {/*project text */}
                <div className="sm:max-w-xl  bg-transparent">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Projects
                  </h1>
                  <p className="mt-4 text-xl text-gray-500">
                    Our projects aren&#39;t just benchmarks; they are testament
                    to our commitment to raising the bar and setting new heights
                    for excellence. Absolutely! Crafting an innovative
                    description of your projects can showcase your creativity
                    and passion.
                  </p>
                  <a
                    href="/Projects"
                    className="inline-block mt-10 rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Moblie-projects */}
          <div className="relative md:hidden overflow-hidden bg-white">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
              <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="sm:max-w-lg">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Projects
                  </h1>
                  <p className="mt-4 text-xl text-gray-500">
                    Our projects aren&#39;t just benchmarks; they are testament
                    to our commitment to raising the bar and setting new heights
                    for excellence. Absolutely! Crafting an innovative
                    description of your projects can showcase your creativity
                    and passion.
                  </p>
                </div>

                {/* image */}
                <div>
                  <div className="mt-10">
                    {/* Decorative image grid */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                    >
                      <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                        <div className="flex items-center space-x-6 lg:space-x-8">
                          {/* grid-1 */}
                          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg  sm:mt-0 sm:opacity-0 lg:opacity-100">
                              <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg opacity-0 sm:opacity-100">
                              <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                          </div>
                          {/* grid-2 */}
                          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden  sm:opacity-100 -top-40 lg:opacity-0 rounded-lg">
                              <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                              <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div className="h-64 w-44 overflow-hidden opacity-0 sm:opacity-100 rounded-lg">
                              <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                          </div>
                          {/* grid-3 */}
                          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg opacity-0 xl:opacity-100">
                              <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg opacity-0 xl:opacity-100">
                              <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a
                      href="/Projects"
                      className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                    >
                      Shop Collection
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <Footer />
    </div>
  );
};

export default index;
