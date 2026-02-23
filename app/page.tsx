"use client"

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <MyWork />
      <ContactMe />
      <Footer />
    </>
  );
}
