import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newsChats:{}
}

const newsSlice = createSlice({
    name:"newsApp",
    initialState:initialState,
    reducers:{
        setNewsChat:(state,action)=>{
            state.newsChats = {
                ...state.newsChats,
                [action.payload.id]: action.payload
            }
        }
    }
})

export const {setNewsChat} = newsSlice.actions;
export default newsSlice.reducer;

