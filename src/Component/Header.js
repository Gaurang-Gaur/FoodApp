import {LOGO} from "../utils/content";
const Header=()=>{


    return (
        <div className="header">
            <div className="logo-container">
            <img  className="logo" src={LOGO}/>
            </div>
            <div className="nav-bar">
                <ul className="nav-item">
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


export default Header;