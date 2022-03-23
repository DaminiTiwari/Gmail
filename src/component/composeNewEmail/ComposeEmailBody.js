import React from 'react';

const ComposeEmailBody = () => {
  return (<div className='composeEmailBody'>

  <div className='composeEmailBody_Field'>
  <input type='email' 
   placeholder='Reciepents'/>

   <input type='text' 
   placeholder='Subject'/>

   <textarea rows='20' />
    </div>
  </div>)
};

export default ComposeEmailBody;
