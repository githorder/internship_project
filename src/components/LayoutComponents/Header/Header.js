import React from 'react';

import './Header.css';
import Profile from '../../Profile/Profile';
import Logo from '../../Logo/Logo';
import AdminBtn from '../../AdminBtn/AdminBtn';

function Header() {
  return (
    <div className="header">
      <Profile />
      <Logo />
      <AdminBtn />
    </div>
  );
}

export default Header;
