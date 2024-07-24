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

        const deadCellRow1 =  gameBoard.getCell(1,0)
        expect(deadCellRow1.state).toBe(DEAD)

    });

    it('should have cells with instance of Cell', () => {

        const gameBoard = new Game(board)

        const deadCell =  gameBoard.getCell(0,0)

        expect(deadCell).toBeInstanceOf(Cell)
    })

    it('should get the live neighbour around given cell', () => {

        const testBoard = [
            [DEAD,DEAD,DEAD,DEAD,ALIVE],
            [DEAD,ALIVE,DEAD,DEAD,DEAD],
            [DEAD,DEAD,ALIVE,DEAD,ALIVE],
            [DEAD,DEAD,ALIVE,DEAD,DEAD],
            [DEAD,DEAD,ALIVE,DEAD,ALIVE],
        ]

        const gameBoard = new Game(testBoard)

        const cellWithZeroNeighbour = gameBoard.getNeighbourCount(4,4)
        expect(cellWithZeroNeighbour).toBe(0)

        const cellWithOneNeighbour = gameBoard.getNeighbourCount(1, 1)
        expect(cellWithOneNeighbour).toBe(1)

        const cellWithTwoNeighbour = gameBoard.getNeighbourCount(2, 2)
        expect(cellWithTwoNeighbour).toBe(2)

        const cellWithThreeNeighbour = gameBoard.getNeighbourCount(4, 3)
        expect(cellWithThreeNeighbour).toBe(3)

    })




})