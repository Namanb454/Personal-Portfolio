import React, { useEffect } from 'react'
import { Meteors } from '../components/Meteors'
import { motion } from "framer-motion";
import Aos from 'aos'

function Pricing() {
    useEffect(() => {
        Aos.init()
    }, [])

    const price = [
        {
            "title": "Essential",
            "price": "₹ 800/hour",
            "desc1": "Require few pages only.",
            "desc2": "Delineation of work's scope lacks clarity.",
            "desc3": "Fix something in the website.",
            "desc4": "Adding Data.",
            "desc5": "Economically viable",
            "desc6": "Prompt and Efficient Delivery",
        },
        {
            "title": "Project Oriented",
            "price": "Personalized Quotation",
            "desc1": "Comprehensive website.",
            "desc2": "Clear Scope of Work.",
            "desc3": "Unlimited services",
            "desc4": "Easily Scalable",
            "desc5": "Advance Functionality",
            "desc6": "Prompt and Efficient Delivery",
        },
        {
            "title": "Progression",
            "price": "Personalized Quotation",
            "desc1": "Data-Driven Designs",
            "desc2": "Comprehensive website",
            "desc3": "Custom Solutions",
            "desc4": "High Performance.",
            "desc5": "Advance Functionality",
            "desc6": "Priority Support",
        }
    ]
    const style = {
        // fontFamily: 'Trebuchet MS',
    }
    const buttonstyle = {
        boxShadow: "10px 10px black",
    }
    return (
        <div>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 lg:py-20 py-10 mx-auto">

                    <div class="flex flex-col text-center w-full">
                        <h1 class="lg:w-[80%] mx-auto lg:text-5xl text-2xl font-bold text-center lg:px-5 py-5 text-white tracking-wider" style={style}>All Businesses Can Benefit from
                            <span className='lg:text-5xl text-4xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 tracking-widest'> Flexible Payment</span> Options.</h1>

                    </div>
                    <div class="flex flex-wrap -m-4">

                        {price.map(data => {
                            return (

                                <div class="lg:py-10 py-2 lg:px-5 xl:w-1/3 md:w-1/2 w-full "
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <div class="h-full p-6 rounded-lg  flex flex-col relative overflow-hidden">
                                        <div className="absolute inset-0 h-full w-full rounded-full blur-3xl" />
                                        <div className="relative shadow-xl  bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-700  border-2 border-gray-300  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col ">
                                            <h1 class="text-3xl text-center font-bold tracking-widest text-slate-300 pb-4 mb-4 border-b border-gray-200 leading-none">{data.title}</h1>

                                            <h1 class="text-xl text-center items-center font-bold tracking-wide py-2 mb-4 shadow-inner shadow-white drop-shadow-2xl border-gray-200 leading-none  text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">{data.price}</h1>

                                            <p class="flex items-center text-white font-semibold tracking-wider mb-2">
                                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex-shrink-0">
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                        <path d="M20 6L9 17l-5-5"></path>
                                                    </svg>
                                                </span>{data.desc1}
                                            </p>
                                            <p class="flex items-center text-white font-semibold tracking-wider mb-2">
                                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex-shrink-0">
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                        <path d="M20 6L9 17l-5-5"></path>
                                                    </svg>
                                                </span>{data.desc2}
                                            </p>
                                            <p class="flex items-center text-white font-semibold tracking-wider mb-2">
                                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex-shrink-0">
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                        <path d="M20 6L9 17l-5-5"></path>
                                                    </svg>
                                                </span>{data.desc3}
                                            </p>
                                            <p class="flex items-center text-white font-semibold tracking-wider mb-2">
                                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex-shrink-0">
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                        <path d="M20 6L9 17l-5-5"></path>
                                                    </svg>
                                                </span>{data.desc4}
                                            </p>
                                            <p class="flex items-center text-white font-semibold tracking-wider mb-2">
                                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex-shrink-0">
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                        <path d="M20 6L9 17l-5-5"></path>
                                                    </svg>
                                                </span>{data.desc5}
                                            </p>
                                            <p class="flex items-center text-white font-semibold tracking-wider mb-6">
                                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex-shrink-0">
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                        <path d="M20 6L9 17l-5-5"></path>
                                                    </svg>
                                                </span>{data.desc6}
                                            </p>
                                            <motion.a
                                                whileTap={{
                                                    scale: 0.8,
                                                    borderRadius: "100%",
                                                }}
                                                data-te-ripple-init
                                                data-te-ripple-color="light"
                                                href='#contact' class="flex items-center mt-auto text-white bg-gradient-to-r from-cyan-500 to-blue-500 border-0 py-2 px-4 w-fit mx-auto focus:outline-none hover:bg-gray-500 font-bold rounded " style={buttonstyle} >Start Building
                                            </motion.a>
                                            <Meteors number={20} />
                                        </div>
                                    </div>
                                </div>
                                // </div>
                            )
                        })}
                    </div>
                    <div class="flex flex-col text-center w-full">
                        <p class="w-full mx-auto lg:text-sm text-xs text-center text-gray-300 tracking-wider" style={style}>All Do you require assistance in selecting the optimal plan? Feel free to <span className='text-white font-bold'>Contact Us</span> without any hesitation.</p>

                    </div>
                </div>

            </section >
        </div >
    )
}

export default Pricing
