import "../moneycontent/moneycontent.css"

const MoneyContent = props => {
    const {cardDetails} = props;
    const {classCard,heading,content} = cardDetails;
    return (
        <div className="section-card">
            <div className="flex-card">
                <div className="card-image">
                    <img src={classCard.email} alt="emailIcon" className="card-image-email" />
                </div>
                <h1 className="card-heading">{heading}</h1>
            </div>
            <p className="card-content">{content}</p>
        </div>
    )
}

export default MoneyContent