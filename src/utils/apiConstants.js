import { returnDate } from "./hooks";

export const apiUrl = "https://chat-app-fzr1.onrender.com/api";
export const model =  "mistral-v0.2-7b-inst-8k";
export const stream =  false;
export const max_tokens =  1000;
export const temperature = 0.5;
export const messageConfig = {
    role: "system",
    content: "You are ChatNBX"
}
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

export const weatherApi = (str)=>`https://api.tomorrow.io/v4/weather/realtime?location=${str}&apikey=${apiKey}`;
export const newsApi = (str)=>`https://newsapi.org/v2/everything?q=${str}&from=${returnDate()}&sortBy=publishedAt&apiKey=${newsApiKey}`;
export const navMenu = [
    {
        displayName:"Chat App",
        link:"/"
    }
    ,
    {
        displayName:"Weather App",
        link:"/weather",
    }
    ,
    {
        displayName:"News App",
        link:"/news"
    }
    ,
    {
        displayName:"Task Manager App",
        link:"/task-manager"
    }
]