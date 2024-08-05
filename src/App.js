import './App.css';
import { useState} from 'react';
import gameLogic from './logic/index'
// import background from '../public/background-Image.png'

const {CellState, Game} = gameLogic
const {DEAD, ALIVE} = CellState

const board  = [
  [DEAD,DEAD,DEAD,DEAD,DEAD],
  [DEAD,DEAD,DEAD,DEAD,DEAD],
  [DEAD,ALIVE,ALIVE,ALIVE,DEAD],
  [DEAD,DEAD,DEAD,DEAD,DEAD],
  [DEAD,DEAD,DEAD,DEAD,DEAD],
]

const game = new Game(board)

function App() {

  var [cells, setCells] = useState(game.board)
  const nextGen = () => {
    const nextState = game.getNextGeneration()
    game.board = nextState
    setCells(nextState)
  }
  return (
    <div className="App" style={{backgroundImage: "url(/background-Image.png)"}}>
      <header className="App-header">
      <h1>Game Of Life</h1>
        <table>
        <tbody>
          {
            cells.map((row, rowNum) => 
              <tr key={rowNum}>
            {
              row.map((cell, colNum) => 
                <td key={colNum} className='cell' style={{
                  background : cell.state === ALIVE ? 'black' : 'white'
                }}></td>)}
            </tr>)
          }
        </tbody>
      </table>
      <br></br>
      <button onClick={nextGen}>Next Generation</button>
      </header>
    </div>
  );
}

export default App;
