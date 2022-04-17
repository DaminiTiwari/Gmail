import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const newMailSlice = createSlice({
  name: 'newMail',
  initialState:{
      sendMessageIsOpen : false,
      selectedMessage: null
  },
  
  reducers: {
    openSendMessage: (state) => {
    
        state.sendMessageIsOpen = true
    },
    closeSendMessage: (state) => {
        state.sendMessageIsOpen = false
    },
    openMessage: (state,action) => {
        state.selectedMessage = action.payload
    },
   
   
    },
});


export const { openSendMessage, closeSendMessage , openMessage} = newMailSlice.actions;


export const selectSendMessageIsOpen = (state) => state.newMail.sendMessageIsOpen;


export const selectedMail = (state) => state.newMail.selectedMessage;


export default newMailSlice.reducer;
