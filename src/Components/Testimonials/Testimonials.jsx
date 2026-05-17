import React from "react";
import Heading from "../Heading/Heading";

import { IoIosArrowBack } from "react-icons/io";

import { IoIosArrowForward } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import customer1 from "../../assets/customer1.jpg";
import customer2 from "../../assets/customer2.jpg";
import customer3 from "../../assets/customer3.jpg";
import customer4 from "../../assets/customer4.jpg";
import customer5 from "../../assets/customer5.jpg";
const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Emily Johnson",
      profession: "Food Blogger",
      rating: 3,
      para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
      image: customer1,
    },
    {
      id: 2,
      name: "David Smith",
      profession: "Chef",
      rating: 4,
      para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
      image: customer2,
    },
    {
      id: 3,
      name: "Alya Zahra",
      profession: "Model",
      rating: 3,
      para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
      image: customer3,
    },
    {
      id: 4,
      name: "Carlos Mendes",
      profession: "Fitness Coach",
      rating: 4,
      para: "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
      image: customer4,
    },
    {
      id: 5,
      name: "Natcha Phongchai",
      profession: "Nutritionist",
      rating: 3,
      para: "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
      image: customer5,
    },
  ];

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-20 py-10">
        <Heading highlight={"Customers"} heading={" Saying"} />
        <div className="py-2 flex items-end justify-end gap-3 text-xl">
          <button className="px-3 py-2 rounded custom-prev  bg-zinc-200 cursor-pointer">
            <IoIosArrowBack />
          </button>
          <button className="px-3 py-2 rounded custom-next  bg-zinc-200 cursor-pointer">
            <IoIosArrowForward />
          </button>
        </div>

        {/* cards */}

        <Swiper
          slidesPerView={2}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,spaceBetween:20
            },
            640: {
              slidesPerView: 2,spaceBetween:20
            },
            1024: {
              slidesPerView: 3,spaceBetween:20
            },
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews.map((item) => (
            <SwiperSlide className="max-w-[450px] m-2 shadow bg-zinc-100 px-10 py-10  rounded-xl flex flex-col">
              <div className="flex gap-4 ">
                <div className="w-20 h-20 rounded-full outline outline-[3px] outline-orange-400 outline-offset-4 overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col ">
                  <h2 className="font-bold">{item.name}</h2>
                  <p className="text-zinc-500">{item.profession}</p>
                  <p className="text-sm">⭐⭐⭐⭐⭐</p>
                </div>
              </div>

              <p className="mt-4 text-zinc-600">{item.para}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
