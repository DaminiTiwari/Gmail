import { Icon } from '@mui/material';
import React from 'react';
import '../style/optionsSidebar.css';
import { useHistory } from 'react-router-dom';

const OptionsSidebar = ({Icon, title, number,path, isActive}  ) => {
  const history = useHistory();
  return (
  <div  className= {`optionsSidebar  ${isActive && 'activeOption'}`} onClick={()=> history.push(`${path}`) }>
  <Icon />
  <h3>{title}</h3>
  <p>{number}</p>
  </div>
  )
}


export default OptionsSidebar;
