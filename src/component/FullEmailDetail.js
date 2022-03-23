import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectedMail } from '../features/newMailSlice';
import '../style/fullEmailDetail.css';

const FullEmailDetail = () => {
  const mail = useSelector(selectedMail);

  // console.log(mail);

  return (
    <>
      {mail ?

        <div className='fullEmailDetail'>

        <div className='fullEmailDetail__sub'>{mail.subject}</div>

          <div className='fullEmailDetail__grid'>
            <div className='fullEmailDetail__from'>
              <Avatar  style={{ minWidth: '22px', fontSize: 'medium', backgroundColor: "gray", height: "35px", width: "35px" }} />
             <p>{mail.name}</p> </div>
            <div className='fullEmailDetail__time'>{mail.time}</div>

          </div>
         
          <div className='fullEmailDetail__message'>{mail.message}</div>


        </div> : <Redirect to="/" />
      }

    </>)
};

export default FullEmailDetail;
