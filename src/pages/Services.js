import { useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
import { services } from '../content'
import Aos from 'aos'


function Services() {
    useEffect(() => {
        Aos.init()
    }, [])


    return (
        <div id='services' className='text-white lg:py-0 py-10'>
            <section className="text-white body-font">
                <div className="container px-5 lg:py-20 py-10 mx-auto">

                    <h2 className='lg:text-5xl text-2xl my-5 font-bold text-center px-5 text-white tracking-wider'>Offer Professional<span className="lg:text-5xl text-4xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"> Services</span></h2>
                    <div className="flex flex-wrap -m-4">
                        {services.map(data => {
                            return (
                                <div key={data.id} className="py-10 px-5 lg:w-1/3 bg-cover lg:h-[60vh] h-[40vh]"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <div className="h-full bg-transparent border-[#8062D6] hover:bg-[#6527BE] hover:text- transition-all border-[1px] bg-opacity-75 lg:px-10 px-2 pt-10 pb-10 rounded-lg overflow-hidden relative">
                                        <div className='flex'>
                                            <h1 className="w-full title-font lg:text-2xl text-xl items-center lg:my-0 my-auto lg:text-left font-bold  lg:tracking-widest tracking-wide text-slate-300">{data.heading}</h1>
                                            <img className='w-1/5 h-1/5 lg:mx-0 mx-auto' src={data.img} alt='img' />
                                        </div>
                                        <p className="leading-relaxed text-white font-semibold lg:text-left text-sm  tracking-wide">{data.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/*text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-violet-500 to-white */}
            </section>
        </div>
    )
}

export default Services
