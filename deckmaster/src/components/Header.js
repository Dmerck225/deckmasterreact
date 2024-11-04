import "../css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header id="main-header">
            <div id="logo">
                <img src="images/DeckMasterArchive-logo.jpeg" alt="DeckMaster Archive Logo"></img>
                <h1>DeckMaster Archive</h1>
            </div>
            <div id="login">
                <Link to="/Login">Login</Link>
            </div>
        </header>
    );
};

export default Header;