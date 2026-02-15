import React, { useRef } from 'react'
import Image from 'next/image'
import { assets } from "../../assets//assets"

export default function Navbar() {

    const sideNavRef: any = useRef<HTMLUListElement | null>(null)

    const openSideNav = () => {
        sideNavRef.current.style.transform = "translateX(-16rem)"
    }

    const closeSideNav = () => {
        sideNavRef.current.style.transform = "translateX(16rem)"
    }

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
                <Image src={assets.header_bg_color} className="w-full" alt="Navbar background" />
            </div>
            <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-around z-50">
                <a href="#top" >
                    <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt="Navbar Logo" />
                </a>
                <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm backdrop-opacity-50">
                    <li>
                        <a className="font-Ovo" href="#top">Home</a>
                    </li>
                    <li>
                        <a className="font-Ovo" href="#about">About Me</a>
                    </li>
                    <li>
                        <a className="font-Ovo" href="#word">My Work</a>
                    </li>
                    <li>
                        <a className="font-Ovo" href="#contact">Contact Me</a>
                    </li>
                </ul>
                <div className="flex items-center gap-4">
                    <button>
                        <Image src={assets.moon_icon} className="w-6 cursor-pointer" alt="Dark Mode Icon" />
                    </button>
                    <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-14 font-Ovo">
                        Contact
                        <Image src={assets.arrow_icon} className="w-3" alt="Contact Me arrow" />
                    </a>
                    <button className="block md:hidden ml-3">
                        <Image src={assets.menu_black} className="w-6 cursor-pointer" alt="Burger Menu Icon" onClick={openSideNav}/>
                    </button>
                </div>

                {/*Small Screen Navrbar*/}
                <ul className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
                    ref={sideNavRef}>
                    <div className="absolute right-6 top-6" onClick={closeSideNav}>
                        <Image src={assets.close_black} className="w-5 cursor-pointer" alt="Close Small Screen Navbar" />
                    </div>
                    <li>
                        <a className="font-Ovo" href="#top" onClick={closeSideNav}>Home</a>
                    </li>
                    <li>
                        <a className="font-Ovo" href="#about" onClick={closeSideNav}>About Me</a>
                    </li>
                    <li>
                        <a className="font-Ovo" href="#word" onClick={closeSideNav}>My Work</a>
                    </li>
                    <li>
                        <a className="font-Ovo" href="#contact" onClick={closeSideNav}>Contact Me</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
