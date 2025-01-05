
class TicTacToe {
    constructor() {
        this.gameContainer = document.querySelector("#board");
        this.table = this.gameContainer.querySelector("table");
        this.gameHeading = this.gameContainer.querySelector("#game-heading");
        this.restartButton = this.gameContainer.querySelector("#restart-button");
        this.table.addEventListener("click", this.handleBoardClick.bind(this));
        this.restartButton.addEventListener("click", this.restartGame.bind(this));
        this.board = this.setupBoard();
        this.currentPlayer = 'X';
    }

    setupBoard() {
        return Array.from({ length: 3 }, () => Array(3).fill(""));
    }

    restartGame() {
        const buttons = this.table.querySelectorAll('button');
        buttons.forEach((button) => {
            button.textContent = '';
            button.disabled = false;
        });
        this.currentPlayer = 'X';
        this.gameHeading.textContent = "Player 1's Turn";
        this.restartButton.style.display = 'none';
        this.board = this.setupBoard();
    }

    handleBoardClick(e) {
        const cell = e.target;

        if (cell.tagName === "BUTTON") {
            cell.textContent = this.currentPlayer;
            cell.disabled = true;
            let rowIndex = cell.parentElement.parentElement.rowIndex;
            let colIndex = cell.parentElement.cellIndex;
            this.playMove(rowIndex, colIndex)
        }
    }

    disableAllCells() {
        const buttons = this.table.querySelectorAll("button");
        buttons.forEach((button) => {
            button.disabled = true;
        });
    }

    playMove(rowIndex, colIndex) {
        this.board[rowIndex][colIndex] = this.currentPlayer;
        if (!this.gameFinished()) {
            this.changePlayer();
        }
    }

    gameFinished() {
        return this.gameWon() || this.gameDraw();
    }

    gameWon() {
        // i have access to this.currentPlayer 
        // rows
        for (let r = 0; r < this.board.length; r++) {
            const first = this.board[r][0];
            let won = true;
            for (let c = 0; c < this.board[0].length; c++) {
                if (!this.board[r][c] || this.board[r][c] !== first) {
                    won = false;
                }
            }
            if (won) return this.handleGameWin();
        }

        // cols
        for (let r = 0; r < this.board.length; r++) {
            const first = this.board[0][r];
            let won = true;
            for (let c = 0; c < this.board[0].length; c++) {
                if (!this.board[c][r] || this.board[c][r] !== first) {
                    won = false;
                }
            }
            if (won) return this.handleGameWin();
        }

        // diags
        let won = true;
        for (let r = 0; r < this.board.length; r++) {
            const first = this.board[0][0];
            for (let c = 0; c < this.board.length; c++) {
                if (r === c && (!this.board[r][c] || this.board[r][c] !== first)) {
                    won = false;
                }
            }
        }
        if (won) return this.handleGameWin();

        won = true;
        let r = 0;
        let c = this.board[0].length - 1;
        let last = this.board[r][c];
        while (r < this.board.length && c >= 0) {
            if (!last || last !== this.board[r][c]) {
                won = false;
            }
            r += 1;
            c -= 1;
        }
        if (won) return this.handleGameWin();

        return false;
    }

    handleGameWin() {
        this.gameHeading.textContent = this.currentPlayer === 'X' ? "Player 1 Won!" : "Player 2 Won!";
        this.restartButton.style.display = 'block';
        this.disableAllCells();
        return true;
    }

    gameDraw() {
        let draw = this.board.flat().every((cell) => cell !== "");
        if (draw) {
            this.gameHeading.textContent = 'Tie Game!';
            this.restartButton.style.display = 'block';
            return true;
        } else {
            return false;
        }
    }

    changePlayer() {
        if (this.currentPlayer === 'X') {
            this.currentPlayer = 'O';
            this.gameHeading.textContent = "Player 2's Turn";
        } else {
            this.currentPlayer = 'X';
            this.gameHeading.textContent = "Player 1's Turn";
        }
    }
}

export default TicTacToe;