import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    emails: {},
    // loading: false,  
};

export const emailListSlice = createSlice({
    name: "emails",
    initialState,
reducers:{
    allEmails: (state, {payload}) => {
        state.emails = payload;
    }
},

});

export const { allEmails } = emailListSlice.actions;

export const getAllEmails = (state) => state.emails.emails;


export default emailListSlice.reducer;
