
import { useEffect,useState,useRef } from "react";
import { useSelector } from "react-redux";
import { returnFormattedDate, returnTasksCreated } from "../../../utils/hooks";

const TasksList = ()=>{
    const textRef = useRef("");
    const sortByRef = useRef("");
    const sortOrderRef = useRef("");
    const chats = useSelector((store)=>store?.taskManagerStore?.taskChats);
    const [arrList,setArrList] = useState([]);

    useEffect(()=>{
        setArrList(returnTasksCreated(chats))
    },[])

    const searchText = ()=>{
        let text = textRef.current.value;
        if(!text){
            setArrList(returnTasksCreated(chats))
            return
        }
        const filteredArr = arrList.filter((elem)=>{
            return elem?.title?.toLowerCase().includes(text.toLowerCase())
        })
        setArrList(filteredArr)
    }


    const sortTasks = ()=>{
        const type = sortByRef.current.value;
        const order = sortOrderRef.current.value;
        const compareDates = (a,b)=>{
            const date1 = new Date(a[type]);
            const date2 = new Date(b[type]);
            if(order === "asc"){
                return date1-date2
            }
            else{
                return date2-date1
            }
        }
        let sorted = [...arrList].sort(compareDates)
        setArrList(sorted)
    }

    return (
        <div>
            {
                returnTasksCreated(chats).length !== 0 ? (
                    <div>
            <div className="flex flex-col gap-4 mt-2 mb-2">
                <form className="flex gap-2" onSubmit={(e)=>e.preventDefault()}>
                    <input className="bg-[#343541]
                        text-white rounded-lg
                        focus:outline-none
                        border
                        border-gray-200
                        p-4" 
                        ref={textRef}
                        placeholder="Search by Title"
                    />
                    <button onClick={()=>{
                        searchText()
                    }} className="bg-[#202123] p-3 rounded-lg">Search</button>
                </form>
                {arrList.length !== 0 && (
                    <div className="flex gap-4 align-middle mb-2">
                    <div>
                        <label htmlFor="sortBy">Sort By</label>
                        <select
                            id="sortBy"
                            ref={sortByRef}
                            onChange={sortTasks}
                            name="sortByValues"
                            className="block text-black px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none"
                        >
                            <option value="startDate">Start Date</option>
                            <option value="endDate">End Date</option>
                            <option value="dateCreated">Date Created</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="sortBy">Sort Order</label>
                        <select
                            id="sortBy"
                            ref={sortOrderRef}
                            onChange={sortTasks}
                            name="sortByValues"
                            className="block text-black px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none"
                        >
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                </div>
                )}
            </div>
            {
                arrList.map((elem,index)=>(
                    <div className="text-left text-[#333333] bg-white p-4 mb-2 rounded-lg w-[80%] md:w-[40%]" key={index}>
                        <h4 className="capitalize"><span className="font-bold">Title</span>: {elem?.title}</h4>
                        <h4 className="capitalize"><span className="font-bold">Start Date</span>: {returnFormattedDate(elem?.startDate)}</h4>
                        <h4 className="capitalize"><span className="font-bold">End Date</span>: {returnFormattedDate(elem?.endDate)}</h4>
                        <h4 className="capitalize"><span className="font-bold">Notes</span>: {elem?.linkNotes}</h4>
                    </div>
                ))
            }
        </div>
                ):(
                    <h1>No Tasks Schedules as of now</h1>
                )
            }
        </div>
    )
}

export default TasksList;