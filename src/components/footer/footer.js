import footer from "../footer/bgfooter.png";
import logo from "../footer/logofooter.png";
import fb from "../footer/fbIcon.png";
import ig from "../footer/igIcon.png";
import bird from "../footer/twitter.png";
import gitIcon from "../footer/github.png";
import ballIcon from "../footer/ball.png";
import "../footer/footer.css"
const Footer = () => {
    return(
        <div className="bg-footer">
            <img src={footer} alt="bgImage" className="bg-img"/>
            <div className="footer-section">
                <div>
                    <img src={logo} alt="logoImage"/>
                    <p className="bg-icon">Making the world a better place through constructing elegant hierarchies.</p>
                    <div className="icons">
                        <img src={fb} alt="fbIcon"/>
                        <img src={ig} alt="igIcon"/>
                        <img src={bird} alt="twitterIcon"/>
                        <img src={gitIcon} alt="gitHubIcon"/>
                        <img src={ballIcon} alt="BallIcon"/>
                    </div>
                </div>
                <div>
                    <ul className="list-section">
                        <li className="li-heading">SOLUTIONS</li>
                        <li className="li-list">Marketing</li>
                        <li className="li-list">Analytics</li>
                        <li className="li-list">Commerce</li>
                        <li className="li-list">Insights</li>
                    </ul>
                </div>
                <div>
                    <ul className="list-section">
                        <li className="li-heading">SUPPORT</li>
                        <li className="li-list">Pricing</li>
                        <li className="li-list">Documentation</li>
                        <li className="li-list">Guides</li>
                        <li className="li-list">API Status</li>
                    </ul>
                </div>
                <div>
                    <ul className="list-section">
                        <li className="li-heading">COMPANY</li>
                        <li className="li-list">About</li>
                        <li className="li-list">Blog</li>
                        <li className="li-list">Jobs</li>
                        <li className="li-list">Press</li>
                        <li className="li-list">Partners</li>
                    </ul>
                </div>
                <div>
                    <ul className="list-section">
                        <li className="li-heading">LEGAL</li>
                        <li className="li-list">Claim</li>
                        <li className="li-list">Privacy</li>
                        <li className="li-list">Terms</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className="copyright">© 2020 Workflow, Inc. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer