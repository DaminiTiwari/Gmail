import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { database } from '../firebase';


const initialState = {
    emails: {},
    loading: false,
};


export const fetchAllEmails = createAsyncThunk(
    'emails/fetchAllEmails',
     () => {
        const response =  database.collection("newEmailsDB")
            .orderBy("timeStamp", "desc")
            .onSnapshot(ss => 
                (ss?.docs?.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))

            );
        return response.doc;
        // console.log(response.doc);
    }
);

export const allEmailSlice = createSlice({
    name: "emails",
    initialState,


    extraReducers: {
        [fetchAllEmails.pending]: (state) => {
            return {
                ...state,
                loading: true,
            }
        },

        [fetchAllEmails.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                emails: payload,
                loading: false,
            }
        },

        [fetchAllEmails.rejected]: (state, { payload }) => {
            return {
                ...state,
                loading: false,
                error: payload,
            }
        },

    },
});

// export const { addVideos } = videosSlice.actions;

export const getAllEmails = (state) => state.emails.emails;


export default allEmailSlice.reducer;
