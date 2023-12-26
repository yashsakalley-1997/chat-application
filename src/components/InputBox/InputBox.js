import { useRef } from "react";
const InputBox = ({loading,setMessages})=>{
    const textRef = useRef("");
    return (
        <div className="flex justify-center mt-5">
            <form onSubmit={(e)=>e.preventDefault()} className="border bottom-2 border-gray-200 w-[80%] rounded-lg flex align-middle mb-[10px]">
                <input className="bg-[#343541]
                    w-full
                    text-white rounded-lg
                    focus:outline-none
                    p-4" 
                    placeholder={(loading?"Response Loading...":"Ask Anything?")}
                    ref={textRef}
                />
                    
                <div className="bg-[#494a54] rounded-lg flex m-2" onClick={()=>{
                    if(textRef.current.value){
                        setMessages(textRef.current.value)
                    }
                    textRef.current.value = ""
                }}>
                    <button disabled={loading} type="submit" className="text-[#343541] px-3 text-3xl">↑</button>
                </div>
            </form>
        </div>
    )
}

export default InputBox;