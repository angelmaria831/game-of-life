import Cell from "./Cell"

class Game {

    constructor(board){
        this.board = board.map((row) =>row.map(cell => {return new Cell(cell)}))
        this.rowNum = board.length
        this.colNum = board[0].length
    }


    getCell(row, col){
        return this.board[row][col]
    }


    getNeighbourCount(row, col){

        const startRow = (row - 1) >= 0 ? row - 1 : row;
        const endRow = (row + 1) <= this.rowNum - 1 ? row + 1 : row

        const startCol = col - 1 >= 0 ? col - 1 : col
        const endCol = col + 1 <= this.colNum - 1 ? col + 1 : col

        let count = 0

        for(let i = startRow; i <= endRow; i++){
            for(let j = startCol; j <= endCol; j++){
                if(!(i == row && j == col)) count += this.board[i][j].state
            }
        }

        return count
    }


    getNextGeneration() {
        return this.board.map((row, rowNum) => 
            row.map((cell, colNum) => new Cell(cell.getNextState(this.getNeighbourCount(rowNum, colNum))))
        )
    }

}

export default Game