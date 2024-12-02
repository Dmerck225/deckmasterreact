import "../css/About.css";
import Me from "../images/ai-photo-of-me.jpg";
import Feedback from "../components/Feedback";

const About = () => {
    return (
        <>
            <h1 id="about-title" >About Us</h1>

            <div id="about-content" className="container">
                <div id="about">
                    <section id="about-description">
                        <h1>About DeckMaster Archive</h1>
                        <p>DeckMaster Archive is a website dedicated to providing detailed information about cards used in our game. Our goal is to help players understand and strategize with their cards more effectively. </p>
                    </section>
                    <seciton id="meet-the-team">
                        <h3>Meet The Team</h3>
                        <img src={Me} alt="team-member1"></img>
                        <p>Developer: Dreyton Merck</p>
                    </seciton>
                </div>
                <div id="faq">
                    <h1>Frequently Asked Questions</h1>
                    <p>Find answers to common questions about DeckMaster Archive.</p>
                    <section id="faq-lists">
                        <h3>General Questions</h3>
                        <ul>
                            <li>What is DeckMaster Archive?</li>
                            <li>Do I need an account to use the site?</li>
                            <li>Is DeckMaster Archive free to use?</li>
                            <li>Can I submit new cards to the database?</li>
                        </ul>
                        <h3>Account and Admin</h3>
                        <ul>
                            <li>How do I become and admin?</li>
                            <li>How do I add new cards as an admin?</li>
                            <li>Can I delete my account?</li>
                            <li>What should I do if I find an error in a card's information?</li>
                        </ul>
                        <h3>Technical Issues</h3>
                        <ul>
                            <li>Why can't i upload an image for a card?</li>
                            <li>The site isnt displaying correctly--what should I do?</li>
                            <li>Why is the Deck Builder not saving my deck?</li>
                            <li>What browsers are supported by DeckMaster Archive?</li>
                        </ul>
                    </section>
                </div>
            </div>

            <div id="contact">
                <Feedback />
            </div>
        </>
    );
};

export default About;