import React from 'react';
import '../style/gmailCategory.css';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';

import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const GmailCategory = () => {
  return (<div className='gmailCategory'>
    <div className='gmailCategoryOptions gmailCategoryOptions__active' >
    <InboxIcon />
    <p>Primary</p>
    </div>

    <div className='gmailCategoryOptions' >
    <PeopleIcon />
    <p>Social</p>
    </div>

    <div className='gmailCategoryOptions' >
    <LocalOfferIcon />
    <p>Promotions</p>
    </div>
    </div>)
};

export default GmailCategory;
