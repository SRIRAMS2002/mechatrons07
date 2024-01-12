
import react, { Fragment} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const ProductModal = ({ open, setOpen, selectedProduct, handleCloseModal,image2,name,name1,desc1,desc2,name2,name3,desc3,name4,desc4,name5,desc5,name6,desc6,name7,desc7,name8,desc8,spec1,spec2,spec3,spec4,spec5,spec6,spec7,spec8,para1,para2 }) => {
  return (
    <div>
         <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
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
                {selectedProduct && (
                    <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                      <button
                        type="button"
                        className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                        onClick={handleCloseModal}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                      <div className="mx-auto my-5 bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="p-2 lg:p-8 flex flex-col lg:flex-row">
                          <div className="lg:w-1/2 md:max-h-[20rem]">
                            <img
                              className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg"
                              src={`/Projects/${image2}.png`}
                              alt=""
                            />
                          </div>
                          <div className="lg:w-1/2 mt-5 lg:pl-8">
                            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
                            {name}
                            </h1>

                            {/* length */}
                            <dt className="font-medium text-gray-900">
                              Measurements
                            </dt>
                            <div className="grid  grid-cols-2">
                              <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">
                                  {name1}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                  {desc1}
                                </dd>
                              </div>
                              <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">
                                  {name2}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                  {desc2}
                                </dd>
                              </div>
                              <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">
                                  {name3}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                  {desc3}
                                </dd>
                              </div>
                              <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">
                                  {name4}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                  {desc4}
                                </dd>
                              </div>
                              <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">
                                  {name5}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                  {desc5}
                                </dd>
                              </div>
                              <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">
                                  {name6}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                  {desc6}
                                </dd>
                              </div>
                              <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">
                                  {name7}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                  {desc7}
                                </dd>
                              </div>
                              <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">
                                  {name8}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                  {desc8}
                                </dd>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className=" flex items-center gap-x-4">
           
              <div className="h-px flex-auto bg-gray-100" />
            </div>

                        {/* para */}
                        <div className='mx-auto text-center '>
                        <p className="mt-6 text-lg leading-8 text-gray-600 justify-text">
             {para1}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 justify-text">
             {para2}
             </p>
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
                                  {spec1}
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
                                    {spec2}
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
                                  {spec3}
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
                                  {spec4}
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
                                  {spec5}
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
                                  {spec6}
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
                                  {spec7}
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
                                  {spec8}
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                      

                        <div className="flex flex-col sm:flex-row items-center sm:space-x-10 sm:justify-around">
                          <button
                            type="submit"
                            onClick={handleCloseModal}
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
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}

export default ProductModal
