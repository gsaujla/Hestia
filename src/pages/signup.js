// signin.js

import React from 'react';
import '../styling/signup.css';
import image1 from "../images/landing_page/1.jpg";
import image2 from "../images/landing_page/2.jpg";
import image3 from "../images/landing_page/3.jpg";
import { useState, useEffect } from 'react';

// style imports 
// PRATA | ABEL | ?
<style>
    @import url('https://fonts.googleapis.com/css2?family=Prata&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Abel&family=Prata&display=swap');
</style>



function Signup() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId); 
  }, [images.length]);

  return (
    <div className="container">
      <div 
      className="left-box"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        <h1 className='prata-bigheading'>
          <div className='blur-background'>
            CREATE AN ACCOUNT
          </div>
        </h1>
      </div>


      <div className="right-box">
        <h1 className='prata-heading'>WELCOME TO HESTIA</h1>
        <form className='forma'>
          <label htmlFor="email">Enter your email address</label>
          <input type="text" id="email" />
          <br />
          <label htmlFor="uni name">Enter the name of your University</label>
          <input type="text" id="name" />
          <br />
          <label htmlFor="email">Enter your university provided email address</label>
          <input type="text" id="email" />
          <br />
          <label htmlFor="email">Enter your mobile number to contact you</label>
          <input type="text" id="email" />
          <br />
          <label htmlFor="password">Enter your password</label>
          <input type="password" id="password" />
          <br />
          <label htmlFor="password">Confirm your password</label>
          <input type="password" id="password" />
          <br />
        </form>
        <button>CREATE YOUR HESTIA ACCOUNT</button>
        <div className='row-equivalent-down'>
          <div>Already have an account?</div>
            
            <button><a href="/signin">SIGN IN INSTEAD?</a></button>
            <div>
            <a href='/'>return back</a>
            </div>
        </div>
        


      </div>
    </div>
  );
}

export default Signup;


/* 

changes to be made:
1) COLOR SCHEME
2) ADD PICTURE IN BACKGROUND AND BLUR THE WELCOME BACK AREA
3) THE PICTURE SHOULD BE IN ROTATION.

*/  