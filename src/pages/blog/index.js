import React, { useEffect, useState } from "react";

import moment from "moment";
import Link from "next/link";
import Image from "next/image";
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const fetchBlog = async () => {
    const mediumURL =
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mehulkothari05";
    const response = await fetch(mediumURL, {
      headers: {
        "content-type": "application/text",
      },
    });
    const data = await response.json();
    setBlogs(data?.items);
  };
  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <main>
      <section className=" min-h-screen pt-20 pb-10 lg:pt-[120px] lg:pb-20 text-start bg-slate-800">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
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
          <div className="-mx-4 grid grid-cols-1 md:grid-cols-3 ">
            {blogs?.map((blog, key) => {
              return (
                <Link
                  key={key}
                  href={blog?.link}
                  className=" w-full h-full px-4"
                >
                  <div className="mx-auto min-h-[55vh] mb-10 max-w-[370px] border rounded pb-2">
                    <div className="mb-8 overflow-hidden rounded">
                      <Image
                        width={200}
                        height={200}
                        src={blog?.thumbnail}
                        alt="image"
                        className="w-full aspect-video"
                      />
                    </div>
                    <div className="p-4">
                      <span className="bg-blue-500 mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                        {moment(blog?.pubDate).format("do MMM, YYYY")}
                      </span>
                      <p>
                        <a
                          href="javascript:void(0)"
                          className="text-dark hover:text-blue-500 mb-4 inline-block text-base font-semibold"
                        >
                          {blog?.title}
                        </a>
                      </p>
                      <p className="text-body-color text-base grid grid-cols-3">
                        {blog.categories.map((it, i) => (
                          <p key={i} className="pr-2 text-sm">
                            {it}
                          </p>
                        ))}
                      </p>
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
