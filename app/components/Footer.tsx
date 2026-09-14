import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

interface FooterProps {
    isDarkMode: boolean
}

export default function Footer({ isDarkMode }: FooterProps) {
    return (
        <footer className="mt-20">
            <div className="text-center">
                <Image src={isDarkMode? assets.logo_dark : assets.logo} className="w-36 mx-auto mb-6" alt="Ahmed Ali" />
                <div className="w-max flex items-center gap-2 mx-auto">
                    <Image src={assets.mail_icon} className="w-6" alt="" />
                    theahmedjoyali@gmail.com
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-8 py-6">
                <p>
                    © 2026 Ahmed Ali. All rights reserved.
                </p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ahmedjoyali/">
                            LinkedIn
                            <span className="sr-only">(opens in a new tab)</span>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/TheAhmedJoy">
                            GitHub
                            <span className="sr-only">(opens in a new tab)</span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
