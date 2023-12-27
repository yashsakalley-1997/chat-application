
import { useEffect, useState,useMemo, useRef } from "react";
import { useSelector,useDispatch } from "react-redux";

import NavBar from "../navbar/NavBar";
import InputBox from "../InputBox/InputBox";
import Sidebar from "../SideBar/SideBar";
import TaskCard from "./TaskCard/TaskCard";

import { iconLink } from "../../utils/imageLinks";

import { returnTaskChats, noLoadingObject, returnTasksCreated,currentTime, returnFormattedDate } from "../../utils/hooks";
import { scheduleTasks } from "../../utils/apis";
import { setTaskChat } from "../../store/taskManagerStore";
import { setLocalStorage } from "../../utils/setTasks";


const TaskManager = ()=>{
    const dispatch = useDispatch();
    const [screensize,setScreenSize] = useState("");
    const [loading,setLoading] = useState(false);
    const contentRef = useRef(null);
    const chats = useSelector((store)=>store?.taskManagerStore?.taskChats)
    const chatsList = useMemo(()=>{
        return returnTaskChats(chats)
    },[JSON.stringify(chats)])
    
    
    const getUpcomingTask = useMemo(()=>{
        const tasksList = returnTasksCreated(chats).filter((elem)=>{
            return new Date(elem?.startDate)>new Date();
        });
        const minDateTime =
            tasksList.length > 0
                ? tasksList.reduce((min, currentObj) => {
                    const currentDateTime = new Date(currentObj.startDate);
                    const minDateTime = new Date(min?.startDate);

                    return currentDateTime < minDateTime ? currentObj : min;
                }, tasksList[0])
                : null;
        return minDateTime
    },[chats])
    
    useEffect(()=>{
        let isYetToDispatch = true;
        const interval = setInterval(()=>{
            if(currentTime() === returnFormattedDate(getUpcomingTask?.startDate)){
                if(isYetToDispatch){
                    dispatch(setTaskChat({
                        id:chatsList.length+1,
                        question:"Task Reminder",
                        response:getUpcomingTask
                    }))
                    isYetToDispatch = false;
                }
            }
        },2000)
        return ()=>{
            clearInterval(interval)
        }
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
        setLoading(true)
        const id = chatsList.length+1;
        dispatch(setTaskChat({
            id,question:text,response:"Responding..."
        }))
        scheduleTasks(text).then((res)=>{
            setLoading(false)
            dispatch(setTaskChat({
                id,question:text,response:res,
            }))
        }).catch((err)=>{
            setLoading(false)
            dispatch(setTaskChat({
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
        setLocalStorage(noLoadingObject(chats))
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
                                ChatNBX Task Manager App
                            </h1>
                        </div>
                    ):(
                        <div ref={contentRef} className="overflow-y-auto">
                            { 
                                chatsList.map((elem,index)=>(
                                    <TaskCard message={elem} key={index}/>
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


export default TaskManager;