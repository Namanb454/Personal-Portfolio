import React, { useState, useEffect, useRef } from 'react';
import { motion, Variants, useScroll } from "framer-motion";

import { Link } from 'react-router-dom';

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};


const Navbar = () => {
    const { scrollYProgress } = useScroll()
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const [isOpen, setIsOpen] = useState(false);

    // const [isNavOpen, setIsNavOpen] = useState(false);
    let menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })

    const navbar = [
        // { 'id': '1', 'nav': 'Intro', 'link': '#' },
        { 'id': '2', 'nav': 'About', 'link': '#about' },
        { 'id': '5', 'nav': 'Projects', 'link': '#projects' },
        { 'id': '3', 'nav': 'Services', 'link': '#services' },
        { 'id': '5', 'nav': 'Resume', 'link': '#Demo' },
        { 'id': '4', 'nav': 'Pricing', 'link': '#pricing' },
        // { 'id': '4', 'nav': 'Contact Us', 'link': '#contack' },
    ];
    const [navSize, setnavSize] = useState("5rem");
    const [navColor, setnavColor] = useState("transparent");
    const [textcolor, settextcolor] = useState("white");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("white") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("4rem") : setnavSize("5rem");
        window.scrollY > 10 ? settextcolor("#6527BE") : settextcolor("white");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <nav style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 0.5s",
            color: textcolor,
        }}>
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <motion.div className=" w-full flex items-center container" variants={container} initial="hidden"
                        animate="visible"
                    >
                        <div className="flex-shrink-0">
                            {/* <img className="h-8 w-8" src="/logo.svg" alt="Logo" /> */}
                            <a href='#' className='lg:text-2xl text-xl font-semibold tracking-wider'>Naman Bansal</a>
                        </div>
                        <motion.div className="hidden md:block ml-auto ">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navbar.map(data => {

                                    return (
                                        <motion.a key={data.id}
                                            href={data.link}
                                            className="transition-all relative group tracking-wide px-3 py-2 rounded-md text-base hover:tracking-widest scroll-smooth hover:scroll-auto item" variants={item}
                                        >
                                            <span>{data.nav}</span>
                                            <span className="absolute transition-all ease-in-out duration-1000 -bottom-1 left-1/2 w-0 h-[2px] bg-white group-hover:w-1/2 group-hover:transition-all "></span>
                                            <span className="absolute transition-all ease-in-out duration-1000 -bottom-1 right-1/2 w-0 h-[2px] bg-white group-hover:w-1/2 group-hover:transition-all"></span>
                                            <span className="absolute left-0 -bottom-1 w-full rounded-full h-[2px] bg-[#6527BE] transition-all ease-in-out duration-1000 -z-10 group-hover:h-full group-hover:transition-all"></span>
                                        </motion.a>

                                    )
                                })}

                                <a
                                    href="#contact"
                                    className="tracking-wider items-end justify-end text-white font-semibold bg-[#6527BE] hover:bg-white border-2 border-[#9681EB] hover:text-[#6527BE] px-5 py-[5px] rounded-full text-base transition-all ease-in-out duration-500"
                                >
                                    Get In Touch</a>

                            </div>
                        </motion.div>
                    </motion.div>





                    <motion.section initial={false}
                        animate={isOpen ? "open" : "closed"} className="MOBILE-MENU flex lg:hidden md:ml-auto" ref={menuRef}>

                        <motion.div
                            className="HAMBURGER-ICON space-y-2"
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="block h-0.5 w-7 bg-[#6527BE] transition-all ease-in-out duration-1000"></span>
                            <span className="block h-0.5 w-7 bg-[#6527BE] transition-all ease-in-out duration-1000"></span>
                            <span className="block h-0.5 w-7 bg-[#6527BE] transition-all ease-in-out duration-1000"></span>
                        </motion.div>

                        <div className={isOpen ? "showMenuNav rounded-b-2xl transition-all ease-in-out duration-1000" : "hideMenuNav"}>
                            <div
                                className="absolute  top-0 right-0 md:px-10 px-3 py-[4%] transition-all ease-in-out duration-1000"
                                onClick={() => setIsOpen(false)}
                            >
                                <svg
                                    className="h-9 w-10 text-[#6527BE] transition-all ease-in-out duration-1000"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <div
                                className={`${isOpen ? 'block' : 'hidden'
                                    } md:hidden transition-all ease-in-out duration-1000`}
                                id="mobile-Homeu"
                                ref={menuRef}
                            >
                                <motion.div
                                    variants={{
                                        open: {
                                            clipPath: "inset(0% 0% 0% 0% round 10px)",
                                            transition: {
                                                type: "spring",
                                                bounce: 0,
                                                duration: 0.7,
                                                delayChildren: 0.3,
                                                staggerChildren: 0.05
                                            }
                                        },
                                    }}
                                    style={{ pointerEvents: isOpen ? "auto" : "none" }}
                                    className="px-2 pt-4 pb-3 space-y-1 sm:px-3 transition-all ease-in-out duration-1000" ref={menuRef}>

                                    <div className="flex-shrink-0 transition-all ease-in-out duration-1000">
                                        {/* <img className="h-8 w-8" src="/logo.svg" alt="Logo" /> */}
                                        <Link to='/' className='lg:text-2xl text-[#6527BE] text-xl font-semibold tracking-wider'>Naman Bansal</Link>
                                    </div>

                                    {navbar.map(data => {
                                        return (

                                            <motion.a variants={itemVariants} key={data.id}
                                                href={data.link}
                                                className="text-[#6527BE] font-bold hover:tracking-widest scroll-smooth hover:scroll-auto transition-all block px-3 py-2 rounded-md text-base"
                                            >
                                                {data.nav}
                                                <span className="absolute transition-all ease-in-out duration-1000 -bottom-1 left-1/2 w-0 h-[2px] bg-white group-hover:w-1/2 group-hover:transition-all "></span>
                                                <span className="absolute transition-all ease-in-out duration-1000 -bottom-1 right-1/2 w-0 h-[2px] bg-white group-hover:w-1/2 group-hover:transition-all"></span>
                                            </motion.a>
                                        )
                                    })}
                                    <a
                                        href="#contact"
                                        className="w-fit mx-auto text-white font-semibold bg-[#6527BE] hover:bg-white border-2 border-[#9681EB] transition-all hover:text-[#6527BE] block px-5 py-[5px] rounded-full text-base"
                                    >
                                        Get In Touch
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>
                    <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 40vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
                </div>
            </div>

            {/* Mobile Homeu, toggle classes based on Homeu state */}
            <motion.div
                className="fixed h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 progress-bar"
                style={{ scaleX: scrollYProgress }}
            />

        </nav>
    );
};

export default Navbar;
