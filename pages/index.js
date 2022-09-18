import Head from "next/head";

//components
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Gallary from "../components/Gallary";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

//images
import Header_img from "../public/header.jpg";
import Jelly from "../public/jelly.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nature</title>
      </Head>
      <Navbar
        items={[
          { name: "Home", href: "/" },
          { name: "About Nature", href: "#about" },
          { name: "Gallary", href: "#gallary" },
          { name: "Contact Us", href: "#contact" },
        ]}
        title="Nature"
      />
      <Header img={Header_img} />
      <About img={Jelly} />
      <Gallary />
      <Contact />
      <Footer />
    </div>
  );
}
