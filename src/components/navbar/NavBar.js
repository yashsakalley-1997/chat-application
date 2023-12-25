import { useNavigate,useLocation } from "react-router-dom";

import { navMenu } from "../../utils/apiConstants";
import { iconLink } from "../../utils/imageLinks";
const NavBar = ()=>{
    const navigate = useNavigate();
    const {pathname} = useLocation();
    return (
        <div className="bg-black w-[25%] p-5 h-screen text-white">
            <div className="flex justify-between mb-10">
                <img className="h-6" src={iconLink} alt="icon"></img>
            </div>
            {
                navMenu.map((elem,index)=>(
                    <div onClick={()=>navigate(elem?.link)} className={`mb-3 p-3 ${pathname === elem?.link?"bg-[#202123] rounded-lg":""}`} key={index}>
                        {elem?.displayName}
                    </div>
                ))
            }
        </div>
    )
}

export default NavBar;