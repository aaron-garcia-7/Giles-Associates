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
import ScrollDown from "../components/ScrollDown";

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
        <title>Practice Made Perfect</title>
        <meta
          name="description"
          content="Practice Made Perfect makes it possible to have your own therapy practice without facing all of the usual debt and risk associated with getting started. Let us provide the furnished, modern office and expert mentorship so you can get to what matters most — therapy."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form name="contact" netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <textarea name="availability"></textarea>
      </form>

      <main>
        {/* <Header fromTop={fromTop} scrollDown={scrollDown} /> */}
        <ToTop fromTop={fromTop} />
        <Hero fromTop={fromTop} />
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
