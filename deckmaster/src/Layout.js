import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/Nav.css";

const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    
    return (
        <>
            <Header />
            <div className={menuOpen ? "triangle-up" : "triangle-down"} onClick={toggleMenu}></div>

            <nav id="main-nav" className={menuOpen ? "hidden" : ""}>
                <ul id="nav-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Library">Card Library</Link></li>
                    <li><Link to="/Deck">Deck Builder</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/Admin">DeckMaster Admin</Link></li>
                </ul>
            </nav>

            <Outlet />

            <Footer />
        </>
    );
};

export default Layout;