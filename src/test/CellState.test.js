import CellState from "../logic/CellState";

describe('CellState', () => {

    it('should be initialzed with DEAD or ALIVE', () => {
        expect(CellState.ALIVE).toBe(1)
        expect(CellState.DEAD).toBe(0)
    })
})