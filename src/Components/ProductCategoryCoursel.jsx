// import React, { useState } from "react";

// const logos = {
//   section1: "Logo for Section 1",
//   section2: "Logo for Section 2",
//   section3: "Logo for Section 3",
//   // Add more logos for other sections
// };

// const products = [
//   {
//     id: 1,
//     name: "International ",
//     category: "international",
//     image:
//       "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
//   },
//   {
//     id: 2,
//     name: "National",
//     category: "national",
//     image:
//       "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
//   },
//   {
//     id: 3,
//     name: "Electric",
//     category: "electric",
//     image:
//       "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
//   },
//   {
//     id: 4,
//     name: "Minidirt",
//     category: "minidirt",
//     image:
//       "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
//   },
//   {
//     id: 5,
//     name: "Hackathon",
//     category: "hackathon",
//     image:
//       "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
//   },
//   {
//     id: 6,
//     name: "RIVALS 2023",
//     category: "minidirt",
//     image:
//       "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
//   },
//   {
//     id: 7,
//     name: "Tata 3.0",
//     category: "hackathon",
//     image:
//       "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
//   },
//   {
//     id: 8,
//     name: "EBDC Season3",
//     category: "electric",
//     image:
//       "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
//   },
//   {
//     id: 9,
//     name: "Meetup 5.0",
//     category: "national",
//     image:
//       "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
//   },
//   {
//     id: 10,
//     name: "i2create 2021",
//     category: "international",
//     image:
//       "https://imgs.search.brave.com/nutEZaK-TwRJ-eVYLP_NWNRRB9iXyDFRq5T2cIUelZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk3NDg3Ny9waG90/by9wcmVwYXJpbmct/Zm9yLXRoZS1iaWtl/LXJpZGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTcwZG1W/cEJxRWNWWHNlbzk4/YTViSHgwOVNVblFP/ek9mbEMxY2FkMTlo/aGs9",
//   },

//   // Add more products here
// ];

// const TabNavigation = () => {
//   const [activeTab, setActiveTab] = useState("section1");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     setSearchQuery("");
//   };

//   const filteredProducts = products.filter((product) => {
//     if (selectedCategory === "all" && !searchQuery) {
//       return true;
//     }

//     if (selectedCategory !== "all" && searchQuery) {
//       return (
//         product.category === selectedCategory &&
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (selectedCategory !== "all") {
//       return product.category === selectedCategory;
//     }

//     return product.name.toLowerCase().includes(searchQuery.toLowerCase());
//   });

//   return (
//     <div className="container mx-auto ml-10">

//       <div className="flex">
//       <div className="flex justify-between items-center mb-4 ">
//         <div className="flex items-center overflow-x-auto space-x-4 max-w-full ">
//           <div className="flex space-x-4">
//             {/* All */}
//             <button
//               onClick={() => handleTabClick("section1")}
//               className="px-5"
//             >
//               All Category Events
//             </button>
//             {/* Inter */}
//             <button onClick={() => handleTabClick("section2")} className="flex">
//               <button
//                 className={`mx-2 px-5 py-6 text-sm flex font-medium  rounded-lg hover:text-black focus:outline-none ${
//                   selectedCategory === "international"
//                     ? "bg-white text-black"
//                     : "bg-white text-gray-600"
//                 }`}
//                 onClick={() => handleCategoryChange("international")}
//               >
//                 INTER-NATIONAL EVENTS
//               </button>
//               {/* National */}

//               <button
//                 className={`mx-2 px-5 py-6 text-sm flex font-medium rounded-lg hover:text-black focus:outline-none ${
//                   selectedCategory === "national"
//                     ? "bg-white text-black"
//                     : "bg-white text-gray-600"
//                 }`}
//                 onClick={() => handleCategoryChange("national")}
//               >
//                 NATIONAL EVENTS
//               </button>

//               {/* Electric */}

//               <button
//                 className={`mx-2 border-black  py-6 text-sm flex font-medium rounded-lg hover:text-black focus:outline-none ${
//                   selectedCategory === "electric"
//                     ? "bg-white text-black"
//                     : "bg-white text-gray-600"
//                 }`}
//                 onClick={() => handleCategoryChange("electric")}
//               >
//                 ELECTRIC-BIKE EVENTS
//               </button>
//               {/* Mini-Dirt */}
//               <button
//                 className={`mx-2 px-5 py-6 text-sm flex font-medium rounded-lg hover:text-black focus:outline-none ${
//                   selectedCategory === "minidirt"
//                     ? "bg-white text-black"
//                     : "bg-white text-gray-600"
//                 }`}
//                 onClick={() => handleCategoryChange("minidirt")}
//               >
//                 MINI-DIRT BIKE EVENTS
//               </button>
//               {/* Hackathon */}
//               <button
//                 className={`mx-2 px-5 py-6 text-sm flex font-medium hover:text-black rounded-lg focus:outline-none ${
//                   selectedCategory === "hackathon"
//                     ? "bg-white text-black"
//                     : "bg-white text-gray-600"
//                 }`}
//                 onClick={() => handleCategoryChange("hackathon")}
//               >
//                 HACKATHON EVENTS
//               </button>
//             </button>
//           </div>
//         </div>
//       </div>

//       <input
//         type="text"
//         placeholder="Search"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className=" px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none"
//       />
//       </div>
     

//       {activeTab === "section1" && (
//         <div>
//           {/* Content for Section 1 */}
//           <p>Section 1 Content Goes Here</p>
//         </div>
//       )}
//       {activeTab === "section2" && (
//         <div>
//           <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
//             {filteredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="border border-gray-300 p-4 rounded-md"
//               >
//                 <div className=" mx-auto   ">
//                   <img
//                     src={product.image}
//                     className="h-[25rem] w-[20rem] rounded-lg object-cover object-center group-hover:opacity-75"
//                     alt="h"
//                     width={300}
//                     height={400}
//                   />
//                   <div className="min-w-0 mt-5 m-5 mx-auto text-center">
//                     <p className="text-lg font-semibold leading-6 text-gray-900">
//                       {product.name}
//                     </p>
//                     <p className="mt-1 truncate text-sm leading-5 text-gray-500">
//                       {product.name}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TabNavigation;
