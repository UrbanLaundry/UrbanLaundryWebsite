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
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg rounded-br-[30%] shadow ">
      {/* <Image
        class="w-10 h-10 mb-2 fill-white-500 bg-sky-300 rounded-full p-2 "
        src={icon}
        alt={title}
      /> */}
      <a href="#">
        <h5 class="capitalize mb-2 text-sm md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title.toLowerCase()}
        </h5>
      </a>
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
    <main className="absolute top-0 left-0 w-screen min-h-screen z-40  ">
      <div className="relative w-full h-screen bg-sky-100 pt-20 ">
        <svg
          id="svg"
          viewBox="0 0 1440 590"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,600 C 0,600 0,300 0,300 C 54.865979381443296,294.99576583210603 109.73195876288659,289.9915316642121 169,278 C 228.2680412371134,266.0084683357879 291.9381443298969,247.02963917525767 360,254 C 428.0618556701031,260.97036082474233 500.51546391752584,293.88991163475697 562,330 C 623.4845360824742,366.11008836524303 674,405.4107142857143 733,409 C 792,412.5892857142857 859.4845360824744,380.46723122238586 920,354 C 980.5154639175256,327.53276877761414 1034.061855670103,306.7203608247423 1092,301 C 1149.938144329897,295.2796391752577 1212.2680412371135,304.65132547864505 1271,307 C 1329.7319587628865,309.34867452135495 1384.8659793814431,304.6743372606775 1440,300 C 1440,300 1440,600 1440,600 Z"
            stroke="none"
            stroke-width="0"
            fill="white"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>

        <div className="h-full bg-white p-4 ">
          <div className="max-w-screen-lg  mx-auto min-w-1/2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
              {ProcessingInstruction.map((item, key) => {
                return (
                  <Card
                    key={key}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                  />
                );
              })}
            </div>

            <h3 className="md:text-2xl font-bold text-blue-900 text-center py-4 md:py-8  ">
              ADVANTAGES IN PARTNERING WITH US
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
              {advantages.map((item, key) => {
                return (
                  <Card
                    key={key}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                  />
                );
              })}
            </div>

            {/* contact from */}
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8  ">
              <div class="mx-auto max-w-lg ">
                <form
                  action=""
                  class="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white "
                >
                  <h2 className="text-center text-blue-900 font-bold text-lg">
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
            </div>
          </div>
        </div>

        <div className="absolute top-0  h-full w-screen">
          <div className="max-w-screen-md  mx-auto">
            <div className=" relative p-5 pt-8 md:pt-20 flex flex-col items-center justify-center   ">
              <p className="text-[8px] md:text-base text-center text-blue-900">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae
              </p>
              <h2 className="md:text-4xl font-black md:py-5 text-center text-blue-900">
                Start A Laundry And Drycleaning Franchise In Bengaluru
              </h2>
              <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-px md:py-2 px-4 text-[8px] md:text-base rounded max-w-max">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );

  // return (
  //   <main className="absolute top-0 left-0 w-screen min-h-screen bg-gray-800 z-40 ">
  //     <div className="relative">
  //       <Image
  //         width={1600}
  //         height={900}
  //         src={laundry_machine}
  //         className="absolute inset-0 object-cover w-full h-full opacity-40 z-[41]"
  //         alt=""
  //       />
  //       <div className="absolute bg-gradient-to-b from-transparent to-black w-full h-full z-[42]"></div>
  //       <div className="relative bg-opacity-75 bg-deep-purple-accent-700 z-[43]">
  //         <svg
  //           className="absolute z-10 inset-x-0 bottom-0 fill-white border-white"
  //           id="svg"
  //           viewBox="0 0 1440 490"
  //           xmlns="http://www.w3.org/2000/svg"
  //           class="transition duration-300 ease-in-out delay-150"
  //         >
  //           <path
  //             d="M 0,500 C 0,500 0,250 0,250 C 86.64114832535887,227.5693779904306 173.28229665071774,205.13875598086125 260,226 C 346.71770334928226,246.86124401913875 433.51196172248797,311.0143540669857 534,332 C 634.488038277512,352.9856459330143 748.6698564593302,330.8038277511962 843,286 C 937.3301435406698,241.19617224880383 1011.8086124401914,173.77033492822966 1108,164 C 1204.1913875598086,154.22966507177034 1322.0956937799042,202.11483253588517 1440,250 C 1440,250 1440,500 1440,500 Z"
  //             stroke="none"
  //             stroke-width="0"
  //             fill-opacity="1"
  //             class="transition-all duration-300 ease-in-out delay-150 path-0"
  //           ></path>
  //         </svg>

  //         <div className="z-20 relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  //           <div className="flex flex-col items-center justify-between xl:flex-row">
  //             <div className="w-full max-w-2xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
  //               <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
  //                 Start A Laundry And Drycleaning Franchise In Bengaluru
  //               </h1>
  //               <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
  //                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  //                 accusantium doloremque laudan, totam rem aperiam, eaque ipsa
  //                 quae.
  //               </p>
  //               <Link
  //                 href="/"
  //                 aria-label=""
  //                 className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
  //               >
  //                 Learn more
  //                 <svg className="inline-block w-3 ml-2 " viewBox="0 0 12 12">
  //                   <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
  //                 </svg>
  //               </Link>
  //             </div>
  //             <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8  ">
  //               <div class="mx-auto max-w-lg ">
  //                 <form
  //                   action=""
  //                   class="border-2 border-gray-600 mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white "
  //                 >
  //                   <h2 className="text-center text-black text-lg font-medium">
  //                     Please fill this form for our team to reach out to you and
  //                     provide more details
  //                   </h2>

  //                   <input
  //                     id="name"
  //                     type="name"
  //                     onChange={(e) => setName(e.target.value)}
  //                     class="w-full rounded-lg border-gray-200 bg-transparent p-4 pr-12 text-sm shadow-sm  text-black"
  //                     placeholder="Enter name"
  //                   />

  //                   <input
  //                     id="phone"
  //                     type="text"
  //                     onChange={(e) => setPhone(e.target.value)}
  //                     class="w-full rounded-lg border-gray-200 bg-transparent p-4 pr-12 text-sm shadow-sm  text-black"
  //                     placeholder="Enter phone"
  //                   />

  //                   <input
  //                     type="email"
  //                     onChange={(e) => setEmail(e.target.value)}
  //                     class="w-full rounded-lg border-gray-200 bg-transparent p-4 pr-12 text-sm shadow-sm text-black"
  //                     placeholder="Enter email"
  //                   />

  //                   <textarea
  //                     type="text"
  //                     onChange={(e) => setInterest(e.target.value)}
  //                     class="w-full rounded-lg border-gray-200 bg-transparent p-4 pr-12 text-sm shadow-sm  text-black"
  //                     placeholder="area of interest"
  //                   />

  //                   <button
  //                     type="submit"
  //                     disabled={!BtnActive}
  //                     onClick={handleSubmit}
  //                     class={
  //                       "block w-full rounded-lg  px-5 py-2 text-sm font-medium text-white " +
  //                       (BtnActive ? "bg-indigo-600" : "bg-gray-400")
  //                     }
  //                   >
  //                     Submit to get a callback
  //                   </button>
  //                 </form>

  //                 <p className="text-center py-5">or</p>
  //                 <div className="flex justify-center">
  //                   <a
  //                     href="tel:+916362591993"
  //                     class="  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-800"
  //                   >
  //                     Call Us
  //                   </a>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="relative z-20 bg-white">
  //       <section class=" ">
  //         <div class="mx-auto max-w-screen-xl px-4 flex min-h-[70vh] md:min-h-[50vh]  items-center ">
  //           <div class="mx-auto  max-w-3xl text-center">
  //             <div class="flex flex-wrap justify-center gap-4">
  //               <a
  //                 class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
  //                 href="/get-started"
  //               >
  //                 Get A Callback
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //       <section className=" max-w-screen-lg mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 p-8">
  //         <a
  //           href="#"
  //           class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-gray-300"
  //         >
  //           <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

  //           <div class="sm:flex sm:justify-between sm:gap-4">
  //             <div>
  //               <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
  //                 ZERO RISK, LOW INVESTMENT, HIGH RETURN BUSINESS
  //               </h3>
  //             </div>
  //           </div>
  //         </a>

  //         <a
  //           href="#"
  //           class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-gray-300"
  //         >
  //           <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

  //           <div class="sm:flex sm:justify-between sm:gap-4">
  //             <div>
  //               <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
  //                 14-23 LAKHS INVESTMENT WITH 30-40% RETURN
  //               </h3>
  //             </div>
  //           </div>
  //         </a>

  //         <a
  //           href="#"
  //           class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-gray-300"
  //         >
  //           <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

  //           <div class="sm:flex sm:justify-between sm:gap-4">
  //             <div>
  //               <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
  //                 BREAKEVEN IN 12-18 MONTHS
  //               </h3>
  //             </div>
  //           </div>
  //         </a>

  //         <a
  //           href="#"
  //           class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-gray-300"
  //         >
  //           <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

  //           <div class="sm:flex sm:justify-between sm:gap-4">
  //             <div>
  //               <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
  //                 PROFITABLE AND RECURRING INCOME BUSINESS
  //               </h3>
  //             </div>
  //           </div>
  //         </a>
  //       </section>
  //       <section class="">
  //         <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
  //           <div class="mx-auto max-w-screen-xl text-center">
  //             <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-black">
  //               ADVANTAGES IN PARTNERING WITH US
  //             </h2>
  //             <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 p-8">
  //               <a
  //                 href="#"
  //                 class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-gray-300"
  //               >
  //                 <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

  //                 <div class="sm:flex sm:justify-between sm:gap-4">
  //                   <div>
  //                     <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
  //                       WE WILL HELP YOU SETUP BUSINESS END TO END
  //                     </h3>
  //                   </div>
  //                 </div>
  //               </a>

  //               <a
  //                 href="#"
  //                 class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-gray-300"
  //               >
  //                 <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

  //                 <div class="sm:flex sm:justify-between sm:gap-4">
  //                   <div>
  //                     <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
  //                       WE DO DIGITAL MARKETING FOR YOU
  //                     </h3>
  //                   </div>
  //                 </div>
  //               </a>

  //               <a
  //                 href="#"
  //                 class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-gray-300"
  //               >
  //                 <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

  //                 <div class="sm:flex sm:justify-between sm:gap-4">
  //                   <div>
  //                     <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
  //                       ZERO ROYALTY FOR FIRST 6 MONTHS
  //                     </h3>
  //                   </div>
  //                 </div>
  //               </a>

  //               <a
  //                 href="#"
  //                 class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-gray-300"
  //               >
  //                 <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

  //                 <div class="sm:flex sm:justify-between sm:gap-4">
  //                   <div>
  //                     <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
  //                       LOWEST FRANCHISE AND ROYALTY FEES IN MARKET
  //                     </h3>
  //                   </div>
  //                 </div>
  //               </a>
  //             </div>
  //             <a
  //               href="#"
  //               class=" font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-800"
  //             >
  //               Learn More
  //             </a>
  //           </div>
  //         </div>
  //       </section>
  //     </div>

  //   </main>
  // );
}
