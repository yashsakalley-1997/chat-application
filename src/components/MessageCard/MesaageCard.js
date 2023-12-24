import nbxIcon from "../../assets/images/chatNbxIcon.png";

export const MessageCard = ({message}) =>{
    return (
        <div className="mb-10 ml-5 md:ml-24 flex flex-col gap-5">
            <div className="flex gap-2">
                <div className="w-9 h-9 bg-violet-500 rounded-full flex items-center justify-center text-white">Y</div>

                <div className="text-white">
                    <h3 className="text-white font-semibold text-2xl">You</h3>
                    <span className="capitalize">{message?.question}</span>
                </div>
            </div>

            <div className="flex gap-2">
                <img className="h-10" src={nbxIcon} alt="icon"></img>

                <div className="text-white">
                    <h3 className="text-white font-semibold text-2xl">ChatNbx</h3>
                    {Array.isArray(message?.response) ? (
                        <div>
                            <h4 className="mb-2">Current Weather: </h4>
                            {
                                message?.response.map((elem,index)=>(
                                    <div className="text-left mb-1" key={index}>
                                        <span className="capitalize mr-2">{elem.key}</span>
                                        <span>:</span>
                                        <span className="ml-2">{elem.value}</span>
                                    </div>
                                ))
                            }
                        </div>
                    ):(
                        <span className="capitalize">{message?.response}</span>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default MessageCard;