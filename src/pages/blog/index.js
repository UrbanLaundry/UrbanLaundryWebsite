import React from "react";

import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import MetaHead from "@/Components/MetaHead";
import LOGO from "@/assets/LOGO.png";
export default function Blogs({ blogs }) {
  //write a function that only select img url that has popular image extension
  const getImgUrl = (url) => {
    const imgExtensions = ["jpg", "jpeg", "png", "gif", "svg"];
    const imgExtension = url.split(".").pop();
    if (imgExtensions.includes(imgExtension)) {
      return url;
    }
    return LOGO;
  };
  return (
    <main className="-mt-6">
      <MetaHead title="Blogs | Urban Laundry" />
      <section className=" min-h-screen pt-20 pb-10 lg:pt-[120px] lg:pb-20 text-start bg-slate-800">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="text-blue-500 mb-2 block text-lg font-semibold">
                  Our Blogs
                </span>
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-body-color text-base">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 p-10 gap-2 ">
            {blogs?.map((blog, key) => {
              return (
                <Link
                  key={key}
                  href={"/blog/" + blog?.title}
                  className=" w-full h-full"
                >
                  <div className="mx-auto min-h-[55vh] mb-10 max-w-[370px] border rounded pb-2">
                    <div className="mb-8 overflow-hidden rounded bg-slate-900">
                      <Image
                        width={200}
                        height={100}
                        src={getImgUrl(blog?.thumbnail)}
                        alt="image"
                        className="w-full aspect-video object-contain px-6"
                      />
                    </div>
                    <div className="p-4">
                      <span className="bg-blue-500 mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                        {moment(blog?.pubDate).format("Do MMM, YYYY")}
                      </span>
                      <div>
                        <div className="text-dark hover:text-blue-500 mb-4 inline-block text-base font-bold">
                          {blog?.title}
                        </div>
                      </div>
                      <div className="text-body-color text-base flex flex-wrap gap-2 ">
                        {blog.categories.map((it, i) => (
                          <p
                            key={i}
                            className="max-w-max pr-2 text-sm bg-gray-700 px-3 py-1 rounded-full text-white"
                          >
                            {it}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export async function getServerSideProps(context) {
  const mediumURL =
    // "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mehulkothari05";
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@urbanlaundryblr";
  const response = await fetch(mediumURL, {
    headers: {
      "content-type": "application/text",
    },
  });
  const data = await response.json();
  return {
    props: {
      blogs: data?.items,
    }, // will be passed to the page component as props
  };
}
