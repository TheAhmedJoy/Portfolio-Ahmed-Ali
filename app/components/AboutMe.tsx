import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { assets, infoList, toolsData } from '@/assets/assets'

interface AboutMeProps {
    isDarkMode: boolean;
}

export default function AboutMe({ isDarkMode }: AboutMeProps) {
    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} viewport={{once: true}}
        className="w-full px-4 sm:px-6 md:px-[12%] py-10 scroll-mt-20" id="about">
            <motion.h4 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.3}} viewport={{once: true}}
            className="text-center mb-2 text-lg font-Ovo">
                Introduction
            </motion.h4>
            <motion.h4 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} viewport={{once: true}}
            className="text-center text-5xl font-Ovo">
                About Me
            </motion.h4>

            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}} viewport={{once: true}}
            className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 my-10 mx-auto max-w-7xl">
                <motion.div initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.6}} viewport={{once: true}}
                className="w-48 sm:w-64 md:w-80 rounded-3xl max-w-none">
                    <Image src={assets.user_image_test} className="w-full rounded-3xl" alt="Ahmed Ali About Me Image" />
                </motion.div>
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.8}} viewport={{once: true}}
                className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">
                        I am a Software Developer based in Southern California with a background in test automation. My SDET role at Platform Science gave me a discipline around reliability that most junior developers do not have. 
                        I build full-stack apps with TypeScript, React, and Next.js. I integrate real APIs - OpenAI, Stripe, Firebase, Google Cloud Functions. 
                        I am looking for a full-time Software Developer role where I can ship fast and write code that holds up in production.
                    </p>
                    <motion.ul initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8, delay: 1}} viewport={{once: true}}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li whileHover={{scale: 1.05}}
                            className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
                                           hover:shadow-blackShadow dark:border-white/75 dark:hover:shadow-white dark:hover:bg-darkHover/50"
                                key={index}>
                                <Image src={isDarkMode ? iconDark : icon} className="w-7 mt-3" alt={title} />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                                    {title}
                                </h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">
                                    {description}
                                </p>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.h4 initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 1}} viewport={{once: true}}
                    className="my-6 text-gray-700 font-Ovo dark:text-white/90">
                        Tools I use
                    </motion.h4>
                    <motion.ul initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 1.2}} viewport={{once: true}}
                    className="flex items-center gap-2 sm:gap-3 md:gap-5 flex-wrap justify-center lg:justify-start">
                        {toolsData.map(({ icon, iconTitle }, index) => (
                            <motion.li whileHover={{scale: 1.3}}
                            className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 dark:border-white/75"
                                key={index}>
                                <Image src={icon} className="w-5 sm:w-7" title={iconTitle} alt="Tool" />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
