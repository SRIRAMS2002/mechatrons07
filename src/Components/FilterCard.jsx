import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
  CheckIcon,
  CalendarIcon,
} from "@heroicons/react/20/solid";
import { Award, MapPin, Users } from "lucide-react";
import Image from "next/image";




const FilterCard = ({ name, image,date,venue,Organiser, Awards }) => {
  const imageUrl = image ? `/Team/Members/${image}.webp` : "/placeholder.gif";
  return (
    
    <div className="mx-auto flex-shrink-0 max-w-3xl px-4  sm:px-6  lg:max-w-7xl bg-white ">
      <div>
        <div className=" mx-auto  pr-5 my-5 ">
          <img
            src={imageUrl}
            className="h-[20rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
            alt=""
          />
          <div className="min-w-0  mt-5 m-5 mx-auto text-center">
            <p className="text-lg font-semibold leading-6 text-gray-900">
              {name}
            </p>

            <div className="mt-2 flex mx-auto justify-center items-center text-sm text-gray-500">
              <CalendarIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <p className="mt-1 truncate text-sm leading-5 text-gray-500">
               {date}
              </p>
            </div>
          </div>


           {/* Awards */}
         
           <Disclosure as="div" className="border-t max-w-[25rem] flex-row border-gray-200 px-4 py-6">
  {({ open }) => (
    <>
      <h3 className="-mx-2 -my-3 flow-root">
        <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
          <span className="font-medium text-gray-900">Awards Won</span>
          <span className="ml-6 flex items-center">
            {open ? (
              <MinusIcon className="h-5 w-5" aria-hidden="true" />
            ) : (
              <PlusIcon className="h-5 w-5" aria-hidden="true" />
            )}
          </span>
        </Disclosure.Button>
      </h3>
      <Disclosure.Panel className="pt-6">
        <div className="space-y-6">
        {Awards ? (
                  Awards.map((award, index) => (
                    <div key={index} className="flex items-center">
                      <Award className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                      <h1>{award.value}</h1>
                    </div>
                  ))
                ) : (
                  <p>No awards found</p>
                )}
        </div>
      </Disclosure.Panel>
    </>
  )}
</Disclosure>


        
       {/* venue */}
          <Disclosure as="div"  className="border-t max-w-[25rem] flex-row border-gray-200 px-4 py-6">
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">Venue</span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                   
                      <div  className="flex items-center">
                      <MapPin className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"/>
                        <h1
                        >
                          {venue}
                        </h1>
                      </div>
                    
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* Organiser */}
          <Disclosure as="div"  className="border-t max-w-[25rem] flex-row border-gray-200 px-4 py-6">
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">Organiser</span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                   
                      <div  className="flex items-center">
                      <Users className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"/>
                        <h1
                        >
                          {Organiser}
                        </h1>
                      </div>
                    
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        
        
                      
                         

         
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
