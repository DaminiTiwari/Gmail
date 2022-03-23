// import { ArrowDropDown, CheckBoxOutlineBlank, ChevronLeft, ChevronRight, MoreVert, Refresh } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RefreshIcon from '@mui/icons-material/Refresh';


import { IconButton } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import '../style/bodyHeader.css';

const BodyHeader = () => {
  const emails = useSelector( (state) => state.email.email);
// console.log(emails)
const total = emails.length;
// console.log(total)

  return (<div className='bodyHeader'>
    <div className='bodyHeader_left'>
   <IconButton>
   <CheckBoxOutlineBlankIcon />
    <ArrowDropDownIcon />
   </IconButton>

   <IconButton>
   <RefreshIcon />
   </IconButton>

   <IconButton>
   <MoreVertIcon />
   </IconButton>
    </div>

    <div className='bodyHeader_right'>
    <p>1-{total} of {total}</p>

    <IconButton>
   <ChevronLeftIcon />
   </IconButton>
    
    <IconButton>
   <ChevronRightIcon />
   </IconButton>
    
    </div>
    
    </div>)
};

export default BodyHeader;
