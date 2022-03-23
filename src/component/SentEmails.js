import React, { useEffect, useState } from 'react';
import '../style/emailList.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { loadEmail} from '../features/emailSlice';
import EmailBody from './EmailBody';

const SentEmails = () => {
  const dispatch = useDispatch(); 
  const user = useSelector(selectUser);
  const emails = useSelector( (state) => state.email.email);

useEffect(() => {
  try {
    dispatch(loadEmail())
  } catch (error) {
    console.log(error)}
 }, []);


  return (<div className='emailList'>
    {emails?.map((temp) =>
     
      {  return (temp.from == user.email ) ?
         <EmailBody
        key={temp.docId}
        name={temp.to}
        subject={temp.subject}
        message={temp.message}
        time={temp.timeStamp}
      /> : ""}
    )}
  </div>)
};

export default SentEmails;
