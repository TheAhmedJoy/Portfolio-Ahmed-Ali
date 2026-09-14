"use client"

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { MotionConfig } from "motion/react";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.theme === "dark" || (localStorage.theme !== "light" && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
    }
    else {
      setIsDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
    }
    else {
      document.documentElement.classList.remove("dark")
      localStorage.theme = "light"
    }
  }, [isDarkMode])

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black
                   focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg">
        Skip to main content
      </a>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main id="main">
        <Header />
        <AboutMe isDarkMode={isDarkMode} />
        <MyWork />
        <ContactMe />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </MotionConfig>
  );
}
