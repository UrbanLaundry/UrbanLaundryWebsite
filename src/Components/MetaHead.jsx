import React from "react";
import Head from "next/head";
export default function MetaHead({
  title = "The Urban Laundry | Best Laundry services in Bangalore | Bangaluru Laundry Store",
  description = "The Urban Laundry: The Most Reliable and Efficient Laundry Service Provider in Bengaluru",
}) {
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="shortcut icon"
        href="https://raw.githubusercontent.com/SnehasisDebbarman/urban-laundry-next-2/main/src/assets/logo-mark.png"
      />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="The Urban Laundry services, Best laundry services in rajajinagar, Laundry services near me, best laundry services near me, rajajinagar laundry services, top laundry services in rajajinagar, dry cleaning services near me, dry cleaning services bangalore, bangalore laundry services, best laundry in India, Best laundry in Bangalore, Best laundry franchise in India, Low cost laundry franchise in india, Best dry cleaning franchise in india"
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
        content="https://raw.githubusercontent.com/SnehasisDebbarman/urban-laundry-next-2/main/src/assets/meta_image.png"
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
        content="https://raw.githubusercontent.com/SnehasisDebbarman/urban-laundry-next-2/main/src/assets/meta_image.png"
      ></meta>
    </Head>
  );
}
