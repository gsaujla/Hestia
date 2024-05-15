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
                    <a href='/profile'>Profile</a>
                </li>
                <li>
                    <a href='/settings'>Settings</a>
                </li>
                <li>
                    <a href='/help'>Help</a>
                </li>
                <li>
                    <a href='/logout'>Logout</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default header