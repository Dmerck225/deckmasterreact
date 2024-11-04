import "../css/Admin.css";
import "../css/Cards.css";
import Shadow from "../images/shadow-assasin.jpeg";
import Phoenix from "../images/phoenix.jpeg";
import Thunder from "../images/thunder-golem.jpeg";

const Admin = () => {
    return (
        <>
            <h1 id="admin-title" >DeckMaster Admin</h1>

            <h2 id="secondary-admin-title">Card Management</h2>

            <div id="admin-content">
                
                <div id="admin-search-button">
                    <button>Search</button>
                <input type="text" placeholder="Search for a card"></input>
                </div>

                <div id="admin-search">
                    <seciton id="admin-search-cards">
                        
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

                        <div className="card-container rare">
                            <div className="card-content">
                                <div className="card-title">
                                    <h1>Shadow Assassin</h1>
                                </div>
                                <div className="card-img">
                                    <img src={Shadow} alt="shadow-assasin"></img>
                                </div>
                                <div className="card-rarity rare">
                                    <p>Rarity: Rare</p>
                                </div>
                                <div className="card-moves">
                                    <p>Stealth Strike: Shadow Assassin can attack directly, bypassing defenses, once per turn. This allows it to deal damage without being blocked or countered by other creatures.</p>
                                    <p>Evasive Maneuver: Shadow Assassin has a 50% chance to completely avoid incoming attacks.</p>
                                </div>
                            </div>
                        </div>

                    </seciton>
                    <section id="admin-buttons">
                        <button id="edit-button">Edit</button>
                        <button id="delete-button">Delete</button>
                    </section>
                </div>

                <div id="add-card-content">
                    <h2>Add Card</h2>
                    <div id="admin-container" className="container">
                        
                        <section className="admin-box">
                            <h3>Basic Information</h3>
                            <div className="admin-input">
                                <p>Name</p>
                                <input className="admin-input-box" type="text" placeholder="Enter Name"></input>
                            </div>
                            <div className="admin-input">
                                <p>Card Type</p>
                                <input className="admin-input-box" type="text" placeholder="Enter Type"></input>
                            </div>
                        </section>

                        <section className="admin-box">
                            <h3>Card Details</h3>
                            <div className="admin-input">
                                <p>Rarity</p>
                                <input className="admin-input-box" type="text" placeholder="Enter Rarity"></input>
                            </div>
                            <div className="admin-input">
                                <p>Card Description</p>
                                <input id="input-description" className="admin-input-box" type="text" placeholder="Enter Description"></input>
                            </div>
                        </section>
                        
                        <section className="admin-box">
                            <h3>Attributes</h3>
                            <div className="admin-input">
                                <p>Attack Stats</p>
                                <input className="admin-input-box" type="text" placeholder="Enter Attack Stats"></input>
                            </div>
                            <div className="admin-input">
                                <p>Defense Stats</p>
                                <input className="admin-input-box" type="text" placeholder="Enter Defense Stats"></input>
                            </div>
                            <div className="admin-input">
                                <p>Special Abilities</p>
                                <input className="admin-input-box" type="text" placeholder="Enter Special Abilities"></input>
                            </div>
                        </section>
                        
                        <section id="add-button-section" className="admin-box">
                            <button id="add-button">Add Card</button>
                        </section>
                    </div>
                </div>

                <div id="template-card-container">

                    <h3>Template Card: </h3>
                    
                    <div className="card-container common">
                        <div className="card-content">
                            <div className="card-title">
                                <h1>Card Name</h1>
                            </div>
                            <div className="card-img">
                                <img src="https://placehold.co/400x200" alt="placeholder"></img>
                            </div>
                            <div className="card-rarity common">
                                <p>Rarity:</p>
                            </div>
                            <div className="card-moves">
                                <p>Special Ability 1</p>
                                <p>Special Ability 2</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
};

export default Admin;