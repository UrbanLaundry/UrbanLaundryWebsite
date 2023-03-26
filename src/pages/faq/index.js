import Image from "next/image";
import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import MetaHead from "@/Components/MetaHead";

const faqData = [
  {
    title: "What are your tips for effective handling of clothes?",
    content:
      "Make sure you read the tags when handling clothes. They are there for a reason and clothes should be handled appropriately. Other common mistake people do is they sundry their clothes and in india it is quite common as people dont use a dryer. If you do not have an option and your garment says no sundry then make sure not to put it in sun or go to nearby Laundry which has Dryer and make sure they are putting in Dryer.",
  },
  {
    title: "What is common issue you see in Drycleaning? ",
    content:
      "People attend functions/party and accidents like ketchup/coffee/foodstain might fall on clothes but they tend to forget to take it to Drycleaner immediately. Instead they take it after a month or two. It would be increasingly tough when the stain sets in and it would be hard to remove with passing time. I would suggest them to take it to nearest drycleaner in a day or two and if it is not possible atleast take it in a week for effective removal.",
  },
  {
    title: "Any advise on cleaning or removing stains at home?",
    content:
      " It is possible to remove mild stains at home but you need to take certain precautions while handling the type of clothes. Many people follow youtube and try to remove stain with no or less success. Sometimes they end up damaging the clothes and then run to Drycleaner. We would suggest relax yourself and see a good drycleaner to get best results. ",
  },
  {
    title: "What are the most common stains that you see in your Store?",
    content:
      "We frequently get clothes that has got Turmeric stains, Food Stains, Oil Stains,  Sweat Stains, Coffee Stains, Egg stains, Ketchup stains, vinegar stains among others. We use imported chemicals which would help in removal or reducing the Stains. As said earlier best results appear when you bring it early.",
  },
  {
    title: "Any other common issue with Saree Drycleaning?",
    content:
      " One of the biggest challenges with sarees is adulterates colours results in color bleeding. With our increasing love towards multi color sarees and imitation of fabric is also resulting in color bleeding. Our suggestion would be know the quality of saree before you buy and it would reduce lot of headaches down the line. We do a quality check and use color retardars to reduce bleeding.",
  },
  {
    title: "I heard you say about Saree fall causing color bleeding?",
    content:
      " Yes that is one of the most common scenario were the cotton fall that is used on Saree cause color bleeding. I would suggest buy Polyster fall or Ruby falls and wash it first before working with tailor. This would help in preserving your saree from color bleeding.",
  },
  {
    title: "Where are the places you see common stains on Shirts?",
    content:
      "For shirts we see it on handcuffs. To avoid food stains try to fold your handcuff before serving or eating this would reduce chances of food stains getting on handcuffs.",
  },
  {
    title: "Are your chemicals safer on Kids dress?",
    content:
      " Yes in deed. Our Ecofriendly chemicals are approved to use on Kids dresses. In fact active kids always have one or other stain on the dresses. We are famous in addressing stains and retain quality of kids dresses.",
  },
  {
    title: "Do you do wash and Fold by weight?",
    content:
      " We offer wash and Fold by KG. Apart from that we also offer wash and Iron(steam iron) by weight with budget friendly option. We also offer Steam ironing services by piece and we stand out on our quality.",
  },
  {
    title:
      "Anyother Services that you offer other than Dry cleaning and Laundry?",
    content:
      "We are currently handling Blankets, Curtains among other Services. We are also doing a trail on Saree rolling on Polishing Services and looking forward to Shoe Laundry in future.",
  },
];

export const Accordion = ({ title, content, id }) => {
  const [isOpen, setOpen] = useState(id === 0);

  return (
    <div className="text-start">
      <motion.header
        className={
          "p-4 border  border-gray-700 transition-all" +
          (id === 0 ? " rounded-t-md " : " ") +
          (faqData.length - 1 === id ? " rounded-b-md" : " ") +
          (isOpen ? "bg-gray-600" : "bg-transparent")
        }
        onClick={() => setOpen(!isOpen)}
      >
        <h3 className=" font-bold text-[0.6rem] md:text-base"> {title}</h3>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            className="p-4 border-x border-gray-700"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", padding: 20 },
              collapsed: { opacity: 0, height: 0, padding: 0 },
            }}
            transition={{ duration: 0.6, ease: "linear" }}
          >
            <p className=" font-medium text-slate-300 text-[0.5rem] md:text-sm">
              {" "}
              {content}
            </p>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Faq() {
  return (
    <main>
      <MetaHead title="  Frequently Asked Questions | Urban Laundry" />
      <section class="relative pt-6 md:pt-24 pb-28 bg-blueGray-50 overflow-hidden">
        {/* <Image
          width={200}
          height={200}
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          src="flaro-assets/images/faqs/gradient.svg"
          alt=""
        /> */}
        <div class="relative z-10 container px-4 mx-auto">
          <div class="md:max-w-4xl mx-auto">
            <p class="mb-7 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px">
              Have any questions?
            </p>
            <h2 class="mb-8 md:mb-16 text-xl md:text-5xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">
              Frequently Asked Questions
            </h2>
            <div class="mb-11 grid rounded">
              {faqData?.map((it, i) => {
                return (
                  <div key={i} className="grid">
                    <Accordion id={i} title={it.title} content={it.content} />
                  </div>
                );
              })}
            </div>
            <p class="text-gray-600 text-center font-medium">
              <span>Still have any questions?</span>
              <p
                class="font-semibold text-indigo-600 hover:text-indigo-700"
                href="#"
              >
                Contact us
              </p>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
