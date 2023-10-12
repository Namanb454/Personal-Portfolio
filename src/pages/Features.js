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
        { imageUrl: 'features/asp.png', heading: 'ASP.NET' },
        { imageUrl: 'features/sanity.png', heading: 'Sanity' },
        { imageUrl: 'features/bootstrap.png', heading: 'Bootstrap' },
        { imageUrl: 'features/tailwind.png', heading: 'Tailwind CSS' },
        { imageUrl: 'features/cleancode.png', heading: 'Clean Code' },
        { imageUrl: 'features/customize.png', heading: 'Easy To Customize' },
        { imageUrl: 'features/googlefont.png', heading: 'Google Font' },
        { imageUrl: 'features/fontawesomepro.png', heading: 'Font Awesome Pro' },
        { imageUrl: 'features/responsive.png', heading: 'Responsive Layout' },
        { imageUrl: 'features/oneclickdemo.png', heading: 'One Click Demo' },
        { imageUrl: 'features/speedoptimized.png', heading: 'Speed Optimized' },
        { imageUrl: 'features/unlimitedcolor.png', heading: 'Unlimited Color Option' },
    ];

    return (
        <div>
            <div className='lg:w-[100%] lg:h-[40vh] h-[20vh] relative flex items-center justify-center'>
                <div className='w-full h-fit flex items-center justify-center flex-col'>
                    <Marquee className='Marquee'>
                        <MarqueeGroup className=''>
                            {boxData1.map((el) => (
                                <ImageGroup className='lg:w-full w-full'>
                                    <Image src={el.imageUrl} className='lg:w-28 w-full bg-cover lg:px-3 px-1 ' />
                                </ImageGroup>
                            ))}
                        </MarqueeGroup>
                        <MarqueeGroup className=''>
                            {boxData1.map((el1) => (
                                <ImageGroup className='lg:w-full w-full'>
                                    <Image src={el1.imageUrl} className='lg:w-28 w-full bg-cover lg:px-3 px-1 ' />
                                </ImageGroup>
                            ))}
                        </MarqueeGroup>
                    </Marquee>
                </div>
            </div>
        </div>
    )
};

export default GridComponent;
const Marquee = styled.div`
  display: flex;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  white-space: nowrap;
  width: 200%;
  animation: ${scrollX} 20s linear infinite;  
`;

// const style = {
//     '@media (max-width: 600px)': {
//         width: '100%',
//         justify: 'space-evenly',
//     },
// }

const MarqueeGroup = styled.div`
  ${common}
  
`;

const ImageGroup = styled.div`
  display: ;
  place-items: ;
  padding: 0px;
`;

const ResponsiveImage = {
    '@media (max-width: 600px)': {
        width: '20vw',
        height: '10vh',
        padding: '10'
    },
}

const Image1 = {
    width: '10rem',
    height: '20vh',
    padding: '0'
}

const Image = styled.img`

`;
