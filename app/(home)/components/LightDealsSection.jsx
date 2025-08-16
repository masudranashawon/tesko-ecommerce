"use client";

import { FaBoltLightning } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import RenderStars from "@/components/RenderStars";
import "swiper/css";

const slides = [
  {
    img: "/assests/images/light-deal-1.png",
    alt: "Model wearing a jacket",
    price: "25.00",
    sold: "4.5K+ Sold",
    time: "1:12:53.55",
    progress: "95%",
    rating: 4.5,
  },
  {
    img: "/assests/images/light-deal-2.png",
    alt: "Ladies Vanity Bag",
    price: "40.00",
    sold: "8.2K+ Sold",
    time: "0:45:53.55",
    progress: "95%",
    rating: 3.5,
  },
  {
    img: "/assests/images/light-deal-3.png",
    alt: "Exclusive shoe's for Boy's",
    price: "30.00",
    sold: "1.9K+ Sold",
    time: "18:13:45.12",
    progress: "65%",
    rating: 3,
  },
  {
    img: "/assests/images/light-deal-4.png",
    alt: "A man wearing a Yellow T-Shirt & Black Short Pant",
    price: "99.99",
    sold: "0.5K+ Sold",
    time: "12:11:14.17",
    progress: "45%",
    rating: 5,
  },
  {
    img: "/assests/images/light-deal-5.png",
    alt: "Electronics Accessories By Apple",
    price: "299.99",
    sold: "10.5K+ Sold",
    time: "0:50:13.45",
    progress: "25%",
    rating: 5,
  },
];

const LightDealsSection = () => {
  return (
    <section className="light-deals-section">
      {/* promotional header */}
      <div className="section-promo-header bg-[#FF4F4F]">
        <div className="container flex flex-col items-center justify-between gap-3 py-3 md:flex-row md:gap-0 md:py-5">
          {/* star icon */}
          <span>
            <svg
              width={56}
              height={56}
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 0C28.9506 15.0527 40.9472 27.0495 56 28C40.9472 28.9506 28.9506 40.9472 28 56C27.0495 40.9472 15.0527 28.9506 0 28C15.0527 27.0495 27.0495 15.0527 28 0Z"
                fill="white"
              />
            </svg>
          </span>
          {/* promo title */}
          <h2 className="text-theme-light flex flex-col items-center gap-2 text-3xl font-semibold md:flex-row md:gap-5">
            <p>
              <span>
                <i className="fa-solid fa-bolt" />
              </span>
              Light deals
            </p>
            <p className="text-base font-medium">
              Limited Time Offer
              <span className="text-xs">
                <i className="fa-solid fa-chevron-right" />
              </span>
            </p>
          </h2>
          {/* star icon */}
          <span>
            <svg
              width={56}
              height={56}
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 0C28.9506 15.0527 40.9472 27.0495 56 28C40.9472 28.9506 28.9506 40.9472 28 56C27.0495 40.9472 15.0527 28.9506 0 28C15.0527 27.0495 27.0495 15.0527 28 0Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* light deals swiper carousel */}
      <div className="container">
        <Swiper
          className="lightDealsSwiper"
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={5}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            680: { slidesPerView: 2 },
            768: { slidesPerView: 2, spaceBetween: 5 },
            1024: { slidesPerView: 3, spaceBetween: 10 },
            1280: { slidesPerView: 4 },
          }}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className="px-1 py-5">
              <Link
                href=""
                className="product-card eq group block w-full rounded-lg p-3 hover:shadow-lg"
              >
                {/* slide image */}
                <div className="card-image relative h-[16.5rem] overflow-hidden rounded-lg">
                  <Image
                    src={slide.img}
                    alt={slide.alt}
                    width={300}
                    height={300}
                    className="eq h-full w-full object-cover group-hover:scale-125"
                  />
                  <span className="absolute bottom-9 left-1/2 block w-3/5 -translate-x-1/2 rounded-full bg-white px-4 py-3 text-center text-sm">
                    Almost Sold Out
                  </span>
                </div>

                {/* Slide Content */}
                <div className="card-content mt-2 space-y-1">
                  {/* price & sold info */}
                  <div className="price-sold-amount flex items-center gap-2">
                    <h2 className="text-primary flex items-center gap-1 text-2xl font-bold">
                      <span className="text-[#ffa755]">
                        <FaBoltLightning />
                      </span>
                      <span className="align-middle text-xs text-[#ffa755]">
                        $
                      </span>
                      {slide.price}
                    </h2>
                    <p className="text-base">{slide.sold}</p>
                  </div>

                  {/* time */}
                  <div className="time-progres flex flex-wrap items-center gap-2">
                    <div className="h-2 w-[60%] rounded-full bg-gray-200">
                      <div
                        className="progress bg-primary h-2 rounded-full"
                        style={{ width: slide.progress }}
                      />
                    </div>
                    <span className="due-time flex-no-wrap inline-flex w-[35%] items-center gap-1 text-sm">
                      <i className="fa-regular fa-clock" /> {slide.time}
                    </span>
                  </div>

                  {/* rating */}
                  <div className="flex items-center gap-2">
                    <div className="rating-stars text-light-yellow flex items-center text-sm">
                      <RenderStars rating={slide.rating} />
                    </div>
                    <span className="text-primary text-sm">Final Hours</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LightDealsSection;
