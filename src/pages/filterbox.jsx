import React from 'react';
import "../styling/filterbox.css";

function Filterbox() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Handling submit");
    };

    return (
        <div className='filterbox'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='searchCity'>Search City</label>
                <input type='text' id='searchCity' placeholder='Enter city name' />
                <div className='scroll-container'>
                    <h3>Price</h3>
                    <input type="range" min="0" max="1000" step="10" />
                </div>
                <div className='scroll-container'>
                    <h3>Distance from location</h3>
                    <input type="range" min="0" max="100" step="5" />
                </div>
                <h3>Bedrooms</h3>
                <h3>Bathrooms</h3>
                <button type="submit" className='filter-search'>Search</button>
            </form>
        </div>
    );
}

export default Filterbox;
