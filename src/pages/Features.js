import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from "styled-components";

// import '../Feature.css';
import Aos from 'aos'

const GridComponent = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  const boxData1 = [
    { imageUrl: 'features/js.png', heading: 'JavaScript' },
    { imageUrl: 'features/reactjs.png', heading: 'React JS' },
    { imageUrl: 'features/nextjs.png', heading: 'Next JS' },
    { imageUrl: 'features/mongodb.png', heading: 'MongoDB' },
    { imageUrl: 'features/nodejs.png', heading: 'Node JS' },
    { imageUrl: 'features/django.png', heading: 'Django' },
    { imageUrl: 'features/auth0.png', heading: 'Auth0' },
    { imageUrl: 'features/firebase.png', heading: 'Firebase' },
    { imageUrl: 'features/sanity.png', heading: 'Sanity' },
    { imageUrl: 'features/bootstrap.png', heading: 'Bootstrap' },
    { imageUrl: 'features/tailwind.png', heading: 'Tailwind CSS' },
    // { imageUrl: 'features/cleancode.png', heading: 'Clean Code' },
    // { imageUrl: 'features/customize.png', heading: 'Easy To Customize' },
    // { imageUrl: 'features/googlefont.png', heading: 'Google Font' },
    // { imageUrl: 'features/fontawesomepro.png', heading: 'Font Awesome Pro' },
    // { imageUrl: 'features/responsive.png', heading: 'Responsive Layout' },
    // { imageUrl: 'features/oneclickdemo.png', heading: 'One Click Demo' },
    // { imageUrl: 'features/speedoptimized.png', heading: 'Speed Optimized' },
    // { imageUrl: 'features/unlimitedcolor.png', heading: 'Unlimited Color Option' },
  ];

  return (
    <div className='lg:py-20'>
      <div class="flex flex-col text-center w-full py-10">
        <h1 class="lg:w-[80%] mx-auto lg:text-5xl text-4xl font-bold text-center lg:px-5 py-5 text-white tracking-wider">Tools &
          <span className='lg:text-5xl text-4xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 tracking-widest'> Skills</span> </h1>
      </div>

      <div class="flex max-w-md lg:max-w-none w-auto lg:w-full flex-wrap items-center justify-center lg:justify-between px-5">
        {boxData1.map(data => {
          return (

            <div class="my-4 lg:w-1/6 w-1/3 flex mx-auto items-center justify-center"
              data-aos="fade-up"
              data-aos-delay="300">
              <div>
                <img className='lg:w-20 w-14 rounded-full bg-white p-2' src={data.imageUrl} alt='skills' />
                <h2 className='text-gray-300 mx-auto w-fit font-bold lg:text-base text-sm'>{data.heading}</h2>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
};

export default GridComponent;
