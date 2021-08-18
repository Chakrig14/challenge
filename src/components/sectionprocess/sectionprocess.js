import "../sectionprocess/sectionprocess.css"
import avatar from "../sectionprocess/Avatar.png"
import dot from "../sectionprocess/Dot.png"
import iconMessage from "../sectionprocess/Icon.png"
const SectionProcess = () => {
    return(
        <div className="section-process">
            <div className="selection-profile">
                <div className="profile-card">
                    <img src={avatar} alt="avatar"/>
                    <div>
                        <p className="name">Jane Cooper</p>
                        <p className="email">jane.cooper@gmail.com</p>
                    </div>
                    <div className="profile-status">
                        <img src={dot} alt="success"/>
                        <p className="success">Success</p>
                    </div>
                </div>
                <div className="profile-card">
                    <img src={avatar} alt="avatar"/>
                    <div>
                        <p className="name">Jane Cooper</p>
                        <p className="email">jane.cooper@gmail.com</p>
                    </div>
                    <div className="profile-status">
                        <img src={dot} alt="success"/>
                        <p className="success">Success</p>
                    </div>
                </div>
                <div className="profile-card">
                    <img src={avatar} alt="avatar"/>
                    <div>
                        <p className="name">Jane Cooper</p>
                        <p className="email">jane.cooper@gmail.com</p>
                    </div>
                    <div className="profile-status">
                        <img src={dot} alt="success"/>
                        <p className="success">Success</p>
                    </div>
                </div>
                <div className="profile-card">
                    <img src={avatar} alt="avatar"/>
                    <div>
                        <p className="name">Jane Cooper</p>
                        <p className="email">jane.cooper@gmail.com</p>
                    </div>
                    <div className="profile-status">
                        <img src={dot} alt="success"/>
                        <p className="success">Success</p>
                    </div>
                </div>
            </div>
            <div className="selection-message">
        <div>
            <h1 className="heading">Always in Loop</h1>
            <p className="heading-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo.</p>
        </div>
        <div className="message">
            <img src={iconMessage} alt="messageIcon" className="icon"/>
            <div className="message-content">
                <p className="notify-head">Mobile Notifications</p>
                <p className="notification">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. </p>
            </div>
        </div>
        <div className="message">
            <img src={iconMessage} alt="messageIcon" className="icon"/>
            <div className="message-content">
                <p className="notify-head">Mobile Notifications</p>
                <p className="notification">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. </p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default SectionProcess;