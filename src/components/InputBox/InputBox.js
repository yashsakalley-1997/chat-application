

const InputBox = ()=>{
    return (
        <div className="border z-10 absolute bottom-2 border-gray-200 w-[60%] rounded-lg flex align-middle mb-3">
            <input className="bg-[#343541]
                w-full
                text-white rounded-lg
                focus:outline-none
                p-4" 
                placeholder="Ask Anything?"
                // ref={message}
                ></input>
                
                <div className="bg-[#494a54] rounded-lg flex m-2">
                <span 
                // onClick={()=>setMessages()}
                className="text-[#343541] px-3 text-3xl">↑</span>
                </div>
        </div>
    )
}

export default InputBox;