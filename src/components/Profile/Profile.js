import React from 'react';

import './Profile.css';
import profilePic from './portrait.jpg';

function Profile() {
  return (
    <div className="profile_container">
      <img className="profile_img" src={profilePic} alt="profle" />
      <span className="profile_text">
        Диёр <span className="hide">Байназаров</span>
      </span>
    </div>
  );
}

export default Profile;
