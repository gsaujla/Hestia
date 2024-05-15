import React, { useState } from 'react';
import Header from "./header";
import Footer from "./footer";
import "../styling/profile.css";

function Profile() {
  const [userData, setUserData] = useState({
    fullName: 'Rhythm Chawla',
    email: '#######@example.com',
    bio: 'Web Developer',
    location: 'Waterloo',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <>
      <Header />
      <div className="profile-container">
        <div className="profile-header">
          <h1>Edit Profile</h1>
          <div className="profile-picture"></div> {/* Profile Picture Placeholder */}
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={userData.fullName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Bio:
            <textarea
              name="bio"
              value={userData.bio}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={userData.location}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
