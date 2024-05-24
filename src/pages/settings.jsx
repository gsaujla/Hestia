import React from 'react'
import Footer from "./footer"
import Sideheader from "./sideheader"

export default function settings() {
  return (
    <>
    <div className='container'>
        <Sideheader />
        <div className='main-container'>
            <div className='dashboard-box-for-yourListing'>
                <h1>Settings</h1>
                <h2>Delete account?</h2>
                <h2>What else? ...</h2>
            </div>
        </div>        
    </div>
    <Footer />
    </>
  )
}
