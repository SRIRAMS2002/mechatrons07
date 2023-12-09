import React from 'react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer';
import {
  BriefcaseIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";


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

      <div className="relative flex flex-col items-center justify-center gap-14  w-screen overflow-hidden mt-20 px-10 py-6 lg:py-10 lg:px-20 ">
         <h1  className='text-5xl w-full z-29'>Know about us</h1>
         


      </div>


      <Footer/>
    </div>
  )
}

export default Project
