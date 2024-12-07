import "../css/Admin.css";
import "../css/Cards.css";
import { useState, useEffect } from "react";

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
    const [successMessage, setSuccessMessage] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [currentCardId, setCurrentCardId] = useState(null);

    const backendUrl = process.env.REACT_APP_BACKEND_URL || "https://deckmaster-backend.onrender.com";  // Dynamic URL

    useEffect(() => {
        fetchCards();
    }, []);

    const fetchCards = async () => {
        try {
            const response = await fetch(`${backendUrl}/api/cards`);
            if (response.ok) {
                const data = await response.json();

                // Ensure every card has a valid rarity field
                const sanitizedCards = data.map((card) => ({
                    ...card,
                    rarity: card.rarity || 'Unknown', // Fallback to 'Unknown' if rarity is missing
                }));

                setCards(sanitizedCards);
            } else {
                setError("Failed to fetch cards");
            }
        } catch (err) {
            setError("Error fetching cards: " + err.message);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardData({ ...cardData, [name]: value });
    };

    const handleAddCard = async () => {
        setError("");

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
                const newCard = await response.json();
                setSuccessMessage("Card added successfully!");
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

                // Refresh the list of cards
                fetchCards();
            } else {
                const message = await response.text();
                setError(message);
            }
        } catch (error) {
            setError("An unexpected error occurred while adding the card.");
        }
    };

    const handleEditClick = (card) => {
        setEditMode(true);
        setCurrentCardId(card._id);
        setCardData({
            name: card.name,
            cardType: card.cardType,
            rarity: card.rarity,
            description: card.description,
            attack: card.attack,
            defense: card.defense,
            abilities: card.abilities.join(", "),
            img_name: card.img_name,
        });
    };

    const handleEditCard = async () => {
        setError("");

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

        if (!currentCardId) {
            setError("No card selected for editing.");
            return;
        }

        try {
            const response = await fetch(`${backendUrl}/api/cards/${currentCardId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formattedCardData),
            });

            if (response.ok) {
                setSuccessMessage("Card updated successfully!");

                fetchCards();
                setEditMode(false);
                setCurrentCardId(null);
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
                const message = await response.text();
                setError(message);
            }
        } catch (error) {
            setError("An unexpected error occurred while editing the card.");
        }
    };

    const handleDeleteCard = async (cardId) => {
        if (window.confirm("Are you sure you want to delete this card?")) {
            try {
                const response = await fetch(`${backendUrl}/api/cards/${cardId}`, {
                    method: "DELETE",
                });

                if (response.ok) {
                    setCards(cards.filter(card => card._id !== cardId));
                    setSuccessMessage("Card deleted successfully!");
                } else {
                    const message = await response.text();
                    setError(message);
                }
            } catch (error) {
                setError("An unexpected error occurred while deleting the card.");
            }
        }
    };

    return (
        <>
            <h1 id="admin-title">DeckMaster Admin</h1>
            <h2 id="secondary-admin-title">Card Management</h2>

            <div id="admin-content">
                <div id="admin-search-button">
                    <button>Search</button>
                    <input type="text" placeholder="Search for a card" />
                </div>

                <div id="admin-search">
                    <section id="admin-search-cards">
                        {cards.map((card) => (
                            <div key={card._id} className={`card-container ${card.rarity.toLowerCase()}`}>
                                <div className="card-content">
                                    <div className="card-title">
                                        <h1>{card.name}</h1>
                                    </div>
                                    <div className="card-img">
                                        <img src={card.img_name} alt={card.name} />
                                    </div>
                                    <div className="card-rarity">
                                        <p>Rarity: {card.rarity}</p>
                                    </div>
                                    <div className="card-moves">
                                        <p>{card.description}</p>
                                    </div>
                                    <div className="card-actions">
                                        <button onClick={() => handleEditClick(card)}>Edit</button>
                                        <button onClick={() => handleDeleteCard(card._id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>

                <div className="card-messages">
                    {error && <div className="error-message">{error}</div>}
                    {successMessage && <div className="success-message">{successMessage}</div>}
                </div>
                <div id="add-card-content">
                    <h2>{editMode ? "Edit Card" : "Add New Card"}</h2>
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
                                    <option value="Common">Common</option>
                                    <option value="Rare">Rare</option>
                                    <option value="Epic">Epic</option>
                                    <option value="Legendary">Legendary</option>
                                </select>
                            </div>
                            <div className="admin-input">
                                <p>Description</p>
                                <textarea
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
                            <h3>Stats</h3>
                            <div className="admin-input">
                                <p>Attack</p>
                                <input
                                    className="admin-input-box"
                                    type="number"
                                    name="attack"
                                    value={cardData.attack}
                                    onChange={handleInputChange}
                                    placeholder="Enter Attack Value"
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
                                    placeholder="Enter Defense Value"
                                    required
                                />
                            </div>
                        </section>
                        <section className="admin-box">
                            <h3>Abilities</h3>
                            <div className="admin-input">
                                <p>Abilities (separated by commas)</p>
                                <input
                                    className="admin-input-box"
                                    type="text"
                                    name="abilities"
                                    value={cardData.abilities}
                                    onChange={handleInputChange}
                                    placeholder="Enter Abilities"
                                    required
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
                                    required
                                />
                            </div>
                        </section>
                        <div className="admin-action">
                            <button onClick={editMode ? handleEditCard : handleAddCard}>
                                {editMode ? "Save Changes" : "Add Card"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;
