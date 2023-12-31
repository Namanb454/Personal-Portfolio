import React, { useEffect } from 'react'
// import React from 'react'
import { Aboutuscontent } from '../components/Aboutuscontent';
import Aos from 'aos'

function About() {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div id='naman'>
            <section className="text-gray-600 body-font">
                <div className='lg:py-20 py-20'>
                    <div className="container mx-auto px-5 py-5 md:flex-row flex-col items-center">

                    </div>

                    <div className="container mx-auto flex px-5 md:flex-row flex-col ">
                        <div className=" lg:w-1/2 md:w-1/2 w-full mb-10 md:mb-0">
                            <h2 className='py-3 w-full lg:px-16 lg:text-left text-center lg:text-6xl text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-violet-500 to-[#ea3d1e]'
                            >
                                <span className='w-full lg:text-4xl text-2xl tracking-wider text-white'
                                    data-aos="zoom-out-right"
                                    data-aos-duration="1000"
                                    data-aos-delay="300"
                                >Creating </span>
                                {/* <br /> */}
                                <span className='lg:text-5xl text-3xl'
                                    data-aos="zoom-out-right"
                                    data-aos-duration="1000"
                                    data-aos-delay="400"
                                >Unforgettable</span>
                                <br />
                                <span className='w-full lg:pr-20 lg:text-4xl text-3xl tracking-wider lg:text-white'
                                    data-aos="zoom-out-right"
                                    data-aos-duration="1000"
                                    data-aos-delay="500"
                                >Digital </span>
                                {/* <br /> */}
                                <span className='lg:text-5xl text-2xl lg:text-transparent text-white'
                                    data-aos="zoom-out-right"
                                    data-aos-duration="1000"
                                    data-aos-delay="600"
                                >Experiences</span>
                            </h2>
                            {/* <img className='w-60 mx-auto' src='profile.jpg' /> */}
                        </div>

                        <div className="lg:flex-grow md:w-[10%] lg:pl-10 md:pl-16 flex flex-col md:items-start md:text-left text-white">
                            <Aboutuscontent />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
