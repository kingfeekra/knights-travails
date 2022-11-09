function squares(size = 8) {
    let chessboard = [];
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            chessboard.push([i, j]);
        } 
    }
    return chessboard;
}

function possibleMoves(board = squares(8)) {
    for(i = 0; i < board.length; i++) {
        const arr = board[i].split(",");
        const x = parseInt(arr[0]);
        const y = parseInt(arr[1]);

        const moves = {
            1: [x + 1, y + 2],
            2: [x + 2, y + 1],
            3: [x + 2, y - 1],
            4: [x + 1, y - 2],
            5: [x - 1, y - 2],
            6: [x - 2, y - 1],
            7: [x - 2, y + 1],
            8: [x - 1, y + 2]
        }
    }
    
}

document.write(squares(8));