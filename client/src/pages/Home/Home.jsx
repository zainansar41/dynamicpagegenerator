import React from "react";

import "./home.css";
import Hero from "../../components/HeroSection/Hero";
import Headline from "../../components/Headline/Headline";
import bg from "../../assets/bg.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        himg={bg}
        htag={"hero_tag"}
        hbtn={"BTN"}
        head={"Start Yout Journey with us"}
        hdesc={"let's build this in a different way"}
      />
      <Headline />
      <Footer />
    </>
  );
}
