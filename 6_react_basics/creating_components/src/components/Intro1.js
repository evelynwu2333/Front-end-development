function Intro1(props) {
    return (
        <div className = "blog-post-intro">
            <h2>{props.greet}</h2>
            <h2>I've become a React developer!</h2>
            <div>
                <p>I've completed the React Basics course</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    )
};

export default Intro1;