
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";

import NavBar from "../navbar/NavBar";
import MessageCard from "../MessageCard/MesaageCard";
import InputBox from "../InputBox/InputBox";
import Sidebar from "../SideBar/SideBar";

import { iconLink } from "../../utils/imageLinks";
import { setChat } from "../../store/chatStore";
import { fetchResponse } from "../../utils/apis";
const NewChat = ()=>{
    const dispatch = useDispatch();
    const [screensize,setScreenSize] = useState("");
    const [messages,setMessage] = useState([]);
    const [id,setId] = useState(1);

    const chats = useSelector((store)=>store?.chatStore?.chats)
    console.log("hellooo",chats)
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

        dispatch(setChat({
            id,question:text,response:"loading reply"
        }))
        fetchResponse(text,id).then((res)=>{
            const {choices} = res;
            dispatch(setChat({
                id,question:text,response:choices[0]?.message?.content,
            }))
        }).catch((err)=>{
            console.log("error")
        })
        setMessage([...messages,text])
    }

    return (
        <div className="bg-[#343541] h-screen md:flex gap-5">
            {
                screensize === "Mobile"?<Sidebar/>:<NavBar/>
            } 
            <div className="w-screen h-screen flex flex-col justify-end">
                {
                    messages.length === 0?(
                        <div className="flex flex-col gap-5 my-auto">
                            <img className="h-10" src={iconLink} alt="icon"/>
                            <h1 className="text-white text-2xl font-semibold mx-auto">
                                How can I help you today?
                            </h1>
                        </div>
                    ):(
                        <div className="overflow-y-auto">
                            { 
                                messages.map((elem,index)=>(
                                    <MessageCard message={elem} key={index}/>
                                ))
                            }
                        </div>
                    )
                }
                <InputBox setMessages={setMessages}/>
            </div>
        </div>
    )
}


export default NewChat;