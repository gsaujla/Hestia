import React from 'react'
import Footer from "./footer"
import Sideheader from "./sideheader"
import "../styling/dashboard.css"

function dashboard() {
  return (<>
    <div className='container'>
        <Sideheader />
        <div className='main-container'>
            <div className='dashboard-box-one'>
              <a href='/yourListing'>View your listings?</a>  
            </div>
            <div className='dashboard-box-two'>
              <a href='/listings'> Explore other listings?</a> 
            </div>
        </div>        
    </div>
    <Footer />
    </>
  )
}

export default dashboard