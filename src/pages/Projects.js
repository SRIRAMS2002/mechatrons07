import React from 'react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer';
import {
  BriefcaseIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/Accordion";
const Project = () => {

  
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const features = [
    { name: "", description: "" },
    {
      name: "Material",
      description:
        "Solid walnut base with rare earth magnets and powder coated steel card cover",
    },
    { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
    {
      name: "Finish",
      description: "Hand sanded and finished with natural oil",
    },
    { name: "Includes", description: "Wood card tray and 3 refill packs" },
    {
      name: "Considerations",
      description:
        "Made from natural materials. Grain and color vary with each item.",
    },
  ];
  return (
    <div>
      <Navbar/>





      <div className=" border-2 border-violet-200 bg-white px-6  pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-7xl sm:rounded-lg sm:px-10">
        <div>
          <div className=" relative ml-5  pt-[3rem] lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Back End Developer
              </h2>
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <BriefcaseIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  Full-time
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <MapPinIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  Remote
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <CurrencyDollarIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  $120k &ndash; $140k
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <CalendarIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  Closing on January 9, 2020
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Technical Specifications
                </h2>
                <p className="mt-4 text-gray-500">
                  The walnut wood card tray is precision milled to perfectly fit
                  a stack of Focus cards. The powder coated steel divider
                  separates active cards from new ones, or can be used to
                  archive important task lists.
                </p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                
                    <div
                   
                      className="border-t border-gray-200 pt-4"
                    >
                      <dt className="font-medium text-gray-900">
                      Origin
                      </dt>
                      <dd className="mt-2 text-sm text-gray-500">
                      Designed by Good Goods, Inc.
                      </dd>
                    </div>
                    <div
                   
                   className="border-t border-gray-200 pt-4"
                 >
                   <dt className="font-medium text-gray-900">
                   Origin
                   </dt>
                   <dd className="mt-2 text-sm text-gray-500">
                   Designed by Good Goods, Inc.
                   </dd>
                 </div>
                 <div
                   
                   className="border-t border-gray-200 pt-4"
                 >
                   <dt className="font-medium text-gray-900">
                   Origin
                   </dt>
                   <dd className="mt-2 text-sm text-gray-500">
                   Designed by Good Goods, Inc.
                   </dd>
                 </div>
                 <div
                   
                   className="border-t border-gray-200 pt-4"
                 >
                   <dt className="font-medium text-gray-900">
                   Origin
                   </dt>
                   <dd className="mt-2 text-sm text-gray-500">
                   Designed by Good Goods, Inc.
                   </dd>
                 </div>
                  
                </dl>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                  alt="Side of walnut card tray with card groove and recessed card area."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-100"
                />
              </div>
            </div>
          </div>

          <a className=" justify-center " href="/Projects/Desc1">
          
          </a>
        </div>
      </div>



















    


      <div className="relative flex flex-col items-center justify-center gap-14  w-screen overflow-hidden mt-20 px-10 py-6 lg:py-10 lg:px-20 ">
         <h1  className='text-5xl w-full z-29'>Know about us</h1>
         <Accordion type="multiple" collapsible className="w-full flex flex-col gap-10 bg-transparent z-30 relative">
  <AccordionItem value="item-1" defaultOpen={true}>
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
     {/*  1*/}
        <div className=" border-2 border-violet-200 bg-white px-6  pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-7xl sm:rounded-lg sm:px-10">
        <div>
          <div className=" relative ml-5  pt-[3rem] lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Back End Developer
              </h2>
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <BriefcaseIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  Full-time
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <MapPinIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  Remote
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <CurrencyDollarIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  $120k &ndash; $140k
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <CalendarIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  Closing on January 9, 2020
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Technical Specifications
                </h2>
                <p className="mt-4 text-gray-500">
                  The walnut wood card tray is precision milled to perfectly fit
                  a stack of Focus cards. The powder coated steel divider
                  separates active cards from new ones, or can be used to
                  archive important task lists.
                </p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                
                    <div
                   
                      className="border-t border-gray-200 pt-4"
                    >
                      <dt className="font-medium text-gray-900">
                      Origin
                      </dt>
                      <dd className="mt-2 text-sm text-gray-500">
                      Designed by Good Goods, Inc.
                      </dd>
                    </div>
                    <div
                   
                   className="border-t border-gray-200 pt-4"
                 >
                   <dt className="font-medium text-gray-900">
                   Origin
                   </dt>
                   <dd className="mt-2 text-sm text-gray-500">
                   Designed by Good Goods, Inc.
                   </dd>
                 </div>
                 <div
                   
                   className="border-t border-gray-200 pt-4"
                 >
                   <dt className="font-medium text-gray-900">
                   Origin
                   </dt>
                   <dd className="mt-2 text-sm text-gray-500">
                   Designed by Good Goods, Inc.
                   </dd>
                 </div>
                 <div
                   
                   className="border-t border-gray-200 pt-4"
                 >
                   <dt className="font-medium text-gray-900">
                   Origin
                   </dt>
                   <dd className="mt-2 text-sm text-gray-500">
                   Designed by Good Goods, Inc.
                   </dd>
                 </div>
                  
                </dl>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                  alt="Side of walnut card tray with card groove and recessed card area."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-100"
                />
              </div>
            </div>
          </div>

          <a className=" justify-center " href="/Projects/Desc1">
          
          </a>
        </div>
      </div>

{/* 2 */}
      <div className=" border-2 border-violet-200 bg-white px-6  pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-7xl sm:rounded-lg sm:px-10">
        <div>
          <div className=" relative ml-5  pt-[3rem] lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Back End Developer
              </h2>
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <BriefcaseIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  Full-time
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <MapPinIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  Remote
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <CurrencyDollarIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  $120k &ndash; $140k
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <CalendarIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  Closing on January 9, 2020
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Technical Specifications
                </h2>
                <p className="mt-4 text-gray-500">
                  The walnut wood card tray is precision milled to perfectly fit
                  a stack of Focus cards. The powder coated steel divider
                  separates active cards from new ones, or can be used to
                  archive important task lists.
                </p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                
                    <div
                   
                      className="border-t border-gray-200 pt-4"
                    >
                      <dt className="font-medium text-gray-900">
                      Origin
                      </dt>
                      <dd className="mt-2 text-sm text-gray-500">
                      Designed by Good Goods, Inc.
                      </dd>
                    </div>
                    <div
                   
                   className="border-t border-gray-200 pt-4"
                 >
                   <dt className="font-medium text-gray-900">
                   Origin
                   </dt>
                   <dd className="mt-2 text-sm text-gray-500">
                   Designed by Good Goods, Inc.
                   </dd>
                 </div>
                 <div
                   
                   className="border-t border-gray-200 pt-4"
                 >
                   <dt className="font-medium text-gray-900">
                   Origin
                   </dt>
                   <dd className="mt-2 text-sm text-gray-500">
                   Designed by Good Goods, Inc.
                   </dd>
                 </div>
                 <div
                   
                   className="border-t border-gray-200 pt-4"
                 >
                   <dt className="font-medium text-gray-900">
                   Origin
                   </dt>
                   <dd className="mt-2 text-sm text-gray-500">
                   Designed by Good Goods, Inc.
                   </dd>
                 </div>
                  
                </dl>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                  alt="Side of walnut card tray with card groove and recessed card area."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-100"
                />
              </div>
            </div>
          </div>

          <a className=" justify-center " href="/Projects/Desc1">
          
          </a>
        </div>
      </div>
      
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2" defaultOpen={true}>
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      {/* 3 */}
    <div className=" border-2 border-violet-200 bg-white px-6  pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-7xl sm:rounded-lg sm:px-10">
        <div>
          <div className=" relative ml-5  pt-[3rem] lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Back End Developer
              </h2>
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <BriefcaseIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  Full-time
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <MapPinIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  Remote
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <CurrencyDollarIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  $120k &ndash; $140k
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <CalendarIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  Closing on January 9, 2020
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Technical Specifications
                </h2>
                <p className="mt-4 text-gray-500">
                  The walnut wood card tray is precision milled to perfectly fit
                  a stack of Focus cards. The powder coated steel divider
                  separates active cards from new ones, or can be used to
                  archive important task lists.
                </p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                
                    <div
                   
                      className="border-t border-gray-200 pt-4"
                    >
                      <dt className="font-medium text-gray-900">
                      Origin
                      </dt>
                      <dd className="mt-2 text-sm text-gray-500">
                      Designed by Good Goods, Inc.
                      </dd>
                    </div>
                    <div
                   
                   className="border-t border-gray-200 pt-4"
                 >
                   <dt className="font-medium text-gray-900">
                   Origin
                   </dt>
                   <dd className="mt-2 text-sm text-gray-500">
                   Designed by Good Goods, Inc.
                   </dd>
                 </div>
                 <div
                   
                   className="border-t border-gray-200 pt-4"
                 >
                   <dt className="font-medium text-gray-900">
                   Origin
                   </dt>
                   <dd className="mt-2 text-sm text-gray-500">
                   Designed by Good Goods, Inc.
                   </dd>
                 </div>
                 <div
                   
                   className="border-t border-gray-200 pt-4"
                 >
                   <dt className="font-medium text-gray-900">
                   Origin
                   </dt>
                   <dd className="mt-2 text-sm text-gray-500">
                   Designed by Good Goods, Inc.
                   </dd>
                 </div>
                  
                </dl>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                  alt="Side of walnut card tray with card groove and recessed card area."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-100"
                />
              </div>
            </div>
          </div>

          <a className=" justify-center " href="/Projects/Desc1">
          
          </a>
        </div>
      </div> 
{/* 4 */}

       <div className=" border-2 border-violet-200 bg-white px-6  pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-7xl sm:rounded-lg sm:px-10">
        <div>
          <div className=" relative ml-5  pt-[3rem] lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Back End Developer
              </h2>
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <BriefcaseIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  Full-time
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <MapPinIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  Remote
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <CurrencyDollarIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  $120k &ndash; $140k
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <CalendarIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  Closing on January 9, 2020
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Technical Specifications
                </h2>
                <p className="mt-4 text-gray-500">
                  The walnut wood card tray is precision milled to perfectly fit
                  a stack of Focus cards. The powder coated steel divider
                  separates active cards from new ones, or can be used to
                  archive important task lists.
                </p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                
                    <div
                   
                      className="border-t border-gray-200 pt-4"
                    >
                      <dt className="font-medium text-gray-900">
                      Origin
                      </dt>
                      <dd className="mt-2 text-sm text-gray-500">
                      Designed by Good Goods, Inc.
                      </dd>
                    </div>
                    <div
                   
                   className="border-t border-gray-200 pt-4"
                 >
                   <dt className="font-medium text-gray-900">
                   Origin
                   </dt>
                   <dd className="mt-2 text-sm text-gray-500">
                   Designed by Good Goods, Inc.
                   </dd>
                 </div>
                 <div
                   
                   className="border-t border-gray-200 pt-4"
                 >
                   <dt className="font-medium text-gray-900">
                   Origin
                   </dt>
                   <dd className="mt-2 text-sm text-gray-500">
                   Designed by Good Goods, Inc.
                   </dd>
                 </div>
                 <div
                   
                   className="border-t border-gray-200 pt-4"
                 >
                   <dt className="font-medium text-gray-900">
                   Origin
                   </dt>
                   <dd className="mt-2 text-sm text-gray-500">
                   Designed by Good Goods, Inc.
                   </dd>
                 </div>
                  
                </dl>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                  alt="Side of walnut card tray with card groove and recessed card area."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-100"
                />
              </div>
            </div>
          </div>

          <a className=" justify-center " href="/Projects/Desc1">
          
          </a>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3" defaultOpen={true}>
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>


      </div>


      <Footer/>
    </div>
  )
}

export default Project
