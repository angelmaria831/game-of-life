import Cell from "../logic/Cell";
import CellState from "../logic/CellState";

const {ALIVE, DEAD} = CellState

describe('Cell', () => {

    it('should be initialized with a state', () => {

        const cellAlive = new Cell(ALIVE)
        expect(cellAlive.state).toBe(ALIVE)

        const cellDead = new Cell(DEAD)
        expect(cellDead.state).toBe(DEAD)
    });

    it('Alive Cell with fewer than 2 live neighbours should die', () => {
        const aliveCell = new Cell(ALIVE)

        const withOneNeighbour = aliveCell.getNextState(1)
        expect(withOneNeighbour).toBe(DEAD)

        const withZeroNeighbour = aliveCell.getNextState(0)
        expect(withZeroNeighbour).toBe(DEAD)

    });

    it('Alive Cell with 2 or 3 live neighbours should live', () => {
        const aliveCell = new Cell(ALIVE)

        const withTwoNeighbour = aliveCell.getNextState(2)
        expect(withTwoNeighbour).toBe(ALIVE)

        const withThreeNeighbour = aliveCell.getNextState(3)
        expect(withThreeNeighbour).toBe(ALIVE)

    })

    it('Alive Cell with more than 3 live neighbour should die', () => {

        const aliveCell = new Cell(ALIVE)

        const withFourNeighbour = aliveCell.getNextState(4)
        expect(withFourNeighbour).toBe(DEAD)

        const withFiveNeighbour = aliveCell.getNextState(5)
        expect(withFiveNeighbour).toBe(DEAD)

    })

    it('Dead Cell with exactly 3 live neighbours should be Alive', () => {

        const deadCell = new Cell(DEAD)

        const withThreeNeighbour = deadCell.getNextState(3)
        expect(withThreeNeighbour).toBe(ALIVE)
    });

    it('Dead Cell with less than or greater than 3 live neighbours should be Dead', () => {

        const deadCell = new Cell(DEAD)

        const withTwoNeighbour = deadCell.getNextState(2)
        expect(withTwoNeighbour).toBe(DEAD)

        const withFourNeighbour = deadCell.getNextState(4)
        expect(withFourNeighbour).toBe(DEAD)
    })
})