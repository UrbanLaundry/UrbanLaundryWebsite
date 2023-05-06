import React, { useState, useEffect } from "react";
import logo from "../assets/LOGO.png";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  const [NavVisible, setNavVisible] = useState(false);
  const [NavActive, setNavActive] = useState("home");

  return (
    <nav className=" z-30 sticky [background-color:rgba(0,0,0,0.8)] backdrop-blur-sm px-2 sm:px-4 py-2.5 w-screen top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <Link onClick={() => setNavActive("home")} href={"/#"}>
            <Image className="w-40 md:w-64" src={logo} alt={"urban laundry"} />
          </Link>
        </div>
        <div className="flex md:order-md">
          <button
            onClick={() => {
              setNavVisible(!NavVisible);
            }}
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={
            NavVisible
              ? "display absolute left-0  [background-color:rgba(0,0,0,0.9)] backdrop-blur-sm w-screen top-[4.2rem] border-b border-gray-200 md:flex md:w-auto md:order-1"
              : "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          }
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4   rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            <li>
              <Link
                onClick={() => setNavActive("home")}
                href={"/#"}
                className="block py-2 pl-3 pr-4  rounded"
                aria-current="page"
              >
                <span
                  className={
                    NavActive.match("home")
                      ? "text-white  font-bold border-b"
                      : "text-slate-300"
                  }
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setNavActive("about")}
                href="/#about"
                className="block py-2 pl-3 pr-4  rounded "
              >
                <span
                  className={
                    NavActive.match("about")
                      ? "text-white  font-bold border-b"
                      : "text-slate-300"
                  }
                >
                  {" "}
                  About Us
                </span>
              </Link>
            </li>
            {/* <li>
              <Link
                onClick={() => setNavActive("Pricing")}
                href="/#Pricing"
                className="block py-2 pl-3 pr-4 rounded "
              >
                <span
                  className={
                    NavActive.match("Pricing")
                ? "text-white  font-bold border-b"
                      : "text-slate-300"
                  }
                >
                  {" "}
                  Pricing
                </span>
              </Link>
            </li> */}
            <li>
              <Link
                onClick={() => setNavActive("Partner with Us")}
                href="/#Partner with Us"
                className="block py-2 pl-3 pr-4 "
              >
                <span
                  className={
                    NavActive.match("Partner with Us")
                      ? "text-white  font-bold border-b"
                      : "text-slate-300"
                  }
                >
                  Partner with Us
                </span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setNavActive("blog")}
                href="/blog"
                className="block py-2 pl-3 pr-4 "
              >
                <span
                  className={
                    NavActive.match("blog")
                      ? "text-white  font-bold border-b"
                      : "text-slate-300"
                  }
                >
                  Blog
                </span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setNavActive("contact")}
                href="/#contact"
                className="block py-2 pl-3 pr-4 "
              >
                <span
                  className={
                    NavActive.match("contact")
                      ? "text-white  font-bold border-b"
                      : "text-slate-300"
                  }
                >
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
