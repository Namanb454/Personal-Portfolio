import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from "styled-components";

// import '../Feature.css';
import Aos from 'aos'

const GridComponent = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  const boxData1 = [
    { imageUrl: 'features/js.png', delay: '100', heading: 'JavaScript' },
    { imageUrl: 'features/reactjs.png', delay: '150', heading: 'React JS' },
    { imageUrl: 'features/nextjs.png', delay: '200', heading: 'Next JS' },
    { imageUrl: 'features/mongodb.png', delay: '250', heading: 'MongoDB' },
    { imageUrl: 'features/nodejs.png', delay: '300', heading: 'Node JS' },
    { imageUrl: 'features/django.png', delay: '350', heading: 'Django' },
    { imageUrl: 'features/auth0.png', delay: '400', heading: 'Auth0' },
    { imageUrl: 'features/firebase.png', delay: '450', heading: 'Firebase' },
    { imageUrl: 'features/sanity.png', delay: '500', heading: 'Sanity' },
    { imageUrl: 'features/bootstrap.png', delay: '550', heading: 'Bootstrap' },
    { imageUrl: 'features/tailwind.png', delay: '600', heading: 'Tailwind CSS' },
  ];

  return (
    <div className='lg:py-20 py-20'>
      <div className='bg-white/60 lg:mx-[10%] mx-[5%] rounded-3xl'>
        <div class="flex flex-col text-center w-full py-5">
          <h1 class="lg:w-[80%] mx-auto lg:text-5xl text-4xl font-bold text-center lg:px-5 py-5 text-black tracking-wider" data-aos="zoom-out-right" data-aos-delay="100">Tools &
            <span className='lg:text-5xl text-4xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 tracking-widest'> Skills</span> </h1>
        </div>

        <div class="flex max-w-md lg:max-w-none w-auto lg:w-full flex-wrap items-center justify-center lg:justify-between px-5">
          {boxData1.map(data => {
            return (

              <div class="my-4 lg:w-1/6 w-1/3 flex mx-auto items-center justify-center">
                <div>
                  <img className='lg:w-16 w-14 rounded-full bg-white p-2' src={data.imageUrl} alt='skills' data-aos="zoom-out-right" data-aos-delay={data.delay} />
                  <h2 className='text-gray-700 mx-auto w-fit font-bold lg:text-base text-sm' data-aos="zoom-out-right" data-aos-delay={data.delay}>{data.heading}</h2>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
};

export default GridComponent;
