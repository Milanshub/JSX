// import logo from './logo.svg';
import './App.css';


const fName = "Milan ";
const lName = "Shubaev";
const randomNumber = 1;
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
const img = "https://picsum.photos/200";

const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

function App() {
  return (
    <div className='App'>
      <h1 className="heading" style={customStyle}>{greeting}</h1>
      <h2 className='myName'>My name is {fName + lName}</h2>
      <p>My lucky number is {randomNumber}</p>
      <p>My random number is {Math.floor(Math.random()*10)}</p>

      <p style={{color: "red"}}>Created by {fName}.</p>
      <p>Copyright {currentYear}.</p>

      <div>
        <img src={img+"?grayscale"} alt='grayscale'/>
        <img className='food-img'src="https://as1.ftcdn.net/v2/jpg/05/89/66/36/1000_F_589663676_k1GF4cly0gOBWJbG5Z7JqFBzkrXWvnyw.jpg" alt="sushi stuff"/>
        <img className='food-img' src= "https://as1.ftcdn.net/v2/jpg/03/32/16/52/1000_F_332165231_B81gcGf8AMRKMB0MjZZnqWMLbaF2JaVL.jpg" alt="more sushi stuff"/>
        <img className='food-img'src="https://as1.ftcdn.net/v2/jpg/04/18/26/02/1000_F_418260218_MWxbtk2TEthdLvIzarWU4NMcPELIeJTq.jpg" alt="even more sushi stuff"/>
      </div>
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
