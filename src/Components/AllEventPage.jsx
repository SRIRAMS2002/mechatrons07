import React from "react";
import CountUp, { useCountUp } from "react-countup";

const AllEventPage = () => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 2500,
  });
  return (
    <div>
      {/* International */}
     <div className="bg-white py-10 sm:py-10">
      <div className="mx-auto grid max-w-7xl gap-x-20 gap-y-20  xl:grid-cols-3">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">International Events</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse. Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse. Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
         
            <li>
              <div className="flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
                <div className='mx-auto text-center'>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">National Events</h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600"> <CountUp end={30} enableScrollSpy />+</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
                <div className='mx-auto text-center'>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">Inter-National Events</h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600"> <CountUp end={4} enableScrollSpy />+</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
                <div className='mx-auto text-center'>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">Projects</h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600"> <CountUp end={20} enableScrollSpy /> +</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
                <div className='mx-auto text-center'>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">Cash Awards</h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600"> <CountUp end={250000} enableScrollSpy />+</p>
                </div>
              </div>
            </li>
       
        </ul>
      </div>
      
    </div>
    <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-900 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>

    {/* National */}
    <div className="bg-white py-10 sm:py-10">
      <div className="mx-auto grid max-w-7xl gap-x-20 gap-y-20  xl:grid-cols-3">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">National Events</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse. Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse. Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
         
            <li>
              <div className="flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
                <div className='mx-auto text-center'>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">National Events</h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600"> <CountUp end={30} enableScrollSpy />+</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
                <div className='mx-auto text-center'>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">Inter-National Events</h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600"> <CountUp end={4} enableScrollSpy />+</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
                <div className='mx-auto text-center'>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">Projects</h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600"> <CountUp end={20} enableScrollSpy /> +</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
                <div className='mx-auto text-center'>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">Cash Awards</h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600"> <CountUp end={250000} enableScrollSpy />+</p>
                </div>
              </div>
            </li>
       
        </ul>
      </div>
      
    </div>
    

    <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-900 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
    {/* Electric */}
    <div className="bg-white py-10 sm:py-10">
      <div className="mx-auto grid max-w-7xl gap-x-20 gap-y-20  xl:grid-cols-3">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Electric Bike Events</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse. Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse. Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
         
            <li>
              <div className="flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
                <div className='mx-auto text-center'>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">National Events</h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600"> <CountUp end={30} enableScrollSpy />+</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
                <div className='mx-auto text-center'>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">Inter-National Events</h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600"> <CountUp end={4} enableScrollSpy />+</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
                <div className='mx-auto text-center'>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">Projects</h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600"> <CountUp end={20} enableScrollSpy /> +</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
                <div className='mx-auto text-center'>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">Cash Awards</h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600"> <CountUp end={250000} enableScrollSpy />+</p>
                </div>
              </div>
            </li>
       
        </ul>
      </div>
      
    </div>
    <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-900 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
    {/* mini */}
    <div className="bg-white py-10 sm:py-10">
      <div className="mx-auto grid max-w-7xl gap-x-20 gap-y-20  xl:grid-cols-3">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Electric-Bike Events</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse. Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse. Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
         
            <li>
              <div className="flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
                <div className='mx-auto text-center'>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">National Events</h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600"> <CountUp end={30} enableScrollSpy />+</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
                <div className='mx-auto text-center'>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">Inter-National Events</h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600"> <CountUp end={4} enableScrollSpy />+</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
                <div className='mx-auto text-center'>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">Projects</h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600"> <CountUp end={20} enableScrollSpy /> +</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
                <div className='mx-auto text-center'>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">Cash Awards</h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600"> <CountUp end={250000} enableScrollSpy />+</p>
                </div>
              </div>
            </li>
       
        </ul>
      </div>
      
    </div>
    <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-900 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
    {/* Hackathon */}

    <div className="bg-white py-10 sm:py-10">
      <div className="mx-auto grid max-w-7xl gap-x-20 gap-y-20 xl:grid-cols-3">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hackathon Events</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse. Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse. Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
         
            <li>
              <div className="flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
                <div className='mx-auto text-center'>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">National Events</h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600"> <CountUp end={30} enableScrollSpy />+</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
                <div className='mx-auto text-center'>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">Inter-National Events</h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600"> <CountUp end={4} enableScrollSpy />+</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
                <div className='mx-auto text-center'>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">Projects</h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600"> <CountUp end={20} enableScrollSpy /> +</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
                <div className='mx-auto text-center'>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">Cash Awards</h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600"> <CountUp end={250000} enableScrollSpy />+</p>
                </div>
              </div>
            </li>
       
        </ul>
      </div>
      
    </div>
   
    </div>
  );
};

export default AllEventPage;
