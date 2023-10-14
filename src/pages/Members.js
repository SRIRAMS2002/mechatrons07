import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Durgadass from "../../public/Team/Members/20-24 DURGADASS V C.webp";
import MahendraPrabu from "../../public/Team/Members/20-24 MAHENDRA PRABU T.webp";
import Asraf from "../../public/Team/Members/20-24 MOHAMED ASRAF M.webp";
import Sifas from "../../public/Team/Members/20-24 SIFAS S.webp";
import Vignesh from "../../public/Team/Members/20-24 VIGNESH J V.webp";
import Vishnu from "../../public/Team/Members/20-24 VISHNU PRASATH  J.webp";
import shrimathi from "../../public/Team/Members/20-24 SHRIMATHI C M.webp";
import Tusita from "../../public/Team/Members/20-24 TUSITA M.webp";
import Sriram from "../../public/Team/Members/20-24 SRIRAM S.webp";

import Akshanth from "../../public/Team/Members/21-25 AKSHANTH ROA G.webp";
import Balamurugan from "../../public/Team/Members/21-25 BALAMURUGAN S.webp";
import Kabliesh from "../../public/Team/Members/21-25 KABILESH.webp";
import Mari from "../../public/Team/Members/21-25 MARI ESWAR S.webp";
import Mohanasundar from "../../public/Team/Members/21-25 MOHANA SUNDAR.webp";
import Suriya from "../../public/Team/Members/21-25 SURYA M.webp";
import Thirumalainambi from "../../public/Team/Members/21-25 THIRUMALAINAMBI M.webp";
import Yukendran from "../../public/Team/Members/21-25 YUKENDRAN S.webp";
import Dheedan from "../../public/Team/Members/21-25 DHEEDAN CHAKRAVARTHI.webp";
import Harevashanth from "../../public/Team/Members/21-25 HAREVASHANTHAN.webp";
import Jeeva from "../../public/Team/Members/21-25 JEEVABHARATHI M A.webp";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/Accordion";
const Members = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto flex-shrink-0 max-w-3xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <div className="mx-auto  lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight pl-5 text-gray-900 sm:text-4xl">
            Members
          </h2>
          <p className="text-lg pt-5 pl-5 font-semibold leading-6 text-indigo-600">A diverse team of individuals with unique talents and backgrounds, united by a common goal and exceptional teamwork.</p>
        </div>

        <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-900 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
        <Accordion
          type="multiple"
          collapsible
          className="w-full flex flex-col gap-10 bg-transparent  relative"
        >
          <AccordionItem value="item-2" defaultOpen={true}>
            <AccordionTrigger>
              {" "}
              <div className="flex items-center rounded-xl  mx-auto px-16 sm:px-36 md:px-[10rem] mb-10 bg-gradient-to-tr from-slate-200 to-white p-8 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
                <div className='mx-auto text-center'>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">2020-2024</h3>
                
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
               
                <div className=" mx-auto   ">
                  <Image
                    src={Durgadass}
                    className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                  />
                  <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                      DURGADAS V C
                    </p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                        MECH
                    </p>
                  </div>
                </div>
                <div className=" mx-auto  ">
                  <Image
                    src={MahendraPrabu}
                    className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                  />
                  <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                    MAHENDRA PRABU T
                    </p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                        MECH
                    </p>
                  </div>
                </div>
                <div className=" mx-auto   ">
                  <Image
                    src={Asraf}
                    className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                  />
                  <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                      MOHAMED ASRAF M
                    </p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                        MECH
                    </p>
                  </div>
                </div>
                <div className=" mx-auto   ">
                  <Image
                    src={Sifas}
                    className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                  />
                  <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                      SIFAS S
                    </p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                        MECH
                    </p>
                  </div>
                </div>
                <div className=" mx-auto   ">
                  <Image
                    src={Vignesh}
                    className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                  />
                  <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                    VIGNESH J V
                    </p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                        MECH
                    </p>
                  </div>
                </div>
                <div className=" mx-auto ">
                  <Image
                    src={Vishnu}
                    className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                  />
                  <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                      VISHNU PRASATH J
                    </p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                        MECH
                    </p>
                  </div>
                </div>
                <div className=" mx-auto  ">
                  <Image
                    src={Durgadass}
                    className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                  />
                  <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                      TharaniKumar R S
                    </p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                        MECH
                    </p>
                  </div>
                </div>
                <div className=" mx-auto  ">
                  <Image
                    src={Sriram}
                    className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                  />
                  <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                      SRIRAM S
                    </p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                        CSE
                    </p>
                  </div>
                </div>
                <div className=" mx-auto  ">
                  <Image
                    src={shrimathi}
                    className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                  />
                  <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                      SHRIMATHI C M
                    </p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                        CSE
                    </p>
                  </div>
                </div>
                <div className=" mx-auto  ">
                  <Image
                    src={Tusita}
                    className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                  />
                  <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                      TUSITA M
                    </p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                        CSE
                    </p>
                  </div>
                </div>
               

              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1" defaultOpen={true}>
            <AccordionTrigger>
              {" "}
              <div className="flex items-center rounded-xl  mx-auto px-16 sm:px-36 md:px-[10rem] mb-10 bg-gradient-to-tr from-slate-200 to-white p-8 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
               <div className='mx-auto text-center'>
                 <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">2021-2025</h3>
               
               </div>
             </div>
            </AccordionTrigger>
            <AccordionContent>
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
                <div className=" mx-auto  ">
                  <Image
                    src={Akshanth}
                    className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                  />
                  <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                    AKSHANTH ROA G
                    </p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                        MECH
                    </p>
                  </div>
                </div>
                <div className=" mx-auto   ">
                  <Image
                    src={Balamurugan}
                    className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                  />
                  <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                      BALAMURUGAN S
                    </p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                        MECH
                    </p>
                  </div>
                </div>
                <div className=" mx-auto   ">
                  <Image
                    src={Dheedan}
                    className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                  />
                  <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                      DHEEDAN CHAKRAVARTHI
                    </p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                        MECH
                    </p>
                  </div>
                </div>
                <div className=" mx-auto   ">
                  <Image
                    src={Harevashanth}
                    className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                  />
                  <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                    HAREVASHANTHAN
                    </p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                        MECH
                    </p>
                  </div>
                </div>
                <div className=" mx-auto ">
                  <Image
                    src={Jeeva}
                    className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                  />
                  <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                      JEEVABHARATHI M A
                    </p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                        ECE
                    </p>
                  </div>
                </div>
                <div className=" mx-auto  ">
                  <Image
                    src={Mari}
                    className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                  />
                  <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                    MARI ESWAR S
                    </p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                        MECH
                    </p>
                  </div>
                </div>
                <div className=" mx-auto  ">
                  <Image
                    src={Mohanasundar}
                    className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                  />
                  <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                     MOHANA SUNDAR
                    </p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                        CSE
                    </p>
                  </div>
                </div>
                <div className=" mx-auto  ">
                  <Image
                    src={Suriya}
                    className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                  />
                  <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                      SURIYA M
                    </p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                        CSE
                    </p>
                  </div>
                </div>
                <div className=" mx-auto  ">
                  <Image
                    src={Thirumalainambi}
                    className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                  />
                  <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                     THIRUMALAINAMBI M
                    </p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                        CSE
                    </p>
                  </div>
                </div>
                <div className=" mx-auto  ">
                  <Image
                    src={Yukendran}
                    className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
                  />
                  <div className="min-w-0 mt-5 m-5 mx-auto text-center">
                    <p className="text-lg font-semibold leading-6 text-gray-900">
                  YUKENDRAN S
                    </p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                        CSE
                    </p>
                  </div>
                </div>
               

              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" defaultOpen={true}>
            <AccordionTrigger>
              {" "}
              <div className="flex items-center rounded-xl  mx-auto px-16 sm:px-36 md:px-[10rem] mb-10 bg-gradient-to-tr from-slate-200 to-white p-8 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
               <div className='mx-auto text-center'>
                 <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">2022-2025</h3>
               
               </div>
             </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      

       </div>

      <Footer />
    </div>
  );
};

export default Members;
