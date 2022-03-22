import { configureStore } from '@reduxjs/toolkit';
import emailReducer from '../features/emailSlice';
import newMailReducer from '../features/newMailSlice';
import userReducer from '../features/userSlice';


export const store = configureStore({
  reducer: {
    newMail: newMailReducer,
    user: userReducer,
    email:emailReducer,
    
  },
  devTools: false,

});
