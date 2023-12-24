import { createBrowserRouter,RouterProvider } from "react-router-dom";

import NewChat from "../NewChat/NewChat";
import NewsApp from "../NewsApp/NewsApp";
import WeatherApp from "../WeatherApp/WeatherApp";

const Routes = ()=>{
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<NewChat/>
        }
        ,
        {
            path:"/weather",
            element:<WeatherApp/>
        }
        ,
        {
            path:"/news",
            element:<NewsApp/>
        }
    ])

    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Routes;
