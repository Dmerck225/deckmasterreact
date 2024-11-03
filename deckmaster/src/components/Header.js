import "../css/Header.css";

const Header = () => {
    return (
        <header id="main-header">
            <div id="logo">
                <img src="images/DeckMasterArchive-logo.jpeg" alt="DeckMaster Archive Logo"></img>
                <h1>DeckMaster Archive</h1>
            </div>
            <div id="login">
                <a href="login.html">Login</a>
            </div>
            <nav id="main-nav">
                <div id="toggle-nav">
                    <div id="toggle-nav-triangle" className="triangle-up"></div>
                </div>
                <ul id="nav-items" class="hidden-small">
                    <li><a href="home.html">Home</a></li>
                    <li><a href="cardLibrary.html">Card Library</a></li>
                    <li><a href="deckBuilder.html">Deck Builder</a></li>
                    <li><a href="aboutUs.html">About Us</a></li>
                    <li><a href="deckMasterAdmin.html">DeckMaster Admin</a></li>
                </ul>
            </nav>
        </header>
    );
};