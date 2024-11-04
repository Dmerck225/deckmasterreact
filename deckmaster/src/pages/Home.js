import "../css/Home.css";
import "../css/Cards.css";
import Comp from "../images/competitive-play.avif";
import Forest from "../images/whimsical-forest.jpg";
import Hobbit from "../images/hobbit-update.jpeg";
import New from "../images/new-cards.jpeg";
import Thunder from "../images/thunder-golem.jpeg";
import Queen from "../images/ice-queen.jpeg";
import Phoenix from "../images/phoenix.jpeg";

const Home = () => {
    return ( 
        <>
            <div id="home-tagLine">
                <h2>Welcome to DeckMaster Archive</h2>
                <p>Explore. Build. Master the game</p>
            </div>


            <div id="home-img">
                    <img src={Forest} alt="Whimsical Forest"></img>
            </div>


            <div id="home-arrows">
                <div class="arrow-left"></div>
                <p>1</p>
                <div class="arrow-right"></div>
            </div>


            <div id="highlights">
                <h1>DeckMaster Highlights</h1>
            </div>


            <div id="home-bottom" className="container">
                <div id="news" className="container">
                    <section id="news-title">
                        <h2>News and Updates</h2>
                        <p>Stay up to date with the latest additions to the DeckMaster Archive! In this section, you’ll find announcements about newly released cards, balance changes, upcoming events, and any major updates to the game. Whether it's a new set of legendary creatures, a special in-game event, or adjustments to card abilities, this is where you’ll hear about it first. Check back regularly to stay informed about everything happening in the world of your favorite card game!</p>
                    </section>
                    <seciton id="news-cards" className="container">
                        <div className="news-card">
                            <section className="news-card-img">
                                <img src={Comp} alt="Competitive Play"></img>
                            </section>
                            <section className="news-card-text">
                                <h3>Competitive Play</h3>
                                <p>The DeckMaster Archive is now accepting competitive play.</p>
                            </section>
                        </div>
                        <div className="news-card">
                            <section className="news-card-img">
                                <img src={Hobbit} alt="Competitive Play"></img>
                            </section>
                            <section className="news-card-text">
                                <h3>New Hobbit Update!</h3>
                                <p>Check out the new Hobbit update.</p>
                            </section>
                        </div>
                        <div className="news-card">
                            <section class="news-card-img">
                                <img src={New} alt="new cards"></img>
                            </section>
                            <section className="news-card-text">
                                <h3>New Cards</h3>
                                <p>Check out the new cards in the DeckMaster Archive.</p>
                            </section>
                        </div>
                    </seciton>
                </div>
                <div id="featured-cards" className="container">
                    <section id="featured-cards-title">
                        <h2>Featured Cards</h2>
                        <p>Discover some of the most powerful and exciting cards in the DeckMaster Archive! The Featured Cards section showcases standout cards from the collection, highlighting their unique abilities, strengths, and how they can turn the tide of battle. Whether it’s legendary creatures, rare spells, or strategic cards with game-changing effects, this section gives you a closer look at what makes them special. Check here to explore our top picks and learn how to use them in your deck to gain the upper hand!</p>
                    </section>
                    <seciton id="featured-cards-cards" class="container">
                    
                        <div className="card-container legendary">
                            <div  className="card-content">
                                <div className="card-title">
                                    <h1>Thunder Golem</h1>
                                </div>
                                <div className="card-img">
                                    <img src={Thunder} alt="Thunder Golem"></img>
                                </div>
                                <div className="card-rarity legendary">
                                    <p>Rarity: Legendary</p>
                                </div>
                                <div className="card-moves">
                                    <p>ThunderStorm Blast:  Upon entering the battlefield, Thunder Golem deals 30 damage to all enemy creatures.</p>
                                    <p>Electric Shield: Reduces incoming damage by 20% from all sources. This move reflects the golem's natural defense, absorbing and dispersing energy from attacks.</p>
                                </div>
                            </div>
                        </div>


                        <div className="card-container legendary">
                            <div className="card-content">
                                <div className="card-title">
                                    <h1>Ice Queen</h1>
                                </div>
                                <div className="card-img">
                                    <img src={Queen} alt="Ice Queen"></img>
                                </div>
                                <div className="card-rarity legendary">
                                    <p>Rarity: Legendary</p>
                                </div>
                                <div className="card-moves">
                                    <p>Frozen Touch: Freezes an enemy creature, preventing it from attacking for one turn.</p>
                                    <p>Blizzard Call: Deals 40 damage to all enemies and reduces their attack by 10 for two turns.</p>
                                </div>
                            </div>
                        </div>


                        <div className="card-container epic">
                            <div className="card-content">
                                <div className="card-title">
                                    <h1>Phoenix Guardian</h1>
                                </div>
                                <div className="card-img">
                                    <img src={Phoenix} alt="Phoenix"></img>
                                </div>
                                <div className="card-rarity epic">
                                    <p>Rarity: Epic</p>
                                </div>
                                <div className="card-moves">
                                    <p>Rebirth: Once per game, resurrects after being destroyed with half health.</p>
                                    <p>Flame Wings: Deals 50 damage to an enemy and burns them for 10 damage over time.</p>
                                </div>
                            </div>
                        </div>


                    </seciton>
                </div>
            </div>
        </>
    );
};

export default Home;