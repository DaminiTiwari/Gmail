import React, { useState } from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Avatar} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { selectUser, signOut } from '../features/userSlice';
import Sidebar from './Sidebar';

import '../style/header.css';
import { color } from '@mui/system';
import { auth } from '../firebase';
import { useSelector } from 'react-redux';

const Header = () => {
 const user = useSelector(selectUser);


  return <div className='header'>
    <div className='headerLeft'>
      <IconButton  >
        <ReorderIcon />
      </ IconButton >
      <img
        src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png'
        alt='logo' />
    </div>

    <div className='headerMiddle'>

      <div className='headerSearch'>
        <IconButton>
          <SearchIcon />
        </ IconButton >

        <input type='text' placeholder='Search mail' />
        <IconButton>
          <TuneIcon />
        </ IconButton >
      </div>

    </div>

    <div className='headerRight'>

      <IconButton>
        <HelpOutlineIcon />
      </ IconButton >

    

      <IconButton>
        <AppsIcon />
      </ IconButton >

      <IconButton>
            <Avatar  alt="Guest" src="/static/images/avatar/1.jpg"
            style={{  minWidth: '25px', fontSize: 'medium', backgroundColor: "#ef6c00" , height: "35px", width: "35px" }}
           
            > <img src={user?.photoURL} />
             </Avatar>
      </ IconButton >
      <button id='logOutButton' onClick={()=> firebase.auth().signOut()} >LogOut</button>

    </div>

  </div>
}

export default Header;
