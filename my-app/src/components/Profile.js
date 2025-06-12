import React from 'react';
import './Profile.css';

const Profile = () => (
  <div className="profile">
    <img
      src="https://via.placeholder.com/150"
      alt="Profile"
      className="profile-img"
    />
    <h1>Your Name</h1>
    <p>Hello! I'm building my personal website using React and Three.js.</p>
  </div>
);

export default Profile;
