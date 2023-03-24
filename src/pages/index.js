import Image from "next/image";
import { Inter } from "next/font/google";

import wash from "@/assets/man_washing_machine.webp";
import { motion } from "framer-motion";

import ladyWithCloths1 from "@/assets/lady_with_cloths_1.webp";
import ladyWithCloths4 from "@/assets/lady_with_cloths_4.webp";

import woolmark from "@/assets/woolmark.webp";
import hygenicStamp from "@/assets/hygenic_stamp.webp";
import expert from "@/assets/washing_shop.svg";
import thinking_man from "@/assets/thinking_man.webp";
import billboard from "@/assets/billboard.webp";
import handshake from "@/assets/handshake.webp";
import washing_machine_hub from "@/assets/washing_machine_hub.webp";

import wave2 from "@/assets/wave_2.webp";

import Lottie from "lottie-react";
import areaMap from "@/assets/area_map.json";
import shampooImg from "@/assets/detergent.svg";

import phoneIcon from "@/assets/icons/phone.svg";
import emailIcon from "@/assets/icons/email.svg";
import mapIcon from "@/assets/icons/map.svg";

import landingText from "@/assets/icons/landing_page_text.png";

import Steps from "@/Components/Steps";
import Counter from "@/Components/Counter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <div className="">
          <main className="">
            <section className=" grid grid-cols-1 md:grid-cols-2 mt-20" id="">
              <div className="">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="pt-20 px-20 md:p-32"
                >
                  <Image
                    className=" self-center w-full"
                    src={landingText}
                    alt="EXPERIENCE EFFORTLESS AND PRISTINE CLEAN CLOTHES WITH URBAN LAUNDRY"
                    srcSet=""
                  />
                </motion.div>
              </div>
              <div className="px-8 pt-8 grid place-items-center md:p-16 ">
                <Image className="w-1/2 md:w-1/2" src={wash} alt="" />
              </div>
            </section>
            <Image
              src={wave2}
              className="-mt-[5rem] md:-mt-[200px]"
              alt=""
              priority
            />
            <section
              id="Services"
              className="grid grid-cols-1 md:grid-cols-3 mt-10 md:mt-44 border-t-8 border-purple-500"
            >
              <div className="h-[30vh]  relative    md:h-[80vh] col-span-2 border-b-8 md:border-b-0 md:border-r-8 border-purple-600 ">
                <Image
                  className="top-0 absolute h-full w-full object-cover"
                  src={washing_machine_hub}
                  alt="washing machine app"
                />
                <div className=" absolute z-10 w-full h-full bg-gradient-to-b from-transparent to-black flex flex-col justify-end p-12 ">
                  <h2 className=" h2 text-2xl md:text-5xl gradient_text">
                    Get Spotless
                  </h2>

                  <p className=" text-green-400 text-sm md:text-2xl">
                    and pressed clothes with just one call
                  </p>
                </div>
              </div>

              <div className="p-12 flex flex-col justify-start">
                <div className="gradient_text">
                  <p className=" text-yellow-400 text-2xl text-start font-medium">
                    SPECIALIZED
                  </p>
                  <p className="text-yellow-400 text-5xl text-start font-light">
                    SERVICES
                  </p>
                </div>

                <p className="mt-4 text-start">
                  • Dry Cleaning
                  <br />
                  • Laundry
                  <br />
                  • Steam Iron
                  <br />
                  <br />
                  We are a one-stop solution for all your laundry needs. Our
                  services range from basic laundry to steam ironing, shoe
                  cleaning and even dry cleaning. Our commitment to providing
                  high-quality services has made us a trusted name in the
                  industry.
                </p>
              </div>
            </section>
            <div className="h-2 bg-purple-700"></div>
            <section className="p-12 md:p-16 flex flex-col">
              <h2 className=" h2 text-start text-3xl font-semibold">
                At Urban Laundry,
              </h2>
              <div className="text-start text-xs mt-2">
                <h3 className="h3text-xl">
                  we offer top-notch cleaning services to keep your belongings
                  looking their best.{" "}
                </h3>
                <br />
                We are dedicated to providing you with the highest quality
                laundry and cleaning services. With our commitment to
                excellence, you can trust us to handle all of your laundry needs
                with care and precision. Our team of experienced professionals
                is equipped with the latest technology and techniques to ensure
                that your items are handled with the utmost care and attention.
                Whether you need a quick refresh or a deep clean, we&apos;ve got
                you covered. We believe that our customers deserve only the
                best, and we strive to deliver just that with every service we
                provide. So why wait? Let us take care of your laundry needs
                todav!
                <br />
                <br />
                <br />
                <strong className=" text-lime-500">
                  Laundry Service :
                </strong>{" "}
                Our laundry service is desianed to provide vou with a
                hassle-free and convenient solution for all vour evervdav
                clothes. We use the latest technology and high-quality
                detergents to ensure that your clothes are cleaned thoroughly
                and are returned to you fresh and crisp.
                <br />
                <br />
                <strong className=" text-lime-500">Dry Cleaning:</strong> Our
                dry cleaning service is perfect for delicate fabrics that
                require special care. Our team of experts uses a combination of
                the latest technology and high-quality cleaning products to
                clean your clothes, ensuring that they are returned to you in
                pristine condition.
                <br />
                <br />
                <strong className=" text-lime-500">Steam Ironing:</strong> Our
                steam ironing service is perfect for those who want their
                clothes to look as good as new. Our team of experts use the
                latest steam ironing technology to remove all creases and
                wrinkles from your clothes, leaving them looking freshly
                pressed.
                <br />
                <br />
                <br />
                We believe in providing our customers with the best possible
                experience. Our team of experts is trained to handle all types
                of clothes and fabrics, ensuring that you receive the highest
                quality of services every time. So, whether you need laundry
                services for your everyday clothes, steam ironing for a special
                occasion, shoe cleaning for your favorite pair of shoes, or dry
                cleaning for your delicate fabrics, we&apos;ve got you covered.
                Visit us today to experience the quality of our services for
                yourself!
              </div>
            </section>
            <div className="h-2 bg-purple-700"></div>
            <section
              id="Pricing"
              className="pt-12 px-12 text-start grid grid-cols-1 md:grid-cols-2 border-b-8 border-purple-600"
            >
              <div className="py-4">
                <p className="text-yellow-200 text-xl">SPECIALIZED</p>
                <p className="text-yellow-300 text-4xl">PRICING</p>
                <br />
                <p className="text-white text-4xl md:text-6xl">AFFORDABLE</p>
                <div>luxury at its finest - enjoy top-notch</div>
                <div>laundry services for only</div>
                <div className="flex items-center">
                  <h2 className="h2 text-5xl md:text-6xl py-2">
                    <Counter from={0} to={80} />
                  </h2>
                </div>
                <p> with our wash and fold option </p>
                <button className="mt-12 rounded-full">SCHEDULE PICK UP</button>
              </div>
              <Image
                className="relative self-end"
                src={ladyWithCloths4}
                alt=""
              />
            </section>
            <section
              className=" pt-20 flex flex-col-reverse md:grid md:grid-cols-2 w-full place-items-center"
              id="about"
            >
              <div className=" relative w-full h-full min-h-[45vh]">
                <Image
                  className="z-10 absolute px-12 md:px-12 py-0  -bottom-20 md:-bottom-28"
                  src={ladyWithCloths1}
                  alt=""
                />
              </div>

              <div className=" text-left p-8 pb-8">
                <h2 className="h2 text-2xl md:text-4xl">
                  About Our Effortless
                  <br /> Laundry Services
                </h2>
                <br />
                <h3 className="h3"> Our Story!</h3>
                <br />

                <p className="text-xs">
                  {/* Urban Laundry was founded with the goal of providing a
                  hassle-free laundry experience to the people of the city. We
                  understand that evervone is busy in their own lives and
                  sometimes they don't have the time to do their laundry. This
                  is where we come in. Our mission is to provide a convenient
                  and efficient laundry service that makes the lives of our
                  customers easier. We understand that every customer is unique
                  and has their own preferences, which is why we offer a wide
                  range of services to suit everyone's needs. Whether you need a
                  one-time laundry service, or a weekly laundry pick-up and
                  delivery service, we have got you covered. So why wait? Book
                  your laundry or dry cleaning service today and experience the
                  best in quality and convenience. We look forward to serving
                  you soon! */}
                  Our founder&apos;s wife had a frustrating experience with a
                  local dry cleaning store, where her saree was held for almost
                  10 days and the timeline was extended by another week. This
                  sparked a fire within our founder, a man of perfection and
                  former CEO of Nazran cements, Saudi, to research and dive deep
                  into the laundry and dry cleaning industry. His meticulous
                  research revealed that less than 1% of dry cleaning machinery
                  was being utilized, with harsh chemicals not approved for
                  laundry and dry cleaning use. Further investigation showed
                  that many dry cleaning shops lacked proper processes and
                  quality chemicals.
                  <br />
                  <br />
                  Determined to bring change to the industry, our founder shared
                  his vision with his family and launched The Urban Laundry in
                  Rajajinagar/Bengaluru. He implemented a process that included
                  quality checks at every step and optimal machinery utilization
                  by quickly training a workforce without prior laundry
                  experience. Our customers quickly fell in love with our speed
                  and quality, and we became the industry&apos;s first to offer
                  laundry and dry cleaning in just two days for no extra charge,
                  setting us apart from other players in the market.
                  <br />
                  <br />
                  Our passion for quality and speed quickly gained attention
                  across Bangalore, with customers coming from all areas of the
                  city. Many were so impressed that they requested we expand to
                  nearby areas to help their friends and family experience our
                  top-notch services. Today, we continue to be driven by our
                  mission to revolutionize the laundry industry by offering
                  superior processes and great quality with lightning speed.
                  <br />
                  <br />
                  Sincerely,
                  <br />
                  <br />
                  The Urban Laundry Team.
                </p>
              </div>
            </section>
            <div className=" text-center w-full  h-28  ">
              <div className="absolute z-20 bg-black w-full px-0 md:px-12 py-6 md:py-8  text-base md:text-4xl  tracking-[0.5rem] md:tracking-[1.3rem]">
                EXPERIENCE THE ULTIMATE CLEAN
              </div>
            </div>
            <section className="px-12">
              <div className="pt-12">
                <p className="text-[#a6c657] text-3xl md:text-6xl text-right ">
                  A STANDARD
                </p>

                <p className="text-white text-lg md:text-3xl text-right ">
                  {" "}
                  OF PERFECTION IN EVERY LOAD
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 place-items-end pt-12">
                <div className="p-2 md:p-16">
                  <Image
                    className="w-full aspect-square"
                    src={woolmark}
                    alt=""
                  />
                  <div className="text-[0.5rem] md:text-xs  text-center pt-4">
                    WOOL-SAFE MACHINERY GUARANTEED
                  </div>
                </div>
                <div className="p-2 md:p-16">
                  <Image
                    className="w-full aspect-square"
                    src={shampooImg}
                    alt=""
                  />
                  <div className="text-[0.5rem] md:text-xs  text-center pt-4">
                    {" "}
                    GERMAN EXPERTISE FOR AN ECO-FRIENDLY CLEAN
                  </div>
                </div>

                <div className="p-2 md:p-16">
                  <Image
                    className="w-full aspect-square"
                    src={hygenicStamp}
                    alt=""
                  />
                  <div className="text-[0.5rem] md:text-xs  text-center pt-4">
                    HOHENSTEIN APPROVED EQUIPMENT
                  </div>
                </div>
                <div className="p-2 md:p-16">
                  <Image
                    className="w-full aspect-square rounded-2xl"
                    src={expert}
                    alt=""
                  />
                  <div className="text-[0.5rem] md:text-xs  text-center pt-4">
                    A TEAM OF EXPERIENCED PROFESSIONALS
                  </div>
                </div>
              </div>
            </section>
            <div className="mt-4 h-2 bg-purple-500"></div>
            <section style={{ padding: "50px" }}>
              <h2 className="gradient_text text-left text-xl md:text-6xl font-medium">
                A METHODICAL
              </h2>
              <p className="gradient_text text-left pb-12 text-sm md:text-3xl">
                APPROACH TO IMPECCABLE QUALITY
              </p>
              <Steps />
            </section>
            <div className="mt-5 h-2 bg-purple-600"></div>

            <div className=" h-2 bg-purple-700"></div>
            <section
              className="grid grid-cols-1 md:grid-cols-2 border-b-8 border-purple-700"
              id="Partner with Us"
            >
              <div className="">
                <Image className="aspect-[1368/960]" src={billboard} alt="" />
              </div>
              <div className="text-left border-l-[5px] border-purple-700 flex flex-col p-12 ">
                <div className="gradient_text">
                  <p className="text-yellow-500 text-3xl text-left font-bold">
                    GET
                  </p>
                  <p className="text-5xl to-yellow-500 text-start">FRANCHISE</p>
                </div>
                <h3 className="h3 text-3xl my-8 ">
                  {" "}
                  Attention all entrepreneurs!
                </h3>
                <p style={{ fontSize: "0.7em", paddingRight: "50px" }}>
                  Are you looking for a low-cost, high-return business
                  opportunity that can offer you flexible hours and a great
                  work-life balance? Look no further! Our company is now
                  offering franchises to those who are ready to join the booming
                  laundry industry. <br />
                  <br /> With our proven business model and top-of-the-line
                  equipment, you&apos;ll be able to provide top-notch laundry
                  services to your community while building a successful
                  business. Our team will provide you with the training,
                  support, and resources you need to make your franchise a
                  success, including ongoing marketing and advertising support.
                </p>
              </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 text-start">
              <div className="pl-8 pt-8 pb-8 md:py-20 md:pl-20 border-l-4 border-purple-700 flex flex-col">
                <div className="gradient_text">
                  <p className=" to-yellow-500 text-3xl text-start font-bold">
                    ABOUT
                  </p>
                  <p className="text-3xl text-yellow-500 text-start">
                    FRANCHISE
                  </p>
                </div>
                <h3 className="h3 text-base font-semibold py-4">
                  {" "}
                  We believe in building trust with our franchisees from the
                  very beginning.
                </h3>
                <p className="text-xs pr-4">
                  As a franchisee, you&apos;ll become part of a trusted and
                  established brand that has been providing quality laundry
                  services for years. Our commitment to your success is evident
                  in everything we do, from the top-of-the-line equipment and
                  supplies we provide to the ongoing support and training we
                  offer.
                  <br />
                  <br />
                  Our franchisees are more than just business partners -
                  they&apos;re an integral part of our company and our
                  community. We believe in fostering a culture of collaboration
                  and support, and we&apos;re always here to help you with any
                  challenges you may face. Whether you need advice on running
                  your business, help with marketing, or support with managing
                  your finances, we&apos;re here to help.
                </p>

                <button className="rounded-full mt-5 max-w-max">
                  DOWNLOAD BRAND BOOK
                </button>
              </div>
              <div className=" self-end flex justify-end md:mr-24">
                <Image
                  src={thinking_man}
                  className="px-20 pt-20 md:pt-10 md:h-[70vh] justify-end"
                  alt="thinking man"
                />
              </div>
            </section>
            <section className="">
              <div className="w-screen absolute h-screen pt-2 md:pt-12 flex flex-col items-center">
                <div>
                  <button className="mt-4 rounded-full text-xs md:text-base">
                    JOIN US
                  </button>
                </div>{" "}
                <div className="gradient_text sinhala_font pt-2 md:pt-10 text-xs md:text-2xl mt-0 md:mt-2 text-center">
                  Join the trusted team <br /> at Urban Laundry and build a{" "}
                  <br /> successful Laundry franchise
                </div>
              </div>
              <Image src={handshake} className="" alt="handshake" />
            </section>
            <section
              id="contact"
              className="grid grid-cols-1 md:grid-cols-2 place-items-start pt-12 p-12 "
            >
              <div className="pt-12 flex flex-col justify-center text-start h-full">
                <h2 className="h2 text-xl md:text-5xl mb-10 md:mb-20">
                  {" "}
                  LOCATE US
                </h2>
                <div>
                  <div className="flex gap-3 justify-start items-start py-2">
                    <Image className="w-6" src={phoneIcon} alt="" srcSet="" />
                    <a
                      className="text-xs md:text-base"
                      href="tel:+916362591993"
                    >
                      +91 6362 591 993{" "}
                    </a>
                  </div>
                  <div className="flex gap-3 justify-start items-start py-2">
                    <Image className="w-6" src={emailIcon} alt="" srcSet="" />
                    <a
                      className="text-xs md:text-base"
                      href="mailto:info.theurbanlaundryblr@gmail.com"
                    >
                      info.theurbanlaundryblr@gmail.com
                    </a>
                  </div>
                  <div className="flex gap-3 justify-start items-start py-2">
                    <Image className="w-6" src={mapIcon} alt="" srcSet="" />
                    <a
                      className="text-xs md:text-base"
                      href="https://www.google.com/maps/place/The+Urban+Laundry/@13.003984,77.5499778,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae3d954a7b90c3:0x4551aba1ac6084c3!8m2!3d13.0039788!4d77.5521665"
                    >
                      {" "}
                      # 17/388/17, 19th H Road,Ist N Block, Rajajinagar,
                      Bengaluru, Karnataka 560010
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full items-center justify-center">
                <Lottie
                  className="aspect-auto"
                  animationData={areaMap}
                  loop={true}
                />
                <a href="https://www.google.com/maps/place/The+Urban+Laundry/@13.003984,77.5499778,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae3d954a7b90c3:0x4551aba1ac6084c3!8m2!3d13.0039788!4d77.5521665">
                  <button className="mt-5 rounded-full">map</button>
                </a>
              </div>
            </section>
          </main>
        </div>
      </main>
    </>
  );
}
