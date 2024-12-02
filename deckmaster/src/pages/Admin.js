import "../css/Admin.css";
import "../css/Cards.css";
import { useState, useEffect } from "react";
import Shadow from "../images/shadow-assasin.jpeg";
import Phoenix from "../images/phoenix.jpeg";
import Thunder from "../images/thunder-golem.jpeg";

const Admin = () => {
    const [cardData, setCardData] = useState({
        name: "",
        cardType: "",
        rarity: "",
        description: "",
        attack: "",
        defense: "",
        abilities: "",
        img_name: "",
    });

    const [cards, setCards] = useState([]);
    const [error, setError] = useState("");

    const backendUrl = "https://deckmaster-backend.onrender.com";

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardData({ ...cardData, [name]: value });
    };

    const fetchCards = async () => {
        try {
            const response = await fetch(`${backendUrl}/api/cards`);
            if (response.ok) {
                const data = await response.json();
                setCards(data);
            } else {
                console.error("Failed to fetch cards");
            }
        } catch (err) {
            console.error("Error fetching cards:", err);
        }
    };

    const handleAddCard = async () => {
        setError(""); // Clear previous errors

        // Client-side validation
        if (!cardData.name || !cardData.cardType || !cardData.rarity || !cardData.description || !cardData.attack || !cardData.defense || !cardData.abilities || !cardData.img_name) {
            setError("All fields are required!");
            return;
        }

        if (isNaN(cardData.attack) || isNaN(cardData.defense)) {
            setError("Attack and Defense must be numbers!");
            return;
        }

        const formattedCardData = {
            ...cardData,
            attack: parseInt(cardData.attack),
            defense: parseInt(cardData.defense),
            abilities: cardData.abilities.split(",").map((ability) => ability.trim()),
        };

        try {
            const response = await fetch(`${backendUrl}/api/cards`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formattedCardData),
            });

            if (response.ok) {
                alert("Card added successfully!");
                setCardData({
                    name: "",
                    cardType: "",
                    rarity: "",
                    description: "",
                    attack: "",
                    defense: "",
                    abilities: "",
                    img_name: "",
                });
                fetchCards(); // Update the card list
            } else {
                const message = await response.text();
                setError(message);
            }
        } catch (error) {
            console.error("Error adding card:", error);
            setError("An unexpected error occurred while adding the card.");
        }
    };

    useEffect(() => {
        fetchCards();
    }, []);

    return (
        <>
        <h1 id="admin-title">DeckMaster Admin</h1>
        <h2 id="secondary-admin-title">Card Management</h2>
        <div id="admin-content">
            {/* Existing Search and Card Display */}
            <div id="admin-search-button">
                <button>Search</button>
                <input type="text" placeholder="Search for a card"></input>
            </div>
            <div id="admin-search">
                <section id="admin-search-cards">
                    {/* Example cards */}
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
                        <div className="card-content">
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
                                <p>Electric Shield: Reduces incoming damage by 20% from all sources.</p>
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
                </section>
            </div>

            <div id="add-card-content">
                <h2>Add Card</h2>
                <div id="admin-container" className="container">
                    <section className="admin-box">
                        <h3>Basic Information</h3>
                        <div className="admin-input">
                            <p>Name</p>
                            <input
                                className="admin-input-box"
                                type="text"
                                name="name"
                                value={cardData.name}
                                onChange={handleInputChange}
                                placeholder="Enter Name"
                                required
                            />
                        </div>
                        <div className="admin-input">
                            <p>Card Type</p>
                            <input
                                className="admin-input-box"
                                type="text"
                                name="cardType"
                                value={cardData.cardType}
                                onChange={handleInputChange}
                                placeholder="Enter Type"
                                required
                            />
                        </div>
                    </section>
                    <section className="admin-box">
                        <h3>Card Details</h3>
                        <div className="admin-input">
                            <p>Rarity</p>
                            <select
                                className="admin-input-box"
                                name="rarity"
                                value={cardData.rarity}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Rarity</option>
                                <option value="Common">Common</option>
                                <option value="Rare">Rare</option>
                                <option value="Epic">Epic</option>
                                <option value="Legendary">Legendary</option>
                            </select>
                        </div>
                        <div className="admin-input">
                            <p>Description</p>
                            <textarea
                                id="input-description"
                                className="admin-input-box"
                                name="description"
                                value={cardData.description}
                                onChange={handleInputChange}
                                placeholder="Enter Description"
                                required
                            />
                        </div>
                    </section>
                    <section className="admin-box">
                        <h3>Attributes</h3>
                        <div className="admin-input">
                            <p>Attack</p>
                            <input
                                className="admin-input-box"
                                type="number"
                                name="attack"
                                value={cardData.attack}
                                onChange={handleInputChange}
                                placeholder="Enter Attack Stats"
                                required
                            />
                        </div>
                        <div className="admin-input">
                            <p>Defense</p>
                            <input
                                className="admin-input-box"
                                type="number"
                                name="defense"
                                value={cardData.defense}
                                onChange={handleInputChange}
                                placeholder="Enter Defense Stats"
                                required
                            />
                        </div>
                    </section>
                    <section className="admin-box">
                        <h3>Abilities</h3>
                        <div className="admin-input">
                            <p>Abilities</p>
                            <textarea
                                className="admin-input-box"
                                name="abilities"
                                value={cardData.abilities}
                                onChange={handleInputChange}
                                placeholder="Enter Abilities (comma-separated)"
                                required
                            />
                        </div>
                        <div className="admin-input">
                            <p>Image URL</p>
                            <input
                                className="admin-input-box"
                                type="url"
                                name="img_name"
                                value={cardData.img_name}
                                onChange={handleInputChange}
                                placeholder="Enter Image URL"
                                required
                            />
                        </div>
                    </section>

                    <button className="submit-btn" onClick={handleAddCard}>
                        Submit Card
                    </button>
                    {error && <p className="error-message">{error}</p>}
                </div>
            </div>
        </div>
        </>
    );
};

export default Admin;
