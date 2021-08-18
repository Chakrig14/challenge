import logo from "../navbar/Mark.png";
import menu from "../navbar/Vector.png";
import MenuBar from "../menubar/menubar"
import {useState} from "react"
import "../navbar/navbar.css"
const NavBar = () => {
    const [menuToggled,setToggle] = useState(false);
    const toggleMenu = () => {
        setToggle(prevState => ({menuToggled:!prevState.menuToggled}))
    }
    const closeToggle = () => {
        setToggle(false)
    }
    if(menuToggled.menuToggled === true){
        return <MenuBar value={closeToggle}/>
    }
    else{
        return(
            <>
            <div className="navbar-mobile">
            <div className="navbar-md">
                <img src={logo} alt="imageLogo" className="logo"/>
                <button className="menu-btn" onClick={toggleMenu}>
                <img src={menu} alt="menu" className="menu-icon"/>
                </button>
            </div>
            </div>
            <div className="navbar-lg">
                <div className="navbar-main-lg">
                <ul>
                    <li>
                        <a href="/" className="navbar-item"><img src={logo} alt="imageLogo" /></a>
                    </li>
                    <li className="main-li">
                        <a href="/" className="navbar-item">Product</a>
                    </li>
                    <li className="main-li">
                        <a href="/" className="navbar-item">Features</a>
                    </li>
                    <li className="main-li">
                        <a href="/" className="navbar-item">Marketplace</a>
                    </li>
                    <li className="main-li">
                        <a href="/" className="navbar-item">Company</a>
                    </li>
                </ul>
                <div className="signup-lg">
                    <a href="/" className="navbar-item">Log In</a>
                    <button className="navbar-trail">Start Free Trail</button>
                </div>
                </div>
            </div>
            </>
        )
    }
};

export default NavBar;