import "../css/Library.css";
import "../css/Cards.css";
import Card from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";

const Library = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get("http://localhost:3000/api/cards");
            setCards(response.data);
        })();
    }, []);
    
    return (
        <>
            <h1 id="library-title" >Card Library</h1>

            <div id="search">
                <button id="search-button">Search</button>
                <input type="text" id="search-bar" placeholder="Search for a card"></input>
            </div>

            <div id="library-container">
            {cards.map((card) => (
                <Card key={card._id} card={card} />
            ))}
            </div>
        </>
    );
};

export default Library;