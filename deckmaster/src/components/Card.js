import "../css/Cards.css";

const Card = ({ title, image, rarity, moves }) => {
    return (
        <div className={`card-container ${rarity.toLowerCase()}`}>
            <div className="card-content">
                <div className="card-title">
                    <h1>{title}</h1>
                </div>
                <div className="card-img">
                    <img src={image} alt={title}></img>
                </div>
                <div className={`card-rarity ${rarity.toLowerCase()}`}>
                    <p>Rarity: {rarity}</p>
                </div>
                <div className="card-moves">
                    {moves.map((move, index) => (
                        <p key={index}>{move}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
