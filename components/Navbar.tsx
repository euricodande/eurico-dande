"use client"
import Image from 'next/image';
import React, {useEffect, useRef, useState} from 'react';
import {assets} from "@/assets/assets";
import {useTheme} from "@/app/context/ThemeContext";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const sideMenuRef = useRef<HTMLUListElement | null>(null);
    const {isDarkMode, setIsDarkMode} = useTheme();

    const openMenu = ()=> {
        sideMenuRef.current?.style.setProperty(
            "transform",
            "translateX(-16rem)"
        );
    };

    const closeMenu = ()=> {
        sideMenuRef.current?.style.setProperty(
            "transform",
            "translateX(16rem)"
        );
    };

    useEffect(() => {
       window.addEventListener("scroll", () => {
           if(scrollY > 50) {
               setIsScrolled(true);
           } else {
               setIsScrolled(false);
           }
       });
    });

    return (
        <>
            <div className={"fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden"}>
                <Image src={assets.header_bg_color} alt={"Header Background Colour"} className={"w-full"} loading="eager"/>
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScrolled? "bg-white/50 backdrop-blur-lg shadow-sm" : ""} dark:bg-dark-theme dark:shadow-white/20`}>
                <a href="#top">
                    <Image src={isDarkMode? assets.logo : assets.logo} alt="Logo" className={'w-32 cursor-pointer mr-14'} />
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-2 ${isScrolled? "" : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"}`}>
                    <li>
                        <a className={"font-inter text-sm"} href="#top">Home</a>
                    </li>
                    <li>
                        <a className={"font-inter text-sm"} href="#about">About me</a>
                    </li>
                    <li>
                        <a className={"font-inter text-sm"} href="#services">Services</a>
                    </li>
                    <li>
                        <a className={"font-inter text-sm"} href="#work">My Work</a>
                    </li>
                    <li>
                        <a className={"font-inter text-sm"} href="#contact">Contact Me</a>
                    </li>
                </ul>

                <div className={"flex gap-4"}>
                    <button onClick={() => setIsDarkMode(!isDarkMode)}>
                        <Image src={isDarkMode? assets.sun_icon : assets.moon_icon} alt={"Theme switch icon"} className={"w-6"}></Image>
                    </button>

                    <a href="#contact" className={"hidden lg:flex items-center gap-3 px-7 py-2 border border-gray-500 rounded-full ml-4 font-inter text-sm dark:border-white/50"}>
                        Contact
                        <Image src={isDarkMode? assets.arrow_icon_dark : assets.arrow_icon} alt={"Arrow Icon"} className={'w-3'} />
                    </a>

                    <button className={"block md:hidden ml-3"} onClick={openMenu}>
                        <Image src={isDarkMode? assets.menu_white : assets.menu_black} alt={"Menu Icon"} className={"w-6"} />
                    </button>
                </div>

                {/* -- ----- mobile menu ----- -- */}
                <ul ref={sideMenuRef}
                    className={"flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-dark-hover dark:text-white"}
                    onClick={closeMenu}
                >
                    <div className={"absolute right-6 top-6"}>
                        <Image src={isDarkMode? assets.close_white : assets.close_black} alt={"Close menu icon"} className={"w-5 cursor-pointer"} />
                    </div>
                    <li>
                        <a className={"font-inter text-sm"} href="#top">Home</a>
                    </li>
                    <li>
                        <a className={"font-inter text-sm"} href="#about">About me</a>
                    </li>
                    <li>
                        <a className={"font-inter text-sm"} href="#services">Services</a>
                    </li>
                    <li>
                        <a className={"font-inter text-sm"} href="#work">My Work</a>
                    </li>
                    <li>
                        <a className={"font-inter text-sm"} href="#contact">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;