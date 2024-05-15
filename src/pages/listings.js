import React from 'react'
import Header from "../pages/header";
import Footer from "../pages/footer";
import FilterBox from "../pages/filterbox"


function listings() {
  return (<>
      <Header />
      <div className='container'>
      <FilterBox />
        <div className="grid-container">
          <div className="grid-item">1</div>
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>
          <div className="grid-item">4</div>
          <div className="grid-item">5</div>
          <div className="grid-item">6</div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default listings