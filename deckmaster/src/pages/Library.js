import "../css/Library.css";
import "../css/Cards.css";
import Card from "../components/Card";

const Library = () => {
    return (
        <>
            <h1 id="library-title" >Card Library</h1>

            <div id="search">
                <button id="search-button">Search</button>
                <input type="text" id="search-bar" placeholder="Search for a card"></input>
            </div>

            <div id="library-container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
};

export default Library;