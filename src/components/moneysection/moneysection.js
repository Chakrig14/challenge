import footer from "../footer/bgfooter.png";
import downBgImage from "../moneysection/down.png"
import "../moneysection/moneysection.css";
import {Component} from "react";
import email from "../moneysection/Vector.png";
import team from "../moneysection/multiple.png";
import arrowImage from "../moneysection/arrow.png";
import dotted from "../sectionprice/Path.png"

class MoneySection extends Component {
    render(){
        return(
            <>
            <div className="section-money-lg">
            <img src={footer} alt="bgImage" className="bg-img"/>
                <h1 className="money-heading money-color">FEATURES</h1>
                <p className="money-para">A better way to send money</p>
                <div className="section-card-lg">
                <img src={dotted} alt="dot-bg" className="dot-img" />
                    <div className="section-one">
                    <div className="section-card">
                    <div className="flex-card">
                        <div className="card-image">
                            <img src={email} alt="emailIcon" className="card-image-email" />
                        </div>
                        <h1 className="card-heading">Email Notification</h1>
                    </div>
                    <p className="card-content">Let your team members receive email notifications about important changes they need to be aware of. Let your team members receive email notifications.</p>
                </div>
                <div className="section-card">
                    <div className="flex-card">
                        <div className="card-image">
                            <img src={email} alt="emailIcon" className="card-image-email" />
                        </div>
                        <h1 className="card-heading">Rich Domain Model</h1>
                    </div>
                    <p className="card-content">Targetprocess has a rich domain model with several different types of entities. These entities can be customized to fit your process.</p>
                </div>
                    </div>
                <div className="section-one">
                <div className="section-card">
                    <div className="flex-card">
                        <div className="card-image">
                            <img src={email} alt="emailIcon" className="card-image-email" />
                        </div>
                        <h1 className="card-heading">Multi-Language Support</h1>
                    </div>
                    <p className="card-content">Allow your team to communicate about the work they do using comments and @mentions.</p>
                </div>
                <div className="section-card">
                    <div className="flex-card">
                        <div className="card-image">
                            <img src={email} alt="emailIcon" className="card-image-email" />
                        </div>
                        <h1 className="card-heading">Comments & Mentions</h1>
                    </div>
                    <p className="card-content">Allow your team to communicate about the work they do using comments and @mentions.</p>
                </div>
                </div>
                <div className="section-one">
                <div className="team-card">
                    <img src={team} alt="teamImage" className="team-img"/>
                    <div>
                    <h1 className="card-heading">Multiple Teams Support</h1>
                    <p className="card-content">Allow multiple teams to collaborate more effectively when delivering project(s) together. Help project members see how their work contributes to the bigger picture.</p>
                    </div>
                </div>
                <div className="inner-section">
                <div className="section-card">
                    <div className="flex-card">
                        <div className="card-image">
                            <img src={email} alt="emailIcon" className="card-image-email" />
                        </div>
                        <h1 className="card-heading">Share Views</h1>
                    </div>
                    <p className="card-content">Share any view, report, or dashboard with stakeholders to provide live updates on your progress.</p>
                </div>
                <div className="update-card">
                    <div className="arrow-icon">
                    <img src={arrowImage} alt="arrowImage" />
                    <span className="plus-icon">+</span>
                    </div>
                    <p className="card-heading-bl">More Updates, Features & Articles are here.</p>
                    <a href="/" className="color">Learn More</a>
                </div>
                </div>
                </div>
                </div>
                {/* <img src={downBgImage} alt="bgImage" className="image-down"/> */}
            </div>
            <div className="section-money-md">
            <img src={footer} alt="bgImage" className="bg-img"/>
                <h1 className="money-heading money-color">FEATURES</h1>
                <p className="money-para">A better way to send money</p>
                <div className="section-card-lg">
                    <div className="section-card">
                    <div className="flex-card">
                        <div className="card-image">
                            <img src={email} alt="emailIcon" className="card-image-email" />
                        </div>
                        <h1 className="card-heading">Email Notification</h1>
                    </div>
                    <p className="card-content">Let your team members receive email notifications about important changes they need to be aware of. Let your team members receive email notifications.</p>
                </div>
                <div className="section-card">
                    <div className="flex-card">
                        <div className="card-image">
                            <img src={email} alt="emailIcon" className="card-image-email" />
                        </div>
                        <h1 className="card-heading">Rich Domain Model</h1>
                    </div>
                    <p className="card-content">Targetprocess has a rich domain model with several different types of entities. These entities can be customized to fit your process.</p>
                </div>
                <div className="section-card">
                    <div className="flex-card">
                        <div className="card-image">
                            <img src={email} alt="emailIcon" className="card-image-email" />
                        </div>
                        <h1 className="card-heading">Multi-Language Support</h1>
                    </div>
                    <p className="card-content">Allow your team to communicate about the work they do using comments and @mentions.</p>
                </div>
                <div className="section-card">
                    <div className="flex-card">
                        <div className="card-image">
                            <img src={email} alt="emailIcon" className="card-image-email" />
                        </div>
                        <h1 className="card-heading">Comments & Mentions</h1>
                    </div>
                    <p className="card-content">Allow your team to communicate about the work they do using comments and @mentions.</p>
                </div>
                <div className="section-card">
                    <img src={team} alt="teamImage" className="team-img"/>
                    <h1 className="card-heading">Multiple Teams Support</h1>
                    <p className="card-content">Allow multiple teams to collaborate more effectively when delivering project(s) together. Help project members see how their work contributes to the bigger picture.</p>
                </div>
                <div className="inner-section">
                <div className="section-card">
                    <div className="flex-card">
                        <div className="card-image">
                            <img src={email} alt="emailIcon" className="card-image-email" />
                        </div>
                        <h1 className="card-heading">Share Views</h1>
                    </div>
                    <p className="card-content">Share any view, report, or dashboard with stakeholders to provide live updates on your progress.</p>
                </div>
                <div className="update-card">
                    <div className="arrow-icon">
                    <img src={arrowImage} alt="arrowImage"/>
                    <span className="plus-icon">+</span>
                    </div>
                    <p className="card-heading-bl">More Updates, Features & Articles are here.</p>
                    <a href="/" className="color">Learn More</a>
                </div>
                </div>
                </div>
                <img src={downBgImage} alt="bgImage" className="image-down"/>
            </div>
            </>
        )
    }
}

export default MoneySection