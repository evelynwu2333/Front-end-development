function Nav() {
    const navStyle = {
        background: "azure",
        width: "cal(30% - 10px)",
        marginLeft: "10px" // notice margin-left in html, comma is ; in html, and "" is added in js
    }

    return (
        <nav
            style={navStyle}
            className="main-nav">
            <h2>Navbar content here</h2>
            <ul>
                <li>Home</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
};

export default Nav;