import Cell from "./Cell"

class Game {

    constructor(board){
        this.board = board.map((row) =>row.map(cell => {return new Cell(cell)}))
    }


    getCell(row, col){
        return this.board[row][col]
    }

}

export default Game