import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <Image src={assets.logo} className="w-36 mx-auto mb-6" alt="Footer Logo" />
                <div className="w-max flex items-center gap-2 mx-auto">
                    <Image src={assets.mail_icon} className="w-6" alt="Footer Logo" />
                    theahmedjoyali@gmail.com
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-8 py-6">
                <p>
                    @ 2026 Ahmed Ali. All rights reserved.
                </p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li>
                        <a target="_blank" href="https://github.com/TheAhmedJoy">LinkedIn</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/TheAhmedJoy">GitHub</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
