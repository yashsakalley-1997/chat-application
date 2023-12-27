import { useState } from "react";

import CreationCard from "../CreationCard/CreationCard";
import TasksList from "../TasksList/TasksList";

import { returnFormattedDate,returnTaskChats } from "../../../utils/hooks";

import nbxIcon from "../../../assets/images/chatNbxIcon.png";

export const TaskCard = ({message}) =>{
    const [card,setCard] = useState(false);
    const [showAllTasks,setShowAll] = useState(false);

    return (
        <div className="mb-10 ml-5 md:ml-24 flex flex-col gap-5 mt-10">
            <div className="flex gap-2">
                <div className="w-9 h-9 bg-violet-500 rounded-full flex items-center justify-center text-white">Y</div>

                <div className="text-white">
                    <h3 className="text-white font-semibold text-2xl">You</h3>
                    <span className="capitalize">{message?.question}</span>
                </div>
            </div>

            <div>
                <div className="flex gap-2">
                    <img className="h-10" src={nbxIcon} alt="icon"></img>
                    <h3 className="text-white font-semibold text-2xl">ChatNbx</h3>
                </div>
                <div className="text-white p-2">
                    {
                        message?.question === "Task Reminder" && (
                        <div className="text-left text-[#333333] bg-white p-4 mb-2 rounded-lg w-[80%] md:w-[40%]">
                            <h4 className="capitalize"><span className="font-bold">Title</span>: {message?.response?.title}</h4>
                            <h4 className="capitalize"><span className="font-bold">Start Date</span>: {returnFormattedDate(message?.response?.startDate)}</h4>
                            <h4 className="capitalize"><span className="font-bold">End Date</span>: {returnFormattedDate(message?.response?.endDate)}</h4>
                            <h4 className="capitalize"><span className="font-bold">Notes</span>: {message?.response?.linkNotes}</h4>
                        </div>
                        )
                    }
                    {
                        (message?.question.includes("show all tasks") || showAllTasks) && (
                            <TasksList/>
                        )
                    }
                    {message?.response === "Yes" || card || message?.taskCreated ? (
                        <CreationCard message={message}/>
                    ):(
                        <div>
                            {
                                message?.question !== "Task Reminder" && (
                                    <div className="capitalize">{message?.response}</div>
                                )
                            }
                            {
                                message?.response!=="Responding..." && !message?.question.includes("show all tasks")
                                && message?.question !== "Task Reminder" && (
                                    <div>
                                        {
                                            (
                                                <button onClick={()=>{
                                                    setCard(true)
                                                }} className="bg-[#202123] mt-4 p-3 rounded-lg">Schedule Task</button>
                                            )
                                        }
                                        
                                        <button onClick={()=>{
                                                setShowAll(prev=>!prev)
                                            }} className="bg-[#202123] mt-4 p-3 ml-2 rounded-lg">{(!showAllTasks?"Show":"Hide")} tasks</button>
                                    </div>
                                )
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TaskCard;