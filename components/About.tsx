import React from 'react';
import Image from "next/image";
import {assets, infoList, toolsData} from "@/assets/assets";
import {useTheme} from "@/app/context/ThemeContext";
import {motion} from "motion/react"

const About = () => {

    const {isDarkMode} = useTheme();

    return (
        <motion.section id="about" className={"w-full px-[12%] py-10 scroll-mt-20"}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}>
            <motion.h4 className={"text-center mb-2 text-lg font-inter"}
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.3}}>
                Introduction
            </motion.h4>

            <motion.h2 className={"text-center text-5xl font-inter"}
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}>
                About me
            </motion.h2>

            <motion.div className={"flex w-full flex-col lg:flex-row items-center gap-20 my-20"}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8}}
            >
                <motion.div className={"w-64 sm:w-80 rounded-2xl max-w-none"}
                initial={{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 0.6}}>
                    <Image src={assets.user_image} alt={"User Image"} className={"w-full rounded-3xl"} loading="eager"/>
                </motion.div>
                <motion.div className={"flex-1"}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, delay: 0.8}}>
                    <motion.p className={"mb-10 max-w-2xl font-inter"}
                      initial={{opacity: 0}}
                      whileInView={{opacity: 1}}
                      transition={{duration: 0.5, delay: 0.7}}>
                        I am a hardworking software developer. I have had the privilege of developing some apps through
                        collaborations with incredible people, and they have contributed a lot to who I am becoming and
                        the things I have been learning throughout this wonderful journey.
                    </motion.p>
                    <motion.ul className={"grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"}
                               initial={{opacity: 0}}
                               whileInView={{opacity: 1}}
                               transition={{duration: 0.8, delay: 1}}>
                        {infoList.map(({icon, iconDark, title, description}, index) => (
                            <motion.li className={"border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer " +
                                "hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-card-black " +
                                "dark:border-white dark:hover:shadow-white dark:hover:bg-dark-hover/50"} key={index}
                                whileHover={{scale: 1.05}}>
                                <Image src={isDarkMode? iconDark : icon} alt={title} className={"w-7 mt-3"} />
                                <h3 className={"my-4 font-semibold text-gray-700 dark:text-white"}>{title}</h3>
                                <p className={"text-gray-600 text-sm dark:text-white/80"}>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.h4 className={"my-6 text-gray-700 font-inter dark:text-white/80"}
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 1.3}}>
                        Tools I use
                    </motion.h4>
                    <motion.ul className={"flex items-center gap-3 sm:gap-5"}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.6, delay: 1.5}}>
                        {toolsData.map((tool, index) => (
                            <motion.li className={"flex items-center justify-center w-12 sm:w-14 aspect-square border " +
                                "border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"}
                                whileHover={{scale: 1.1}}
                                key={index}>
                                <Image src={tool} alt={"Tool"} className={"w-5 sm:w-7"} />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default About;