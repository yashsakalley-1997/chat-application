
import { iconLink } from "../../utils/imageLinks";
import { useState,useRef } from "react";

import NavBar from "../navbar/NavBar";
import MessageCard from "../MessageCard/MesaageCard";
import InputBox from "../InputBox/InputBox";
const NewChat = ()=>{
    const [messages,setMessage] = useState(["aaa","aaa","aaa","asaas"]);
    const message = useRef("");

    const setMessages = ()=>{
        setMessage([...messages,message.current.value])
    }

    console.log("message list",messages)

    return (
        <div className="bg-[#343541] h-screen flex gap-5">
            <NavBar/>
            <div className="w-screen flex flex-col justify-between">
                {
                    messages.length === 0?(
                        <div className="flex flex-col gap-5 py-52">
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
                <InputBox></InputBox>
            </div>
        </div>
    )
}


export default NewChat;