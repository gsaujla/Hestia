import React from 'react'
import "../styling/landing.css"
import logo from "../images/landing_page/Logo.png"

function header() {
  return (
    <div>
        <div className='sideheader'>
            <h1 className='top-logo-name'>
                <a href='/'><img src={logo} alt='logo'/></a>
            </h1> 
            <ul>
                <li>
                    <a href='/listings'>Listings</a>
                </li>
                <li>
                    <a href='/list'>Sublet</a>
                </li>
                <li>
                    <a href='/about'>About us</a>
                </li>
                <li>
                    <a href='/signin'>Login</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default header