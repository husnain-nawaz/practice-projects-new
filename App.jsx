
import './App.css'
import { calcAction } from "./calculator.js"
function App() {

  return (
    <div className='calc'>
      <div className='display'>
          <div className='val' id="display">0</div>
      </div>
      <div className='grid'>
          <button className='btn-top' onClick={()=> calcAction("%")}>%</button>
          <button className='btn-top' onClick={()=> calcAction("CE")}>CE</button>
          <button className='btn-top' onClick={()=> calcAction("C")}>C</button>
          <button className='btn-top' onClick={()=> calcAction("Del")}>Del</button>

          <button onClick={()=>calcAction("7")}>7</button>
          <button onClick={()=>calcAction("8")}>8</button>
          <button onClick={()=>calcAction("9")}>9</button>
          <button onClick={()=>calcAction("/")} className='btn-op'>/</button>

          <button onClick={()=>calcAction("4")}>4</button>
          <button onClick={()=>calcAction("5")}>5</button>
          <button onClick={()=>calcAction("6")}>6</button>
          <button onClick={()=>calcAction("*")} className='btn-op'>X</button>

          <button onClick={()=>calcAction("3")}>3</button>
          <button onClick={()=>calcAction("2")}>2</button>
          <button onClick={()=>calcAction("1")}>1</button>
          <button onClick={()=>calcAction("-")} className='btn-op'>-</button>

          <button onClick={()=>calcAction("0")}>0</button>
          <button onClick={()=>calcAction("00")}>00</button>
          <button onClick={()=>calcAction(".")}>.</button>
          <button onClick={()=>calcAction("+")} className='btn-op'>+</button>
          <button onClick={()=>calcAction("=")} className='btn-eq'>=</button>
      </div>
    </div>
  );           
}

export default App
