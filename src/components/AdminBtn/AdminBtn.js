import React from 'react';

import './AdminBtn.css';
import profile from './Profile.svg';

function AdminBtn() {
  return (
    <div>
      <button className="adminBtn hide_sm">Панель управления</button>
      <button className="adminBtn hide_bg">
        <img src={profile} alt="profile" />
      </button>
    </div>
  );
}

export default AdminBtn;
