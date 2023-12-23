import { iconLink } from "../../utils/imageLinks";
const NavBar = ()=>{
    const navMenu = [
        {
            displayName:"Weather App",
            link:"/weather",
        }
        ,
        {
            displayName:"News App",
            link:"/news"
        }
        ,
        {
            displayName:"Task Manager App",
            link:"/task-manager"
        }
    ]
    return (
        <div className="bg-black w-[25%] p-5 h-screen text-white">
            <div className="flex justify-between mb-10">
                <img className="h-6" src={iconLink} alt="icon"></img>
                New Chat
            </div>
            {
                navMenu.map((elem,index)=>(
                    <div className="mb-3 bg-[#202123] p-3 rounded-lg" key={index}>
                        {elem?.displayName}
                    </div>
                ))
            }
        </div>
    )
}

export default NavBar;