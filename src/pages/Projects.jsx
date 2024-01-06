import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Fragment, useState, useEffect } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { Award, MapPin, Users } from "lucide-react";
import { CalendarIcon } from "@heroicons/react/20/solid";
import ProductModal from "@/Components/ProductModal";
const product = [
  {
    id: 1,
    name: " DESIGN AND FABRICATION OF RETROFITTED ELECTRIC BIKE (TVS APACHE)",

    image1: "RETROFITTED-2",

    Dept: "Mechanical",
    Head: " Department of Agricultural  BIT-IIC",
    date: "18 Aug 2023",
    Category: "Overall Champions",
    location: "Erode",

    image2: "RETROFITTED-1",
    name1: "Overall Length",
    desc1: "2020 mm",
    name2: "Overall Width",
    desc2: "730 mm",
    name3: "Overall Height",
    desc3: "1050 mm",
    name4: "Chassis Material used",
    desc4: "TVS Apache frame",
    name5: "Ground Clearance",
    desc5: "210 mm",
    name6: "Wheel base",
    desc6: "1300 mm",
    name7: "Seat Height",
    desc7: "750 mm",
    name8: "Overall Weight",
    desc8: "96kg",
    spec1: "72V & 30Ah Li-Ion Battery with 6A Charger",
    spec2: "72V & 2KW BLDC Hub Motor",
    spec3: "72V 65A Regenerative Sine Wave Controller",
    spec4: " 72V to 12V DC-DC Convertor",
    spec5: "Max.Speed 70 Km/hr",
    spec6: "Range 50-65 Km",
    spec7: "Max Torque 127NM",
    spec8: "Payload Capacity 300Kg",
  },
  {
    id: 2,
    name: " DESIGN AND FABRICATION OF ELECTRIC SCOOTY",
    image1: "ELECTRIC SCOOTY-1",
    Dept: "Mechanical",
    Head: " Department of Agricultural  BIT-IIC",
    date: "18 Aug 2023",
    Category: "Overall Champions",
    location: "Erode",

    image2: "ELECTRIC SCOOTY-2",
    name1: "Overall Length",
    desc1: "1790mm",
    name2: "Overall Width",
    desc2: "640mm",
    name3: "Overall Height",
    desc3: "1115mm",
    name4: "Chassis Material used",
    desc4: "Mild Steel",
    name5: "Ground Clearance",
    desc5: "156mm",
    name6: "Wheel base",
    desc6: "1275mm",
    name7: "Seat Height",
    desc7: "770mm",
    name8: "Overall Weight",
    desc8: "76kg",
    spec1: "48V & 30Ah Li-Ion Battery with 6A Charger",
    spec2: "48V & 1KW BLDC Hub Motor",
    spec3: "48V 40A Regenerative Sine Wave Controller",
    spec4: " 48V to 12V DC-DC Convertor",
    spec5: "Max.Speed 50 Km/hr",
    spec6: "Range 50-60 Km",
    spec7: "Max Torque 83NM",
    spec8: "Payload Capacity 250Kg",


  },
  {
    id: 3,
    name: " DESIGN AND FABRICATION OF RETROFITTED ELECTRIC BIKE (KARIZMA)",

    image1: "KARIZMA-2",

    Dept: "Mechanical",
    Head: " Department of Agricultural  BIT-IIC",
    date: "18 Aug 2023",
    Category: "Overall Champions",
    location: "Erode",

    image2: "KARIZMA-1",
    name1: "Overall Length",
    desc1: "2100 mm",
    name2: "Overall Width",
    desc2: "805 mm",
    name3: "Overall Height",
    desc3: "1190 mm",
    name4: "Overall Weight",
    desc4: "118kg",
    name5: "Ground Clearance",
    desc5: "145 mm",
    name6: "Wheel base",
    desc6: "1360 mm",
    name7: "Seat Height",
    desc7: "756 mm",
    spec1: "72V & 30Ah Li-Ion Battery with 6A Charger",
    spec2: "72V & 2KW BLDC Hub Motor",
    spec3: "72V 65A Regenerative Sine Wave Controller",
    spec4: " 72V to 12V DC-DC Convertor",
    spec5: "Max.Speed 70 Km/hr",
    spec6: "Range 50-65 Km",
    spec7: "Max Torque 127NM",
    spec8: "Payload Capacity 300Kg",
  },
];

const Projects = () => {
  const [isSectionInView, setIsSectionInView] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsSectionInView(true);
      } else {
        setIsSectionInView(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);

  // Function to handle opening a specific product modal
  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setOpen(false);
  };

  return (
    <div>
      <Navbar view={isSectionInView} />

      <div className="mx-auto mt-[10rem] max-w-7xl  px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Projects
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Beyond the numerical count of achievements lies a deeper impact. Our
          endeavors resonate with a purpose that extends beyond profit margins.
        </p>

        {product.map((product) => (
          <div key={product.id}>
            <div className="mx-auto my-5 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-2.5 lg:p-8 flex flex-col lg:flex-row">
                <div className="lg:w-1/2 md:max-h-[20rem]">
                  <img
                    className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg"
                    src={`/Projects/${product.image1}.png`}
                    alt={product.name}
                  />
                </div>
                <div className="lg:w-1/2 mt-5 lg:pl-8">
                  <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h1>
                  <dl className="mb-4 flex flex-wrap justify-between gap-4">
                    <div className="flex items-center">
                      <CalendarIcon className="h-5 w-5 mr-1.5 text-indigo-600" />
                      <span className="text-gray-700">{product.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-1.5 text-indigo-600" />
                      <span className="text-gray-700">{product.location}</span>
                    </div>
                  </dl>
                  <div className="mb-4">
                    <h2 className="text-gray-800 font-semibold">Category</h2>
                    <div className="flex flex-col gap-2">
                      {product.Category}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h2 className="text-gray-800 font-semibold">Head</h2>
                    <p className="text-gray-700">{product.Head}</p>
                  </div>
                  <div className="mb-4">
                    <h2 className="text-gray-800 font-semibold">Department</h2>
                    <p className="text-gray-700">{product.Dept}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center sm:space-x-10 sm:justify-around">
                    <button
                      type="submit"
                      onClick={() => handleOpenModal(product)}
                      className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Quick View
                    </button>
                    <a
                      href="/path/to/your/file.pdf"
                      download="filename.pdf"
                      className="flex-none rounded-md mt-5 sm:mt-0 bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Download File
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {product.map((product) => (
        <ProductModal 
        key={product.id}
        open={open && selectedProduct && selectedProduct.id === product.id}
        setOpen={setOpen}
        selectedProduct={selectedProduct}
        handleCloseModal={handleCloseModal}
        name={product.name}
        image2={product.image2}
        name1={product.name1}
        desc1={product.desc1}

        name2={product.name2}
        desc2={product.desc2}

        name3={product.name3}
        desc3={product.desc3}

        name4={product.name4}
        desc4={product.desc4}

        name5={product.name5}
        desc5={product.desc5}

        name6={product.name6}
        desc6={product.desc6}

        name7={product.name7}
        desc7={product.desc7}

        name8={product.name8}
        desc8={product.desc8}
        spec1={product.spec1}
        spec2={product.spec2}
        spec3={product.spec3}
        spec4={product.spec4}
        spec5={product.spec5}
        spec6={product.spec6}
        spec7={product.spec7}
        spec8={product.spec8}
        

        />
        ))}

      {/* projects */}
      <div className="pt-[10rem]">d</div>

      <Footer />
    </div>
  );
};

export default Projects;
