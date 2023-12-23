import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chats:{}
}

const chatSlice = createSlice({
    name:"chats",
    initialState:initialState,
    reducers:{
        setChat:(state,action)=>{
            state.chats = {
                ...state.chats,
                [action.payload.id]: action.payload,
              };
        }
    }
})

export const {setChat} = chatSlice.actions;
export default chatSlice.reducer;