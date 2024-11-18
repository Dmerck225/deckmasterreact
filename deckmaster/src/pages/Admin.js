import "../css/Admin.css";
import "../css/Cards.css";
import Shadow from "../images/shadow-assasin.jpeg";
import Phoenix from "../images/phoenix.jpeg";
import Thunder from "../images/thunder-golem.jpeg";
import { useState } from "react";

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardData({ ...cardData, [name]: value });
    };

    const handleAddCard = async () => {
        try {
            const response = await fetch("/api/cards", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...cardData,
                    attack: parseInt(cardData.attack),
                    defense: parseInt(cardData.defense),
                    abilities: cardData.abilities.split(",").map((ability) => ability.trim()),
                }),
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
            } else {
                alert("Failed to add card. Please try again.");
            }
        } catch (error) {
            console.error("Error adding card:", error);
            alert("An error occurred while adding the card.");
        }
    };

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
                                />
                            </div>
                        </section>
                        <section className="admin-box">
                            <h3>Card Details</h3>
                            <div className="admin-input">
                                <p>Rarity</p>
                                <input
                                    className="admin-input-box"
                                    type="text"
                                    name="rarity"
                                    value={cardData.rarity}
                                    onChange={handleInputChange}
                                    placeholder="Enter Rarity"
                                />
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
                                />
                            </div>
                            <div className="admin-input">
                                <p>Abilities (comma-separated)</p>
                                <input
                                    className="admin-input-box"
                                    type="text"
                                    name="abilities"
                                    value={cardData.abilities}
                                    onChange={handleInputChange}
                                    placeholder="Enter Special Abilities"
                                />
                            </div>
                            <div className="admin-input">
                                <p>Image URL</p>
                                <input
                                    className="admin-input-box"
                                    type="text"
                                    name="img_name"
                                    value={cardData.img_name}
                                    onChange={handleInputChange}
                                    placeholder="Enter Image URL"
                                />
                            </div>
                        </section>
                        <section id="add-button-section" className="admin-box">
                            <button id="add-button" onClick={handleAddCard}>
                                Add Card
                            </button>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;
