import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import billboard from "@/assets/billboard.webp";
import LOGO from "@/assets/LOGO.png";
import { useRouter } from "next/router";

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
    <main>
      <section class=" text-white">
        <div class="mx-auto max-w-screen-xl px-4 flex min-h-[70vh] md:min-h-[50vh]  items-center ">
          <div class="mx-auto  max-w-3xl text-center">
            <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Start A Laundry And Drycleaning Franchise In Bengaluru
            </h1>

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
      <section className="max-w-screen-lg mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 p-8">
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
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-white">
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
      {/* 
      <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
--> */}

      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8  ">
        <div class="mx-auto max-w-lg">
          <h2 className="text-center text-lg font-medium">
            Please fill this form for our team to reach out to you and provide
            more details
          </h2>
          <form
            action=""
            class="border-2 border-gray-600 mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <div>
              <label for="text" class="my-4">
                name
              </label>

              <div class="">
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  class="w-full rounded-lg border-gray-200 bg-transparent p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter name"
                />
              </div>
            </div>

            <div>
              <label for="phone" class="my-4">
                phone
              </label>

              <div class="">
                <input
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
                  class="w-full rounded-lg border-gray-200 bg-transparent p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter phone"
                />
              </div>
            </div>

            <div>
              <label for="email" class="my-4">
                Email
              </label>

              <div class="">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  class="w-full rounded-lg border-gray-200 bg-transparent p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div>
              <label for="text" class="my-4">
                Area of Interest
              </label>

              <div class="">
                <textarea
                  type="text"
                  onChange={(e) => setInterest(e.target.value)}
                  class="w-full rounded-lg border-gray-200 bg-transparent p-4 pr-12 text-sm shadow-sm"
                  placeholder="area of interest"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={!BtnActive}
              onClick={handleSubmit}
              class={
                "block w-full rounded-lg  px-5 py-3 text-sm font-medium text-white " +
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
    </main>
  );
}
