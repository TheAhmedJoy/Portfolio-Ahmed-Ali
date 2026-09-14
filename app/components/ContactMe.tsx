import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"
import { assets } from '@/assets/assets'

export default function ContactMe() {

    const [formResult, setFormResult] = useState("");

    const submitContactForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        setFormResult("Sending...");
        const formData = new FormData(form);

        formData.append("access_key", `${process.env.NEXT_PUBLIC_WEB3_FORM_KEY}`);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setFormResult("Form Submitted Successfully");
                form.reset();
            } else {
                console.log("Error", data);
                setFormResult(data.message);
            }
        } catch (error) {
            console.log("Error", error);
            setFormResult("Something went wrong sending your message. Please try again, or email me directly.");
        }
    };

    return (
        <motion.section initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} viewport={{once: true}}
        id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-size-[90%-auto] dark:bg-none"
        aria-labelledby="contact-heading">
            <motion.p initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.3}} viewport={{once: true}}
            className="text-center mb-2 text-lg font-Ovo">
                Connect with me
            </motion.p>
            <motion.h2 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} viewport={{once: true}}
            className="text-center text-5xl font-Ovo" id="contact-heading">
                Get in touch
            </motion.h2>
            <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay: 0.7}} viewport={{once: true}}
            className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I'm currently seeking new opportunities as a Full Stack Developer! Please contact me using the form below if you like what you see!
            </motion.p>
            <motion.form initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay: 0.9}} viewport={{once: true}}
            className="max-w-2xl mx-auto" onSubmit={submitContactForm}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
                    <label htmlFor="contact-name" className="sr-only">Your name</label>
                    <motion.input initial={{x: -50, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.6, delay: 1.1}} viewport={{once: true}}
                    type="text" id="contact-name" placeholder="Enter your name" required autoComplete="name"
                        className="p-3 border-[0.5px] border-gray-400 rounded-md bg-white placeholder:text-gray-600 focus:outline-none focus-visible:ring-2
                                   focus-visible:ring-gray-700 dark:bg-darkHover/30 dark:border-white/75 dark:placeholder:text-white/70 dark:focus-visible:ring-white" name="name" />
                    <label htmlFor="contact-email" className="sr-only">Your email address</label>
                    <motion.input initial={{x: 50, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.6, delay: 1.1}} viewport={{once: true}}
                    type="email" id="contact-email" placeholder="Enter your email" required autoComplete="email"
                        className="p-3 border-[0.5px] border-gray-400 rounded-md bg-white placeholder:text-gray-600 focus:outline-none focus-visible:ring-2
                                   focus-visible:ring-gray-700 dark:bg-darkHover/30 dark:border-white/75 dark:placeholder:text-white/70 dark:focus-visible:ring-white" name="email" />
                </div>
                <label htmlFor="contact-message" className="sr-only">Your message</label>
                <motion.textarea initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1.1}} viewport={{once: true}}
                rows={6} id="contact-message" placeholder='Enter your message' required
                    className="w-full p-4 border-[0.5px] border-gray-400 rounded-md bg-white mb-6 placeholder:text-gray-600 focus:outline-none focus-visible:ring-2
                               focus-visible:ring-gray-700 dark:bg-darkHover/30 dark:border-white/75 dark:placeholder:text-white/70 dark:focus-visible:ring-white" name="message"></motion.textarea>
                <motion.button whileHover={{scale: 1.15}} transition={{duration: 0.1}}
                type="submit" className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500
                                    dark:bg-transparent dark:border dark:border-white/75 dark:hover:bg-darkHover cursor-pointer">
                    Send now
                    <Image src={assets.right_arrow_white} className="w-4" alt="" />
                </motion.button>
                <p className="mt-4" role="status">
                    {formResult}
                </p>
            </motion.form>
        </motion.section>
    )
}
