import React from 'react';
import '../style/sidebar.css';
import { Button, Avatar } from '@mui/material';
import OptionsSidebar from './OptionsSidebar';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarRateIcon from '@mui/icons-material/StarRate';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import LabelIcon from '@mui/icons-material/Label';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import VideocamIcon  from '@mui/icons-material/Videocam';
import KeyboardIcon  from '@mui/icons-material/Keyboard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ChatIcon from '@mui/icons-material/Chat';
import { openSendMessage, sendMessageIsOpen } from '../features/newMailSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectUser } from '../features/userSlice';


const Sidebar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  
  return( <div className='sidebar'>

    <Button onClick={()=> {dispatch(openSendMessage())}} startIcon={<AddIcon />} className='sidebarComposeBtn'> Compose</Button>


<div className='sidebarLabel'>
    <OptionsSidebar 
      Icon={InboxIcon } path='/'
      title='Inbox'
      number=''
      isActive={true}
       />

       <OptionsSidebar
       Icon={SendIcon}
       title='Sent' path='/sent'
       number='1' />
       
    <OptionsSidebar
      Icon={StarRateIcon} path='/'
      title='Starred'
      number='' />
    <OptionsSidebar
      Icon={WatchLaterIcon} path='/'
      title='Snoozed'
      number='1' />

    <OptionsSidebar
      Icon={LabelImportantIcon} path='/'
      title='Important'
      number='1' />

   

    <OptionsSidebar
      Icon={DraftsIcon}
      title='Drafts' path='/'
      number='1' />

    
    <OptionsSidebar
      Icon={DeleteIcon}
      title='[Map]/Trash' path='/'
      number='1' />


    <OptionsSidebar
      Icon={FindInPageIcon}
      title='Documents' path='/'
      number='1' />

      <OptionsSidebar
      Icon={LabelIcon}
      title='Categories' path='/'
      number='1' />

    <OptionsSidebar
      Icon={ExpandMoreIcon}
      title='More' path='/'
      number='' /> </div>

      <h3 className='sidebarOptionHeading'>Meet</h3>
      <OptionsSidebar
      Icon={VideocamIcon}
      title='New meeting'
      number='1' />

    <OptionsSidebar
      Icon={KeyboardIcon}
      title='Join a meeting'
      number='' />
     

      <h3 className='sidebarOptionHeading'>Hangouts</h3>
      <OptionsSidebar
      Icon={Avatar }
      title={user.displayName}
      number="{+}" />

      <div className='sidebarOptionHeading ' id='sidebarChats'>
      <p>No recent chats</p>
      </div>


      <div className='sidebarOptionHeading ' id= 'sidebarBottom'>
      <PermIdentityIcon style=
      {{  minWidth: '5px', fontSize: 'medium', height: "2.5vh", width: "2vw" }}
       />
       <ChatIcon style=
      {{  minWidth: '5px', fontSize: 'medium', height: "2.5vh", width: "2vw" }}
       />
      </div>

      
  </div>)
}

export default Sidebar;
