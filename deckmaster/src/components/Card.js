import "../css/Cards.css";
import Thunder from "../images/thunder-golem.jpeg";

const Card = () => {
    return (
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
    );
};

export default Card;