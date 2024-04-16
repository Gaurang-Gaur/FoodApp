import {LOGO} from "../utils/content";
import {useState} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{

    const [userStatus, setuserStatus]=useState("login");
    const handleClick=()=>{
        userStatus==="login"?setuserStatus("logout"):setuserStatus("login");
    }
    const onlineStatus=useOnlineStatus();


    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
            <div className="w-24 px-2 flex items-center">
            <img   src={LOGO}/>
            </div>
            <div className=" flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="p-4">
                        onlinestatus:{onlineStatus?"👌":"😴"}
                    </li>
                    <li className="p-4">
                        <Link to="/"> Home</Link>
                        
                    </li>

                    <li className="p-4">
                        <Link to="/about">
                        About</Link>
                    </li>
                    <li className="p-4">
                    <Link to="/cart">Cart</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="p-4" type="button" onClick={handleClick}>{userStatus}</li>
                    
                </ul>
            </div>
        </div>
    )
}


export default Header;