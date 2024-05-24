import React from 'react'
import Sideheader from "./sideheader"
import Footer from "./footer"

function contact() {
  return (
    <>
    <div className='container'>
        <Sideheader />
        <div className='main-container'>
            <div className='dashboard-box-for-yourListing'>
                <h1>Contact us on the following email:</h1>
                <h2>email...</h2>
            </div>
        </div>        
    </div>
    <Footer />
    </>
  )
}

export default contact