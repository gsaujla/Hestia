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
                View your listings?
            </div>
            <div className='dashboard-box-two'>
                Explore other listings?
            </div>
        </div>        
    </div>
    <Footer />
    </>
  )
}

export default dashboard