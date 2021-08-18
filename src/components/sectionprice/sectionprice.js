import "../sectionprice/sectionprice.css"
import tick from "../sectionprice/Icon.png"
const SectionPrice = () => {
    return(
        <div className="section-price">
            <h2 className="price-heading">Simple no-tricks pricing</h2>
            <p className="price-para">If you're not satisfied, contact us within the first 14 days and we'll send you a full refund.</p>
            <div className="card-membership">
                <div className="membership">
                    <h1 className="memeber-heading">Lifetime Membership</h1>
                    <p className="member-para">Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda. </p>
                    <p className="include-line">WHAT'S INCLUDED<span className="hr"/></p>
                    <div className="icon-pack"> 
                    <div>
                    <div className="include">
                            <img src={tick} alt="icon"/>
                            <p className="inlcude-para">Private forum access</p>
                        </div>
                        <div className="include">
                            <img src={tick} alt="icon"/>
                            <p className="inlcude-para">Private forum access</p>
                        </div>
                    </div>
                    <div>
                    <div className="include">
                            <img src={tick} alt="icon"/>
                            <p className="inlcude-para">Private forum access</p>
                        </div>
                        <div className="include">
                            <img src={tick} alt="icon"/>
                            <p className="inlcude-para">Private forum access</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="member-access">
                    <p className="pay">Pay once, own it forever</p>
                    <p className="price">$349 <span className="price-currency">USD</span></p>
                    <p className="policy">Learn about our membership policy</p>
                    <button className="access-btn">Get Access</button>
                    <p className="free">Get a free sample <span className="file">(20MB)</span></p>
                </div>
            </div>
        </div>
    )
}

export default SectionPrice