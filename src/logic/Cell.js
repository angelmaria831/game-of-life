import CellState from "./CellState"

const {ALIVE, DEAD} = CellState
class Cell {

    constructor(state){
        this.state = state
    }

    getNextState(neighbourCount){

        if(this.state === ALIVE ){
            if(neighbourCount === 2 || neighbourCount === 3) return ALIVE
        }else{
            if(neighbourCount === 3) return ALIVE
        }

        return DEAD
    }

}


export default Cell