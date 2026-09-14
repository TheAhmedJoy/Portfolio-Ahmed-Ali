import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from "../../assets/assets"

interface NavbarProps {
    isDarkMode: boolean
    setIsDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void
}

export default function Navbar( {isDarkMode, setIsDarkMode}: NavbarProps ) {

    const [isScrollStatus, setIsScrollStatus] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuButtonRef = useRef<HTMLButtonElement | null>(null)
    const closeButtonRef = useRef<HTMLButtonElement | null>(null)

    const openSideNav = () => setIsMenuOpen(true)

    // Closing via a nav link: focus continues to the link's target, no need to restore it
    const closeSideNav = () => setIsMenuOpen(false)

    // Closing via the close button or Escape: return focus to the button that opened the menu
    const dismissSideNav = () => {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
    }

    useEffect(() => {
        if (isMenuOpen) {
            closeButtonRef.current?.focus()
        }
    }, [isMenuOpen])

    useEffect(() => {
        const onScroll = () => setIsScrollStatus(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden" aria-hidden="true">
                <Image src={assets.header_bg_color} className="w-full" alt="" />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] max-lg:py-8 py-4 flex items-center justify-between z-50
                            ${isScrollStatus ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
                <a href="#top" >
                    <Image src={isDarkMode ? assets.logo_dark : assets.logo} className='w-28 cursor-pointer' alt="Ahmed Ali — home" />
                </a>
                <ul className={`hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 lg:gap-8 rounded-full px-12 py-3
                                ${isScrollStatus ? "" : "bg-white/50 shadow-md dark:border dark:border-white/50 dark:bg-transparent"}`}>
                    <li>
                        <a className="font-Ovo" href="#top">Home</a>
                    </li>
                    <li>
                        <a className="font-Ovo" href="#about">About Me</a>
                    </li>
                    <li>
                        <a className="font-Ovo" href="#work">My Work</a>
                    </li>
                    <li>
                        <a className="font-Ovo" href="#contact">Contact Me</a>
                    </li>
                </ul>
                <div className="flex items-center gap-4">
                    <button onClick={() => setIsDarkMode((prev) => !prev)} aria-pressed={isDarkMode} aria-label="Dark mode">
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} className="w-6 cursor-pointer" alt="" />
                    </button>
                    <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full font-Ovo dark:border-white/50">
                        Contact
                        <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className="w-3" alt="" />
                    </a>
                    <button ref={menuButtonRef} onClick={openSideNav} className="block md:hidden ml-3"
                        aria-expanded={isMenuOpen} aria-controls="mobile-menu" aria-label="Open menu">
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} className="w-6 cursor-pointer" alt="" />
                    </button>
                </div>

                {/*Small Screen Navbar*/}
                <ul id="mobile-menu"
                    className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50
                                transition-[transform,visibility] duration-500 motion-reduce:transition-none dark:bg-darkHover dark:text-white
                                ${isMenuOpen ? "-translate-x-64 visible" : "translate-x-0 invisible"}`}
                    onKeyDown={(event) => { if (event.key === "Escape") dismissSideNav() }}>
                    <li className="absolute right-4 top-4">
                        <button ref={closeButtonRef} onClick={dismissSideNav} aria-label="Close menu" className="p-2 cursor-pointer">
                            <Image src={isDarkMode ? assets.close_white : assets.close_black} className="w-5" alt="" />
                        </button>
                    </li>
                    <li>
                        <a className="font-Ovo" href="#top" onClick={closeSideNav}>Home</a>
                    </li>
                    <li>
                        <a className="font-Ovo" href="#about" onClick={closeSideNav}>About Me</a>
                    </li>
                    <li>
                        <a className="font-Ovo" href="#work" onClick={closeSideNav}>My Work</a>
                    </li>
                    <li>
                        <a className="font-Ovo" href="#contact" onClick={closeSideNav}>Contact Me</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
