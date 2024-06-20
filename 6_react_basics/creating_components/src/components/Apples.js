import App from "../App"

function Apples(props) {
    return (
        <div classNmae="promo-section">
            <div>
                <h2>These apples are: {props.color}</h2>
            </div>
            <div>
                <h3>These are {props.number} apples.</h3>
            </div>
        </div>
    )
};
export default Apples;