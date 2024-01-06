import {LOGO} from "../utils/content";
import {useState} from "react";
import {Link} from "react-router-dom";
const Header=()=>{

    const [userStatus, setuserStatus]=useState("login");
    const handleClick=()=>{
        userStatus==="login"?setuserStatus("logout"):setuserStatus("login");
    }


    return (
        <div className="header">
            <div className="logo-container">
            <img  className="logo" src={LOGO}/>
            </div>
            <div className="nav-bar">
                <ul className="nav-item">
                    <li>
                        <Link to="/"> Home</Link>
                        
                    </li>

                    <li>
                        <Link to="/about">
                        About</Link>
                    </li>
                    <li>
                    <Link to="/cart">Cart</Link>
                    </li>
                    <li type="button" onClick={handleClick}>{userStatus}</li>
                </ul>
            </div>
        </div>
    )
}


export default Header;