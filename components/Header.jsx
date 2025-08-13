"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // <header className="header-section bg-persian-red font-primary text-white">

    /* Top Header  */
    <>
      <div className="bg-persian-red font-primary container flex h-auto flex-col flex-wrap justify-between gap-2 py-3 text-white md:h-20 md:flex-row md:flex-nowrap md:items-center md:gap-0">
        {/* Logo and Location  */}
        <div className="flex items-center justify-between gap-2 md:justify-start lg:gap-5 rtl:space-x-reverse">
          <Link href="/">
            <Image
              src="/assests/images/tesko-logo.png"
              className="h-8 self-center md:h-6 lg:h-8"
              alt="Tesko Logo"
              width={100}
              height={40}
            />
          </Link>

          <div className="flex flex-nowrap items-center gap-2 text-base md:text-xs lg:text-base">
            <span>
              <i className="fa-solid fa-location-dot text-theme-light"></i>
            </span>
            <form className="text-theme-light mx-auto max-w-sm">
              <label htmlFor="country-select" className="sr-only">
                Underline select
              </label>
              <select
                id="country-select"
                className="bg-persian-red peer block w-full cursor-pointer appearance-none border-none px-0 py-2.5 text-sm focus:border-gray-200 focus:ring-0 focus:outline-none"
              >
                <option value="BD" defaultValue>
                  Bangladesh
                </option>
                <option value="IN">India</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.091 0.544732L7.70494 1.1518L4.39956 4.4989C4.34659 4.55285 4.28349 4.59579 4.21386 4.62526C4.14424 4.65473 4.06947 4.67013 3.99387 4.67059C3.91827 4.67106 3.84333 4.65656 3.77335 4.62794C3.70337 4.59933 3.63974 4.55716 3.58613 4.50385L0.238452 1.19732L0.844946 0.583387L3.98701 3.6868L7.091 0.544732Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* Search Bar  */}
        <div className="order-3 flex-grow md:order-2 md:mx-2 lg:mx-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Everything at tesko online in store"
              className="focus:border-primary focus:ring-light-yellow text-theme-dark placeholder:text-theme-dark eq bg-theme-light w-full rounded-full border border-gray-300 py-3 pr-10 pl-4 font-[arial] text-sm focus:outline-none md:text-xs lg:py-2 lg:pl-4 lg:text-base"
            />

            <button className="bg-light-yellow absolute top-1/2 right-1 -translate-y-1/2 transform rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* User Activity Section  */}
        <div className="order-2 flex items-center justify-evenly gap-2 text-xs md:order-3 lg:gap-5 lg:text-sm">
          {/* my items  */}
          <Link
            href="#"
            className="hover:text-light-yellow eq flex items-center gap-1"
          >
            <span>
              <i className="fa-regular fa-heart"></i>
            </span>
            <p className="flex flex-col text-sm leading-none lg:text-base">
              <span className="font-[arial] md:text-xs lg:text-sm">
                Recorder
              </span>
              <span className="text-sm font-medium lg:text-base">My Items</span>
            </p>
          </Link>
          {/* sign in  */}
          <Link
            href="#"
            className="hover:text-light-yellow eq flex items-center gap-1"
          >
            <span>
              <i className="fa-regular fa-user"></i>
            </span>
            <p className="flex flex-col text-base leading-none lg:text-base">
              <span className="font-[arial] md:text-xs lg:text-sm">
                Sign In
              </span>
              <span className="text-sm font-medium lg:text-base">Account</span>
            </p>
          </Link>
          {/* cart icon  */}
          <Link
            href="#"
            className="hover:text-light-yellow eq flex flex-col items-center leading-none"
          >
            <span className="relative block">
              <i className="fa-solid fa-cart-arrow-down"></i>
              <span className="bg-theme-light text-light-yellow absolute -end-4 -top-3 flex h-5 w-5 items-center justify-center rounded-full font-[arial] text-[10px] font-bold">
                01
              </span>
            </span>
            <span className="text-sm font-medium lg:text-base">$50.00</span>
          </Link>
        </div>
      </div>

      {/* Bottom Header  */}
      <nav className="sticky top-0 z-50 border-b bg-[#F2F8FD]">
        <div className="relative container flex flex-wrap items-center justify-between md:flex-nowrap md:justify-start">
          {/* All Departments  */}
          <div className="group relative flex h-full py-5">
            {/* mega menu trigure btn  */}
            <button className="flex-no-wrap text-persian-blue border-butterfly-blue flex items-center space-x-2 border-r pr-5 text-base font-semibold whitespace-nowrap md:text-sm lg:text-base">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H10V10H4V4ZM14 4H20V10H14V4ZM4 14H10V20H4V14ZM14 17C14 17.7956 14.3161 18.5587 14.8787 19.1213C15.4413 19.6839 16.2044 20 17 20C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17C20 16.2044 19.6839 15.4413 19.1213 14.8787C18.5587 14.3161 17.7956 14 17 14C16.2044 14 15.4413 14.3161 14.8787 14.8787C14.3161 15.4413 14 16.2044 14 17Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>All Department</span>
            </button>

            {/* mega menu container  */}
            <div className="text-jet-gray absolute top-full left-0 z-50 hidden w-60 bg-white text-sm shadow-lg group-hover:flex">
              {/* Categories Column  */}
              <div className="h-[31.2rem] w-full rounded border border-[#E4E7E9]">
                <ul className="text-persian-blue py-4">
                  <li className="category-item">
                    <Link
                      href="#"
                      className="hover:text-rangoon-green eq block px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                    >
                      Clothing shoes & Accessories
                    </Link>
                  </li>
                  <li className="category-item">
                    <Link
                      href="#"
                      className="hover:text-rangoon-green eq block px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                    >
                      Toys, Kids And Baby
                    </Link>
                  </li>
                  <li className="category-item hover:text-rangoon-green group/phone eq px-4 py-2 hover:bg-[#F2F4F5]">
                    <p className="eq flex cursor-pointer items-center justify-between hover:font-semibold">
                      SmartPhone
                      <span className="invisible group-hover/phone:visible">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </p>

                    {/* Brands Submenu  */}
                    <div className="text-jet-gray absolute top-0 left-60 min-h-[31.2rem] w-44 group-hover/phone:block">
                      <ul className="ms-3 h-[31.2rem] rounded border border-[#E4E7E9] bg-white px-3 py-4">
                        <li className="brand-item">
                          <Link
                            href="#"
                            className="hover:text-rangoon-green eq block rounded-sm px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                          >
                            All
                          </Link>
                        </li>
                        <li className="brand-item">
                          <Link
                            href="#"
                            className="hover:text-rangoon-green eq block rounded-sm px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                          >
                            iPhone
                          </Link>
                        </li>
                        <li className="brand-item group/brand eq rounded-sm px-4 py-2 hover:bg-gray-100">
                          <h4 className="eq hover:text-rangoon-green cursor-pointer hover:font-semibold">
                            Samsung
                          </h4>
                          {/* brand feature products  */}
                          <div className="absolute top-0 left-[10rem] hidden h-[31.2rem] max-h-[31.2rem] w-[45vw] overflow-y-scroll rounded-tr rounded-br border-t border-r border-b border-[#E4E7E9] bg-white p-4 group-hover/brand:md:block lg:w-[50vw] xl:overflow-y-auto">
                            <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-2">
                              {/* Product Cards  */}
                              <div className="feature-phones order-2 p-2 lg:order-1">
                                <h3 className="text-rangoon-green mb-4 text-lg font-bold uppercase">
                                  Featured Phones
                                </h3>

                                <div className="feature-items-wrapper space-y-4">
                                  {/* item 1  */}
                                  <div className="group/feature feature-item-card eq flex gap-3 rounded border p-2 hover:shadow">
                                    <div className="item-image w-1/4">
                                      <Link href="#" target="_blank">
                                        <Image
                                          src="/assests/images/feature-product-1.png"
                                          alt=" Samsung Electronics Samsung Galexy S21
                                            5G"
                                          className="h-full w-full object-contain"
                                          width={300}
                                          height={300}
                                        />
                                      </Link>
                                    </div>
                                    <div className="item-details flex w-3/4 flex-col">
                                      <h4 className="line-clamp-2">
                                        <Link
                                          href="#"
                                          target="_self"
                                          className="text-rangoon-green group-hover/feature:text-primary eq"
                                        >
                                          Samsung Electronics Samsung Galexy S21
                                          5G
                                        </Link>
                                      </h4>
                                      <p className="text-butterfly-blue font-semibold">
                                        $160
                                      </p>
                                    </div>
                                  </div>
                                  {/* item 2  */}
                                  <div className="group/feature feature-item-card eq flex gap-3 rounded border p-2 hover:shadow">
                                    <div className="item-image w-1/4">
                                      <Link href="#" target="_blank">
                                        <Image
                                          src="/assests/images/feature-product-2.png"
                                          alt="Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone"
                                          className="h-full w-full object-contain"
                                          width={300}
                                          height={300}
                                        />
                                      </Link>
                                    </div>
                                    <div className="item-details flex w-3/4 flex-col">
                                      <h4 className="line-clamp-2">
                                        <Link
                                          href="#"
                                          target="_self"
                                          className="text-rangoon-green group-hover/feature:text-primary eq"
                                        >
                                          Simple Mobile 5G LTE Galexy 12 Mini
                                          512GB Gaming Phone
                                        </Link>
                                      </h4>
                                      <p className="text-butterfly-blue font-semibold">
                                        $1,500
                                      </p>
                                    </div>
                                  </div>
                                  {/* item 3  */}
                                  <div className="group/feature feature-item-card eq flex gap-3 rounded border p-2 hover:shadow">
                                    <div className="item-image w-1/4">
                                      <Link href="#" target="_blank">
                                        <Image
                                          src="/assests/images/feature-product-3.png"
                                          alt="Sony DSCHX8 High Zoom Point & Shoot Camera"
                                          className="h-full w-full object-contain"
                                          width={300}
                                          height={300}
                                        />
                                      </Link>
                                    </div>
                                    <div className="item-details flex w-3/4 flex-col">
                                      <h4 className="line-clamp-2">
                                        <Link
                                          href="#"
                                          target="_self"
                                          className="text-rangoon-green group-hover/feature:text-primary eq"
                                        >
                                          Sony DSCHX8 High Zoom Point & Shoot
                                          Camera
                                        </Link>
                                      </h4>
                                      <p className="text-butterfly-blue font-semibold">
                                        <span className="font-normal text-[#929FA5] line-through">
                                          $3200
                                        </span>
                                        $2,300
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Discount Feature Product Image  */}
                              <div className="discount-image order-1 h-full">
                                <Link
                                  href="#"
                                  className="relative block 2xl:h-[29rem]"
                                >
                                  <Image
                                    src="/assests/images/feature-product-4.png"
                                    alt="Feature Phone"
                                    className="mb-2 h-full w-full object-contain md:mb-0"
                                    width={300}
                                    height={300}
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="brand-item">
                          <Link
                            href="#"
                            className="hover:text-rangoon-green eq block rounded-sm px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                          >
                            Realme
                          </Link>
                        </li>
                        <li className="brand-item">
                          <Link
                            href="#"
                            className="hover:text-rangoon-green eq block rounded-sm px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                          >
                            Xiaomi
                          </Link>
                        </li>
                        <li className="brand-item">
                          <Link
                            href="#"
                            className="hover:text-rangoon-green eq block rounded-sm px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                          >
                            Oppo
                          </Link>
                        </li>
                        <li className="brand-item">
                          <Link
                            href="#"
                            className="hover:text-rangoon-green eq block rounded-sm px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                          >
                            Vivo
                          </Link>
                        </li>
                        <li className="brand-item">
                          <Link
                            href="#"
                            className="hover:text-rangoon-green eq block rounded-sm px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                          >
                            OnePlus
                          </Link>
                        </li>
                        <li className="brand-item">
                          <Link
                            href="#"
                            className="hover:text-rangoon-green eq block rounded-sm px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                          >
                            Huawei
                          </Link>
                        </li>
                        <li className="brand-item">
                          <Link
                            href="#"
                            className="hover:text-rangoon-green eq block rounded-sm px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                          >
                            Infinix
                          </Link>
                        </li>
                        <li className="brand-item">
                          <Link
                            href="#"
                            className="hover:text-rangoon-green eq block rounded-sm px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                          >
                            Tecno
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="category-item">
                    <Link
                      href="#"
                      className="hover:text-rangoon-green eq block px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                    >
                      Personal Care
                    </Link>
                  </li>
                  <li className="category-item">
                    <Link
                      href="#"
                      className="hover:text-rangoon-green eq block px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                    >
                      Pharmacy, Health & Wellness
                    </Link>
                  </li>
                  <li className="category-item">
                    <Link
                      href="#"
                      className="hover:text-rangoon-green eq block px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                    >
                      Auto & Tires
                    </Link>
                  </li>
                  <li className="category-item">
                    <Link
                      href="#"
                      className="hover:text-rangoon-green eq block px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                    >
                      Household Essentials
                    </Link>
                  </li>
                  <li className="category-item">
                    <Link
                      href="#"
                      className="hover:text-rangoon-green eq block px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                    >
                      Pets
                    </Link>
                  </li>
                  <li className="category-item">
                    <Link
                      href="#"
                      className="hover:text-rangoon-green eq block px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                    >
                      Sports & Outdoors
                    </Link>
                  </li>
                  <li className="category-item">
                    <Link
                      href="#"
                      className="hover:text-rangoon-green eq block px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                    >
                      School Office & Art Supplies
                    </Link>
                  </li>
                  <li className="category-item">
                    <Link
                      href="#"
                      className="hover:text-rangoon-green eq block px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                    >
                      Movies Music & Books
                    </Link>
                  </li>
                  <li className="category-item">
                    <Link
                      href="#"
                      className="hover:text-rangoon-green eq block px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                    >
                      Gifts Card
                    </Link>
                  </li>
                  <li className="category-item">
                    <Link
                      href="#"
                      className="hover:text-rangoon-green eq block px-4 py-2 hover:bg-[#F2F4F5] hover:font-semibold"
                    >
                      Shop With Purpose
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Toggle Menu Button Mobile  */}
          <button
            type="button"
            className="text-persian-blue inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden"
            aria-controls="navbar-multi-level"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Nav Links  */}
          <div
            className={cn(
              "eq nav-links text-persian-blue bg-theme-light fixed top-0 right-0 z-50 h-full w-64 shadow-lg ease-in-out md:static md:block md:w-auto md:bg-transparent md:shadow-none",
              mobileMenuOpen
                ? "translate-x-0"
                : "translate-x-full md:block md:translate-x-0"
            )}
            id="navbar-multi-level"
          >
            {/* Close button for mobile */}
            <button
              type="button"
              className="text-persian-red absolute top-4 right-4 hover:text-gray-700 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="md:text-persian-blue mt-16 flex flex-col rounded-lg border border-gray-100 p-3 font-light md:ms-4 md:mt-0 md:flex-row md:flex-wrap md:space-x-3 md:border-0 md:p-0 md:text-sm lg:space-x-8 lg:p-4 lg:text-base rtl:space-x-reverse">
              <li>
                <Link
                  href="/"
                  className="text-persian-blue hover:bg-primary md:hover:text-primary eq md:text-persian-blue nav-link block rounded px-3 py-2 md:border-0 md:p-0 md:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-persian-blue hover:bg-primary md:hover:text-primary eq md:text-persian-blue nav-link block rounded px-3 py-2 md:border-0 md:p-0 md:hover:bg-transparent"
                >
                  Deals
                </Link>
              </li>
              <li>
                <Link
                  href="/grocery.html"
                  className="text-persian-blue hover:bg-primary md:hover:text-primary eq md:text-persian-blue nav-link block rounded px-3 py-2 md:border-0 md:p-0 md:hover:bg-transparent"
                >
                  Grocery & Essentials
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-persian-blue hover:bg-primary md:hover:text-primary eq md:text-persian-blue nav-link block rounded px-3 py-2 md:border-0 md:p-0 md:hover:bg-transparent"
                >
                  Fassion
                </Link>
              </li>
              <li>
                <Link
                  href="./electronics.html"
                  className="text-persian-blue hover:bg-primary md:hover:text-primary eq md:text-persian-blue nav-link block rounded px-3 py-2 md:border-0 md:p-0 md:hover:bg-transparent"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-persian-blue hover:bg-primary md:hover:text-primary eq md:text-persian-blue nav-link block rounded px-3 py-2 md:border-0 md:p-0 md:hover:bg-transparent"
                >
                  Halloween
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-persian-blue hover:bg-primary md:hover:text-primary eq md:text-persian-blue nav-link block rounded px-3 py-2 md:border-0 md:p-0 md:hover:bg-transparent"
                >
                  Toy Shop
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-persian-blue hover:bg-primary md:hover:text-primary eq md:text-persian-blue nav-link block rounded px-3 py-2 md:border-0 md:p-0 md:hover:bg-transparent"
                >
                  Tesko +
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {mobileMenuOpen && (
          <div
            className="bg-theme-dark/40 fixed inset-0 z-40 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </nav>
    </>
    // </header>
  );
};

export default Header;
