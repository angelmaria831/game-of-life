import './App.css';
import { useState} from 'react';
import gameLogic from './logic/index'

const {CellState, Cell, Game} = gameLogic
const {DEAD, ALIVE} = CellState

const board  = [
  [DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD],
  [DEAD,DEAD,ALIVE,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD],
  [DEAD,DEAD,DEAD,ALIVE,DEAD,DEAD,DEAD,DEAD,DEAD,ALIVE,ALIVE,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD],
  [DEAD,ALIVE,ALIVE,ALIVE,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD],
  [DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,ALIVE,ALIVE,DEAD,DEAD,DEAD],
  [DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,ALIVE,ALIVE,DEAD,DEAD,DEAD,ALIVE,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,ALIVE,DEAD,ALIVE,DEAD,DEAD,DEAD],
  [DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,ALIVE,ALIVE,DEAD,DEAD,DEAD,ALIVE,DEAD,ALIVE,DEAD,DEAD,DEAD,DEAD,ALIVE,ALIVE,DEAD,DEAD,DEAD,DEAD,DEAD],
  [DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,ALIVE,DEAD,DEAD,DEAD,DEAD,ALIVE,ALIVE,ALIVE,DEAD,DEAD,DEAD,DEAD,ALIVE,DEAD,DEAD,DEAD,DEAD,DEAD],
  [DEAD,ALIVE,ALIVE,DEAD,DEAD,DEAD,DEAD,ALIVE,ALIVE,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,ALIVE,DEAD,DEAD,DEAD,DEAD,DEAD,ALIVE,DEAD,DEAD,DEAD],
  [DEAD,DEAD,ALIVE,DEAD,DEAD,DEAD,DEAD,ALIVE,DEAD,DEAD,DEAD,DEAD,ALIVE,ALIVE,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD],
  [DEAD,ALIVE,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,ALIVE,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD],
  [DEAD,ALIVE,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,ALIVE,DEAD,DEAD,DEAD,DEAD],
  [DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,ALIVE,ALIVE,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,ALIVE,DEAD,DEAD,DEAD,DEAD,DEAD],
  [DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,ALIVE,DEAD,DEAD,DEAD,DEAD],
  [DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,ALIVE,DEAD,DEAD,DEAD,DEAD,DEAD],
  [DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD,DEAD],
    
]

const game = new Game(board)

function App() {

  const [cells, setCells] = useState(game.board)
  const [intervalId, setIntervalId] = useState(null)
  const [buttonText, setButtonText] = useState('START')
  
  const nextGen = () => {

    buttonText === 'START' ? setButtonText('STOP') : setButtonText('START')    

    //Clear if an interval is already running
    if(intervalId){
      clearInterval(intervalId)
      setIntervalId(null)
    }

    //set a new interval scheduled to call getNextGeneration() every 200 ms
    const id = setInterval(() => {

      let {nextState, isCompleted} = game.getNextGeneration()
      setCells(nextState)

      //if completed, clear the interval
      if(isCompleted || buttonText === 'STOP'){
        clearInterval(id);
        setIntervalId(null)
      }

    }, 200)

    setIntervalId(id)

  }

  const reset = () => {

    const resetBoard = new Game(board).board
    setCells(resetBoard)
    game.board = resetBoard
 
  }
  
  const toggle = (rowNum, colNum) => {
    const newCells = cells.map((row, rowIndex) => 
      row.map((cell, colIndex) => {        
        if(rowIndex === rowNum && colIndex === colNum) {
            return new Cell(cell.state === ALIVE ? DEAD : ALIVE)
        }
        return cell
      })
    )
    game.board = newCells
    setCells(newCells)
  }

  return (
    <div className="App" >
      <header className="App-header">
      <h1>Game Of Life</h1>
        <table>
        <tbody>
          {
            cells.map((row, rowNum) => 
              <tr key={rowNum} >
            {
              row.map((cell, colNum) => 
                <td key={colNum} className='cell' onClick={() => toggle(rowNum, colNum)} style={{
                  background : cell.state === ALIVE ? 'black' : 'white'
                }}></td>)}
            </tr>)
          }
        </tbody>
      </table>
    <div>
    <button onClick={nextGen}><b>{buttonText}</b></button>
    <button onClick={reset}><b>RESET</b></button>
    </div>

      </header>
    </div>
  );
}

export default App;
