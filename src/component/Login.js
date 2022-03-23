import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllEmails } from '../features/allEmailSlice';
import { signIn } from '../features/userSlice';
import { auth, provider } from '../firebase';
import '../style/login.css';

const Login = () => {
const dispatch = useDispatch(); 

    const handleLogIn =()=>{
        auth.signInWithPopup(provider).then(({user})=>
        {dispatch(signIn(
    {
        displayName: user.displayName,
        photoURL: user.photoURL,
        email:user.email
    })) 
}).catch(error=>{
    alert(error)
})

    }


    return (<div className='login'>

        <div className='login_body'>
            <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' alt='Google' />
            <div className='Login_end'>
            <div id='loginBtn'>
                <button  onClick={handleLogIn} > Login with Google</button>
            </div>
           <p> Not your computer? Use Guest mode to sign in privately. Learn more</p></div>
           </div>
    </div>)
};

export default Login;
