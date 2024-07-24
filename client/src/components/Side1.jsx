import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { SplashButton } from "./Buttons"
import { NavLink } from "react-router-dom";

const Side1 = () => {
    return (
        <section className="relative z-0 overflow-hidden bg-opacity-50 h-[90vh] bg-center bg-no-repeat bg-[url('/bg.jpg')] bg-cover bg-primary bg-blend-multiply">
            <div className="relative z-20 mx-auto my-auto flex max-w-6xl flex-col items-center justify-center px-4 py-12 md:px-8 md:py-18 h-full">
                <motion.div
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.25, ease: "easeInOut" }}
                    className="relative"
                >
                </motion.div>
                <motion.h1
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.25, delay: 0.25, ease: "easeInOut" }}
                    className="mb-3 text-center text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-7xl lg:leading-tight"
                >
                    Styx Shopping
                </motion.h1>
                <motion.p
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.25, delay: 0.5, ease: "easeInOut" }}
                    className="mb-9 max-w-2xl text-center text-base leading-relaxed text-light sm:text-lg md:text-lg md:leading-relaxed"
                >
                    Shop all you want with us
                </motion.p>
                <motion.div
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.25, delay: 0.75, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-6 sm:flex-row"
                >
                    <NavLink to="/shop">
                        <SplashButton className="flex items-center gap-2">
                            View All Products
                            <FiArrowRight />
                        </SplashButton>
                    </NavLink>
                </motion.div>
            </div>
        </section>
    );
};

export default Side1;
