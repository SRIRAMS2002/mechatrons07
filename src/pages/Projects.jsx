import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Fragment, useState, useEffect } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { Award, MapPin, Users } from "lucide-react";
import { CalendarIcon } from "@heroicons/react/20/solid";

const product = [
  {
    id: 1,
    name: " DESIGN AND FABRICATION OF RETROFITTED ELECTRIC BIKE (TVS APACHE)",

    image: "RETROFITTED-2",

    venue: "Bannari Amman Institute of Technology",
    Organiser: " Department of Agricultural Engineering&amp; BIT-IIC",
    date: "18 - 19 Aug 2023",
    Awards: [{ value: "Overall Champions" }],
    location: "Erode",
  },
];
const Models = [
  {
    id: 1,
    name: " DESIGN AND FABRICATION OF RETROFITTED ELECTRIC",
    image: "RETROFITTED-1",
    name1: "Overall Length",
    desc1: "2020 mm",
    name2: "Overall Width",
    desc2: "730 mm",
    name3: "Overall Height",
    desc3: "1050 mm",
    name4: "Chassis Material used",
    desc4: "TVS Apache frame",
    name5: "Ground Clearance",
    desc5: "210 mm",
    name6: "Wheel base",
    desc6: "1300 mm",
    name7: "Seat Height",
    desc7: "750 mm",
    name8: "Overall Weight",
    desc8: "96kg",
    spec1:"72V & 30Ah Li-Ion Battery with 6A Charger",
    spec2:"72V & 2KW BLDC Hub Motor",
    spec3:"72V 65A Regenerative Sine Wave Controller",
    spec4:" 72V to 12V DC-DC Convertor",
    spec5:"Max.Speed 70 Km/hr",
    spec6:"Range 50-65 Km",
    spec7:"Max Torque 127NM",
    spec8:"Payload Capacity 300Kg",
    venue: "Bannari Amman Institute of Technology",
    Organiser: " Department of Agricultural Engineering&amp; BIT-IIC",
    date: "18 - 19 Aug 2023",
    Awards: [{ value: "Overall Champions" }],
    location: "Erode",
  },
];

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

      <div className="mx-auto mt-[10rem] max-w-7xl  px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Projects
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Beyond the numerical count of achievements lies a deeper impact. Our
          endeavors resonate with a purpose that extends beyond profit margins.
        </p>

        {product.map((product) => (
          <div key={product.id}>
            <div className="mx-auto my-5 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-2.5 lg:p-8 flex flex-col lg:flex-row">
                <div className="lg:w-1/2 md:max-h-[20rem]">
                  <img
                    className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg"
                    src={`/Projects/${product.image}.png`}
                    alt={product.name}
                  />
                </div>
                <div className="lg:w-1/2 mt-5 lg:pl-8">
                  <h1 className="text-xl sm:text-4xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h1>
                  <dl className="mb-4 flex flex-wrap justify-between gap-4">
                    <div className="flex items-center">
                      <CalendarIcon className="h-5 w-5 mr-1.5 text-indigo-600" />
                      <span className="text-gray-700">{product.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-1.5 text-indigo-600" />
                      <span className="text-gray-700">{product.location}</span>
                    </div>
                  </dl>
                  <div className="mb-4">
                    <h2 className="text-gray-800 font-semibold">Awards</h2>
                    <div className="flex flex-col gap-2">
                      {product.Awards &&
                        product.Awards.map((award, index) => (
                          <div key={index} className="">
                            <span className="text-gray-700 ">
                              {award.value}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h2 className="text-gray-800 font-semibold">Venue</h2>
                    <p className="text-gray-700">{product.venue}</p>
                  </div>
                  <div className="mb-4">
                    <h2 className="text-gray-800 font-semibold">Organiser</h2>
                    <p className="text-gray-700">{product.Organiser}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center sm:space-x-10 sm:justify-around">
                    <button
                      type="submit"
                      onClick={() => setOpen(true)}
                      className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Quick View
                    </button>
                    <a
                      href="/path/to/your/file.pdf"
                      download="filename.pdf"
                      className="flex-none rounded-md mt-5 sm:mt-0 bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Download File
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

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
                <Dialog.Panel className="  p-4 md:p-8 py-28 md:pt-20 pb-20  w-full  sm:w-[90%] md:w-[90%] h-[75%] rounded-xl relative  overflow-hidden flex flex-col">
                  {Models.map((product) => (
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
                              src={`/Projects/${product.image}.png`}
                              alt={product.name}
                            />
                          </div>
                          <div className="lg:w-1/2 mt-5 lg:pl-8">
                            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
                              {product.name}
                            </h1>

                            {/* length */}
                            <dt className="font-medium text-gray-900">
                              Measurements
                            </dt>
                            <div className="grid  grid-cols-2">
                              <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">
                                  {product.name1}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                  {product.desc1}
                                </dd>
                              </div>
                              <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">
                                  {product.name2}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                  {product.desc2}
                                </dd>
                              </div>
                              <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">
                                  {product.name3}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                  {product.desc3}
                                </dd>
                              </div>
                              <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">
                                  {product.name4}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                  {product.desc4}
                                </dd>
                              </div>
                              <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">
                                  {product.name5}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                  {product.desc5}
                                </dd>
                              </div>
                              <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">
                                  {product.name6}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                  {product.desc6}
                                </dd>
                              </div>
                              <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">
                                  {product.name7}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                  {product.desc7}
                                </dd>
                              </div>
                              <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">
                                  {product.name8}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                  {product.desc8}
                                </dd>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Technical */}
                        <div class="py-5">
                          <div class="xl:container m-auto px-6 text-gray-500 md:px-12">
                            <div>
                              <h2 class=" text-2xl font-bold text-gray-700  md:text-4xl">
                                Technical Specs
                              </h2>
                            </div>
                            <div class="mt-5 grid divide-x divide-y divide-gray-600 overflow-hidden rounded-3xl border border-gray-100  sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
                            <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                                <div class="flex space-x-8 items-center py-5 p-6 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
                                  <img
                                    src="/Projects/battery.png"
                                    class="w-12"
                                    width="512"
                                    height="512"
                                    alt="burger illustration"
                                  />
                                  <h5 class="text-md font-medium  text-gray-300 transition group-hover:text-primary">
                                  {product.spec1}
                                  </h5>
                                </div>
                              </div>
                              <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                                <div class="flex space-x-8 items-center py-5 p-6 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
                                  <img
                                    src="/Projects/car-engine.png"
                                    class="w-12"
                                    width="512"
                                    height="512"
                                    alt="burger illustration"
                                  />
                                  <h5 class="text-md  font-medium  text-gray-300 transition group-hover:text-primary">
                                    {product.spec2}
                                  </h5>
                                </div>
                              </div>
                              <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                                <div class="flex space-x-8 items-center py-5 p-6 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
                                  <img
                                    src="/Projects/bike.png"
                                    class="w-12"
                                    width="512"
                                    height="512"
                                    alt="burger illustration"
                                  />
                                  <h5 class="text-md  font-medium  text-gray-300 transition group-hover:text-primary">
                                  {product.spec3}
                                  </h5>
                                </div>
                              </div>
                              <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                                <div class="flex space-x-8 items-center py-5 p-6 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
                                  <img
                                    src="/Projects/convert.png"
                                    class="w-12"
                                    width="512"
                                    height="512"
                                    alt="burger illustration"
                                  />
                                  <h5 class="text-md  font-medium  text-gray-300 transition group-hover:text-primary">
                                  {product.spec4}
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Performance Specs */}
                        <div class="py-5">
                          <div class="xl:container m-auto px-6 text-gray-500 md:px-12">
                            <div>
                              <h2 class=" text-2xl font-bold text-gray-700  md:text-4xl">
                                Performance Specs
                              </h2>
                            </div>
                            <div class="mt-5 grid divide-x divide-y divide-gray-600 overflow-hidden rounded-3xl border border-gray-100  sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
                            <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                                <div class="flex space-x-8 items-center py-5 p-6 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
                                  <img
                                    src="/Projects/performance.png"
                                    class="w-12"
                                    width="512"
                                    height="512"
                                    alt="burger illustration"
                                  />
                                  <h5 class="text-md font-medium  text-gray-300 transition group-hover:text-primary">
                                  {product.spec5}
                                  </h5>
                                </div>
                              </div>
                              <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                                <div class="flex space-x-8 items-center py-5 p-6 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
                                  <img
                                    src="/Projects/speedometer.png"
                                    class="w-12"
                                    width="512"
                                    height="512"
                                    alt="burger illustration"
                                  />
                                  <h5 class="text-md font-medium  text-gray-300 transition group-hover:text-primary">
                                  {product.spec6}
                                  </h5>
                                </div>
                              </div>
                              <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                                <div class="flex space-x-8 items-center py-5 p-6 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
                                  <img
                                    src="/Projects/renewable-energy.png"
                                    class="w-12"
                                    width="512"
                                    height="512"
                                    alt="burger illustration"
                                  />
                                  <h5 class="text-md font-medium  text-gray-300 transition group-hover:text-primary">
                                  {product.spec7}
                                  </h5>
                                </div>
                              </div>
                              <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                                <div class="flex space-x-8 items-center py-5 p-6 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
                                  <img
                                    src="/Projects/scalability.png"
                                    class="w-12"
                                    width="512"
                                    height="512"
                                    alt="burger illustration"
                                  />
                                  <h5 class="text-md font-medium  text-gray-300 transition group-hover:text-primary">
                                  {product.spec8}
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center sm:space-x-10 sm:justify-around">
                          <button
                            type="submit"
                            onClick={() => setOpen(false)}
                            className="mt-6 max-w-sm flex sm:w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Back
                          </button>
                          <a
                            href="/Contact"
                            type="submit"
                            className="mt-6 max-w-sm flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
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
