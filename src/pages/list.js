import React from 'react';
import Header from "../pages/header";
import Footer from "../pages/footer";
import "../styling/list.css"

function List() {
  const handleSubmit = async () => {
    console.log("Handling submit");
  }

  return (
    <>
      <Header />
      <div className='outer-box'>
        <div className='titlebox'>
          Let's find your home some trusted tenants.
        </div>
        <form onSubmit={() => handleSubmit()} className='sublet-form'>
          <h1>Please enter some information about your listing.</h1>
          <div className="form-group">
            <label htmlFor="street1">Street Address 1:</label>
            <input className='big-input' type='text' id="street1" />
          </div>
          <div className="form-group">
            <label htmlFor="street2">Street Address 2:</label>
            <input className='big-input' type='text' id="street2" placeholder='Optional' />
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip Code:</label>
            <input className='big-input' type='text' id="zip" placeholder='Enter your Zip code' />
          </div>
          <div className="form-group">
            <label htmlFor="province">Province:</label>
            <input className='big-input' type='text' id="province" placeholder='Your province' />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input className='big-input' type='text' id="country" placeholder='Country' />
          </div>
          <div className="form-group">
            <label htmlFor="apartment">Apartment Type:</label>
            <input className='big-input' type='text' id="apartment" placeholder='Apartment? or Condominium...' />
          </div>
          <div className="form-group">
            <label htmlFor="rooms">Number of Rooms available:</label>
            <input type='number' id="rooms" placeholder='Number of Rooms' />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price per room:</label>
            <input type='number' id="price" placeholder='Price in CAD per term of sublet' />
          </div>
          <div className="form-group">
            <label htmlFor="price">Term of sublet:</label>
            <input className='big-input' type='text' id="price" placeholder='For how long?' />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" placeholder='Give additional information...'></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="images">Add images:</label>
            <input type="file" id="images" accept="image/*" multiple />
          </div>
          <button type='submit'>Confirm</button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default List;
