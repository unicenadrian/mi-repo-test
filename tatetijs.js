const tateti = document.getElementById('tateti');
const message = document.getElementById('message');
let currentPlayer = 'X';
let board = Array(9).fill(null);
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]            
];

function createBoard() {
    tateti.innerHTML = ''; 
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.index = i;
        cell.addEventListener('click', () => handleClick(cell, i));
        tateti.appendChild(cell);
    }
}

function handleClick(cell, index) {
    if (board[index] || checkWinner()) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add('taken');

    const winner = checkWinner();
    if (winner) {
        message.textContent = winner === 'Empate' ? '¡Es un empate!' : `¡${winner} ha ganado!`;
        if (winner !== 'Empate') highlightWinner();
        setTimeout(resetGame, 2000); 
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        message.textContent = `Turno de ${currentPlayer}`;
    }
}

function checkWinner() {
    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return currentPlayer;
        }
    }
    return board.every(cell => cell) ? 'Empate' : null;
}

function highlightWinner() {
    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            [a, b, c].forEach(index => {
                tateti.children[index].classList.add('winner');
            });
        }
    }
}

function resetGame() {
    board = Array(9).fill(null);
    currentPlayer = 'X';
    message.textContent = `Turno de ${currentPlayer}`;
    createBoard();
}

createBoard();


productos=  [   {   "imagen":"img/producto/memk01.jpg",
                    "precio":46500, 
                    "detalle":"2x Memoria Kingston DDR4 8GB 3200MHz Fury"
                }
            ]



            