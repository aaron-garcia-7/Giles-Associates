// Images by Andrea Piacquadio from Pexels

import React, { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "./sections/Hero";
import Perks from "./sections/Perks";
import WhyUs from "./sections/WhyUs";
import Locations from "./sections/Locations";
import About from "./sections/About";
import CallNow from "./sections/CallNow";
import Footer from "../components/Footer";
import ToTop from "../components/ToTop";

export default function Home() {
  const [fromTop, setFromTop] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);
  const [y, setY] = useState(null);

  const listenFromTop = () => {
    window.scrollY > 100 ? setFromTop(true) : setFromTop(false);
  };

  const handleNavHide = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setScrollDown(false);
      } else if (y < window.scrollY) {
        setScrollDown(true);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavHide);
    window.addEventListener("scroll", listenFromTop);

    return () => {
      window.removeEventListener("scroll", handleNavHide);
      window.removeEventListener("scroll", listenFromTop);
    };
  }, [handleNavHide]);
  return (
    <div id="top">
      <Head>
        <title>Giles & Associates</title>
        <meta name="description" content="Description Here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form name="contact" netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <select name="locationPreference" id="locationPreference"></select>
      </form>

      <main>
        <Header fromTop={fromTop} scrollDown={scrollDown} />
        <ToTop fromTop={fromTop} />
        <Hero />
        <WhyUs />
        <Perks />
        <Locations />
        <About />
        <CallNow />
        <Footer />
      </main>
    </div>
  );
}
