import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import billboard from "@/assets/billboard.webp";
import LOGO from "@/assets/LOGO.png";
import { useRouter } from "next/router";
import Link from "next/link";
import laundry_machine from "@/assets/laundry_machine.jpg";

export default function Franchise() {
  const [Name, setName] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Phone, setPhone] = useState(null);
  const [Interest, setInterest] = useState(null);
  const [BtnActive, setBtnActive] = useState(false);

  //write a usestate that will be used to check iif any state is empty  then BtnActive will be false
  useEffect(() => {
    if (Name && Email && Phone && Interest) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  }, [Name, Email, Phone, Interest, BtnActive]);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Name,
      Email,
      Phone,
      Interest,
    };

    //sent email to info.theurbanlaundryblr@gmail.com
    router.push(
      "mailto:info.theurbanlaundryblr@gmail.com?subject=Franchise%20Enquiry&body=" +
        JSON.stringify(data)
    );
  };

  return (
    <main className="absolute top-0 left-0 w-screen min-h-screen bg-gray-800 z-40">
      <div className="relative h">
        <Image
          width={1600}
          height={900}
          src={laundry_machine}
          className="absolute inset-0 object-cover w-full h-full opacity-40 z-[41]"
          alt=""
        />
        <div className="absolute bg-gradient-to-b from-transparent to-slate-900 w-full h-full z-[42]"></div>
        <div className="relative bg-opacity-75 bg-deep-purple-accent-700 z-[43]">
          <svg
            className="absolute inset-x-0 bottom-0 fill-white "
            strokeWidth={0}
            viewBox="0 0 1160 163"
          >
            <path
              className="fill-white"
              fill=""
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-2xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                {/* <h2 className=" mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Start A Laundry And Drycleaning
                  <br className="hidden md:block" />
                  Franchise In Bengaluru
                </h2> */}
                <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                  Start A Laundry And Drycleaning Franchise In Bengaluru
                </h1>
                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                  quae.
                </p>
                <Link
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                >
                  Learn more
                  <svg className="inline-block w-3 ml-2 " viewBox="0 0 12 12">
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </Link>
              </div>
              <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8  ">
                <div class="mx-auto max-w-lg ">
                  <form
                    action=""
                    class="border-2 border-gray-600 mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white "
                  >
                    <h2 className="text-center text-black text-lg font-medium">
                      Please fill this form for our team to reach out to you and
                      provide more details
                    </h2>

                    <input
                      id="name"
                      type="name"
                      onChange={(e) => setName(e.target.value)}
                      class="w-full rounded-lg border-gray-200 bg-transparent p-4 pr-12 text-sm shadow-sm  text-black"
                      placeholder="Enter name"
                    />

                    <input
                      id="phone"
                      type="text"
                      onChange={(e) => setPhone(e.target.value)}
                      class="w-full rounded-lg border-gray-200 bg-transparent p-4 pr-12 text-sm shadow-sm  text-black"
                      placeholder="Enter phone"
                    />

                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      class="w-full rounded-lg border-gray-200 bg-transparent p-4 pr-12 text-sm shadow-sm text-black"
                      placeholder="Enter email"
                    />

                    <textarea
                      type="text"
                      onChange={(e) => setInterest(e.target.value)}
                      class="w-full rounded-lg border-gray-200 bg-transparent p-4 pr-12 text-sm shadow-sm  text-black"
                      placeholder="area of interest"
                    />

                    <button
                      type="submit"
                      disabled={!BtnActive}
                      onClick={handleSubmit}
                      class={
                        "block w-full rounded-lg  px-5 py-2 text-sm font-medium text-white " +
                        (BtnActive ? "bg-indigo-600" : "bg-gray-400")
                      }
                    >
                      Submit to get a callback
                    </button>
                  </form>

                  <p className="text-center py-5">or</p>
                  <div className="flex justify-center">
                    <a
                      href="tel:+916362591993"
                      class="  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-800"
                    >
                      Call Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //ikd */}
      <div className="bg-white">
        <section class=" ">
          <div class="mx-auto max-w-screen-xl px-4 flex min-h-[70vh] md:min-h-[50vh]  items-center ">
            <div class="mx-auto  max-w-3xl text-center">
              {/* <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Start A Laundry And Drycleaning Franchise In Bengaluru
            </h1> */}

              <div class="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  href="/get-started"
                >
                  Get A Callback
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className=" max-w-screen-lg mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 p-8">
          <a
            href="#"
            class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-gray-300"
          >
            <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div class="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                  ZERO RISK, LOW INVESTMENT, HIGH RETURN BUSINESS
                </h3>
              </div>
            </div>
          </a>

          <a
            href="#"
            class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-gray-300"
          >
            <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div class="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                  14-23 LAKHS INVESTMENT WITH 30-40% RETURN
                </h3>
              </div>
            </div>
          </a>

          <a
            href="#"
            class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-gray-300"
          >
            <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div class="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                  BREAKEVEN IN 12-18 MONTHS
                </h3>
              </div>
            </div>
          </a>

          <a
            href="#"
            class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-gray-300"
          >
            <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div class="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                  PROFITABLE AND RECURRING INCOME BUSINESS
                </h3>
              </div>
            </div>
          </a>
        </section>
        <section class="">
          <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-xl text-center">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-black">
                ADVANTAGES IN PARTNERING WITH US
              </h2>
              <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 p-8">
                <a
                  href="#"
                  class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-gray-300"
                >
                  <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                  <div class="sm:flex sm:justify-between sm:gap-4">
                    <div>
                      <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                        WE WILL HELP YOU SETUP BUSINESS END TO END
                      </h3>
                    </div>
                  </div>
                </a>

                <a
                  href="#"
                  class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-gray-300"
                >
                  <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                  <div class="sm:flex sm:justify-between sm:gap-4">
                    <div>
                      <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                        WE DO DIGITAL MARKETING FOR YOU
                      </h3>
                    </div>
                  </div>
                </a>

                <a
                  href="#"
                  class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-gray-300"
                >
                  <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                  <div class="sm:flex sm:justify-between sm:gap-4">
                    <div>
                      <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                        ZERO ROYALTY FOR FIRST 6 MONTHS
                      </h3>
                    </div>
                  </div>
                </a>

                <a
                  href="#"
                  class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-gray-300"
                >
                  <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                  <div class="sm:flex sm:justify-between sm:gap-4">
                    <div>
                      <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                        LOWEST FRANCHISE AND ROYALTY FEES IN MARKET
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
              <a
                href="#"
                class=" font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-800"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* 
      <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
--> */}
    </main>
  );
}
