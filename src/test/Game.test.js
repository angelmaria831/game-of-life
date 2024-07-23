import Game from "../logic/Game";
import CellState from "../logic/CellState";
import Cell from "../logic/Cell";

const {DEAD, ALIVE} = CellState

const board = [
    [DEAD,DEAD,DEAD,DEAD,DEAD],
    [DEAD,DEAD,DEAD,DEAD,DEAD],
    [DEAD,DEAD,DEAD,DEAD,DEAD],
    [DEAD,DEAD,DEAD,DEAD,DEAD],
    [DEAD,DEAD,DEAD,DEAD,DEAD],
]

describe('Game', () => {

    it('should have cell with cell state',() => {

        const gameBoard = new Game(board)

        const deadCell =  gameBoard.getCell(0,0)
        expect(deadCell.state).toBe(DEAD)

    });

    it('should have cells with instance of Cell', () => {

        const gameBoard = new Game(board)

        const deadCell =  gameBoard.getCell(0,0)
        console.log({deadCell})
        expect(deadCell).toBeInstanceOf(Cell)
    })
})