import React, { useEffect } from 'react'
// import React from 'react'
import { Aboutuscontent } from '../components/Aboutuscontent';
import Aos from 'aos'

function About() {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className='lg:py-20 py-20'>
                    <div className="container mx-auto px-5 py-5 md:flex-row flex-col items-center">

                    </div>

                    <div className="container mx-auto flex px-5 md:flex-row flex-col ">
                        <div className=" lg:w-1/2 md:w-1/2 w-full mb-10 md:mb-0">
                            <h2 className='py-3 w-full lg:px-16 lg:text-left text-center lg:text-6xl text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-violet-500 to-[#ea3d1e]'
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-offset="0">
                                <span className='w-full lg:text-4xl text-2xl tracking-wider text-white'>Creating </span>
                                {/* <br /> */}
                                <span className='lg:text-5xl text-3xl'>Unforgettable</span>
                                <br />
                                <span className='w-full lg:pr-20 lg:text-4xl text-3xl tracking-wider lg:text-white'>Digital </span>
                                {/* <br /> */}
                                <span className='lg:text-5xl text-2xl lg:text-transparent text-white'>Experiences</span>
                            </h2>
                            {/* <img className='w-60 mx-auto' src='profile.jpg' /> */}
                        </div>

                        <div className="lg:flex-grow md:w-[10%] lg:pl-10 md:pl-16 flex flex-col md:items-start md:text-left text-white">
                            <Aboutuscontent />
                        </div>
                    </div>
                </div>

                {/* <div className='lg:py-10 pt-0 pb-10'>
                    <div className="container mx-auto px-5 py-5 md:flex-row flex-col items-center">
                        <h2 className='lg:text-5xl text-center text-3xl font-bold text-[#ec634b]'>Why Choose siteScript?</h2>
                    </div>

                    <div className=" w-[100%] lg:hidden md:hidden md:w-1/2 mb-10 md:mb-0">
                        <img className="w-full object-cover object-center rounded" alt="hero" src="about1.png" />
                    </div>
                    <div className="container mx-auto flex px-5 py-0 md:flex-row flex- items-center">

                        <div className="lg:flex-grow md:w-[10%] lg:pl-10 md:pl-16 flex flex-col md:items-start md:text-left text-white">
                            <section className="text-gray-600 body-font py-5">
                                <div className="container px-5 py-5 mx-auto">
                                    <div className="flex flex-wrap -m-4">
                                        {about.map(data => {
                                            return (
                                                <div key={data.id} className="">
                                                    <div className="flex sm:flex-row flex-col items- sm:justify-start text-center sm:text-left">
                                                        <span className="flex-shrink-0 lg:text-6xl text-3xl text-[#9288F8] font-serif font-bold mx-auto rounded-lg w-[25%] h-[30%]">{data.sn}</span>
                                                        <div className="flex-grow pl-5">
                                                            <h2 className="title-font font-bold text-xl text-[#ec634b]">{data.q}</h2>
                                                            <p className="mb-4 text-sm text-gray-300 lg:text-start text-center">{data.ans}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className=" lg:w-[50%] md:w-1/2 w-0 mb-10 md:mb-0">
                            <img className="w-full h-[50vh] object-cover object-center rounded" alt="hero" src="about1.png" />
                        </div>
                    </div>
                </div> */}
            </section>
        </div>
    )
}

export default About
