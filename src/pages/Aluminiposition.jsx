import React from "react";

import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

import { TbMail } from "react-icons/tb";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }


const Position = [
  {
    id: 1,
    name: "RAMYA T",
    image: "Founder-5-1",
    Company: "Booma Innovative Solutions Pvt Ltd, ",
    location:"Coimbatore.",
    role: "Design Engineer",
    email:"ramyaece278@gmail.com",
    phone:"+91-9629198286",
  },
  {
    id: 2,
    name: "VIJAYALAKSHIMI R",
    image: "Founder-2",
    Company: "Hexaware Technologies Ltd,",
    location:"Chennai.",
    role: "Software Developer",
    email:"vijiprabakar98@gmail.com",
  },
  {
    id: 3,
    name: "KEERTHANA M",
    image: "KEERTHANA-20",
    Company: "Financial Software & Systems (P) Ltd,",
    location:"Chennai.",
    role: "Software Developer",
    email:"keerthu0926@gmail.com",
  },
  {
    id: 4,
    name: "SIVAKUMAR B  ",
    image: "Sivakumar-1",
    Company: "LogixHealth Solutions Pvt Ltd",
    location:"Chennai.",
    role: "Senior Specialist",
    email:"sivakumarbaval@gmail.com",
  },
  {
    id: 5,
    name: "VIBESH R  ",
    image: "vibesh-21",
    Company: "Al Futtaim Technologies LLC",
    location:"Dubai.",
    role: "Unified Communication Engineer",
    email:"vibeshraja@gmail.com",
  },
  {
    id: 6,
    name: "RUMAN B  ",
    image: "rumaan-21",
    Company: "Renault Nissan Technology and Business Center India Pvt Ltd",
    location:"Chennai.",
    role: "Design Engineer",
    email:"rumaanrbrsr2000@gmail.com",
  
  },
  {
    id: 7,
    name: "VIGNESHWARAN Y ",
    image: "Vigneshwaran 22",
    Company: "Ingo Electric pvt ltd",
    location:"Bangalore.",
    role: "R&D Enginner (Designer)",
    email:"vigneshwaranyuvaraj19@gmail.com",
  
  },
  {
    id: 8,
    name: "RAGU B  ",
    image: "ragu",
    Company: "Ingo Electric pvt ltd",
    location:"Bangalore.",
    role: "Technical Assistant Engineer",
    email:"raguragav692@gmail.com",
  
  },
  {
    id: 9,
    name: "SIVARAMAKRISHNAN P   ",
    image: "Sivaramakrihanam-22",
    Company: "SecureKloud Technologies Ltd",
    location:"Chennai.",
    role: "Associate - Cloud",
    email:"sivaram28032001@gmail.com",
  
  },
  {
    id: 10,
    name: "RAMKUMAR K  ",
    image: "Ramkumar-21-1",
    Company: "  ",
    location:".",
    role: "Associate - Cloud",
    email:"ramkumarmurugaiyan19@gmail.com",
  
  },
  {
    id: 11,
    name: "BALAJI T",
    category: "2023",
    image: "balaji 23",
    Company: "  ",
    location:".",
    role: "",
    email:"balathangaraj2@gmail.com",
  
  },
  
  {
    id: 12,
    name: "MAHESH BOOPATHI m",

    image: "Mahesh23",
    Company: "  ",
    location:".",
    role: "",
    email:"@gmail.com",
  
  },
  {
    id: 13,
    name: "Dhanapal ",
    image: "Dhanapal 23",
    Company: "  ",
    location:".",
    role: "",
    email:"dhanapal.1905009@gmail.com",
  
  },
  {
    id: 14,
    name: "Sathya  ",
    category: "2023",
    image: "Sathya23",
    Company: "  ",
    location:".",
    role: " ",
    email:"sathya.1902097@gmail.com",
  
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
                 <p className="text-sm font-semibold leading-6 text-gray-700">{people.location}</p>

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
