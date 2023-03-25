import React from "react";
import Image from "next/image";
import billboard from "@/assets/billboard.webp";

export default function Franchise() {
  return (
    <main className="">
      <section
        className="grid grid-cols-1 md:grid-cols-2 border-y-8 border-purple-700"
        id="Partner with Us"
      >
        <div className="">
          <Image className="aspect-[1368/960]" src={billboard} alt="" />
        </div>
        <div className="text-left border-l-[5px] border-purple-700 flex flex-col p-12 ">
          <div className="gradient_text">
            <p className="text-yellow-500 text-3xl text-left font-bold">GET</p>
            <p className="text-5xl to-yellow-500 text-start">FRANCHISE</p>
          </div>
          <h3 className="h3 text-3xl my-8 "> Attention all entrepreneurs!</h3>
          <p style={{ fontSize: "0.7em", paddingRight: "50px" }}>
            Are you looking for a low-cost, high-return business opportunity
            that can offer you flexible hours and a great work-life balance?
            Look no further! Our company is now offering franchises to those who
            are ready to join the booming laundry industry. <br />
            <br /> With our proven business model and top-of-the-line equipment,
            you&apos;ll be able to provide top-notch laundry services to your
            community while building a successful business. Our team will
            provide you with the training, support, and resources you need to
            make your franchise a success, including ongoing marketing and
            advertising support.
          </p>
        </div>
      </section>
      <section className="flex justify-center py-10 md:py-20">
        <div className="max-w-screen flex flex-col justify-center">
          <h3 className="text-4xl text-center py-4 md:py-4 text-gray-300 font-extrabold">
            Get Franchises in
          </h3>
          <div className="flex gap-5">
            <button>Bengaluru</button>
            <button>Hyderabad</button>
            <button>VijayWada</button>
          </div>
        </div>
      </section>
    </main>
  );
}
