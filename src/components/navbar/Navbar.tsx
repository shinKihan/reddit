import React from 'react';

import './Navbar.css';
import Searchbar from '../searchbar/Searchbar';
import Actions from '../actions/Actions';
import Logo from '../logo/Logo';

export default function Navbar() {
  return <div className="navbar">
      <Logo />
      <Searchbar />
      <Actions />
    </div>
}
