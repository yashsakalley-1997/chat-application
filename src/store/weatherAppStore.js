import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weatherChats:{}
}

const weatherSlice = createSlice({
    name:"weatherApp",
    initialState:initialState,
    reducers:{
        setWeatherChat:(state,action)=>{
            state.weatherChats = {
                ...state.weatherChats,
                [action.payload.id]: action.payload,
              };
        }
    }
})

export const {setWeatherChat} = weatherSlice.actions;
export default weatherSlice.reducer;