import "@/styles/globals.css";

import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import MetaHead from "@/Components/MetaHead";

import Script from "next/script";

// <script async src="https://www.googletagmanager.com/gtag/js?id=G-2C2Q3DK4JT"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-2C2Q3DK4JT');
// </script>

export default function App({ Component, pageProps }) {
  return (
    <>
      <MetaHead />
      <Navbar />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-2C2Q3DK4JT"
      />
          
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2C2Q3DK4JT', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
