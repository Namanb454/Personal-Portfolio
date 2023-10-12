import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Navbar from '../components/Navbar';
import { Header } from './Header';
import AnimatedButton from './AnimatedButton';
import Aos from 'aos';

export function Main() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className='bg-black'>
      <div className='lg:pb-0 pb-10 overflow-hidden relative'>
        <Header />
        <div className=" w-full lg:h-screen h-[70vh] overflow-hidden bg-cover"
          style={{
            backgroundImage: 'url(bg-video3.gif'
          }}>
          <div className='lg:w-full w-full fixed text-white text-center z-10'>
            <Navbar />
          </div>

          <section class="text-white body-font my-32">
            <div class=" w-full mx-auto px-10  md:flex-row flex flex-col items-center">

              {/* <div className="mockup-code w-full bg-opacity-50 items-start mr-auto">
              <pre data-prefix="$"><code>Hello World</code></pre>
            </div> */}
              <div class="lg:flex-grow flex md:w-1/3 mb-16 md:mb-0 items-center text-center">

                <div className='w-1/2 flex-grow'>
                  <h2 className='w-full lg:text-2xl text-lg font-bold lg:text-left text-center lg:mx-0 py-2 md:mb-10 tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-violet-500 via-cyan-200 to-white' id='signupHeading'
                    data-aos="zoom-out-right"
                    data-aos-duration="200">
                    Hey!<span className='lg:text-5xl text-2xl text-white lg:text-left text-center'> Naman </span>this side
                    {/* <div className='flex text-5xl items-center'> */}
                    <br />
                    &nbsp;

                    <div className='lg:w-full w-fit lg:text-3xl flex text-lg lg:text-left text-center font-bold lg:mx-0 mx-auto text-white/[0.8]' id='signupsubHeading'>
                      <h3 className='text-white'
                        data-aos="zoom-out-right"
                        data-aos-duration="400"
                      >I'm a&nbsp;</h3>
                      <Typewriter

                        options={{
                          autoStart: true,
                          loop: true,
                          delay: 40,
                          strings: [
                            "Freelancer", "Frontend Developer", "Backend Developer", "FullStackDeveloper", "Data Analyst", "Badminton Player", "Chess Player"
                          ],
                        }} />
                      {/* </div> */}
                    </div>
                  </h2>
                  <div class=" w-full md:justify-start items-end">
                    <h3 className='text-gray-300 lg:text-base text-xs lg:mx-0 lg:text-justify text-center tracking-normal'
                      data-aos="zoom-out-right"
                      data-aos-duration="400">
                      Web development: Where creativity meets code, and innovation becomes interactive. </h3>
                  </div>

                  for mobile image
                  <div class="lg:max-w-xl lg:w-1/3 md:w-1/2 z-0 ">
                    <img src="profile2.png" alt="Profile" className='items-start w-[50%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full h-full transition-transform' data-aos="zoom-in-left"
                      data-aos-duration="1000" />
                  </div>

                  <div className='lg:flex lg:my-20 my-5 w-fit relative z-0'>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      className='lg:my-0 my-5'
                    >
                      <AnimatedButton />
                    </div>
                    <div
                      data-aos="fade-down"
                      data-aos-duration="2000"
                    >
                      <a href='NamanBansalPersonalResume.pdf' download className=' mx-10 relative text-lg py-2 px-10 w-40 h-10 border-b-4 border-white rounded-sm bg-white/[0.8] text-black/[0.8] tracking-widest font-semibold text-center hover:bg-transparent hover:text-white'>Download CV </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Desktop */}
              <div class="lg:max-w-xl lg:w-1/3 md:w-1/2 z-0 ">
                <img src="profile2.png" alt="Profile" className='items-start w-[50%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full h-full transition-transform' data-aos="zoom-in-left"
                  data-aos-duration="1000" />
              </div>
            </div>


          </section>
        </div>
      </div>
    </div>
  );
}
