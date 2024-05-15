import React from 'react'
import Footer from "./footer"
import Sideheader from "./sideheader"
import "../styling/dashboard.css"

function dashboard() {
  return (<>
    <div className='container'>
        <Sideheader />
            <div>
                View your listings
            </div>
            <div>
                Box 2
            </div>
            <div>
                Box 3
            </div>
            <div>
                Box 4
            </div>
    </div>
    <Footer />
    </>
  )
}

export default dashboard