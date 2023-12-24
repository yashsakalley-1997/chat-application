import { configureStore } from "@reduxjs/toolkit";
import chatStore from "./chatStore";
import weatherAppStore from "./weatherAppStore";
import newsAppStore from "./newsAppStore";
const appStore = configureStore({
    reducer:{
        chatStore:chatStore,
        weatherAppStore:weatherAppStore,
        newsAppStore:newsAppStore
    }
})

export default appStore;