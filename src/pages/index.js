import React from 'react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer';
import Headerimg from '../../public/2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import {motion} from "framer-motion"
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import CountUp, { useCountUp } from 'react-countup';
const index = () => {
  useCountUp({
    ref: 'counter',
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
 

  const posts = [
    {
      id: 1,
      title: 'பெட்ரோல், பேட்டரி மூலம் இயங்கும் வாகனம்: ஸ்ரீ ராமகிருஷ்ணா கல்லூரி மாணவர்கள் சாதனை',
      href: 'https://www.covaimail.com/?p=53397',
      description:
        'ஸ்ரீ ராமகிருஷ்ணா தொழில்நுட்பக் கல்லூரியின் இயந்திரவியல் மற்றும் மின்னியல், மற்றும் தொடர்பியல் துறை சார்ந்த இறுதி ஆண்டு மற்றும் முன்னாள் மாணவர்கள் பேட்டரி மற்றும் பெட்ரோல் மூலமாக இயங்கக்கூடிய இருசக்கர வாகனத்தை தயாரிக்கும் முயற்சியில் வெற்றி கண்டு சாதனை படைத்துள்ளனர்.',
      date: 'Nov 06, 2021',
      datetime: '2021-11-06',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Covai Mail',
        role: 'Newspaper',
        href: '#',
        imageUrl:'https://pbs.twimg.com/profile_images/841202864336732160/WpjQxv0c_400x400.jpg'
      },
    },
    {
        id: 2,
        title: 'Tamil Nadu government opens doors for electric vehicle makers',
        href: 'https://www.business-standard.com/article/companies/tamil-nadu-government-opens-doors-for-electric-vehicle-makers-121100400043_1.html',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Oct 04, 2021',
        datetime: '2021-10-04',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Business-Standard',
          role: 'Co-Founder / CTO',
          href: 'https://www.business-standard.com/',
          imageUrl:
            'https://www.business-standard.com/assets/web-assets/images/business-standard-logo-placeholder.jpg',
        },
      },
    {
        id: 3,
        title: 'கோவையில் கலக்கும் ஸ்டார்ட் அப்; பெட்ரோல் ஸ்கூட்டருக்கு தீர்வு காணும் கிட்!',
        href: 'https://tamil.samayam.com/latest-news/state-news/coimbatore-start-up-has-created-an-electric-conversion-kit-that-will-convert-petrol-scooter-to-hybrid/articleshow/85865857.cms',
        description:
          'கோவையை சேர்ந்த ஸ்டார்ட் அப் நிறுவனம் ஒன்று பெட்ரோல் ஸ்கூட்டரை எலக்ட்ரிக்-ஹைபிரிட் ஸ்கூட்டராக மாற்றும் கிட் ஒன்றை கண்டுபிடித்துள்ளது',
        date: 'Sep 03, 2021',
        datetime: '2021-09-03',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'The Times of India- Samayam',
          role: 'Newspaper',
          href: 'https://tamil.samayam.com/',
          imageUrl:
            'https://play-lh.googleusercontent.com/k8eIgpF1iXamn64rd6w_kxpsmEO2VqVGhupV5oSAynhgtPNq56gvTnr4WG8mhBKFYjLX',
        },
      },
      
    
  ]
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
    
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
   
    
   
    

  ];
  return (
    <div className='BG-BLACK'>
      <Navbar/>
      
      {/* Header */}
      <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="  max-w-full   bg-transparent overflow-hidden flex items-center justify-center h-full relative "
        >
          <div className="flex items-center justify-center m-0 p-0">
            <ImageList
              className="overflow-hidden bg-transparent rounded-lg brightness-50 "
              sx={{ width: 1550, height: 625 }}
              cols={8}
              gap={0}
              rowHeight={200}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    className="cursor-pointer brightness-50 hover:brightness-100"
                    src={`${item.img}?w=100&h=100&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=100&h=100&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
          <div className="flex flex-col w-full gap-5 items-center justify-center absolute  bottom-48 left-[50%] translate-x-[-50%] why-us-font">
            <h1 className="text-5xl md:text-7xl text-white font-bold title-text ">
              Mechatrons
            </h1>
            <h1 className="text-lg md:text-2xl text-gray-400 font-semibold">
            @ Dominate the Road
            </h1>
            
            <button className="p-2 px-10 border-2 border-violet-900 mt-6 rounded-xl text-black font-bold text-xl bg-gradient-to-tr from-slate-300 to-slate-50 why-us-shadow">
              Get Started
            </button>
          </div>
        </motion.div>


        {/* About US */}

        <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-20 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</h2>
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
        {/* News */}
        <div className=" py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-900 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex relative bg-[white] border-2 px-5 py-5 border-violet-900 rounded-xl max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-black">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-black px-3 py-1.5 font-medium text-white "
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-900">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-900" />
                <div className="text-sm leading-6">
                  <p className="font-bold text-black ">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-black">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>

    {/* Testimonials */}
    <div className="text-center p-5">
        <h1 className="text-3xl uppercase font-bold">Testimonials</h1>
        <h4 className="text-md leading-7 my-3 text-lg font-light opacity-75">Learn how to grow your business with our expert advice.</h4>
        <div className="flex max-w-5xl mx-auto gap-8">
          <Swiper
      // install Swiper modules
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Navigation,Autoplay, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      // slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className=""
    >
           <SwiperSlide>
            <div className=" bg-white border-2 px-5 py-5 border-violet-900 text-center p-8 rounded-xl">
              <img
                className="h-20 rounded-full mx-auto"
                src="https://www.fujitsu.com/global/Images/Srinita_1_tcm100-3656043.jpg"
                alt=""
              />
              <h4 className="uppercase text-xl font-bold">NAncy Doe</h4>
              <h5 className="font-bold opacity-75">Front end engineer</h5>
              <p className="text-md leading-7 my-3 font-light  text-slate-800">
                And because these are real people, customers trust them to be
                unbiased and truthful. · A testimonial is effectively a review
                or recommendation from a client, letting other people know how
                your products or services benefitted them.
              </p>
            </div>
          </SwiperSlide> <SwiperSlide>
            <div className=" bg-white border-2 px-5 py-5 border-violet-900 text-center p-8 rounded-xl">
              <img
                className="h-20 rounded-full mx-auto"
                src="https://www.fujitsu.com/global/Images/Srinita_1_tcm100-3656043.jpg"
                alt=""
              />
              <h4 className="uppercase text-xl font-bold">NAncy Doe</h4>
              <h5 className="font-bold opacity-75">Front end engineer</h5>
              <p className="text-md leading-7 my-3 font-light  text-slate-800">
                And because these are real people, customers trust them to be
                unbiased and truthful. · A testimonial is effectively a review
                or recommendation from a client, letting other people know how
                your products or services benefitted them.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white border-2 px-5 py-5 border-violet-900 text-center p-8 rounded-xl">
              <img
                className="h-20 rounded-full mx-auto"
                src="https://www.fujitsu.com/global/Images/Srinita_1_tcm100-3656043.jpg"
                alt=""
              />
              <h4 className="uppercase text-xl font-bold">NAncy Doe</h4>
              <h5 className="font-bold opacity-75">Front end engineer</h5>
              <p className="text-md leading-7 my-3 font-light  text-slate-800">
                And because these are real people, customers trust them to be
                unbiased and truthful. · A testimonial is effectively a review
                or recommendation from a client, letting other people know how
                your products or services benefitted them.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white border-2 px-5 py-5 border-violet-900 text-center p-8 rounded-xl">
              <img
                className="h-20 rounded-full mx-auto"
                src="https://www.fujitsu.com/global/Images/Srinita_1_tcm100-3656043.jpg"
                alt=""
              />
              <h4 className="uppercase text-xl font-bold">NAncy Doe</h4>
              <h5 className="font-bold opacity-75">Front end engineer</h5>
              <p className="text-md leading-7 my-3 font-light  text-slate-800">
                And because these are real people, customers trust them to be
                unbiased and truthful. · A testimonial is effectively a review
                or recommendation from a client, letting other people know how
                your products or services benefitted them.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  bg-white border-2 px-5 py-5 border-violet-900 text-center p-8 rounded-xl">
              <img
                className="h-20 rounded-full mx-auto"
                src="https://www.fujitsu.com/global/Images/Srinita_1_tcm100-3656043.jpg"
                alt=""
              />
              <h4 className="uppercase text-xl font-bold">NAncy Doe</h4>
              <h5 className="font-bold opacity-75">Front end engineer</h5>
              <p className="text-md leading-7 my-3 font-light  text-slate-800">
                And because these are real people, customers trust them to be
                unbiased and truthful. · A testimonial is effectively a review
                or recommendation from a client, letting other people know how
                your products or services benefitted them.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white border-2 px-5 py-5 border-violet-900 text-center p-8 rounded-xl">
              <img
                className="h-20 rounded-full mx-auto"
                src="https://www.fujitsu.com/global/Images/Srinita_1_tcm100-3656043.jpg"
                alt=""
              />
              <h4 className="uppercase text-xl font-bold">NAncy Doe</h4>
              <h5 className="font-bold opacity-75">Front end engineer</h5>
              <p className="text-md leading-7 my-3 font-light  text-slate-800">
                And because these are real people, customers trust them to be
                unbiased and truthful. · A testimonial is effectively a review
                or recommendation from a client, letting other people know how
                your products or services benefitted them.
              </p>
            </div>
          </SwiperSlide>
          </Swiper>
        </div>
      </div>

      
      <Footer/>
    </div>
  )
}

export default index
