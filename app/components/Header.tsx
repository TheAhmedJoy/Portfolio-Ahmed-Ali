import React from 'react'
import Image from 'next/image'
import { motion, spring } from "motion/react"
import { assets } from '@/assets/assets'

export default function () {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center">
            <motion.div initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.8, type: 'spring', stiffness: 100}} viewport={{once: true}}>
                <Image src={assets.profile_img} className="rounded-full w-32 mb-3" alt="Ahmed Ali Header Profile Image" />
            </motion.div>
            <motion.h3 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} viewport={{once: true}}
            className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi! I'm Ahmed Ali
                <Image src={assets.hand_icon} alt="Hello Icon" className="w-6" />
            </motion.h3>
            <motion.h1
            initial={{y: -30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.5}} viewport={{once: true}}
            className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
                Software Developer
            </motion.h1>
            <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.7}} viewport={{once: true}}
            className="max-w-2xl mx-auto font-Ovo">
                Software Developer specialising in React and Next.js. I have shipped production code in TypeScript at Platform Science and built AI-powered full-stack apps. 
                I bring a tester's instinct to development by writing code that lasts.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <motion.a initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1}} viewport={{once: true}}
                href="#contact" 
                className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent 
                dark:hover:bg-darkHover duration-500">
                    Contact Me
                    <Image src={assets.right_arrow_white} className="w-4" alt="Contact Me Arrow Icon" />
                </motion.a>
                <motion.a initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1.1}} viewport={{once: true}}
                href="/Ahmed Ali Resume.pdf" 
                className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black
                hover:bg-gray-900 dark:hover:bg-neutral-200 duration-500" download>
                    My Resume
                    <Image src={assets.download_icon} className="w-4" alt="Resume Download Icon" />
                </motion.a>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <motion.a initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1.2}} viewport={{once: true}}
                target="_blank" href="https://www.linkedin.com/in/ahmedjoyali/" 
                className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black hover:bg-gray-900 
                dark:hover:bg-neutral-200 duration-500">
                    LinkedIn
                    <Image src={assets.arrow_icon} className="w-4" alt="Contact Me Arrow Icon" />
                </motion.a>
                <motion.a initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1.3}} viewport={{once: true}}
                target="_blank" href="https://github.com/TheAhmedJoy" 
                className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent dark:hover:bg-darkHover 
                duration-500">
                    GitHub
                    <Image src={assets.arrow_icon_dark} className="w-3" alt="Resume Download Icon" />
                </motion.a>
            </div>
        </div>
    )
}
