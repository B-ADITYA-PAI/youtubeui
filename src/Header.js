import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header_input">
        <input onChange={(e) => setInputSearch(e.target.value)} placeholder="search" value={inputSearch} type="text" />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='header_inputButton' />
        </Link>
      </div>
      <div className="header_icons">
        <VideoCallIcon className='header_icon' />
        <AppsIcon className='header_icon' />
        <NotificationsIcon className='header_icon' />
        <Avatar
          alt="Remy Sharp"
          src="https://yt3.ggpht.com/yti/ANjgQV_bvyhFw2_VtKDekzeavfMVlDpWF1CA8R6IEt7AkEM=s88-c-k-c0x00ffffff-no-rj-mo"
        />
      </div>
    </div>
  );
}

export default Header;
