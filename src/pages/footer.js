import React from 'react'
import "../styling/landing.css"
import insta from "../images/socials_logo/insta.png"
import twitter from "../images/socials_logo/twitter.png"
import linkedin from "../images/socials_logo/linkedin.png"
import facebook from "../images/socials_logo/facebook.png"
import discord from "../images/socials_logo/discord.png"


<style>
@import url('https://fonts.googleapis.com/css2?family=Jaini&display=swap');
</style>

function footer() {
  return (
        <div class='footer'>
            <div className='jaini-regular'>HESTIA</div>
            <ul className='hyperlink-column'>
                <li>ABOUT US</li>
                <li>CONTACT US</li>
                <li>PRIVACY POLICY</li>
                <li>TERMS AND CONDITIONS</li>
            </ul>
            <div className='solid-line'></div>
            <ul className='socials-row'>
                <li><img src={insta} alt='instalogo'/>Instagram</li>
                <li><img src={twitter} alt='twitter'/>Twitter</li>
                <li><img src={discord} alt='discord'/>Discord</li>
                <li><img src={linkedin} alt='linkedin'/>Linkedin</li>
                <li><img src={facebook} alt='facebook'/>Facebook</li>
            </ul>
            <div className='solid-line'></div>
        </div>
  )
}

export default footer