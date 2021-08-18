import close from "../navbar/X.png"
import logo from "../navbar/Mark.png";
const MenuBar = props => {
    const {value} = props
    return (
        <div className="navbar-mobile">
            <div className="navbar-content">
                <img src={logo} alt="imgaeLogo" />
                <button className="menu-btn" onClick={value}>
                <img src={close} alt="closemodel"/>
                </button>
            </div>
            <div className="navbar-content-list">
                <ul>
                    <li>
                        <a href="/">Products</a>
                    </li>
                    <li>
                        <a href="/">Features</a>
                    </li>
                    <li>
                        <a href="/">Marketplace</a>
                    </li>
                    <li>
                        <a href="/">Company</a>
                    </li>
                </ul>
            </div>
            <div className="horizontal-bar"/>
            <div className="signup-section">
                <button className="btn-free">Start Free Trail</button>
                <p className="signup">Existing customer? <span>Log In</span></p>
            </div>
        </div>
    )
}

export default MenuBar