function validSolution(sudokuBoard) {
    if (sudokuBoard.length !== 9) {
        console.error("Sudoku board must have 9 rows and 9 columns.");
        return false;
    }

    for (let i = 0; i < 9; i++) {
         for (let j = 0; j < 9; j++) {
            const boardElement = sudokuBoard[i][j];
                if (!boardElement || boardElement == '0' || !validRow(sudokuBoard, i, j, boardElement) || !validColumn(sudokuBoard, i, j, boardElement) | !validBox(sudokuBoard, i, j, boardElement)) {
                    return false;
            }
        }
    }
    return true;
};
 
function validRow(sudokuBoard, row, column, boardElement) {
    for (let j = 0; j < 8; j++) {
            if (j === column) {
                continue;
            }

            if (sudokuBoard[row][j] === boardElement) {
                return false; 
            }
        }
    return true;
}
 
function validColumn(sudokuBoard, row, column, boardElement) {
    for (let i = 0; i < 8; i++) {
        if (i === row) {
            continue;
        }

        if (sudokuBoard[i][column] === boardElement) {
            return false; 
        }
    }
    return true;
}
 
function validBox(sudokuBoard, row, column, boardElement) {
    const startRow = row - (row % 3), startCol = column - (column % 3);
     
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (i === row && j === column) {
                continue;
            }

            if (sudokuBoard[i][j] === boardElement) {
                return false;
            }
        }
    }
    return true;
}

module.exports = validSolution;

