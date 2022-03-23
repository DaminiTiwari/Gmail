import React, { useEffect, useState } from 'react';
import '../style/emailList.css';
import EmailBody from './EmailBody';
import { database } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, signIn } from '../features/userSlice';

import { loadEmail, loadSentEmails } from '../features/emailSlice';

const EmailList = () => {
  const dispatch = useDispatch(); 
  const user = useSelector(selectUser);
  const emails = useSelector( (state) => state.email.email);


useEffect(() => {
  try {
    dispatch(loadEmail())
  } catch (error) {
    console.log(error)
  }
 
}, [])



  // useEffect(() => {
  //   // database.collection("newEmailsDB")
  //   // .orderBy("timeStamp", "desc")
  //   //   .onSnapshot(ss => 
  //   //     setAllEmails(ss?.docs?.map(doc => ({
  //   //       id: doc.id,
  //   //       data: doc.data()
  //   //     })))
      
  //   //   );
  //   // console.log(allEmails);
  //   // if(allEmails!=undefined)
  //   // { dispatch(getAllEmails(allEmails))}
    
  // }, []);
  
  // useEffect(() => {
    
  //   database.collection("newEmailsDB")
  //   .where("from", "==", email)
  //     .onSnapshot(ss => {
  //       setAllInbox(ss.docs.map(doc =>
  //       ({ 
  //         id: doc.id,
  //         data: doc.data()
  //       })))
  //     }     )
  //   // console.log(allInbox);
  // }, []);



  return (<div className='emailList'>
    {emails?.map((temp) =>
     
      {  return (temp.to == user.email ) ?
         <EmailBody
        key={temp.docId}
        id= {temp.docId}
        name={temp.to}
        subject={temp.subject}
        message={temp.message}
        time={temp.timeStamp}
      /> : ""}
    )}
  </div>)
};

export default EmailList;
