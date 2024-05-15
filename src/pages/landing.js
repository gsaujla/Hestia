import React from 'react'
import "../styling/landing.css"
import Header from "./header"
import Footer from "./footer"
import img1 from "../images/landing_page/1.jpg"
import img2 from "../images/landing_page/2.jpg"
import img3 from "../images/landing_page/3.jpg"
import sciline from "../images/tools/Line-Separator 1.jpg"
import UW from "../images/landing_page/unilogos/UW.png"
import Guelph from "../images/landing_page/unilogos/Guelph.png"
import Conestoga from "../images/landing_page/unilogos/Conestoga.png"
import UFT from "../images/landing_page/unilogos/UFT.png"
import Western from "../images/landing_page/unilogos/western.png"
import frame from "../images/landing_page/Frame.png"

<style>
  @import url('https://fonts.googleapis.com/css2?family=Carrois+Gothic&display=swap');
</style>

function landing() {
  return (<>
  <Header />
    <div className='main-body'>
      <div className='text1'>Hestia is a student run platform changing the way you find or give a sublet, bringing together verified students.</div>
      <div className='text1'>HELPING CIRCUMVENT DISTRUST, HASSLE AND STRESS FROM YOUR HOUSING EXPERIENCE.</div>

      <div className='imglist'>
        <img src={img1} alt='1'></img>
        <img src={img2} alt='2'></img>
        <img src={img3} alt='3'></img>
      </div>

      <img src={sciline} alt='sciline'></img>
      <h1>FOR STUDENTS BY STUDENTS<img src={frame} alt='flag'/></h1>
      
      <div className='para'>
      At Hestia, whether you're a homeowner looking to rent out your space or a renter searching 
      for your next residence, our platform provides the tools and resources you need to navigate 
      the process with confidence. From detailed property listings and secure payment options to 
      responsive customer service, we're committed to making your experience seamless and
      enjoyable.
      </div>

    <div className='butlist'>
      <button>
        <a href='/listings'>LISTINGS</a>
      </button>
      <button>
        <a href='/list'>SUBLET</a>
      </button>
    </div>

      <div>
        PROUDLY ASSISTING STUDENTS FROM DIVERSE INSTITUTIONS
      </div>

    <div className='unilist'>
      <img src={UW} alt='UW'></img>
      <img src={Conestoga} alt='UW'></img>
      <img src={UFT} alt='UW'></img>
      <img src={Guelph} alt='UW'></img>
      <img src={Western} alt='UW'></img>
    </div>
      

    </div>
  <Footer />
  </>
  )
}

export default landing