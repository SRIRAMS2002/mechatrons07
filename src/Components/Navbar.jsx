"use-client";
import {twMerge} from "tailwind-merge"
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  UserCircleIcon,
  UsersIcon,
  UserGroupIcon,
  UserIcon,
  Bars3BottomRightIcon,
  TrophyIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import logo from "../../public/mechatron.png";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
const Navbar = ({view}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    {
      name: "Youtube",
      href: "https://youtube.com/@mechatronssrit902",
      icon: AiOutlineYoutube,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/srit_mechatrons_?igshid=NjIwNzIyMDk2Mg==",
      icon: AiOutlineInstagram,
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <nav
        className={twMerge(
          "fixed top-0 w-full  h-28 py-2 flex items-center justify-center z-50 left-0 right-0 transition-all duration-300 delay-100 ease-linear",
          view ? "text-black bg-white shadow-lg h-24" : "text-black bg-transparent"
        )}
      >
        <div className="relative flex items-center justify-between bg-transparent gap-2 px-6 md:mx-20 lg:px-10 h-full w-full">
          <Popover.Group className="hidden lg:flex items-center justify-center gap-8 text-lg">
            <a href="/" className="font-semibold leading-6">
              Home
            </a>
            {/* Team */}
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 font-semibold leading-6">
                Team
                <ChevronDownIcon
                  className="h-5 w-5 flex-none"
                  aria-hidden="true"
                />
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
                        className="group relative flex items-center gap-x-6 rounded-lg p-3 leading-6 hover:bg-violet-200"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-violet-200"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <a href="/Projects" className="font-semibold leading-6">
              Projects
            </a>
          </Popover.Group>
          {/* </div> */}
          {/* <div className="flex items-center justify-between flex-auto"> */}
          <a
            href="/"
            className="lg:absolute lg:top-1/2 lg:-translate-x-1/2 lg:left-1/2 lg:-translate-y-1/2"
          >
            <Image
              src={logo}
              className={twMerge("h-20 w-20", view ? "invert-0" : "invert-0")}
              alt="hello"
            />
          </a>
          <div className="flex lg:hidden transition-all duration-1000 delay-100 ease-in-out">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3BottomRightIcon
                className="h-6 w-6 transition-all duration-1000 delay-100 ease-in-out"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="hidden lg:flex justify-center gap-8 text-lg">
            <a href="/Achievements" className="font-semibold leading-6">
              Achievements
            </a>
            <a href="/Gallery" className="font-semibold leading-6">
              Gallery
            </a>

            <a href="/Contact" className="font-semibold leading-6">
              Contact Us <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        {/* MOBILE DASHBOARD */}
        <Dialog
          as="div"
          className="lg:hidden z-50 relative transition-all duration-1000 delay-100 ease-in-out"
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
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon
                  className="h-6 w-6 transition-all duration-1000 delay-100 ease-in-out"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="">
              <a
                href="/"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base  font-semibold leading-7 text-gray-900 hover:bg-violet-200"
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
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-violet-200">
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
                                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-violet-200"
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
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-violet-200"
                  >
                    Gallery
                  </a>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-violet-200">
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
                                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-violet-200"
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
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-violet-200">
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
                                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-violet-200"
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
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base  font-semibold leading-7 text-gray-900 hover:bg-violet-200"
                  >
                    Contact Us &rarr;
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </nav>
    </>
  );
};

export default Navbar;