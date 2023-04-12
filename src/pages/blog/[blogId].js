import React from "react";
import MetaHead from "@/Components/MetaHead";

export default function Blog({ blog }) {
  return (
    <main className="w-screen bg-gray-800 flex justify-center -mt-7 ">
      <MetaHead title={blog.title + " | Urban Laundry"} />
      <div className="max-w-screen-lg ">
        <h2 className="text-2xl md:text-3xl text-center py-4 md:py-8 font-extrabold">
          {blog.title}
        </h2>
        <div
          className="prose prose-code:bg-gray-200 w-screen md:w-full p-5 md:max-w-screen-lg prose-pre:bg-gray-500 prose-img:w-[70%] prose-img:mx-auto prose-headings:text-gray-100 prose-h2:font-black  prose-headings:text-3xl prose-p:text-gray-400  prose-a:text-blue-300 prose-strong:text-blue-100 prose-li:text-gray-300 "
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </div>
    </main>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@urbanlaundryblr"
  );
  const blogs = (await res.json()).items;

  let blog = blogs.find((it) => it.title === params.blogId);

  return {
    props: {
      blog,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    // " https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mehulkothari05"
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@urbanlaundryblr"
  );
  const blogs = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = blogs.items.map((blog) => ({
    params: { blogId: blog.title },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}
