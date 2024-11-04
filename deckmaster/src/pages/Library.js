import "../css/Library.css";
import "../css/Cards.css";

const Library = () => {
    return (
        <>
            <h1 id="library-title" >Card Library</h1>

            <div id="search">
                <button id="search-button">Search</button>
                <input type="text" id="search-bar" placeholder="Search for a card"></input>
            </div>

            <div id="library-container">

                <div className="card-container rare">
                    <div className="card-content">
                        <div className="card-title">
                            <h1>Shadow Assassin</h1>
                        </div>
                        <div className="card-img">
                            <img src="images/shadow-assasin.jpeg" alt="shadow-assasin"></img>
                        </div>
                        <div className="card-rarity rare">
                            <p>Rarity: Rare</p>
                        </div>
                        <div className="card-moves">
                            <p>Stealth Strike: Shadow Assassin can attack directly, bypassing defenses, once per turn.</p>
                            <p>Evasive Maneuver: Shadow Assassin has a 50% chance to completely avoid incoming attacks.</p>
                        </div>
                    </div>
                </div>

                <div className="card-container legendary">
                    <div  className="card-content">
                        <div className="card-title">
                            <h1>Thunder Golem</h1>
                        </div>
                        <div className="card-img">
                            <img src="images/thunder-golem.jpeg" alt="Thunder Golem"></img>
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

                <div className="card-container epic">
                    <div className="card-content">
                        <div className="card-title">
                            <h1>Crimson Knight</h1>
                        </div>
                        <div className="card-img">
                            <img src="images/crimson-khight.jpeg" alt="Crimson Knight"></img>
                        </div>
                        <div className="card-rarity epic">
                            <p>Rarity: Epic</p>
                        </div>
                        <div className="card-moves">
                            <p>Blood Frenzy: Gains +10 attack every time it destroys a creature.</p>
                            <p>Crimson Shield: Reduces damage from melee attacks by 25%.</p>
                        </div>
                    </div>
                </div>

                <div className="card-container rare">
                    <div className="card-content">
                        <div className="card-title">
                            <h1>Void Walker</h1>
                        </div>
                        <div className="card-img">
                            <img src="images/void-walker.jpeg" alt="Void Walker"></img>
                        </div>
                        <div className="card-rarity rare">
                            <p>Rarity: Epic</p>
                        </div>
                        <div className="card-moves">
                            <p>Void Shift: Can teleport out of combat, avoiding one attack per game.</p>
                            <p>Soul Drain: Drains 30 health from an enemy creature, healing Void Walker by the same amount.</p>
                        </div>
                    </div>
                </div>

                <div className="card-container legendary">
                    <div className="card-content">
                        <div className="card-title">
                            <h1>Ice Queen</h1>
                        </div>
                        <div className="card-img">
                            <img src="images/ice-queen.jpeg" alt="Ice Queen"></img>
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

                <div className="card-container common">
                    <div className="card-content">
                        <div className="card-title">
                            <h1>Storm Elemental</h1>
                        </div>
                        <div className="card-img">
                            <img src="images/storm-elemental.jpeg" alt="Storm Elemental"></img>
                        </div>
                        <div className="card-rarity common">
                            <p>Rarity: Common</p>
                        </div>
                        <div className="card-moves">
                            <p>Gale Force: Pushes an enemy back, delaying its attack by one turn.</p>
                            <p>Storm Field: Creates a storm for 3 turns, reducing all enemy defense by 10%.</p>
                        </div>
                    </div>
                </div>

                <div className="card-container epic">
                    <div className="card-content">
                        <div className="card-title">
                            <h1>Necromancer</h1>
                        </div>
                        <div className="card-img">
                            <img src="images/Necromancer.jpeg" alt="Necromancer"></img>
                        </div>
                        <div className="card-rarity epic">
                            <p>Rarity: Rare</p>
                        </div>
                        <div class="card-moves">
                            <p>Raise Dead: Revives one fallen ally creature with 50% health.</p>
                            <p>Dark Pact: Sacrifices 50 health to deal 100 damage to an enemy.</p>
                        </div>
                    </div>
                </div>

                <div className="card-container epic">
                    <div className="card-content">
                        <div className="card-title">
                            <h1>Phoenix Guardian</h1>
                        </div>
                        <div className="card-img">
                            <img src="images/phoenix.jpeg" alt="Phoenix"></img>
                        </div>
                        <div class="card-rarity epic">
                            <p>Rarity: Epic</p>
                        </div>
                        <div className="card-moves">
                            <p>Rebirth: Once per game, resurrects after being destroyed with half health.</p>
                            <p>Flame Wings: Deals 50 damage to an enemy and burns them for 10 damage over time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Library;