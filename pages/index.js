import Head from "next/head";
import Header from "../components/Header";
import Hero from "./sections/Hero";
import Perks from "./sections/Perks";
import WhyUs from "./sections/WhyUs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Giles & Associates</title>
        <meta name="description" content="Description Here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        <WhyUs />
        <Perks />
      </main>
    </div>
  );
}
