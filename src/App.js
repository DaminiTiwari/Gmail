import './style/App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import GmailBody from './component/GmailBody';
import ComposeEmail from './component/composeNewEmail/ComposeEmail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/newMailSlice';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './component/Login';
import { selectUser, signIn, signOut } from './features/userSlice';
import { auth } from './firebase';
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch();
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
 
useEffect(()=> {
  auth.onAuthStateChanged((user)=>{
    if(user){
      dispatch(signIn(
        { displayName: user.displayName,
        photoURL: user.photoURL,
        email:user.email})
        )
    }
    else{
      dispatch(signOut())
    }
  })
}

,[])

  return (
    <Router>
      {
        user ? 
          <div className="app">
            <Header />
            <div className='appMiddle'>
              <Sidebar />
              <GmailBody />
            </div>
            {isMessageOpen && <ComposeEmail />}
           
          </div>
      : 
      <Login />}
      
    </Router>
  );
}

export default App;
