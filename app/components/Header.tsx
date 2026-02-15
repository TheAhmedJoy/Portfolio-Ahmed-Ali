import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

export default function () {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center">
            <div>
                <Image src={assets.profile_img} className="rounded-full w-32 mb-3" alt="Ahmed Ali Header Profile Image" />
            </div>
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi! I'm Ahmed Ali
                <Image src={assets.hand_icon} alt="Hello Icon" className="w-6" />
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
                Full Stack Developer
            </h1>
            <p className="max-w-2xl mx-auto font-Ovo">
                Full Stack Developer powered by React/Next.js and strong SWE principles.
                Highly motivated, detail-oriented with a strong passion for building and learning innovative, and scalable solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2">
                    Contact Me
                    <Image src={assets.right_arrow_white} className="w-4" alt="Contact Me Arrow Icon" />
                </a>
                <a href="/Ahmed Ali Resume.pdf" className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2" download>
                    My Resume
                    <Image src={assets.download_icon} className="w-4" alt="Resume Download Icon" />
                </a>
            </div>
        </div>
    )
}
