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

    it('live cell with fewer than two live neighbours should die', () => {

        const testBoard = [
            [DEAD,DEAD,DEAD,DEAD,ALIVE],
            [DEAD,ALIVE,DEAD,DEAD,DEAD],
            [DEAD,DEAD,ALIVE,DEAD,ALIVE],
            [DEAD,DEAD,ALIVE,DEAD,DEAD],
            [DEAD,DEAD,ALIVE,DEAD,ALIVE],
        ]

        const gameBoard = new Game(testBoard)

        const cellWithOneNeighbour = gameBoard.getNeighbourCount(1, 1)
        const nextStateWithOneNeighbour = gameBoard.getCell(1, 1).getNextState(cellWithOneNeighbour)
        expect(nextStateWithOneNeighbour).toBe(DEAD)

        const cellWithNoNeighbour = gameBoard.getNeighbourCount(0, 4)
        const nextStateWithNoNeighbour = gameBoard.getCell(0, 4).getNextState(cellWithNoNeighbour)
        expect(nextStateWithNoNeighbour).toBe(DEAD)

        
    })

    it('live cell with 2 or 3 live neighbours should live', () => {

        const testBoard = [
            [DEAD,DEAD,DEAD,DEAD,ALIVE],
            [DEAD,ALIVE,DEAD,ALIVE,DEAD],
            [DEAD,DEAD,ALIVE,DEAD,ALIVE],
            [DEAD,DEAD,ALIVE,DEAD,DEAD],
            [DEAD,DEAD,ALIVE,DEAD,ALIVE],
        ]

        const gameBoard = new Game(testBoard)

        const cellWithTwoNeighbour = gameBoard.getNeighbourCount(3, 2)
        const nextStateWithTwoNeighbour = gameBoard.getCell(3, 2).getNextState(cellWithTwoNeighbour)
        expect(nextStateWithTwoNeighbour).toBe(ALIVE)

        const cellWithThreeNeighbour = gameBoard.getNeighbourCount(2, 2)
        const nextStateWithThreeNeighbour = gameBoard.getCell(2, 2).getNextState(cellWithThreeNeighbour)
        expect(nextStateWithThreeNeighbour).toBe(ALIVE)

    })

    it('live cell with more than 3 live neighbours should die', () => {

        const testBoard = [
            [DEAD,DEAD,DEAD,ALIVE,ALIVE],
            [DEAD,ALIVE,DEAD,ALIVE,DEAD],
            [DEAD,DEAD,ALIVE,DEAD,ALIVE],
            [DEAD,ALIVE,ALIVE,ALIVE,DEAD],
            [DEAD,ALIVE,ALIVE,DEAD,ALIVE],
        ]

        const gameBoard = new Game(testBoard)
        
        const cellWithFourNeighbours = gameBoard.getNeighbourCount(1, 3)
        const nextStatewithFourNeighbours = gameBoard.getCell(1, 3).getNextState(cellWithFourNeighbours)
        expect(nextStatewithFourNeighbours).toBe(DEAD)

        const cellWithFiveNeighbours = gameBoard.getNeighbourCount(2, 3)
        const nextStatewithFiveNeighbours = gameBoard.getCell(2, 3).getNextState(cellWithFiveNeighbours)
        expect(nextStatewithFiveNeighbours).toBe(DEAD)

    })

    it('dead cell with exactly 3 live neighbours should live', () => {
        
        const testBoard = [
            [DEAD,DEAD,DEAD,ALIVE,ALIVE],
            [DEAD,ALIVE,DEAD,ALIVE,DEAD],
            [DEAD,DEAD,ALIVE,DEAD,ALIVE],
            [DEAD,ALIVE,ALIVE,ALIVE,DEAD],
            [DEAD,ALIVE,ALIVE,DEAD,ALIVE],
        ]

        const gameBoard = new Game(testBoard)

        const deadCellWithThreeNeighbours = gameBoard.getNeighbourCount(3, 4)
        const nextStatewithThreeNeighbours = gameBoard.getCell(3, 4).getNextState(deadCellWithThreeNeighbours)
        expect(nextStatewithThreeNeighbours).toBe(ALIVE)
    })

    it('dead cell with no 3 live neighbours should die', () => {

        const testBoard = [
            [DEAD,DEAD,DEAD,ALIVE,ALIVE],
            [DEAD,ALIVE,DEAD,ALIVE,DEAD],
            [DEAD,DEAD,ALIVE,DEAD,ALIVE],
            [DEAD,ALIVE,ALIVE,ALIVE,DEAD],
            [DEAD,ALIVE,ALIVE,DEAD,ALIVE],
        ]

        const gameBoard = new Game(testBoard)

        const deadCellWithOneNeighbours = gameBoard.getNeighbourCount(1, 0)
        const nextStatewithOneNeighbours = gameBoard.getCell(1, 0).getNextState(deadCellWithOneNeighbours)
        expect(nextStatewithOneNeighbours).toBe(DEAD)

        const deadCellWithFourNeighbours = gameBoard.getNeighbourCount(4, 3)
        const nextStatewithFourNeighbours = gameBoard.getCell(4, 3).getNextState(deadCellWithFourNeighbours)
        expect(nextStatewithFourNeighbours).toBe(DEAD)
    })

    
})