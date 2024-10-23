import React from 'react';
import './Header.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import netflixLogo from '../../../src/assets/Images/netflixLogo.jpg';
import SearchIcon from '@mui/icons-material/Search';// import other necessary icons or components
import Person3Icon from '@mui/icons-material/Person3';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
function Header() {
  return (
<div className='outer-container'>
    <div className='header-container'>
      <div className='header-left'>
        <ul>
          <li><img src={netflixLogo} width={100} alt="Netflix Logo" /></li>
          <li>Netflix</li>
          <li>Name</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className='header-right'>
        <ul>
          <li><SearchIcon /></li>
          <li><Person3Icon /></li> {/* Ensure you have this imported or defined */}
          <li><ArrowDropDownCircleIcon /></li> {/* Ensure you have this imported or defined */}
          <li><NotificationsIcon /></li> {/* Ensure you have this imported or defined */}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Header;
