import {Link} from "react-router-dom"

const Home = () => {
    return (
    <>
        <h1>HOME PAGE</h1>
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about?name=timo&age=100">ABOUT_1</Link></li>
            <li><Link to="/about?name=yumi&age=50">ABOUT_2</Link></li>
            <li><Link to="/contact/byeon/34">CONTACT</Link></li>
        </ul>
    </>
    )
}

export default Home;