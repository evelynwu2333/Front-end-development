function Promo(props) {
    return (
        <div className = "promo-section">
            <div>
                <h1 style={{color:"tomato", fontSize:"40px", fontweight:"bold"}}>
                    {props.heading}, Don't miss the deal!
                </h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}, Subscribe to my newsletter and get all the shop items at 50% off!</h2>
            </div>
        </div>
    )
};

export default Promo;