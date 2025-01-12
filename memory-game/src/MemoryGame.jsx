import { useEffect, useState } from "react";
import Tile from './Tile';

const TILE_COLORS = ['red', 'green', 'blue', 'yellow'];


function MemoryGame() {

    const [tiles, setTiles] = useState([]);
    const [selectedTiles, setSelectedTiles] = useState([]);
    const [foundTiles, setFoundTiles] = useState([]);

    useEffect(() => {
        resetTiles();
    }, []);

    function resetTiles() {
        setFoundTiles([]);
        setSelectedTiles([]);
        setTiles(shuffle(TILE_COLORS.concat(TILE_COLORS)));
    }

    function generateTiles() {
        return tiles.map((color, idx) => {
            let tileColor = null;
            if (selectedTiles.includes(idx) || foundTiles.includes(idx)) {
                tileColor = color;
            }
            return <Tile key={idx} tileIndex={idx} tileColor={tileColor}/>
        });
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
        }
        return array;
    }


    function handleClick(e) {
        if (e.target.classList.contains('tile')) {
            const index = parseInt(e.target.dataset.index);
            if (foundTiles.includes(index) || selectedTiles.includes(index) || selectedTiles.length === 2) return;
            if (selectedTiles.length === 1) {
                const existingIndex = selectedTiles[0];
                const [firstColor, secondColor] = [tiles[existingIndex], tiles[index]];
                if (firstColor === secondColor) {
                    setFoundTiles([...foundTiles, existingIndex, index]);
                    setSelectedTiles([]);
                } else {
                    setSelectedTiles([...selectedTiles, index]);
                    setTimeout(() => setSelectedTiles([]), 1000);
                }

            } else {
                setSelectedTiles([index]);
            }
        }
    }

    let title = <h1>Memory</h1>;
    let restartButton = null;
    if (foundTiles.length === tiles.length) {
        title = <h1>You Win!</h1>;
        restartButton = <button onClick={resetTiles}>Restart</button>;
    }
    return (
        <>
            {title}
            <div className="board" onClick={handleClick}>
                {generateTiles()}
            </div>
            {restartButton}
        </>
    );
}

export default MemoryGame;