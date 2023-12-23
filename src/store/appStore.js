import { configureStore } from "@reduxjs/toolkit";
import chatStore from "./chatStore";

const appStore = configureStore({
    reducer:{
        chatStore:chatStore
    }
})

export default appStore;