import { createSlice } from "@reduxjs/toolkit";
import { returnLocalStorage } from "../utils/setTasks";

const initialState = {
    taskChats:returnLocalStorage()
}

const taskSlice = createSlice({
    name:"taskApp",
    initialState:initialState,
    reducers:{
        setTaskChat:(state,action)=>{
            state.taskChats = {
                ...state.taskChats,
                [action.payload.id]:action.payload
            }
        }
        ,
        setTasks:(state,action)=>{
            state.taskChats = action.payload
        }
    }
})

export const {setTaskChat,setTasks} = taskSlice.actions;
export default taskSlice.reducer;