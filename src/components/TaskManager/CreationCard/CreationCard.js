import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { returnCurrentTimestamp } from "../../../utils/hooks";
import { setTaskChat } from "../../../store/taskManagerStore";
import { current } from "@reduxjs/toolkit";

const CreationCard = ({message})=>{
    const dispatch = useDispatch();

    const title = useRef(message?.taskCreated?.title);
    const startDate = useRef(message?.taskCreated?.startDate);
    const endDate = useRef(message?.taskCreated?.endDate);
    const linkNotes = useRef(message?.taskCreated?.linkNotes)

    useEffect(()=>{
        title.current.value = message?.taskCreated?.title || ""
        startDate.current.value = message?.taskCreated?.startDate
        endDate.current.value = message?.taskCreated?.endDate
        linkNotes.current.value = message?.taskCreated?.linkNotes || "";
    },[])

    const onFormSubmit = ()=>{
        if(title.current.value && startDate.current.value && endDate.current.value && linkNotes.current.value){
            let payload = {
                taskCreated:{
                    title:title.current.value,
                    startDate:startDate.current.value,
                    endDate:endDate.current.value,
                    linkNotes:linkNotes.current.value,
                    dateCreated:returnCurrentTimestamp()
                }
            }
            dispatch(setTaskChat({...message,...payload}))
            window.alert("Task Created")
        }
    }   

    const deleteTask = ()=>{
        if(message?.taskCreated){
            dispatch(setTaskChat({...message,taskCreated:null}))
            window.alert("Task deleted")
        }
    }

    return (
        <div className="bg-white text-black p-5 rounded-lg mt-5 md:w-[40%]">
            <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col gap-3">
                <div className="flex justify-between gap-2">
                    <span>Task title</span>
                    <input ref={title} required type="text" className="p-2 rounded-lg border border-gray-400 focus:outline-none"/>    
                </div>
                <div className="flex justify-between gap-2">
                    <span>Task Start Date</span>
                    <input ref={startDate} required type="datetime-local" className="p-2 rounded-lg border border-gray-400 focus:outline-none"/>    
                </div>
                <div className="flex justify-between gap-2">
                    <span>Task End Date</span>
                    <input ref={endDate} required type="datetime-local" className="p-2 rounded-lg border border-gray-400 focus:outline-none"/>    
                </div>
                <div className="flex justify-between gap-2">
                    <span>Link Notes</span>
                    <input ref={linkNotes} required type="text" placeholder="Notes" className="p-2 rounded-lg border border-gray-400 focus:outline-none"/>    
                </div>
                <button onClick={()=>onFormSubmit()} className="bg-blue-400 p-2 rounded-lg">Submit</button>
                <button
                    disabled={!message?.taskCreated} 
                    onClick={()=>deleteTask()} 
                    className={`p-2 rounded-lg`}
                    style={{
                        background:(!message?.taskCreated?"#FFCCCB":"#FF7F7F")
                    }}
                    >
                Delete
                </button>
            </form>
        </div>
    )
}

export default CreationCard;