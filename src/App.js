import './App.css';
import { useState} from 'react';
import gameLogic from './logic/index'

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
  console.log({game})
  return (
    <div className="App">
      <header className="App-header">
      <h1>Game Of Life</h1>

      <table>
        <tbody>
          {
            cells.map((row, rowNum) => 
              <tr key={rowNum}>
            {
              row.map((cell, colNum) => 
                <td key={colNum}>{cell.state}</td>)

            }
            </tr>)
          }
        </tbody>
      </table>
      </header>
    </div>
  );
}

export default App;
