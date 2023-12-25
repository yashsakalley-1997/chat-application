import { configureStore } from "@reduxjs/toolkit";

import chatStore from "./chatStore";
import weatherAppStore from "./weatherAppStore";
import newsAppStore from "./newsAppStore";
import taskManagerStore from "./taskManagerStore";

const appStore = configureStore({
    reducer:{
        chatStore:chatStore,
        weatherAppStore:weatherAppStore,
        newsAppStore:newsAppStore,
        taskManagerStore:taskManagerStore
    }
})

export default appStore;