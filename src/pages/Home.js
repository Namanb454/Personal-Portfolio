import React from 'react'
import Main from '../components/Main';
import About from './About';
import Services from './Services';
import Features from './Features';
import Footer from '../components/Footer';
import ScrollButton from '../components/ScrollButton';
import Pricing from './Pricing';
import Projects from './Projects';
import GetInTouch from './GetInTouch';


function Home() {

  return (
    <div>


      <div className=''>
        <Main />
      </div>

      <div id='about'>
        <About />
      </div>

      <div id='projects'>
        {/* <HeroScroll /> */}
        <Projects />
      </div>

      <div className="overflow-y-scroll">
        <ScrollButton />
      </div>

      <div id='services'>
        <Services />
      </div>

      <div id='features'>
        <Features />
      </div>

      <div id='pricing'>
        {/* <MeteorPreview /> */}
        <Pricing />
      </div>

      <div id='contact'>
        <GetInTouch />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  )
}

export default Home
