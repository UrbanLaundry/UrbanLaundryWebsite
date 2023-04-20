import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import billboard from "@/assets/billboard.webp";
import LOGO from "@/assets/LOGO.png";
import { useRouter } from "next/router";
import Link from "next/link";
import laundry_machine from "@/assets/laundry_machine.jpg";

const Card = ({ title, description, icon }) => {
  return (
    <div class="max-w-sm p-6 min-h-[10rem] bg-white border border-gray-200 rounded-lg rounded-br-[30%] shadow flex items-center ">
      {/* <Image
        class="w-10 h-10 mb-2 fill-white-500 bg-sky-300 rounded-full p-2 "
        src={icon}
        alt={title}
      /> */}
      {/* <a href="#">
        <h5 class="capitalize mb-2 text-sm md:text-xl font-semibold tracking-tight text-gray-900 ">
          {title.toLowerCase()}
        </h5>
      </a> */}
      <p class="mb-3 text-[8px] md:text-xs font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

const ProcessingInstruction = [
  {
    title: "ZERO RISK, LOW INVESTMENT, HIGH RETURN BUSINESS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: laundry_machine,
  },
  {
    title: "14-23 LAKHS INVESTMENT WITH 30-40% RETURN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: laundry_machine,
  },
  {
    title: "BREAKEVEN IN 12-18 MONTHS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: laundry_machine,
  },
  {
    title: "PROFITABLE AND RECURRING INCOME BUSINESS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: laundry_machine,
  },
];

const advantages = [
  {
    title: "WE WILL HELP YOU SETUP BUSINESS END TO END",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: laundry_machine,
  },
  {
    title: "WE DO DIGITAL MARKETING FOR YOU",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: laundry_machine,
  },
  {
    title: "ZERO ROYALTY FOR FIRST 6 MONTHS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: laundry_machine,
  },
  {
    title: "LOWEST FRANCHISE AND ROYALTY FEES IN MARKET ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: laundry_machine,
  },
];

export default function Franchise() {
  const [Name, setName] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Phone, setPhone] = useState(null);
  const [Interest, setInterest] = useState(null);
  const [BtnActive, setBtnActive] = useState(false);

  //write a usestate that will be used to check iif any state is empty  then BtnActive will be false
  useEffect(() => {
    const hasAllValues = Name && Email && Phone && Interest;

    setBtnActive(hasAllValues);
  }, [Name, Email, Phone, Interest]);
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
    <main className=" -mt-6 ">
      <div className="h-[70vh] w-full">skksjsjksjkjksjk</div>
      <div className="relative w-full  ">
        {/* <Image
          className="-mt-[70vh] h-full w-full object-cover"
          src={billboard}
          alt="billboard"
        ></Image> */}

        <div className="w-full ">
          <div className="flex justify-center items-center z-10 ">
            <div className="w-screen">
              <div className="  mx-auto grid place-items-center bg-gradient-to-b from-transparent to-gray-900">
                <h2 className="text-center text-lime-300 text-4xl">
                  START A LAUNDRY AND DRY CLEANING
                </h2>
                <p className="mt-4 text-center font-bold text-4xl text-white">
                  FRANCHISE IN BENGALURU
                </p>
                <button className="mt-4 rounded-full max-w-max">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* write a dive with blue to transparent gradient up to down in tailwind  */}
      {/* contact from */}
      <div className="mx-auto max-w-lg  ">
        <form
          action=""
          class="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white "
        >
          <h2 className="text-center text-blue-900 font-bold text-lg">
            Please fill this form for our team to reach out to you and provide
            more details
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
              "block w-full rounded-lg  px-5 py-2 text-sm font-medium border-transparent text-white " +
              (BtnActive ? "bg-indigo-600" : "bg-gray-400")
            }
          >
            Submit to get a callback
          </button>
        </form>

        <p className="text-center py-5 text-blue-900">or</p>
        <div className="flex justify-center">
          <a
            href="tel:+916362591993"
            class="  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-800"
          >
            Call Us
          </a>
        </div>
      </div>
    </main>
  );
}
