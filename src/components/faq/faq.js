import topArrow from "../faq/Icon.png";
import dropArrow from "../faq/drop.png"
import "../faq/faq.css";
const Faq = () => {
    return(
        <div>
            <h1 className="faq-heading">Frequently Asked Questions</h1>
            <div className="faqs-card">
            <hr />
            <div>
            <div className="faq-card">
                <p className="faq-para">What's the bets thing about Switzerland?</p>
                <img src={topArrow} alt="topArrow" className="icon-top"/>
            </div>
            <p className="faq-answer">I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</p>
            </div>
            <hr />
            <div className="faq-card">
                <p className="faq-para">How do you make holy water?</p>
                <img src={dropArrow} alt="topArrow" className="icon-top"/>
            </div>
            <hr />
            <div className="faq-card">
                <p className="faq-para">What do you call someone with no body and no nose?</p>
                <img src={dropArrow} alt="topArrow" className="icon-top"/>
            </div>
            <div className="faq-card">
                <p className="faq-para">Why do you never see elephants hiding in trees?</p>
                <img src={dropArrow} alt="topArrow" className="icon-top"/>
            </div>
            <div className="faq-card">
                <p className="faq-para">Why can’t you hear a pterodactyl go to the bathroom?</p>
                <img src={dropArrow} alt="topArrow" className="icon-top"/>
            </div>
            <div className="faq-card">
                <p className="faq-para">Why did the invisible man turn down the job offer?</p>
                <img src={dropArrow} alt="topArrow" className="icon-top"/>
            </div>
            </div>
            </div>
    )
}

export default Faq