import React from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import '../style/emailList.css';
import { useHistory } from 'react-router-dom';
import { openMessage } from '../features/newMailSlice';
import { useDispatch } from 'react-redux';
import { deleteEmailFromList, deletePostBtnClicked } from '../features/emailSlice';

const EmailBody = ({ name, message,    subject,    time, id}) => {
 
    const history = useHistory();
    const dispatch = useDispatch();
  

    const handleOpenMessage = () => {
        dispatch(openMessage({
          name,
          message,
          subject,
          time
        }))
        history.push('/mail');
      }
    
      // const handleDelete = (id) => {
      //   const response = dispatch(deleteEmailFromList(id));
      //   if (response.error) return;
      //   dispatch(deletePostBtnClicked({ id }));
      
      //   console.log(id)
      // }

  return (
    <div className='emailList_Elements'   >
    <div className='emailList_Elements_EmailBody' onClick={handleOpenMessage}>
      <CheckBoxOutlineBlankIcon  />
      <StarOutlineIcon />
      <h4> {name}</h4></div>
    <div className='emailList_Elements_EmailBody' >
      <h5>{subject}</h5>
      <p>{message}</p></div>
    <p>{time}</p>
  </div>


  )
};

export default EmailBody;
