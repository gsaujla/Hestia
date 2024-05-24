import React from 'react'
import Footer from "./footer"
import SideHeader from "./sideheader"

import "../styling/yourListing.css"

function yourListings() {
  return (<>
      <div className='container'>
        <SideHeader />
            <div className='main-container'>
                <div className='dashboard-box-for-yourListing'>
                    You currently dont have a listing
                    <button className='yourListingButton'>
                     <a href='/list'>Add a sublet?</a> 
                    </button>
                </div>
            </div>
        </div>     
        <Footer />
        </>
  )
}

export default yourListings