import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import billboard from "@/assets/billboard.webp";
import LOGO from "@/assets/LOGO.png";
import { useRouter } from "next/router";
import Link from "next/link";
import laundry_machine from "@/assets/laundry_machine.jpg";
import wave_2 from "@/assets/wave_2.webp";

const Card = ({ title, index, count }) => {
  return (
    <div
      className={
        "h-[30vh] rounded-3xl text-center p-5 md:p-10   bg-gradient-to-br from-[#5AA785] to-[#E9FF46] col-span-3 md:col-span-2 flex justify-center items-center " +
        (index === count - 2 ? " md:col-start-2" : "")
      }
    >
      <p
        className={
          " text-gray-800 font-black capitalize  text-xs md:text-2xl  "
        }
      >
        {title}
      </p>
    </div>
  );
};

const ProcessingInstruction = [
  {
    title: "Zero risk, low inventory, high return business",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: laundry_machine,
  },
  {
    title: "14-23 lakhs investment with 30-40% return",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: laundry_machine,
  },
  {
    title: " Breakeven in 12-18 months",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: laundry_machine,
  },
  {
    title: "Profitable and recurring income business",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: laundry_machine,
  },
  {
    title: " We will help you setup business end to end",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: laundry_machine,
  },
  {
    title: " We do digital marketing for you",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: laundry_machine,
  },
  {
    title: " Zero royalty for first 6 months",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: laundry_machine,
  },
  {
    title: "Lowest franchise and royalty fees in market",
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
    <main className=" -mt-6 bg-[#151B4D]">
      {/* <div className="h-[70vh] w-full">skksjsjksjkjksjk</div> */}
      <div id="banner_low_gradient"></div>
      <div className="relative w-full  ">
        <div className="w-full bg-[#010115]">
          <div className="flex justify-center items-center z-10 ">
            <div className="w-screen ">
              <div className="  mx-auto grid place-items-center ">
                <div className="grid place-items-center py-20">
                  <h5 className="text-center font-thin text-lime-300 text-sm md:text-2xl lg:text-4xl tracking-widest">
                    START A LAUNDRY AND DRY CLEANING
                  </h5>
                  <p className="mt-4 text-center font-bold md:text-5xl lg:text-7xl text-white tracking-widest">
                    FRANCHISE TODAY
                  </p>
                  {/* <Link href={"/"}>
                    <button className="mt-4 rounded-full max-w-max text-xs md:text-base">
                      Learn More
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-gradient-to-t from-transparent via-[#010115] to-[#010115]">
          <Image
            className=" h-full w-full object-contain"
            src={wave_2}
            alt="billboard"
          ></Image>
        </div>
      </div>
      <div className="max-w-screen-lg place-items-center mx-auto p-5 mt-10">
        <h4 className="text-center font-normal text-white text-sm md:text-4xl tracking-widest py-5 md:py-24">
          ADVANTAGES IN PARTNERING WITH US
        </h4>
        <div className="grid grid-cols-6 gap-1 md:gap-5">
          {ProcessingInstruction.map((item, index) => (
            <Card
              key={index}
              index={index}
              title={item.title}
              count={ProcessingInstruction.length}
            />
          ))}
        </div>
      </div>

      {/* write a dive with blue to transparent gradient up to down in tailwind  */}
      {/* contact from */}
      <div className="mx-auto max-w-lg py-5 md:py-10  ">
        <form
          action=""
          class="m-5 mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white "
        >
          <h2 className="text-center text-slate-900 font-bold text-lg">
            Please fill this form for our team to reach out to you and provide
            more details
          </h2>

          <input
            id="name"
            type="name"
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border-gray-200 bg-gray-200 p-4 pr-12 font-bold text-sm shadow-sm  text-black"
            placeholder="Enter name"
          />

          <input
            id="phone"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-lg border-gray-200 bg-gray-200 p-4 pr-12 font-bold text-sm shadow-sm  text-black"
            placeholder="Enter phone"
          />

          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border-gray-200 bg-gray-200 p-4 pr-12 font-bold text-sm shadow-sm  text-black"
            placeholder="Enter email"
          />

          <textarea
            type="text"
            onChange={(e) => setInterest(e.target.value)}
            className="w-full rounded-lg border-gray-200 bg-gray-200 p-4 pr-12 font-bold text-sm shadow-sm  text-black"
            placeholder="area of interest"
          />

          <button
            type="submit"
            disabled={!BtnActive}
            onClick={handleSubmit}
            class={
              "block w-full rounded-lg font-bold  px-5 py-2 text-sm max-w-max mx-auto border-transparent text-white " +
              (BtnActive ? "bg-[#24006B]" : "bg-gray-400")
            }
          >
            Submit to get a callback
          </button>
        </form>

        <p className="text-center py-5 text-slate-100 font-extrabold">or</p>
        <div className="flex justify-center">
          <a
            href="tel:+916362591993"
            class="rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-black font-bold bg-white hover:bg-primary-700 focus:outline-none focus:ring-primary-800"
          >
            Call Us
          </a>
        </div>
      </div>
    </main>
  );
}
