import React from 'react'
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Image from "next/image";
import Kabliesh from "../../public/Team/Members/21-25 KABILESH.webp";
const Mentors = () => {
  return (
    <div>
      <Navbar/>
      <div className="mx-auto flex-shrink-0 max-w-3xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Founders</h2>
        <div className="mx-auto  lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight pl-5 text-gray-900 sm:text-4xl">Mentors</h2>
          <p className="text-lg pt-5 pl-5 font-semibold leading-6 text-indigo-600">A diverse team of individuals with unique talents and backgrounds, united by a common goal and exceptional teamwork.</p>
       
        </div>
        
        <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-900 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
        
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        
               <div className=" mx-auto   ">
                 <Image
                   src={Kabliesh}
                   className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                 />
                 <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                   <p className="text-lg font-semibold leading-6 text-gray-900">
                     KABILESH 
                   </p>
                   <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                       MECH
                   </p>
                 </div>
               </div>

               <div className=" mx-auto   ">
                 <Image
                   src={Kabliesh}
                   className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                 />
                 <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                   <p className="text-lg font-semibold leading-6 text-gray-900">
                     KABILESH 
                   </p>
                   <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                       MECH
                   </p>
                 </div>
               </div>

               <div className=" mx-auto   ">
                 <Image
                   src={Kabliesh}
                   className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                 />
                 <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                   <p className="text-lg font-semibold leading-6 text-gray-900">
                     KABILESH 
                   </p>
                   <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                       MECH
                   </p>
                 </div>
               </div>

               <div className=" mx-auto   ">
                 <Image
                   src={Kabliesh}
                   className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                 />
                 <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                   <p className="text-lg font-semibold leading-6 text-gray-900">
                     KABILESH 
                   </p>
                   <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                       MECH
                   </p>
                 </div>
               </div>



        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Mentors
