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
      <div className=" py-10 sm:py-10">
        <div className="mx-auto grid max-w-7xl gap-x-20 gap-y-20  xl:grid-cols-3">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              International Events
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              International events serve as crucial platforms fostering global
              collaboration, understanding, and progress. International bike
              events beyond borders, bringing together throttlers enthusiasts
              worldwide. These events unite diverse cultures through a shared
              passion for two-wheel adventures. They showcase cutting-edge
              technologies in riding.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
              <div className="bg-white flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    National Events
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={30} enableScrollSpy />+
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-white flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    Inter-National Events
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={4} enableScrollSpy />+
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-white flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    Projects
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={20} enableScrollSpy /> +
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-white flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    Cash Awards
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={250000} enableScrollSpy />+
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-900 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>

      {/* National */}
      <div className="py-10 sm:py-10">
        <div className="mx-auto grid max-w-7xl gap-x-20 gap-y-20  xl:grid-cols-3">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              National Events
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              National motorbike rallies thunder across the nation, sparking a
              thirst for excitement on two wheels. National motorbike events not
              only redefine the thrill of the open road but also contribute to
              the cultural fabric of the nation, igniting a passion for
              two-wheeled freedom and roaring horsepower.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
              <div className="bg-white flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    National Events
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={30} enableScrollSpy />+
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-white flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    Inter-National Events
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={4} enableScrollSpy />+
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-white flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    Projects
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={20} enableScrollSpy /> +
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-white flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    Cash Awards
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={250000} enableScrollSpy />+
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-900 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
      {/* Electric */}
      <div className=" py-10 sm:py-10">
        <div className="mx-auto grid max-w-7xl gap-x-20 gap-y-20  xl:grid-cols-3">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Electric Bike Events
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Enthusiasts showcase cutting-edge e-bike technologies, from sleek
              commuter models to rugged off-road designs, embodying the
              evolution of sustainable transportation. Electric bike rallies
              promote environmental awareness, pushing the boundaries of clean
              energy mobility.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
              <div className="bg-white flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    National Events
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={30} enableScrollSpy />+
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-white flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    Inter-National Events
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={4} enableScrollSpy />+
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-white flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    Projects
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={20} enableScrollSpy /> +
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-white flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    Cash Awards
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={250000} enableScrollSpy />+
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-900 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
      {/* mini */}
      <div className="py-10 sm:py-10">
        <div className="mx-auto grid max-w-7xl gap-x-20 gap-y-20  xl:grid-cols-3">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Mini-Dirt Events
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Mini dirt motorbike events is an exhilarating dive into the
              thrilling world of off-road racing on a smaller scale.Roaring
              engines, clouds of dust, and the whirr of knobby tires define the
              atmosphere as riders tackle challenging terrains, from rugged
              trails to motocross tracks.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
              <div className="bg-white flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    National Events
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={30} enableScrollSpy />+
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-white flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    Inter-National Events
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={4} enableScrollSpy />+
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-white flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    Projects
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={20} enableScrollSpy /> +
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-white flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    Cash Awards
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={250000} enableScrollSpy />+
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-900 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
      {/* Hackathon */}

      <div className=" py-10 sm:py-10">
        <div className="mx-auto grid max-w-7xl gap-x-20 gap-y-20 xl:grid-cols-3">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hackathon Events
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A hackathon offers a stimulating dive into creativity, teamwork,
              and inventive problem-solving. It&#39;s more than just code;
              it&#39;s an exciting adventure. Working with a variety of skills,
              such as programmers and designers, encourages quick thinking and
              experimentation. The hackathon experience is more than just a
              competition; it&#39;s a joint journey towards technological
              prowess and friendship.
            </p>
          </div>
          <ul
            role="list"
            className=" grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
              <div className="bg-white flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    National Events
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={30} enableScrollSpy />+
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className=" bg-white flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    Inter-National Events
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={4} enableScrollSpy />+
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-white flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    Projects
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={20} enableScrollSpy /> +
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-white flex items-center rounded-xl  p-12 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
                <div className="mx-auto text-center">
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                    Cash Awards
                  </h3>
                  <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
                    {" "}
                    <CountUp end={250000} enableScrollSpy />+
                  </p>
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
