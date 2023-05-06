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
import MetaHead from "@/Components/MetaHead";
import procedure from "@/assets/Procedure.png";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <MetaHead />
        <div className="">
          <main className="">
            <section className=" grid grid-cols-1 md:grid-cols-2" id="">
              <div className="">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="p-10 pt-12 md:p-12 lg:p-16 xl:p-28 flex justify-center "
                >
                  {/* <Image
                    className="self-center w-full"
                    src={landingText}
                    alt="EXPERIENCE EFFORTLESS AND PRISTINE CLEAN CLOTHES WITH URBAN LAUNDRY"
                    srcSet=""
                  /> */}
                  <h2>
                    <p className="text-xs md:text-sm lg:text-base   bg-gradient-to-br from-[#FBFF1D] to-[#E9FF46] bg-clip-text text-transparent tracking-widest ">
                      {" "}
                      <strong className="font-bold bg-gradient-to-br from-[#FBFF1D] to-[#E9FF46] bg-clip-text text-transparent tracking-widest ">
                        EXPERIENCE
                      </strong>{" "}
                      EFFORTLESS AND
                    </p>
                    <p className="text-xs md:text-sm lg:text-base  bg-gradient-to-b from-[#B8E66E] to-[#9CDC81] bg-clip-text text-transparent tracking-widest pt-1">
                      {" "}
                      PRISTINE CLEAN CLOTHES WITH
                    </p>
                    <p className="pt-2 text-3xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-b from-[#72C88E] to-[#37AE8E] bg-clip-text text-transparent md:pb-4 mb-4 md:mb-4 underline decoration-2 underline-offset-4 md:underline-offset-[1rem] decoration-[#ABA63B]">
                      {" "}
                      URBAN LAUNDRY
                    </p>
                    <p className="text-xs md:text-base lg:text-lg xl:text-xl h3  md:mr-12">
                      The One-Stop Solution For Dry Cleaning, Laundry, and Steam
                      Iron Services
                    </p>
                  </h2>
                </motion.div>
              </div>
              <div className="px-8 pt-8 grid place-items-center md:p-12 lg:p-16 ">
                <Image className="w-1/2 md:w-1/2" src={wash} alt="" />
              </div>
            </section>
            <Image
              src={wave2}
              className="-mt-[5rem] md:-mt-32 lg:-mt-44 xl:-mt-[230px]"
              alt=""
              priority
            />
            <section
              id="Services"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-44 border-t-8 border-purple-500"
            >
              <div className="h-[30vh]  relative    md:h-[80vh] lg:col-span-2 border-b-8 md:border-b-0 md:border-r-8 border-purple-600 ">
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

              <div className="p-8 md:p-16 flex flex-col justify-start">
                <div className="gradient_text">
                  <p className=" text-yellow-400 text-2xl md:text-base lg:text-2xl text-start font-medium">
                    SPECIALIZED
                  </p>
                  <p className="text-yellow-400 text-5xl md:text-3xl lg:text-5xl text-start font-light">
                    SERVICES
                  </p>
                </div>

                <p className="mt-4  text-xs md:text-base text-justify">
                  • Dry Cleaning
                  <br />
                  • Laundry
                  <br />
                  • Steam Iron
                  <br />
                  <br />
                  We are a one-stop solution for all your laundry needs. Our
                  services range from basic laundry (wash n fold, wash n iron)
                  to steam ironing and dry cleaning of all types of apparel and
                  home linens. Our commitment to providing high-quality services
                  has made us a trusted name in the industry.
                </p>
              </div>
            </section>
            <div className="h-2 bg-purple-700"></div>
            <section className="p-8 md:p-16 flex flex-col">
              <h2 className=" h2 text-start text-3xl font-semibold">
                At Urban Laundry,
              </h2>
              <div className=" text-xs md:text-base mt-2 text-justify">
                <h3 className="h3 text-xl">
                  We offer top-notch cleaning services to keep your belongings
                  looking their best.{" "}
                </h3>
                <br />
                We are dedicated to providing you with the highest quality
                laundry and dry-cleaning services. With our commitment to
                excellence, you can trust us to handle all of your laundry needs
                with care and precision. Our team of experienced professionals
                are equipped with the latest technology and techniques to ensure
                that your items are handled with the utmost care and attention.
                Whether you need a quick refresh or a deep clean, we&apos;ve got
                you covered. We believe that our customers deserve only the
                best, and we strive to deliver just that with every service we
                provide. So why wait? Let us take care of your laundry needs
                today!
                <br />
                <br />
                <br />
                <strong className=" text-lime-500">
                  Laundry Service :
                </strong>{" "}
                Our laundry service is designed to provide you with a
                hassle-free and convenient solution for all your everyday
                clothes. We use state of art machinery and high-quality
                detergents to ensure that your clothes are cleaned thoroughly
                and are returned to you fresh and crisp.
                <br />
                <br />
                <strong className=" text-lime-500">Dry Cleaning:</strong> Our
                Dry Cleaning service is perfect for delicate fabrics that
                require special care. Our team of experts examine your clothes
                for any stains, understand about the fabric type and colors to
                further use a combination of the latest technology and
                high-quality cleaning products to clean your clothes, ensuring
                that they are returned to you in pristine condition.
                <br />
                <br />
                <strong className=" text-lime-500">Steam Ironing:</strong> Our
                Steam Ironing service is perfect for those who want their
                clothes to look as good as new. Our team of experts use the
                latest steam ironing process to remove all creases and wrinkles
                from your clothes, leaving them looking freshly pressed. (Note:
                Steam helps keep the fibers in place for a longer duration)
                <br />
                <br />
                <br />
                We believe in providing our customers with the best possible
                experience. Our team is trained to handle all types of clothes
                and fabrics, ensuring that you receive the highest quality of
                services every time. So, whether you need laundry services for
                your everyday clothes, steam ironing for your special occasion
                wears or dry cleaning for your delicate fabrics, we&apos;ve got
                you covered. Visit us today to experience the quality of our
                services for yourself!
              </div>
            </section>
            <div className="h-2 bg-purple-700"></div>
            <section
              id="Pricing"
              className="pt-12 px-12 md:px-16 text-start grid grid-cols-1 md:grid-cols-2 border-b-8 border-purple-600"
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
                <a href="tel:+916362591993">
                  {" "}
                  <button className="mt-12 rounded-full">
                    SCHEDULE PICK UP
                  </button>
                </a>
              </div>
              <Image
                className="relative self-end"
                src={ladyWithCloths4}
                alt=""
              />
            </section>
            <div id="about" className="p-8 md:p-16">
              <h2 className="text-center gradient_text  text-xl md:text-4xl lg:text-6xl font-medium">
                Our Story!
              </h2>

              <br />
              <div className="text-xs lg:text-base indent-4 text-justify">
                {`The idea of entering laundry business started in October 2019 when our founder’s wife shared her experience about local dry-cleaning stores on the timelines, delays, damages caused and unsatisfactory output, with him. Being a NRI, having worked in many countries, he wondered about the gap or lack of advancement or quality experienced outside the country vs India. This made him to think and research around Laundry and Drycleaning industry. He figured that there were less than 1% of Dry-Cleaning stores in any major city that make up to global standards by using dry cleaning machinery, other systems and processes. This <1% may include five-star hotels and some big laundry chains. He also figured that some were and are still using perc based machinery that is banned in United States due to the fact that, those chemicals are of carcinogenic in nature and harmful to human skin. Additionally, research showed that there is neither proper process nor good chemicals utilized by many of these Drycleaning shops. This may be because people think anything can be done in India or can take people for granted assuming that as long as price is maintained low, any malformed practices can be followed in backend (some of which we have heard and seen of are, processing clothes at dhobi ghats, iron and deliver, usage of unnamed, unproven chemicals for dry cleaning, or just spot cleaning / spraying some chemical and finish in the name of dry cleaning). A man of perfection, he wanted to change these practices within laundry industry by adapting superior process and great quality with Speed.`}
              </div>
            </div>
            <section className=" pt-5 flex flex-col-reverse md:grid md:grid-cols-2 w-full ">
              <div className="relative w-full h-full min-h-[45vh]">
                <Image
                  className="z-10 absolute px-20 lg:px-28 -bottom-12 md:-bottom-20"
                  src={ladyWithCloths1}
                  alt=""
                />
              </div>
              <div className="flex text-left  p-8 pt-0">
                <p className="text-xs lg:text-base  indent-4 text-justify">
                  {`He then spoke about this idea with his family and started “The Urban Laundry” in Rajajinagar, Bengaluru. Being a Chemical Engineer by profession and having heavy Industries background throughout his career helped him setup the store from scratch and establish great processes including Quality checks, optimal machinery utilization and training available workforce without any Laundry experience in a very quick time. He proudly says our customers love Speed with quality which has differentiated us from other players. We were industry first to offer Laundry and dry-cleaning in just two days for no extra charge unlike others. Impressed by quality and speed many customers started coming to us from different areas across Bangalore. Many of our customers in fact asked us to open stores in nearby areas so that it helps their family and friends.`}
                </p>
              </div>
            </section>
            <div className=" text-center w-full  h-28  ">
              <div className="absolute z-20 bg-black w-full px-0 md:px-12 py-6 md:py-8  text-xs md:text-3xl  tracking-[0.3rem] md:tracking-[1.3rem]">
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
                <div className="p-2 lg:p-16">
                  <Image
                    className="w-full aspect-square"
                    src={woolmark}
                    alt=""
                  />
                  <div className="text-[0.5rem] md:text-xs  text-center pt-4">
                    WOOL-SAFE MACHINERY GUARANTEED
                  </div>
                </div>
                <div className="p-2 lg:p-16">
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

                <div className="p-2 lg:p-16">
                  <Image
                    className="w-full aspect-square"
                    src={hygenicStamp}
                    alt=""
                  />
                  <div className="text-[0.5rem] md:text-xs  text-center pt-4">
                    HOHENSTEIN APPROVED EQUIPMENT
                  </div>
                </div>
                <div className="p-2 lg:p-16">
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
            <section className="p-4 md:p-8">
              <h2 className="gradient_text text-left text-xl md:text-6xl font-medium">
                A METHODICAL
              </h2>
              <p className="gradient_text text-left pb-4 md:pb-12 text-sm md:text-3xl">
                APPROACH TO IMPECCABLE QUALITY
              </p>
              <Image src={procedure} alt="steps" />
              {/* <Steps /> */}
            </section>
            <div className="mt-5 h-2 bg-purple-600"></div>

            <div className=" h-2 bg-purple-700"></div>
            <section
              className="grid grid-cols-1 md:grid-cols-2 border-b-8 border-purple-700"
              id="Partner with Us"
            >
              <div className="">
                <Image
                  className="w-full h-full object-cover"
                  src={billboard}
                  alt=""
                />
              </div>
              <div className=" border-l-[5px] border-purple-700 flex flex-col mx-auto p-5  lg:p-12 ">
                <div className="gradient_text mb-5">
                  <p className="text-yellow-500 text-2xl lg:text-3xl text-left font-bold">
                    GET
                  </p>
                  <p className="text-3xl lg:text-5xl to-yellow-500 text-start">
                    FRANCHISE
                  </p>
                </div>

                <p className="text-xs lg:text-base text-gray-300 indent-4 text-justify">
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
                <Link href="/franchise">
                  <button className="rounded-full mt-5 max-w-max">
                    Know More
                  </button>
                </Link>
              </div>
            </section>
            <div className="p-8  md:pt-20 md:pl-20 border-l-4 border-purple-700 flex flex-col">
              <div className="gradient_text mb-5">
                <p className=" to-yellow-500 text-3xl text-start font-bold">
                  Why should you partner/Franchise with Urban Laundry?
                </p>
              </div>

              <p className="text-xs lg:text-base text-gray-300 indent-4 text-justify">
                Having Served thousands of customers in Laundry industry for
                last 3 years (during and post covid), it was our customers that
                sparked this idea in us, to expand our services to different
                areas within the city. In fact, some of our customers, having
                liked our concept and services, expressed interest to take
                franchise from us so that they can service other customers
                within their area. After evaluating different models and
                addressing some of the core issues that we anticipated may be
                blockers to scale in this business, we started to open up for
                Partners (Laundroprenuers). With Trust, Hygiene, Quality and
                Speed being our Core Values, we are sticking to our current
                model of operating Laundry and Drycleaning stores onsite/Live.
                We believe, this helps in building trust with our customers by
                providing transparency into how their clothes are being
                processed right in front of them in hygienic environment, at
                speed.
                <br />
                <br /> For entrepreneurs interested in partnering with us, we
                are right there along with them throughout their journey. We
                help in location appraisal, store setup (by providing state of
                Art machinery along with Eco friendly chemicals) and CRM
                software (for Customer order bookings and reporting). We also
                handle Branding, Corporate Marketing, Training workforce and any
                other support to make the partner successful in delivering our
                core values to customer.
                <br />
                <br />
                We are proud to say that our Franchising fee is one of the
                lowest in Industry when compared to other competitors who are
                charging around 8 to 10 percent on Sales, whereas we ought to
                charge just{" "}
                <strong className="font-semibold underline decoration-indigo-500">
                  5.49 %
                </strong>{" "}
                on Gross. Additionally, We want to respect wisdom of senior
                citizens and also help our women Entrepreneurs in establishing
                themselves in this Industry by offering additional discount of
                0.24 percent.
              </p>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 text-start">
              <div className="p-8  md:pb-20 md:pl-20 border-l-4 border-purple-700 flex flex-col">
                <p className="text-xs lg:text-base text-gray-300 indent-4 text-justify">
                  We believe in giving back in some shape or form to the
                  community, for example, by making a partner successful,
                  greater good is happening by giving them financial freedom or
                  creating additional recurring income or providing employment
                  opportunity to partner and other staff members and eventually
                  bringing quality of living in many customer&apos;s life by
                  either saving their time with laundry so that they can focus
                  their efforts elsewhere or by providing them quality and
                  longevity of clothes they wear . <br />
                  <br /> So with help of Urban Laundry now, every person can
                  become a Laundroprenuer by providing quality and speed to
                  customers and also having more profits due to our lowest fees.
                </p>
              </div>
              <div className=" self-end flex justify-end px-20 md:px-0 md:ml-24 md:mr-4">
                <Image
                  src={thinking_man}
                  className="  lg:pt-10 md:h-[70vh] justify-end object-cover md:object-contain"
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
