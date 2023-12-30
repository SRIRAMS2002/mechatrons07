import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
const Testimonials = () => {
  return (
    <>
      <div className="text-center p-5">
        <h1 className="text-3xl uppercase font-bold">Testimonials</h1>
        <h4 className="text-md leading-7 my-3 text-lg font-light opacity-75">
          Learn how to grow your business with our expert advice.
        </h4>
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
            modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
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
            </SwiperSlide>{" "}
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
    </>
  );
};

export default Testimonials;
