import React, { useState, useEffect } from 'react';
import Header from "../pages/header";
import Footer from "../pages/footer";
import "../styling/about.css";

function About() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.pageYOffset;
      const thankYouSection = document.querySelector('.animation-text2');
      if (thankYouSection) {
        const sectionTop = thankYouSection.getBoundingClientRect().top;
        const triggerOffset = window.innerHeight * 0.8;
        setShowAnimation(yOffset + triggerOffset >= sectionTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
            <Header />

      <div className="container">
        <div className="animation-text">SO, WHAT IS HESTIA?</div>
      </div>

      <div className="container">
        <div className="line"></div>
      </div>

      <div className='padding'></div>

      <div className='cloudtext1'>
      <p>Are you a student seeking temporary accommodation without the hassle of long-term leases?</p>
      </div>

      <div className='cloudtext2'>
        <p>Or perhaps you're looking to sublease your own apartment during a study break or semester abroad?</p>
      </div>

      <div className='cloudtext3'>
        <p>Look no further than Hestia – the ultimate platform designed exclusively for students to connect, sublease, and find their ideal home away from home.
We at Hestia, a student run platform, provide a platform that is safe and curated specially for finding or posting a sublease.</p>
      </div>

      <div className='cloudtext3'>
        LETS GET STARTED?
      </div>
      <div className='butlist'>
      <button>
        <a href='/listings'>LISTINGS</a>
      </button>
      <button>
        <a href='/list'>SUBLET</a>
      </button>
    </div>

    <div className={`animation-text2 ${showAnimation ? 'show-animation' : ''}`}>
      THANK YOU FOR CHOOSING US!
    </div>
      <div className='padding'></div>

      <Footer />
    </div>
)}

export default About;