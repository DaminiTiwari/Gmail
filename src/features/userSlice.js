import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const userlSlice = createSlice({
  name: 'user',
  initialState:{
      value: null,
      
  },
  
  reducers: {
    signIn: (state,action) => {
    
        state.value = action.payload
    },
    signOut: (state) => {
        state.value= null
    },
      
    },
});


export const { signIn, signOut} = userlSlice.actions;


export const selectUser = (state) => state.user.value;


export default userlSlice.reducer;
