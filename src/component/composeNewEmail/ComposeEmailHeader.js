import React from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../features/newMailSlice';

const ComposeEmailHeader = () => {
    const dispatch = useDispatch();


    return (
        <div className='composeEmailHeader'>

        <div className='composeEmailHeader_Left'>
            <span>New Message</span>
        </div>

        <div className='composeEmailHeader_Right'>
            <RemoveIcon />
            <HeightIcon />
            <CloseIcon onClick={()=> dispatch(closeSendMessage())} />
        </div>
    </div>)
};

export default ComposeEmailHeader;
