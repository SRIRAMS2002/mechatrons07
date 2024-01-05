import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

import { Fragment, useState, useEffect } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { Award, MapPin, Users } from "lucide-react";
import { CalendarIcon } from "@heroicons/react/20/solid";
const product = {
  id: 1,
  name: " National Electric Tractor Design Challenge (NETDC'23)",

  image: "NETDC23",

  venue: "Bannari Amman Institute of Technology",
  Organiser: " Department of Agricultural Engineering&amp; BIT-IIC",
  date: "18 - 19 Aug 2023",
  Awards: [{ value: "Overall Champions" }],
  location: "Erode",
};

const Projects = () => {
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
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar view={isSectionInView} />
      <Footer/>
      <div className="pt-[10rem]"></div>
      <button
        type="submit"
        onClick={() => setOpen(true)}
        className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Get a Quote
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-stretch justify-center text-center md:items-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                enterTo="opacity-100 translate-y-0 md:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              >
                <Dialog.Panel className=" font-mono  p-4 md:p-8 py-28 md:pt-20 pb-20  w-full  sm:w-[90%] md:w-[90%] h-[75%] rounded-xl relative  overflow-hidden flex flex-col">
                  <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <button
                      type="button"
                      className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="mx-auto my-5 bg-white rounded-xl shadow-md overflow-hidden">
                      <div className="p-2 lg:p-8 flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 md:max-h-[20rem]">
                          <img
                            className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg"
                            src={`/Achievements/${product.image}.webp`}
                            alt={product.name}
                          />
                        </div>
                        <div className="lg:w-1/2 mt-5 lg:pl-8">
                          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
                            {product.name}
                          </h1>
                          <dl className="mb-4 flex flex-wrap justify-between gap-4">
                            <div className="flex items-center">
                              <CalendarIcon className="h-5 w-5 mr-1.5 text-indigo-600" />
                              <span className="text-gray-700">
                                {product.date}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-5 w-5 mr-1.5 text-indigo-600" />
                              <span className="text-gray-700">
                                {product.location}
                              </span>
                            </div>
                          </dl>
                          <div className="mb-4">
                            <h2 className="text-gray-800 font-semibold">
                              Awards
                            </h2>
                            <div className="flex flex-col gap-2">
                              {product.Awards &&
                                product.Awards.map((award, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center text-center mx-auto"
                                  >
                                    <span className="text-gray-700 ">
                                      {award.value}
                                    </span>
                                  </div>
                                ))}
                            </div>
                          </div>
                          <div className="mb-4">
                            <h2 className="text-gray-800 font-semibold">
                              Venue
                            </h2>
                            <p className="text-gray-700">{product.venue}</p>
                          </div>
                          <div className="mb-4">
                            <h2 className="text-gray-800 font-semibold">
                              Organiser
                            </h2>
                            <p className="text-gray-700">{product.Organiser}</p>
                          </div>
                        </div>
                       
                      </div>
                      <div>
                          <p>
                            In this updated code snippet, the image container's
                            aspect ratio is set to 2:3 using aspect-w-2 and
                            aspect-h-3 classes. The image itself is set to cover
                            the entire container space while maintaining its
                            aspect ratio using object-cover and object-center
                            classes. Inline sty are added
                            to ensure the image fills the container's width and
                            height, adjusting responsively based on the
                            available space.Feel free to adjust the aspect ratio
                            or styles further to match your specific design and
                            layout requirements.
                          </p>
                          <p>
                            In this updated code snippet, the image container's
                            aspect ratio is set to 2:3 using aspect-w-2 and
                            aspect-h-3 classes. The image itself is set to cover
                            the entire container space while maintaining its
                            aspect ratio using object-cover and object-center
                            classes. Inline sty are added
                            to ensure the image fills the container's width and
                            height, adjusting responsively based on the
                            available space.Feel free to adjust the aspect ratio
                            or styles further to match your specific design and
                            layout requirements.
                          </p>
                          <p>
                            In this updated code snippet, the image container's
                            aspect ratio is set to 2:3 using aspect-w-2 and
                            aspect-h-3 classes. The image itself is set to cover
                            the entire container space while maintaining its
                            aspect ratio using object-cover and object-center
                            classes. Inline sty are added
                            to ensure the image fills the container's width and
                            height, adjusting responsively based on the
                            available space.Feel free to adjust the aspect ratio
                            or styles further to match your specific design and
                            layout requirements.
                          </p>
                        </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* projects */}
      <div className="pt-[10rem]">d</div>

      <Footer />
    </div>
  );
};

export default Projects;
