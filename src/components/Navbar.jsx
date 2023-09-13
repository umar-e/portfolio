import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <header className="flex items-center justify-between py-4 md:py-8 ">
          {/* logo - start */}
          <a
            href="/"
            className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
            aria-label="logo"
          >
            <svg
              width={95}
              height={94}
              viewBox="0 0 95 94"
              className="h-auto w-6 text-indigo-500"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
            Flowrift
          </a>
          {/* logo - end */}
          {/* nav - start */}
          <nav className="hidden gap-12 lg:flex">
            <NavLink to="/" className={({isActive}) => `text-lg font-semibold ${isActive ? "text-indigo-500": " text-gray-600 transition duration-100  hover:text-indigo-500"}`} >
              Home
            </NavLink>
            <NavLink
              to='/123'
              className={({isActive}) => `text-lg font-semibold ${isActive ? "text-indigo-500": " text-gray-600 transition duration-100  hover:text-indigo-500"}`}
            >
              Features
            </NavLink>
            <NavLink
              to='/projects'
              className={({isActive}) => `text-lg font-semibold ${isActive ? "text-indigo-500": " text-gray-600 transition duration-100  hover:text-indigo-500"}`}
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className={({isActive}) => `text-lg font-semibold ${isActive ? "text-indigo-500": " text-gray-600 transition duration-100  hover:text-indigo-500"}`}
            >
              About
            </NavLink>
          </nav>
          {/* nav - end */}
          {/* buttons - start */}
          <NavLink
            to='/contact'
            className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
          >
            Contact Me
          </NavLink>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Menu
          </button>
          {/* buttons - end */}
        </header>
      </div>
    </div>
  );
}

export default Navbar;
