import { FaFacebookF } from "react-icons/fa";
import { FaRegEnvelope, FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsThreadsFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Newsletter Section */}
      <div className="newsletter-sec relative z-[20] -mb-20 md:px-10 lg:px-16">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 rounded-2xl bg-black p-5 text-white md:flex-row md:!p-8 lg:!px-12">
          <h2 className="xsm:text-2xl text-center text-xl font-bold md:max-w-xs md:text-left md:text-xl lg:max-w-md lg:text-4xl">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>

          <div className="flex w-full flex-col gap-4 md:w-96 lg:w-80 xl:w-86">
            <form action="#">
              <div className="relative">
                <input
                  type="email"
                  id="subscribe-email"
                  placeholder="Enter your email address"
                  required
                  className="focus:border-persian-red focus:ring-persian-red eq w-full rounded-full border border-gray-400 bg-white py-3 pl-12 font-[arial] text-sm text-black/40 placeholder:text-black/40 focus:outline-none md:text-xs lg:text-base"
                />
                <label
                  htmlFor="subscribe-email"
                  className="absolute top-1/2 left-1 inline-block -translate-y-1/2 transform pl-4 text-lg text-black/40"
                >
                  <i className="fa-regular fa-envelope" />
                  <FaRegEnvelope />
                </label>
              </div>

              <button className="hover:bg-persian-red eq mt-3 block w-full rounded-full bg-white py-3 text-sm text-black hover:text-white md:text-xs lg:text-base">
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="z-[0] bg-[#F0F0F0] px-4 pt-32 pb-12 text-sm">
        <div className="container mx-auto">
          <div className="mb-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="mb-4 block w-24 sm:mb-5">
                <Image
                  src="/assests/images/footer-logo.png"
                  alt="Tesko Logo"
                  width={0}
                  height={0}
                  className="h-auto w-full object-contain"
                  sizes="96px"
                  priority
                />
              </Link>

              <p className="mb-4 text-black/60">
                We have clothes that suits your style and which you're proud to
                wear. From women to men.
              </p>

              <div className="xsm:gap-2 flex gap-1 sm:gap-4">
                <Link
                  href="#"
                  className="eq xsm:w-8 xsm:h-8 xsm:text-sm flex h-6 w-6 items-center justify-center rounded-full border border-black/20 bg-white text-xs text-black hover:bg-black hover:text-white"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="#"
                  className="eq xsm:w-8 xsm:h-8 xsm:text-sm flex h-6 w-6 items-center justify-center rounded-full border border-black/20 bg-white text-xs text-black hover:bg-black hover:text-white"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="#"
                  className="eq xsm:w-8 xsm:h-8 xsm:text-sm flex h-6 w-6 items-center justify-center rounded-full border border-black/20 bg-white text-xs text-black hover:bg-black hover:text-white"
                >
                  <AiFillInstagram />
                </Link>
                <Link
                  href="#"
                  className="eq xsm:w-8 xsm:h-8 xsm:text-sm flex h-6 w-6 items-center justify-center rounded-full border border-black/20 bg-white text-xs text-black hover:bg-black hover:text-white"
                >
                  <BsThreadsFill />
                </Link>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="mb-4 text-base font-medium">COMPANY</h3>
              <ul className="space-y-3 md:space-y-4">
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary eq nav-link text-black/60"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary eq nav-link text-black/60"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary eq nav-link text-black/60"
                  >
                    Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary eq nav-link text-black/60"
                  >
                    Career
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h3 className="mb-4 text-base font-medium">HELP</h3>
              <ul className="space-y-3 md:space-y-4">
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary eq nav-link text-black/60"
                  >
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary eq nav-link text-black/60"
                  >
                    Delivery Details
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary eq nav-link text-black/60"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary eq nav-link text-black/60"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* FAQ Links */}
            <div>
              <h3 className="mb-4 text-base font-medium">FAQ</h3>
              <ul className="space-y-3 md:space-y-4">
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary eq nav-link text-black/60"
                  >
                    Account
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary eq nav-link text-black/60"
                  >
                    Manage Deliveries
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary eq nav-link text-black/60"
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary eq nav-link text-black/60"
                  >
                    Payments
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="mb-4 text-base font-medium">RESOURCES</h3>
              <ul className="space-y-3 md:space-y-4">
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary eq nav-link text-black/60"
                  >
                    Free eBooks
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary eq nav-link text-black/60"
                  >
                    Development Tutorial
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary eq nav-link text-black/60"
                  >
                    How to - Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary eq nav-link text-black/60"
                  >
                    Youtube Playlist
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col items-center justify-between border-t border-black/10 pt-5 sm:flex-row">
            <p className="mb-4 text-center text-black/60 sm:mb-0 sm:text-left">
              Tesko © 2024- {new Date().getFullYear()}
              <span id="current-year" />, All Rights Reserved
            </p>
            <div className="flex">
              <div className="w-[3rem] sm:w-[4rem]">
                <Image
                  width={50}
                  height={20}
                  src="/assests/images/payment-getway-1.png"
                  alt="Visa"
                  style={{ height: "auto", width: "100%" }}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="w-[3rem] sm:w-[4rem]">
                <Image
                  width={50}
                  height={20}
                  src="/assests/images/payment-getway-2.png"
                  alt="Mastercard"
                  style={{ height: "auto", width: "100%" }}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="w-[3rem] sm:w-[4rem]">
                <Image
                  width={50}
                  height={20}
                  src="/assests/images/payment-getway-3.png"
                  alt="PayPal"
                  style={{ height: "auto", width: "100%" }}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="w-[3rem] sm:w-[4rem]">
                <Image
                  width={50}
                  height={20}
                  src="/assests/images/payment-getway-4.png"
                  alt="Apple Pay"
                  style={{ height: "auto", width: "100%" }}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="w-[3rem] sm:w-[4rem]">
                <Image
                  width={50}
                  height={20}
                  src="/assests/images/payment-getway-5.png"
                  alt="Google Pay"
                  style={{ height: "auto", width: "100%" }}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
