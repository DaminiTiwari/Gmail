import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as postService from "../services/emails";



export const loadEmail = createAsyncThunk(
    "email/loadEmail",
    async () => {
        const response = await postService.fetchAllEmails();
        // console.log(response);
        return response;
    }
);

const initialState = {
    status: "idle",
    email: [],
    sentEmails:[],
};

const emailSlice = createSlice({
    name: "email",
    initialState,
    // reducers:{
    //     deletePostBtnClicked: (state, {payload}) => {
           
    //         const { email } = state;
    //         const { id } = payload;
    //         console.log(id)
    //         const emailIndex = email.findIndex((emails) => emails.id === id);
    //         if (emailIndex < 0) return;
    //         email.splice(emailIndex, 1);
    //       },
    // },
    extraReducers: {
        [loadEmail.pending]: (state) => {
            state.status = "loading";
        },
        [loadEmail.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                email: payload,
                status: "fulfilled",
            }
        },

        [loadEmail.rejected]: (state) => {
            state.status = "error";
        },

        
    },
});

// export const {
//     deletePostBtnClicked,
//   } = emailSlice.actions;
export default emailSlice.reducer;

// export const getAllEmails = (state) => state.email.email;


