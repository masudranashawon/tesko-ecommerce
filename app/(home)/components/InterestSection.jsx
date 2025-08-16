"use client";

import { FaCartPlus, FaPlus } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import RenderStars from "@/components/RenderStars";
import "swiper/css";

const categories = [
  { img: "/assests/images/category-1.png", label: "Grocery" },
  { img: "/assests/images/category-2.png", label: "Home Appliances" },
  { img: "/assests/images/category-3.png", label: "Fashion" },
  { img: "/assests/images/category-4.png", label: "Electronics" },
  { img: "/assests/images/category-5.png", label: "Beauty & Sallon" },
  { img: "/assests/images/category-6.png", label: "Automotive & Tire" },
  { img: "/assests/images/category-4.png", label: "Electronics" },
];

const products = [
  {
    img: "/assests/images/int-pro-1.png",
    alt: "Ladies Large chocolate vanity Bag",
    title: "Muffets & Tuffets Whole Wheat Bread 400 g",
    rating: 5,
    unit: "1 piece",
    price: "$ 80.00",
  },
  {
    img: "/assests/images/int-pro-2.png",
    alt: "Smart Watch",
    title: "Tracker for Android IPhone Devices",
    rating: 4.5,
    unit: "1 piece",
    price: "$ 120.00",
  },
  {
    img: "/assests/images/int-pro-3.png",
    alt: "Cool Shirt and Pant",
    title: "Exclusive T-Shirt, Shirt, & Gavadin Pant Combo offer",
    rating: 3,
    unit: "1 piece",
    price: "$ 299.00",
  },
  {
    img: "/assests/images/int-pro-4.png",
    alt: "Winter Shoe",
    title: "Imported Sheep's wool Shoe for Winter",
    rating: 5,
    unit: "1 pair",
    price: "$ 99.00",
  },
  {
    img: "/assests/images/int-pro-5.png",
    alt: "Men's Solid Slim Width Necktie",
    title: "Men's Solid Slim Width Necktie",
    rating: 4.5,
    unit: "1 piece",
    price: "$ 99.00",
  },
  {
    img: "/assests/images/int-pro-3.png",
    alt: "Cool Shirt and Pant",
    title: "Exclusive T-Shirt, Shirt, & Gavadin Pant Combo offer",
    rating: 2.5,
    unit: "3 piece",
    price: "$ 299.00",
  },
];

const InterestSection = () => {
  return (
    <section className="interest-section section-padding">
      <div className="container">
        {/* section title */}
        <div className="sec-heading relative">
          <h2 className="text-theme-dark font-semibold uppercase sm:text-xl md:text-center md:text-2xl lg:text-3xl xl:text-4xl">
            Explore your Interest
          </h2>

          <span className="absolute top-1/2 right-0 inline-block -translate-y-1/2">
            <Link href="#" className="theme-btn theme-outline-btn">
              View All
            </Link>
          </span>
        </div>

        {/* Interest categories swiper carousel */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={2}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          grabCursor={true}
          loop={true}
          breakpoints={{
            680: { slidesPerView: 4 },
            768: { slidesPerView: 5, spaceBetween: 5 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="categoriesSwiper mt-10 md:mt-16"
        >
          {categories.map((cat, idx) => (
            <SwiperSlide key={idx} className="group/categores eq">
              <Link
                href="#"
                className="product-card flex w-full flex-col items-center"
              >
                <div className="card-image relative h-16 w-16 md:h-24 md:w-24 lg:h-28 lg:w-28">
                  <Image
                    src={cat?.img}
                    alt={cat?.label}
                    fill
                    sizes="(max-width: 768px) 64px, (max-width: 1024px) 96px, 112px"
                    className="object-contain"
                  />
                </div>
              </Link>
              <div className="card-content mt-3 lg:mt-5">
                <Link
                  href="#"
                  className="group-hover/categores:text-light-yellow eq block text-center text-sm font-medium text-black md:text-lg lg:text-xl"
                >
                  {cat?.label}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Interest Products */}
        <Swiper
          className="fiveSlideSwiper mt-10 md:mt-20"
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={5}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          grabCursor={true}
          loop={true}
          breakpoints={{
            680: { slidesPerView: 3 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1280: { slidesPerView: 5, spaceBetween: 30 },
          }}
        >
          {products.map((prod, idx) => (
            <SwiperSlide key={idx} className="group/interest-pro-card eq">
              <div className="product-card flex w-full flex-col items-center p-2">
                <div className="bg-theme-light eq w-full overflow-hidden rounded-md hover:shadow-md">
                  <div className="item-img relative h-32 overflow-hidden px-10 pt-5 sm:h-40 md:h-52">
                    <Link href="#">
                      <Image
                        src={prod?.img}
                        alt={prod?.alt}
                        width={200}
                        height={300}
                        className="!object-contain"
                      />
                    </Link>
                  </div>

                  <div className="space-y-1 p-2 sm:p-4">
                    <h2 className="text-theme-dark group-hover/interest-pro-card:text-persian-blue eq line-clamp-3 h-16 text-sm font-semibold md:line-clamp-2 md:h-12 md:text-base">
                      <Link href="#">{prod?.title}</Link>
                    </h2>
                    <div className="rating-stars text-light-yellow text-sm">
                      <RenderStars rating={prod?.rating} />
                    </div>
                    <p className="text-persian-blue">{prod?.unit}</p>
                    <p className="text-sand-brown font-semibold">
                      {prod?.price}
                    </p>

                    <div className="add-cart">
                      <button className="eq mt-2 flex h-10 w-full items-center justify-between rounded-full bg-white p-2 hover:shadow-md">
                        <span className="bg-primary inline-flex h-6 w-6 items-center justify-center rounded-full text-xs text-white sm:h-8 sm:w-8 md:text-sm">
                          <FaCartPlus />
                        </span>

                        <span className="text-sm md:text-base">Add</span>
                        <span className="text-sand-brown flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F8F6] text-xs sm:h-8 sm:w-8 sm:text-sm">
                          <FaPlus />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default InterestSection;
