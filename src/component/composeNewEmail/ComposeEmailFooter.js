import React from 'react';
import  ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import  FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import  AttachFileIcon from '@mui/icons-material/AttachFile';
import  LinkIcon from '@mui/icons-material/Link';
import  InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import  NoteAddIcon from '@mui/icons-material/NoteAdd';
import  PhotoIcon from '@mui/icons-material/Photo';
import  PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import  CreateIcon from '@mui/icons-material/Create';
import  MoreVertIcon from '@mui/icons-material/MoreVert';
import  DeleteIcon from '@mui/icons-material/Delete';


const ComposeEmailFooter = () => {
  return <div className='composeEmailFooter'>
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
  </div>;
};

export default ComposeEmailFooter;
