import React from "react";
import step_image from "../assets/step_icon.svg";
import Image from "next/image";

const arr = [
  {
    title: "Pick Up or Store Order",
    content: "",
  },
  {
    title: "Inspection & Categorizing",
    content: "Examining for stains, damages, fabric type and color",
  },
  {
    title: "Stain Removal Treatment",
    content: "Treating based on Stain type & Dirt Cleaning wherever applicable",
  },
  {
    title: "Cleaning Process (Wet/Dry)",
    content:
      "Automatic Imported Machinery, Harmless Eco Friendly Chemicals Softener and Fragrance",
  },
  {
    title: "Quality Check (Intermediate)",
    content: "Inspecting for clean and spotless clothes",
  },
  {
    title: "Steam Ironing",
    content: "Finishing",
  },
  {
    title: "Quality Check (Final)",
    content: "Expert Scanning",
  },
  {
    title: "Packaging",
    content: "Getting the order ready",
  },
  {
    title: "Delivery or Store Pickup",
    content: "Get your Clean cloths in almost new conditions",
  },
];

export default function Steps() {
  return (
    <ol className="  border-gray-200 dark:border-gray-700 text-start grid md:grid-cols-3 ">
      {arr.map(({ title, content }, i) => {
        return (
          <li
            key={i}
            className={
              " pb-10 pl-10 relative border-l  md:border-l-0 border-slate-600 " +
              (i === arr.length - 1 ? " border-l-0 " : " md:border-t-2 ") +
              (i === 2 ? "md:border-r-2 rounded-xl " : " ") +
              (i === 3 ? "md:border-l-2 " : "") +
              (i === 5 ? "md:-rounded-xl " : "")
            }
          >
            <span className="md:-top-3  absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <div
                className={
                  "rotate-90 md:rotate-0 " +
                  (i === arr.length - 1 ? "" : " md:visible ") +
                  (i === 2 ? "md:  " : " ") +
                  (i === 3 ? "md:rotate-90 " : "") +
                  (i === 4 ? "md:rotate-180 " : "") +
                  (i === 5 ? "md:rotate-180 " : "")
                }
              >
                <Image src={step_image} alt="arrow" />
              </div>
            </span>
            <h3 className="flex items-center md:pt-6 mb-1 text-lg font-semibold text-white">
              {title}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {content}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
