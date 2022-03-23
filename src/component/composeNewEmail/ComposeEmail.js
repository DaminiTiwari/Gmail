import React, { useState } from 'react';
import '../../style/composeEmail.css';
// import ComposeEmailBody from './ComposeEmailBody';
// import ComposeEmailHeader from './ComposeEmailHeader';
// import ComposeEmailFooter from './ComposeEmailFooter';

import RemoveIcon from '@mui/icons-material/Remove';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { closeSendMessage } from '../../features/newMailSlice';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PhotoIcon from '@mui/icons-material/Photo';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';

import { firebaseApp } from '../../firebase';
import { database } from '../../firebase';
import { collection } from "firebase/database";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { selectUser, signIn } from '../../features/userSlice';

const ComposeEmail = () => {

  const user = useSelector(selectUser);
  // console.log(user);

  const dispatch = useDispatch();
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subject === "")
      return alert("Subject is empty");

    database.collection("newEmailsDB").add({

      to,
      subject,
      message,
      from: user.email,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    dispatch(closeSendMessage());
    alert("Mail Sent")

  }
  

  return (

    <div className='composeEmail'>

      <div className='composeEmailHeader'>
        <div className='composeEmailHeader_Left'>
          <span>New Message</span>
        </div>
        <div className='composeEmailHeader_Right'>
          <RemoveIcon />
          <HeightIcon />
          <CloseIcon onClick={() => dispatch(closeSendMessage())} />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='composeEmailBody'>
          <div className='composeEmailBody_Field'>
            <input type='email' required value={to} onChange={(e) => setTo(e.target.value)} placeholder='Reciepents' />
            <input type='text' value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Subject' />
            <textarea rows='20' value={message} onChange={(e) => setMessage(e.target.value)}>{message}</textarea>
          </div>
        </div>

        <div className='composeEmailFooter'>
          <div className='composeEmailFooter_Left'>
            <button type='submit'>Send <ArrowDropDownIcon /> </button>
            <FormatColorTextIcon />
            <AttachFileIcon />
            <LinkIcon />
            <InsertEmoticonIcon />
            <NoteAddIcon />
            <PhotoIcon />
            <PhonelinkLockIcon />
            <CreateIcon />
          </div>
          <div className='composeEmailFooter_Right'>
            <MoreVertIcon />
            <DeleteIcon />
          </div>
        </div>
      </form>
    </div>)
};

export default ComposeEmail;
