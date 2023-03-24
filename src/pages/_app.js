import "@/styles/globals.css";

import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import MetaHead from "@/Components/MetaHead";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MetaHead />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
