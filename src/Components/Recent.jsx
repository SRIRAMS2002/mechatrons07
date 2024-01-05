import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Award, MapPin, Users } from "lucide-react";
import { CalendarIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

const products = [
  {
    id: 1,
    name: " National Electric Tractor Design Challenge (NETDC'23)",

    image: "NETDC23",

    venue: "Bannari Amman Institute of Technology",
    Organiser: " Department of Agricultural Engineering&amp; BIT-IIC",
    date: "18 - 19 Aug 2023",
    Awards: [{ value: "Overall Champions" }],
    location: "Erode",
  },
  {
    id: 2,
    name: "  National Electric    Bike Challenge    (NEBC’23  Season-1)",

    image: "NEBC23",

    venue: "Kumaraguru College    of Technology",
    Organiser: "KCT Garage    &    Society for Smart    E-Mobility(SSEM)",
    date: "25 - 26 Feb 2023",
    Awards: [{ value: "Overall Champions – ₹50,000/-  + 5 Category Awards" }],
    location: "Coimbatore.",
  },
  {
    id: 3,
    name: "SIEP’23    Electric Bike    Challenge    (Season-3)",

    image: "SIEP23",

    venue: "Galgotias University,    Noida.",
    Organiser: "Hero electric &    ISIE India",
    date: "14 - 18 Apr 2023",
    Awards: [
      {
        value:
          "Best Business Plan and Cost - Rs.10,000/- +  2 Category Awards",
      },
    ],
    location: "New Delhi.",
  },
  {
    id: 4,
    name: "SIEP’21    Electric Bike    Challenge    (Season-2)",

    image: "SIEP21",

    venue: "Chandigarh Group of    College",
    Organiser: "Hero electric &    ISIE India",
    date: "25 - 28 Dec 2021",
    Awards: [
      {
        value:
          "Overall Championship Award - Rs.50,000/- + 5 Category Awards",
      },
    ],
    location: "Punjab.",
  },
  {
    id: 5,
    name: "National Level Mini    Dirt Bike    (DIRTRASH’22) ",

    image: "DIRTRASH22",

    venue: "Sri Ramakrishna    Engineering College,    ",
    Organiser: "Department of    Mechanical    Engineering",
    date: "19 Oct 2022",
    Awards: [{ value: "Overall Runner up –    Rs.7,500" }],
    location: "Coimbatore.",
  },
];

const Recent = () => {
  return (
    <div className="mx-auto max-w-7xl  px-6 lg:px-8">
    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Recent Triumphs
    </h1>
    <p className="mt-4 text-lg text-gray-600">
      Beyond the numerical count of achievements lies a deeper impact. Our
      endeavors resonate with a purpose that extends beyond profit margins.
    </p>

    <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="mx-auto my-5 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 lg:p-8 flex flex-col lg:flex-row">
              <div className="lg:w-1/2 md:max-h-[20rem]">
                <img
                  className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg"
                  src={`/Achievements/${product.image}.webp`}
                  alt={product.name}
                />
              </div>
              <div className="lg:w-1/2 mt-5 lg:pl-8">
                <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
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
                  <h2 className="text-gray-800 font-semibold">Awards</h2>
                  <div className="flex flex-col gap-2">
                    {product.Awards &&
                      product.Awards.map((award, index) => (
                        <div key={index} className="flex items-center text-center mx-auto">
                          
                          <span className="text-gray-700 ">
                            {award.value}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h2 className="text-gray-800 font-semibold">Venue</h2>
                  <p className="text-gray-700">{product.venue}</p>
                </div>
                <div className="mb-4">
                  <h2 className="text-gray-800 font-semibold">Organiser</h2>
                  <p className="text-gray-700">{product.Organiser}</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default Recent;
