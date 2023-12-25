import React from 'react'
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
const AluminiList = [
  {
    id: 1,
    name: 'Sriram',
    image: 'Founder-1',
    dept: 'CSE',
    role: 'Team Leader',
  },
  {
    id: 2,
    name: 'Sriram',
    image: 'Founder-2',
    dept: 'CSE',
    role: 'Team Leader',
  },
  {
    id: 3,
    name: 'Sriram',
    image: 'Founder-3',
    dept: 'CSE',
    role: 'Team Leader',
  },
  // Add more members as needed
];
const Alumini = () => {
  return (
    <div>
    <Navbar />
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-10">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Alumini
      </h2>
      <p className="text-lg pt-5 font-semibold leading-6 text-indigo-600">
        A diverse team of individuals with unique talents and backgrounds,
        united by a common goal and exceptional teamwork.
      </p>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-10">
        {AluminiList.map((people, index) => (
          <div key={index} className="mx-auto bg-white rounded-lg shadow-lg hover:shadow-xl shadow-indigo-500/50 hover:shadow-indigo-500/50 overflow-hidden">
            <img
              src={`/Team/Founders/${people.image}.webp`}
              alt={people.name}
              className="h-[23rem] w-[20rem] rounded-t-lg object-cover object-center group-hover:opacity-75"
            />
            <div className="p-5 text-center">
              <p className="text-lg font-semibold leading-6 text-gray-900">{people.name}</p>
              <div className="flex justify-evenly mt-2">
                <p className="mt-1 truncate font-semibold text-sm leading-5 text-gray-600">{people.dept}</p>
                -
                <p className="mt-1 truncate text-sm leading-5 text-gray-600">{people.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Alumini
