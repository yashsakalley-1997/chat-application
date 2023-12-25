import { useState } from "react";

import nbxIcon from "../../../assets/images/chatNbxIcon.png"
import CreationCard from "../CreationCard/CreationCard";


export const TaskCard = ({message}) =>{
    const [card,setCard] = useState(false);
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
                    {message?.response === "Yes" || card || message?.taskCreated ? (
                        <CreationCard message={message}/>
                    ):(
                        <div>
                            <div className="capitalize">{message?.response}</div>
                            {message?.response !== "Responding..." && (
                                <button onClick={()=>{
                                    setCard(true)
                                }} className="bg-[#202123] mt-4 p-3 rounded-lg">Schedule Task</button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TaskCard;