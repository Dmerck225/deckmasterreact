import "../css/Home.css";
import "../css/Cards.css";
import Comp from "../images/competitive-play.avif";
import Forest from "../images/whimsical-forest.jpg";
import Hobbit from "../images/hobbit-update.jpeg";
import New from "../images/new-cards.jpeg";
import Thunder from "../images/thunder-golem.jpeg";
import Queen from "../images/ice-queen.jpeg";
import Phoenix from "../images/phoenix.jpeg";
import NewsCard from "../components/NewsCard";
import FeaturedCard from "../components/FeaturedCard";

const Home = () => {
    return ( 
        <>
            <div id="home-tagLine">
                <h2>Welcome to DeckMaster Archive</h2>
                <p>Explore. Build. Master the game</p>
            </div>

            <div id="home-img">
                <img src={Forest} alt="Whimsical Forest" />
            </div>

            <div id="home-arrows">
                <div className="arrow-left"></div>
                <p>1</p>
                <div className="arrow-right"></div>
            </div>

            <div id="highlights">
                <h1>DeckMaster Highlights</h1>
            </div>

            <div id="home-bottom" className="container">
                <div id="news" className="container">
                    <section id="news-title">
                        <h2>News and Updates</h2>
                        <p>Stay up to date with the latest additions to the DeckMaster Archive! We’re constantly expanding our collection to bring you new and exciting cards, features, and updates. Be sure to check back often to explore the latest entries, discover powerful new cards, and enhance your gameplay experience!</p>
                    </section>
                    <section id="news-cards" className="container">
                        <NewsCard 
                            image={Comp} 
                            alt="Competitive Play" 
                            title="Competitive Play" 
                            description="The DeckMaster Archive is now accepting competitive play." 
                        />
                        <NewsCard 
                            image={Hobbit} 
                            alt="Hobbit Update" 
                            title="New Hobbit Update!" 
                            description="Check out the new Hobbit update." 
                        />
                        <NewsCard 
                            image={New} 
                            alt="New Cards" 
                            title="New Cards" 
                            description="Check out the new cards in the DeckMaster Archive." 
                        />
                    </section>
                </div>

                <div id="featured-cards" className="container">
                    <section id="featured-cards-title">
                        <h2>Featured Cards</h2>
                        <p>Discover some of the most powerful and exciting cards in the DeckMaster Archive! Dive into a world of legendary cards, unique abilities, and thrilling gameplay possibilities. Explore the Archive to find rare and iconic cards that can transform your deck and give you an edge in your next match!</p>
                    </section>
                    <section id="featured-cards-cards" className="container">
                        <FeaturedCard 
                            title="Thunder Golem"
                            image={Thunder}
                            alt="Thunder Golem"
                            rarity="Legendary"
                            moves={["ThunderStorm Blast: Upon entering the battlefield, Thunder Golem deals 30 damage to all enemy creatures.", "Electric Shield: Reduces incoming damage by 20% from all sources. This move reflects the golem's natural defense, absorbing and dispersing energy from attacks."]}
                        />
                        <FeaturedCard 
                        title="Ice Queen"
                        image={Queen}
                        alt="Ice Queen"
                        rarity="Legendary"
                        moves={["Frozen Touch: Freezes an enemy creature, preventing it from attacking for one turn.", "Blizzard Call: Deals 40 damage to all enemies and reduces their attack by 10 for two turns."]}
                        />
                        <FeaturedCard 
                        title="Phoenix Guardian"
                        image={Phoenix}
                        alt="Phoenix Guardian"
                        rarity="Epic"
                        moves={["Rebirth: Once per game, resurrects after being destroyed with half health.", "Flame Wings: Deals 50 damage to an enemy and burns them for 10 damage over time."]}
                        />
                    </section>
                </div>
            </div>
        </>
    );
};

export default Home;
