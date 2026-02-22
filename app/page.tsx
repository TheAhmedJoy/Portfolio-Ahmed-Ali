"use client"

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <MyWork />
    </>
  );
}
