import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Fragment, useState, useEffect } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { Award,  IndianRupee, Users } from "lucide-react";
import { CalendarIcon } from "@heroicons/react/20/solid";
import ProductModal from "@/Components/ProductModal";
const product = [
  {
    id: 1,
    name: " DESIGN AND FABRICATION OF RETROFITTED ELECTRIC BIKE (TVS APACHE)",

    image1: "RETROFITTED-2",

    Dept: "Mechanical & EEE",
    Head: "Mr.V.Vigneshram & Mr.B.Ragu",
    date: "Nov - Dec 2021",
    Category: "Electric Motorcycle",
    location: "1.25Lakhs",
    Awards:"20",
    Rewards:"2 Lakhs",


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
    Dept: "Mechanical & EEE",
    Head: "Mr.J.Kabilan & Mr.M.A.Jeevabharathi",
    date: "Jan - Feb 2023",
    Category: "Electric Scooty",
    location: "55,000",
    Awards:"06",
    Rewards:"80,000",
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
    name: " DESIGN AND FABRICATION OF RETROFITTED ELECTRIC BIKE (KARIZMA ZMR)",
    image1: "KARIZMA-2",
    Dept: "Mechanical & EEE",
    Head: "Mr.J.V.Vignesh & Mr.A.Harevashanthan",
    date: "Aug - Sep 2022",
    Category: "Electrical Motorcycle",
    location: "1.20 Lakhs",
    Awards:"01",
    Rewards:"3,500",
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
  {
    id: 4,
    name: "DESIGN AND FABRICATION OF SELF MANUFACTURING ELECTRIC BIKE - (STORMER)",
    image1: "STORMER-1",
    Dept: "Mechanical, ECE & EEE",
    Head: "Mr.M.Ramkumar, Mr.K.SedhuMadhavan & Mr.B.Ragu",
    date: "Aug - Sep 2019",
    Category: "Self Manufacturing EV",
    location: "1.50 Lakhs",
    Awards:"05",
    Rewards:"5000",
    image2: "STORMER-2",
    name1: "Overall Length",
    desc1: "1975 mm ",
    name2: "Overall Width",
    desc2: "850 mm",
    name3: "Overall Height",
    desc3: "1150 mm",
    name4: "Overall Weight",
    desc4: "80 kg ",
    name5: "Ground Clearance",
    desc5: "180 mm",
    name6: "Wheel base",
    desc6: "1400 mm",
    name7: "Seat Height",
    desc7: "850 mm",
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
    id: 5,
    name: "SMART INSTRUMENTATION CLUSTER WITH ARTIFICIAL EXHAUST SOUND FOR ELECTRIC BIKE",
    image1: "ARTIFICIALEXHAUST-1",
    Dept: "EEE",
    Head: "Mr.B.Ragu & Mr.M.A.Jeevabharathi",
    date: "Jan - Mar 2023",
    Category: "Smart Display",
    location: "20,000",
    Awards:"01(Fund Received)",
    Rewards:"20,000",
    image2: "EXHAUSTSOUND-2",
    name1: "RASPBERRY PI DISPLAY",
    desc1: "5 INCH ",
    name2: "TFT TOUCH DISPLAY",
    desc2: "3.5 INCH",
    name3: "GSM-GPS MODULE",
    desc3: "SIM800L V2.0",
    name4: "TEMPERATURE SENSOR",
    desc4: "DS18B20 WATER PROOF",
    name5: "TEMPERATURE SENSOR",
    desc5: "89AE LM35DZ",
    name6: "WI-FI MODEM",
    desc6: "ESP8266",
    name7: "CURRENT SENSOR",
    desc7: "MCU-758 MODULE 50 A",
    name8:"HALL SENSOR",
    desc8:"A3144 HALL EFFECT SENSOR MODULE",
    spec1: "Shows Charging and Discharging rate",
    spec2: "72V & 2KW BLDC Hub Motor",
    spec3: "72V 65A Regenerative Sine Wave Controller",
    spec4: " 72V to 12V DC-DC Convertor",
    spec5: "Max.Speed 70 Km/hr",
    spec6: "Range 75-80 Km",
    spec7: "Max Torque 127NM",
    spec8: "Payload Capacity 300Kg",
    para1:"Our smart instrumentation cluster is a Cloud connectivity device which acquires data from the components of the electric vehicles and transfers those data to the cloud with the help of the application from the mobile phone. ",
    para2:"The prime objective of this project is to develop a smart instrumentation cluster which can display and also collect data from vehicle sensors like speed, GPS information and motion tracking using accelerometer and gyro sensor and log the data onto a database file using IOT. ",  
  },

  {
    id: 6,
    name: "	DESIGN AND FABRICATION OF HYBRID TWO WHEELER SCOOTY",
    image1: "HYBRIDSCOOTY-1",
    Dept: "Mechanical & EEE",
    Head: "Mr.R.Ruman & Mr.B.Ragu",
    date: "Aug - Sep 2021",
    Category: "HYBRID SCOOTY",
    location: "1.10 Lakhs",
    Awards:"02",
    Rewards:"3,000",
    image2: "HYBRIDSCOOTY-2",
    name1: "BLDC Hub Motor ",
    desc1: "72V & 1200W ",
    name2: "Li Ion Battery",
    desc2: "72V & 30Ah",
    name3: "Charger",
    desc3: "72V & 10A",
    name4: "Controller ",
    desc4: "Regenerative Type",
    name5: "Throttle",
    desc5: "Hybrid",
    name6: "Display",
    desc6: "Digital Type",
   

    spec1: "72V & 30Ah Li-Ion Battery with 6A Charger",
    spec2: "72V & 1.5KW BLDC Hub Motor",
    spec3: "72V 65A  Controller",
    spec4: " 72V to 12V DC-DC Convertor",
    spec5: "Max.Speed 70 Km/hr",
    spec6: "Range 50-65 Km",
    spec7: "Max Torque 97NM",
    spec8: "Payload Capacity 300Kg",
    para1:"The objective of our project aims at better utilization of fuel energy and reduces dependence on non-renewable resources using latest technology. The implementation involves development of Hybrid Electric Vehicle (HEV) in two wheelers that uses BLDC hub motor that is run by a Li-Ion battery as well as petrol engine for propulsion of vehicle. ",
    para2:" The hybridization of a convectional combustion engine vehicle with an advanced electric motor drive may greatly enhance the overall efficiency and achieve higher fuel with reduced emissions.",  
  },

  {
    id: 7,
    name: "MODERNISATION OF AUTOMATED GUIDED VEHICLE BY USING ULTASONIC SENSOR AND RFID TECHNOLOGIES",
    image1: "RFIDTECHNOLOGIES-1",
    Dept: "Mechanical & ECE",
    Head: "Mr.V.Vigneshram & Ms.T.Ramya",
    date: "Jul - Aug 2019",
    Category: "AUTOMATED GUIDED VEHICLE",
    location: "10,000",
    Awards:"8",
    Rewards:"7,000",
    image2: "RFIDTECHNOLOGIES-2",
    name1: "•	RFID Tag ",

    name2: "•	RFID Reader",
  
    name3: "•	Ultrasonic Sensor",
  
    name4: "•	PIC Microcontroller ",
 
    name5: "•	(Embedded C Programming)",
   
    name6: "•	Battery",
 
   

    spec1: "12V  Li-Ion Battery",
    spec2: "12V DC Motor",
    spec3: "PIC Micro Controller",
    spec4: " RFID Tag",
    spec5: "Max.Speed 5 Km/hr",
    spec6: "Range 50mm",
    spec7: "Passive type RFID Reader",
    spec8: "Payload Capacity 3Kg",

    para1:"Our project deals with the examination of possibility to interconnect sparsely deployed RFID tags with ultrasonic sensors. RFID Readers are mounted under this unmanned automated guided vehicle (AGV) equipment with RFID tags installed on or in the floor, allowing the vehicle's logic to understand its location and make decisions to stop, turn right/left or continue straight ahead. ",
    para2:"As signals produced by these technology are often affected by uncertainty and incompleteness we use fuzzy logic for their processing as well as control of the entire navigation process.",  
  },
  {
    id: 8,
    name: "	DESIGN AND IMPLEMENTATION OF AUTOMATIC HEADLIGHT DIMMER FOR TWO WHEELERS USING ARDUINO CONTROLLER",
    image1: "HEADLIGHTDIMMER-1",
    Dept: "Mechanical & ECE",
    Head: " Mr.B.Sivakumar & Mr.K.Sedhumadhavan",
    date: "Jan - Feb 2019",
    Category: "AUTOMOBILE",
    location: "5,000",
    Awards:"03",
    Rewards:"4,500",
    image2: "HEADLIGHTDIMMER-2",
    name1: "•	LDR SENSOR ",

    name2: "•	ULTRASONIC SENSOR",
  
    name3: "•		ARDUINO CONTROLLER",
  
    name4: "•		RELAY ",
 
    name5: "•		TOGGLE SWITCH",
   
    name6: "•		LIGHTS (10W & 40W)",
 
   

    spec1: "12V  Li-Ion Battery ",
    spec2: "LDR & ULTRASONIC SENSOR",
    spec3: "Arduino UNO Controller",
    spec4: "5V Relay",
    spec5: "Max Power dissipated in 200mW - LDR",
    spec6: "UltraSonic - Range 50m",
    spec7: "32-bit ARM Cortex-M4F core",
    spec8: "High beam - Low beam",

    para1:"To develop a prototype of an automatic headlight switch ON and OFF while driving the two wheeler according to light intensity (LDR) and distance of the object or vehicle (ULTRASONIC SENSOR) in opposite ",
    para2:"	To use the Arduino controller for the conversion of bright light (HIGH BEAM) into dim light (LOW BEAM) according to the LDR and Ultrasonic sensors.",  
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
      <span class="sm:hidden flex mb-5 font-medium text-gray-600 text-sm space-x-2 md:items-center">
                {" "}
                
                <a href="/">
                Home 
                </a>{" "}
                / Projects
              </span>
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
                    
                  </dl>
                  <div className=" sm:flex sm:justify-between mx-5">
                    {/* details */}
                  <div>
                  <div className="mb-4">
                    <h2 className="text-gray-800 font-semibold">Category</h2>
                    <div className="flex flex-col gap-2 text-gray-700">
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
                  </div>
                  {/* awards */}
                  <div>
                    <div>
                    <h2 className="text-gray-800 font-semibold">Project Cost</h2>
                    <div className="flex mb-5 items-center">
                      <IndianRupee className="h-5 w-5 mr-1.5 text-indigo-600" />
                      <span className="text-gray-700">{product.location}</span>
                    </div>
                    </div>
                
                  <div className="mb-4">
                    <h2 className="text-gray-800 font-semibold">No.of.Awards Won</h2>
                    <p className="text-gray-700">{product.Awards}</p>
                  </div>
                  <div className="mb-4">
                  
                    <h2 className="text-gray-800 font-semibold">Total Rewards Won</h2>
                    <div className="flex mb-5  items-center">
                      <IndianRupee className="h-5 w-5 mr-1.5 text-indigo-600" />
                      <p className="text-gray-700">{product.Rewards}</p>
                    </div>
                  </div>
                  </div>
                  
                  </div>
                  
                

                  <div className="flex flex-col sm:flex-row items-center sm:space-x-10 sm:justify-around">
                    <button
                      type="submit"
                      onClick={() => handleOpenModal(product)}
                      className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Quick View
                    </button>
                  
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
        para1={product.para1}
        para2={product.para2}

        />
        ))}

      

      <Footer />
    </div>
  );
};

export default Projects;
