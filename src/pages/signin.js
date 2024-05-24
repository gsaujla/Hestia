// signin.js

import React from 'react';
import '../styling/signin.css';
import image1 from "../images/landing_page/1.jpg";
import image2 from "../images/landing_page/2.jpg";
import image3 from "../images/landing_page/3.jpg";
import { useState, useEffect } from 'react';

function Signin() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3];

  async function handleSignin () {
    console.log("u have signed in");
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId); 
  }, [images.length]);

  return (
    <div className="signin-container">
      <div className="signin-lefty-box">
        <h1 className='prata-heading'>SIGN IN TO YOUR HESTIA ACCOUNT</h1>
        <form className='forma'>
          <label htmlFor="email">Enter your email address</label>
          <input className="sign-input" type="text" id="email" />
          <br />
          <label htmlFor="password">Enter your password</label>
          <input className="sign-input" type="password" id="password" />
          <br />
        </form>

        <div class='checkbox-container'>
          <label>Keep me signed in</label>
          <input type="checkbox" class='checkbox'/> 
        </div>

          
        
        <button onClick={() => handleSignin()}>Sign in</button>
        <div className='row-equivalent-down'>
          <div>Dont have an account?</div>
        <button><a href="/signup">CREATE AN ACCOUNT INSTEAD?</a></button>
        </div>
        <a href='/'>return back</a>
      </div>
      <div className="signin-righty-box" style={{ backgroundImage: `url(${images[currentImageIndex]})`, height:  `100vh` }}>
        <div className='blur-background'>
          <h1 className='prata-bigheading'>WELCOME BACK</h1>
        </div>
      </div>
    </div> 
  );
}

export default Signin;
