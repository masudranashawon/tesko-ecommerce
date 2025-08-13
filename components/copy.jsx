import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header-section bg-persian-red font-primary text-white">
      {/* Top Header */}
      <div className="container flex h-auto flex-col flex-wrap justify-between gap-2 py-3 md:h-20 md:flex-row md:flex-nowrap md:items-center md:gap-0">
        {/* Logo and Location */}
        {/* ... (unchanged code) ... */}
      </div>

      {/* Bottom Header */}
      <nav className="border-b bg-[#F2F8FD]">
        <div className="relative container flex flex-wrap items-center justify-between md:flex-nowrap md:justify-start">
          {/* All Departments */}
          {/* ... (unchanged code) ... */}

          {/* Toggle Menu Button Mobile */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden"
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

          {/* Nav Links */}
          <div
            className={`nav-links text-persian-blue fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out md:static md:block md:w-auto md:bg-transparent md:shadow-none ${
              mobileMenuOpen
                ? "translate-x-0"
                : "hidden translate-x-full md:block md:translate-x-0"
            }`}
            id="navbar-multi-level"
          >
            {/* Close button for mobile */}
            <button
              type="button"
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 md:hidden"
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
              {/* ... (unchanged nav links) ... */}
            </ul>
          </div>
        </div>
        {/* Overlay for mobile menu */}
        {mobileMenuOpen && (
          <div
            className="bg-opacity-40 fixed inset-0 z-40 bg-black md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
