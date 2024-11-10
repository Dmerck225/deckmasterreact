import "../css/Cards.css";

const Card = ({ card }) => {
    return (
        <div className={`card-container ${card.rarity.toLowerCase()}`}>
            <div className="card-content">
                <div className="card-title">
                    <h1>{card.name}</h1>
                </div>
                <div className="card-img">
                    <img src={`http://localhost:3000/${card.img_name}`} alt={card.name} />
                </div>
                <div className={`card-rarity ${card.rarity.toLowerCase()}`}>
                    <p>Rarity: {card.rarity}</p>
                </div>
                <div className="card-moves">
                    {card.abilities.map((move, index) => (
                        <p key={index}>{move}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
