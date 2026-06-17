import React from 'react';
import {assets, serviceData} from "@/assets/assets";
import Image from "next/image";
import {motion} from "motion/react"

const Services = () => {
    return (
        <motion.section id="services" className={"w-full px-[12%] py-10 scroll-mt-20"}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}>
            <motion.h4 className={"text-center mb-2 text-lg font-inter"}
                initial={{opacity: 0, y: -20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.3}}>
                What I offer
            </motion.h4>
            <motion.h2 className={"text-center text-5xl font-inter"}
               initial={{opacity: 0, y: -20}}
               whileInView={{opacity: 1, y: 0}}
               transition={{duration: 0.5, delay: 0.5}}>
                My Services
            </motion.h2>

            <motion.p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-inter"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.5, delay: 0.7}}>
                My skills range from creating desktop applications to web applications. I am very versatile and learn
                quickly, as I am always trying to do and be better; in short, I'd say I am a real mystery box.
            </motion.p>

            <motion.div className={"grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10"}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.9}}>
                {serviceData.map(({icon, title, description, link}, index) => (
                    <motion.div key={index}
                    className={"border border-gray-400 rounded-lg px-8 py-12 hover:shadow-card-black cursor-pointer " +
                        "hover:bg-light-hover hover:-translate-y-1 duration-500 dark:hover:bg-dark-hover " +
                        "dark:hover:shadow-white"}
                    whileHover={{scale: 1.05}}>
                        <Image src={icon} alt={"Service icon"} className={"w-10"} />
                        <h3 className={"text-lg my-4 text-gray-700 dark:text-white"}>{title}</h3>
                        <p className={"text-sm text-gray-600 leading-5 dark:text-white/80"}>
                            {description}
                        </p>
                        <a href={link} className={"flex items-center gap-2 text-sm mt-5"}>
                            Read more <Image src={assets.right_arrow} alt={"Right arrow"} className={"w-4"} />
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Services;