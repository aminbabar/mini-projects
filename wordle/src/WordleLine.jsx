import Tile from "./Tile";

function WordleLine({ secretWord, guess, reveal }) {

    function compare() {
        const matchesArr = [];
        const secretWordSet = new Set(secretWord);
        let matchCount = 0;
        for (let i = 0; i < secretWord.length; i++) {
            if (guess[i] === secretWord[i]) {
                matchCount += 1;
                matchesArr.push('correct');
            } else if (secretWordSet.has(guess[i])) {
                matchesArr.push('close');
            } else {
                matchesArr.push('incorrect');
            }
        }

        return matchesArr;
    }


    function generateTiles(numTiles) {
        const tiles = [];

        if (reveal) {
            const matches = compare();
            for (let i = 0; i < guess.length; i++) {
                tiles.push(<Tile
                    key={tiles.length + 'tile'}
                    keyPressed={guess[i]}
                    property={matches[i]}
                />);
            }
        } else {
            guess && guess.split("").forEach((char) => {
                tiles.push(<Tile
                    key={tiles.length + 'tile'}
                    keyPressed={char}
                />);
            })
            while (tiles.length < numTiles) {
                tiles.push(<Tile key={tiles.length + 'tile'} keyPressed={null} />);
            }
        }
        return tiles;
    }

    return (
        <div className="line">
            {generateTiles(5)}
        </div>
    )
}


export default WordleLine;