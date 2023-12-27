"use-client"

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  UserCircleIcon,
  UsersIcon,
  UserGroupIcon,
  UserIcon,
  Bars3BottomRightIcon,
  TrophyIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image';
import { ChevronDownIcon} from '@heroicons/react/20/solid'
import logo from "../../public/mechatron.png";
import {AiOutlineInstagram,AiOutlineYoutube} from 'react-icons/ai';
import { FiUserCheck } from "react-icons/fi";
const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const products = [
      { name: "Founders", href: "/Founders", icon: UserCircleIcon },
      { name: "Mentors", href: "/Mentors", icon: UserIcon },
      { name: "Alumini", href: "/Alumini", icon: UsersIcon },
      { name: "Aluminiposition", href: "/Aluminiposition", icon: FiUserCheck },
      { name: "Members", href: "/Members", icon: UserGroupIcon },
    ];
    
    const work = [
      { name: "Projects", href: "/Projects", icon: SquaresPlusIcon },
      { name: "Achievements", href: "/Achievements", icon: TrophyIcon },
    ];
    const callsToAction = [
      { name: "Youtube", href: "https://youtube.com/@mechatronssrit902", icon: AiOutlineYoutube },
      { name: "Instagram", href: "https://instagram.com/srit_mechatrons_?igshid=NjIwNzIyMDk2Mg==", icon: AiOutlineInstagram },
    ];
    
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }

    
  return (
    <div>
      
    <header className=" ">
    <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      
    <Popover.Group className="hidden lg:flex lg:gap-x-12">
    <a href="/" className="text-lg  font-semibold leading-6 text-gray-900">
          Home
        </a>
{/* Team */}
        <Popover className="relative">
          <Popover.Button className="flex items-center gap-x-1 text-lg  font-semibold leading-6 text-gray-900">
           Team
            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </Popover.Button>

          <Transition
           as={Fragment}
           enter="transition ease-out duration-100"
           enterFrom="transform opacity-0 scale-95"
           enterTo="transform opacity-100 scale-100"
           leave="transition ease-in duration-75"
           leaveFrom="transform opacity-100 scale-100"
           leaveTo="transform opacity-0 scale-95"
          >
            <Popover.Panel className="absolute -left-8   top-full z-20 mt-3 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-900/5">
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    {item.name}
                  </a>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
{/* Work */}
       
      <a href="/Projects" className="text-lg  font-semibold leading-6 text-gray-900">
          Projects
        </a>

        
        
      </Popover.Group>

      <div className="flex mx-auto justify-center lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          
          <Image src={logo} className='h-20 w-20 mx-0 lg:ml-52 ' alt='hello'/>
        </a>
      </div>


      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3BottomRightIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      


      <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-10">
      <a href="/Achievements" className="text-lg  font-semibold leading-6 text-gray-900">
          Achievements
        </a>
      <a href="/Gallery" className="text-lg  font-semibold leading-6 text-gray-900">
          Gallery
        </a>
        
        <a href="/Contact" className="text-lg  font-semibold leading-6 text-gray-900">
          Contact Us <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>




{/* MOBILE DASHBOARD */}
    <Dialog
      as="div"
      className="lg:hidden "
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-20" />
      <Dialog.Panel
        className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm 
      "
      >
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only"></span>
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="">
              <a
                href="/"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base  font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Home
              </a>

              
            </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Disclosure as="div" className="-mx-3">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-violet-100">
                      Team
                      <ChevronDownIcon
                        className={classNames(
                          open ? "rotate-180" : "",
                          "h-5 w-5 flex-none"
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      <div className=" divide-x divide-gray-900/5 shadow-md bg-gray-50">
                  {products.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              
              <a
                href="/Gallery"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Gallery
              </a>
              <Disclosure as="div" className="-mx-3">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-violet-100">
                      Work
                      <ChevronDownIcon
                        className={classNames(
                          open ? "rotate-180" : "",
                          "h-5 w-5 flex-none "
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      <div className=" divide-x divide-gray-900/5 shadow-md bg-gray-50">
                  {work.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="-mx-3">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Social Media
                      <ChevronDownIcon
                        className={classNames(
                          open ? "rotate-180" : "",
                          "h-5 w-5 flex-none"
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                   
                <Disclosure.Panel className="mt-2 space-y-2">
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
                </Disclosure.Panel>
              
                  </>
                )}
              </Disclosure>

              
            </div>
            <div className="py-6">
              <a
                href="/Contact"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base  font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Contact Us &rarr;
              </a>

              
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>


  </header>
  </div>
  )
}

export default Navbar
