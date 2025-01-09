import { useEffect, useState, useRef } from "react";
import WordleLine from './WordleLine';
const URL = "https://api.frontendexpert.io/api/fe/wordle-words";

function Wordle() {
    // const [lineActive, setLineActive] = useState(0);
    const NUM_LINES = 6;
    const [guess, setGuess] = useState('');
    const MAX_WORD_LENGTH = 5;
    const [secretWord, setSecretWord] = useState(null);
    const [guesses, setGuesses] = useState([]);
    const [gameWon, setGameWon] = useState(false);
    const guessRef = useRef("");

    useEffect(() => {
        fetch(`http://localhost:3000/api/proxy?url=${URL}`)
            .then((res) => res.json())
            .then((words) => {
                const randomWord = words[Math.floor(words.length * Math.random())];
                setSecretWord(randomWord.toLowerCase());
            })
    }, []);
    
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.metaKey ||event.ctrlKey) {
                return;
            }
            else if (event.key.match(/^[a-zA-Z]$/)) {
                setGuess((prevGuess) => {
                    if (prevGuess.length < MAX_WORD_LENGTH) {
                        guessRef.current = prevGuess + event.key;
                        return prevGuess + event.key;
                    } else {
                        return prevGuess;
                    }
                });
            } else if (event.key === 'Backspace') {
                setGuess((prevGuess) => {
                    guessRef.current = prevGuess.slice(0, -1);
                    return prevGuess.slice(0, -1)
                });
            } else if (event.key === 'Enter' && guessRef.current.length === MAX_WORD_LENGTH) {
                setGuesses([...guesses, guessRef.current]);
                setGuess("");
            }
        }
        
        if (guesses.length === NUM_LINES || gameWon) {
            window.removeEventListener("keydown", handleKeyPress);
        } else {
            window.addEventListener("keydown", handleKeyPress);
        }
        
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [guesses, gameWon]);

    useEffect(() => {
        if (guesses.includes(secretWord)) setGameWon(true);
    }, [guesses, secretWord]);


    function generateWordleLines() {
        const wordleLines = [];
        guesses.forEach((guess, index) => {
            wordleLines.push(<WordleLine 
                                secretWord={secretWord} 
                                guess={guess} 
                                key={index + 'line'} 
                                reveal={true}
                            />
                            );
        });
        if (wordleLines.length < NUM_LINES) {
            wordleLines.push(<WordleLine 
                                secretWord={secretWord} 
                                guess={guess} 
                                key={wordleLines.length + 'line'} 
                                reveal={false} 
                            />);
        }

        while (wordleLines.length < NUM_LINES) {
            wordleLines.push(<WordleLine 
                                secretWord={secretWord} 
                                guess={null} 
                                key={wordleLines.length + 'line'}
                                reveal={false}
                            />);
        }
        return wordleLines;
    }


    return(
        <div className="board">
            {generateWordleLines()}
        </div>
    );
}



export default Wordle;