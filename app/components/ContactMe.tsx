import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

export default function ContactMe() {

    const [formResult, setFormResult] = useState("");

    const submitContactForm = async (event: any) => {
        event.preventDefault();
        setFormResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", `${process.env.NEXT_PUBLIC_WEB3_FORM_KEY}`);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setFormResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setFormResult(data.message);
        }
    };

    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%-auto]">
            <h4 className="text-center mb-2 text-lg font-Ovo">
                Connect with me
            </h4>
            <h2 className="text-center text-5xl font-Ovo">
                Get in touch
            </h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovoa">
                I'm currently seeking new opportunities as a Full Stack Developer! Please contact me using the form below if you like what you see!
            </p>
            <form className="max-w-2xl mx-auto" onSubmit={submitContactForm}>
                <div className="grid grid-cols-2 gap-6 mt-10 mb-8">
                    <input type="text" placeholder="Enter your name" required
                        className="p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" name="name"/>
                    <input type="email" placeholder="Enter your email" required
                        className="p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" name="email"/>
                </div>
                <textarea rows={6} placeholder='Enter your message' required
                    className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6" name="message"></textarea>
                <button type="submit" className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500">
                    Send now
                    <Image src={assets.right_arrow_white} className="w-4" alt="Send arrow icon" />
                </button>
                <p className="mt-4">
                    {formResult}
                </p>
            </form>
        </div>
    )
}
