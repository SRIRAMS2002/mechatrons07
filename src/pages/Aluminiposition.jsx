import React from "react";

import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

import { TbMail } from "react-icons/tb";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }


const Position = [
  {
    id: 2,
    name: "Ramya T",
    image: "Founder-5-1",
    Company: "Booma Innovative Solutions Pvt Ltd, Coimbatore",
    role: "Team Manager",
    email:"ramyaece278@gmail.com",
    phone:"+91-9629198286",
  },
  {
    id: 5,
    name: "Vijayalakshmi R",
    image: "Founder-2",
    Company: "ECE",
    role: "Software Developer",
    email:"sriram.2002@srit.org",
  },
  {
    id: 6,
    name: "Saranya U",
    image: "Founder-1",
    Company: "ECE",
    role: "PCB Designer",
    email:"sriram.2002@srit.org",
  },
  {
    id: 13,
    name: "SIVAKUMAR B  ",
    image: "Sivakumar-1",
    Company: "Mechanical",
    role: "Design Engineer",
    email:"sriram.2002@srit.org",
  },
  
];
const Aluminiposition = () => {
  const handleMailClick = (email) => {
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailComposeUrl, '_blank');
    
  };
 
  return (
    <div>
       <div>
      <Navbar />

      <div className="mx-auto max-w-7xl  px-4 py-10 sm:px-6 sm:py-10">
       
        <div className="max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Alumini Positions- Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>


        <div className="">
        <ul role="list" className="mt-20 grid gap-x-4 gap-y-5 sm:grid-cols-3 sm:gap-y-16 xl:col-span-3">
        {Position.map((people, index) => (
            <li key={index}>
              <div className="flex items-center rounded-xl p-3 gap-x-6  border-box hover:border-violet-900 transition border-2 hover:shadow-lg shadow-indigo-500/50 shadow-lg  hover:shadow-indigo-500/50">
               
               <div className='mx-auto '>
               <div className="flex items-center gap-x-6">
               <img className="h-20 w-20 rounded-full" src={`/Team/Founders/${people.image}.webp`}
                alt="" />
               <div>
                 <h3 className="text-lg font-bold  uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-600 leading-6">{people.name}</h3>
                 <p className="text-sm font-semibold leading-6 text-red-800">{people.role}</p>
                 <p className="text-sm font-semibold leading-6 text-gray-700">{people.Company}</p>
                 <p className="mt-1 truncate text-sm leading-5 text-gray-500">{people.email}</p>
               
               </div>
              
             </div>
             <div className=" justify-evenly flex">
            
          
             </div>
           
               </div>
             </div>
            </li>
          ))}
        </ul>
        </div>


        
       
   

    
       
        
      </div>

      <Footer />
    </div>
    </div>
  )
}

export default Aluminiposition
