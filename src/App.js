// import logo from './logo.svg';
import './App.css';

const fName = "Milan ";
const lName = "Shubaev";
const randomNumber = 1;

function App() {
  return (
    <div className="App">
      <h1>My name is {fName + lName}</h1>
      <p>My lucky number is {randomNumber}</p>
      <p>My random number is {Math.floor(Math.random()*10)}</p>
    </div>
  );
}

   /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */



export default App;
