import React from "react";
import Head from "next/head";
export default function MetaHead({
  title = "The Urban Laundry | Best Laundry services in Bangalore | Bangaluru Laundry Store",
  description = "The Urban Laundry: The Most Reliable and Efficient Laundry Service Provider in Bengaluru",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="The Uran Laundry services, Best laundry services in rajajinagar, Laundry services near me, best laundry services near me, rajajinagar laundry services, top laundry services in rajajinagar, dry cleaning services near me, dry cleaning services bangalore, bangalore laundry services"
      />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="3 days" />
      <meta name="author" content="The Urban Laundry " />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta
        property="og:title"
        content="The Urban Laundry | Best Laundry services in Bangalore | Bangaluru Laundry Store"
      />
      <meta
        property="og:description"
        content="The Urban Laundry: The Most Reliable and Efficient Laundry Service Provider in Bengaluru"
      />
      <meta
        property="og:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta
        property="twitter:title"
        content="The Urban Laundry | Best Laundry services in Bangalore | Bangaluru Laundry Store"
      />
      <meta
        property="twitter:description"
        content="The Urban Laundry: The Most Reliable and Efficient Laundry Service Provider in Bengaluru"
      />
      <meta
        property="twitter:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      ></meta>
    </Head>
  );
}
