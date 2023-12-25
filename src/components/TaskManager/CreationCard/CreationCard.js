import { useEffect, useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setTaskChat } from "../../../store/taskManagerStore";

const CreationCard = ({message})=>{
    const dispatch = useDispatch();

    const title = useRef(message?.taskCreated?.title);
    const startDate = useRef(message?.taskCreated?.startDate);
    const endDate = useRef(message?.taskCreated?.endDate);

    useEffect(()=>{
        title.current.value = message?.taskCreated?.title || ""
        startDate.current.value = message?.taskCreated?.startDate
        endDate.current.value = message?.taskCreated?.endDate
    },[])

    const onFormSubmit = ()=>{
        if(title.current.value && startDate.current.value && endDate.current.value){
            let payload = {
                taskCreated:{
                    title:title.current.value,
                    startDate:startDate.current.value,
                    endDate:endDate.current.value,
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
        <div className="bg-white text-black p-5 rounded-lg mt-5">
            <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col gap-3">
                <div className="flex justify-end gap-2">
                    <span>Task title</span>
                    <input ref={title} required type="text" className="p-2 rounded-lg border border-gray-400 focus:outline-none"/>    
                </div>
                <div className="flex justify-end gap-2">
                    <span>Task Start Date</span>
                    <input ref={startDate} required type="datetime-local" className="p-2 rounded-lg border border-gray-400 focus:outline-none"/>    
                </div>
                <div className="flex justify-end gap-2">
                    <span>Task End Date</span>
                    <input ref={endDate} type="datetime-local" className="p-2 rounded-lg border border-gray-400 focus:outline-none"/>    
                </div>
                <button onClick={()=>onFormSubmit()} className="bg-blue-400 p-2 rounded-lg">Submit</button>
                <button disabled={!message?.taskCreated} onClick={()=>deleteTask()} className={`bg-red-${message?.taskCreated?"400":"200"} p-2 rounded-lg`}>Delete</button>
            </form>
        </div>
    )
}

export default CreationCard;