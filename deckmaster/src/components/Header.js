import "../css/Header.css";
import { Link } from "react-router-dom";
import Logo from "../images/DeckMasterArchive-logo.jpeg";

const Header = () => {
    return (
        <header id="main-header">
            <div id="logo">
                <img src={Logo} alt="DeckMaster Archive Logo"></img>
                <h1>DeckMaster Archive</h1>
            </div>
            <div id="login">
                <Link to="/Login">Login</Link>
            </div>
        </header>
    );
};

export default Header;