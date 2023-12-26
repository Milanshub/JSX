import '../App.css';
import Greetings from './Greeting';
import Heading from './Heading';
import List from './List';
import pi, { doublePi, triplePi } from './Math';
import * as calc from './Calculator';

function App() {
  return (
    <div className='App'>

      <ul>
        <li>{pi}</li>
        <li>{doublePi()}</li>
        <li>{triplePi()}</li>
      </ul>

      <ul>
        <li>{calc.add(1, 2)}</li>
        <li>{calc.multiply(2, 3)}</li>
        <li>{calc.subtract(7, 2)}</li>
        <li>{calc.divide(5, 2)}</li>
      </ul>


      <Greetings />
      <Heading />
      <List />
    </div>
  );
}



export default App;
