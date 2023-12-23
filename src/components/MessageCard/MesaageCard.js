import { userIcon } from "../../utils/imageLinks";


export const MessageCard = ({message}) =>{
    return (
        <div className="mb-10 mx-20">
            <div className="flex gap-2">
                <img className="h-10" src={userIcon} alt="icon"></img>

            <div className="text-white">
                <h3 className="text-white font-semibold text-2xl">You</h3>
                <span className="capitalize">{message}</span>
            </div>
            </div>
        </div>
    )
}

export default MessageCard;