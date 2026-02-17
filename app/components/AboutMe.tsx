import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export default function AboutMe() {
    return (
        <div className="w-full px-[12%] py-10 scroll-mt-20" id="about">
            <h4 className="text-center mb-2 text-lg font-Ovo">
                Introduction
            </h4>
            <h2 className="text-center text-5xl font-Ovo">
                About Me
            </h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="w-64 sm:w-80 rounded-3xl max-w-none">
                    <Image src={assets.user_image_test} className="w-full rounded-3xl" alt="Ahmed Ali About Me Image" />
                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">
                        I am a dedicated Full Stack Developer with a passion for building scalable, end-to-end web applications that bridge the gap between robust back-end logic and intuitive front-end design.
                        With a deep proficiency in Frontend and Backend technologies, I specialize in creating high-performance systems that prioritize both user experience and technical efficiency.
                        Beyond writing clean, maintainable code, I enjoy the challenge of solving complex architectural problems and staying at the forefront of emerging technologies.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
                                           hover:shadow-blackShadow"
                                key={index}>
                                <Image src={icon} className="w-7 mt-3" alt={title} />
                                <h3 className="my-4 font-semibold text-gray-700">
                                    {title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {description}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <h4 className="my-6 text-gray-700 font-Ovo">
                        Tools I use
                    </h4>
                    <ul className="flex items-center gap-3 sm:gap-5">
                        {toolsData.map(({icon, iconTitle}, index) => (
                            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                                key={index}>
                                <Image src={icon} className="w-5 sm:w-7" title={iconTitle} alt="Tool" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
