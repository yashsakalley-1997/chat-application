
import { useEffect, useState,useMemo, useRef } from "react";
import { useSelector,useDispatch } from "react-redux";

import NavBar from "../navbar/NavBar";
import NewsCard from "./NewsCard/NewsCard";
import InputBox from "../InputBox/InputBox";
import Sidebar from "../SideBar/SideBar";

import { iconLink } from "../../utils/imageLinks";
import { setNewsChat } from "../../store/newsAppStore";
import { fetchNews} from "../../utils/apis";
import { returnChats,returnWeatherDetails } from "../../utils/hooks";

const NewsApp = ()=>{
    const dispatch = useDispatch();
    const [screensize,setScreenSize] = useState("");
    const [id,setId] = useState(1);
    const [loading,setLoading] = useState(false);
    const contentRef = useRef(null);
    const chats = useSelector((store)=>store?.newsAppStore?.newsChats)

    const chatsList = useMemo(()=>{
        return returnChats(chats)
    },[JSON.stringify(chats)])

    useEffect(() => {
        const updateScreenSize = () => {
            const width = window.innerWidth;
            if (width < 768) {
            setScreenSize('Mobile');
            } else if (width >= 768 && width < 1024) {
            setScreenSize('Tablet');
            } else {
            setScreenSize('Laptop/Desktop');
            }
        };

        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);
        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);

    const setMessages = (text)=>{
        setId(id+1)
        setLoading(true)
        dispatch(setNewsChat({
            id,question:text,response:"Responding..."
        }))
        fetchNews(text,id).then((res)=>{
            setLoading(false)
            dispatch(setNewsChat({
                id,question:text,response:res,
            }))
        }).catch((err)=>{
            setLoading(false)
            dispatch(setNewsChat({
                id,question:text,response:err
            }))
        }).finally(()=>{
            setLoading(false)
        })
    }

    useEffect(()=>{
        if (contentRef.current) {
            contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }
    },[JSON.stringify(chats)])

    return (
        <div className="bg-[#343541] h-screen md:flex gap-5">
            {
                screensize === "Mobile"?<Sidebar/>:<NavBar/>
            } 
            <div className="w-screen h-screen flex flex-col justify-end">
                {
                    chatsList.length === 0?(
                        <div className="flex flex-col gap-5 my-auto">
                            <img className="h-10" src={iconLink} alt="icon"/>
                            <h1 className="text-white text-2xl font-semibold mx-auto">
                                ChatNBX News App
                            </h1>
                        </div>
                    ):(
                        <div ref={contentRef} className="overflow-y-auto">
                            { 
                                chatsList.map((elem,index)=>(
                                    <NewsCard message={elem} key={index}/>
                                ))
                            }
                        </div>
                    )
                }
                <InputBox loading={loading} setMessages={setMessages}/>
            </div>
        </div>
    )
}


export default NewsApp;