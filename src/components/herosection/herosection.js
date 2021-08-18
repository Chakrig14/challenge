import "../herosection/herosection.css"
import image from "../herosection/Image.png"

const SectionHero  = () => {
    return(
        <div className="section-hero-md">
            <div className="section-md">
            <img src={image} alt="mainImage" className="sec-img"/>
            </div>
            <div className="sec-content">
            <div>
                <h3 className="sec-heading">Data to enrich your</h3>
                <h3 className="sec-heading color">online bussiness</h3>
                <p className="sec-para">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt. </p>
            </div>
            <p className="sec-signup">Sign up to get notified when it’s ready.</p>
            <div className="sec-input">
                <div className="section-signup">
                <input placeholder="Enter your email" className="sec-email"/>
                <button className="sec-btn">Start Free Trail</button>
                </div>
                <p className="sec-para sec-policy">We care about the protection of your data. Read our <a href="/">Privacy Policy</a>.</p>
            </div>
            </div>
        </div>
    )
}

export default SectionHero