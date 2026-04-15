"use client";

import { useState } from "react";
import BackToTop from "@/components/BackToTop";
import CTA from "@/components/CTA";
import Coaches from "@/components/Coaches";
import Differentiators from "@/components/Differentiators";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Pricing from "@/components/Pricing";
import Programs from "@/components/Programs";
import Schedule from "@/components/Schedule";
import Testimonials from "@/components/Testimonials";
import Ticker from "@/components/Ticker";
import { tickers } from "@/lib/data";

export default function SiteShell() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Preloader onDone={() => setLoaded(true)} />
      <Navbar />
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity .8s ease .2s",
        }}
      >
        <Hero />
        <Ticker items={tickers.main} speed={35} sep="star" />
        <Differentiators />
        <Ticker items={tickers.categories} speed={25} reverse lime />
        <Programs />
        <Coaches />
        <Schedule />
        <Pricing />
        <Testimonials />
        <Ticker items={tickers.reviews} speed={32} />
        <Ticker items={tickers.badges} speed={26} reverse lime />
        <Experience />
        <Gallery />
        <CTA />
        <Footer />
      </div>
      <BackToTop />
      <div className="G" aria-hidden />
    </>
  );
}
