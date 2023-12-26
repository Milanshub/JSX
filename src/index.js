// import express from "express";
// import bodyParser from "body-parser";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const app = express();
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
   </React.StrictMode>,
);


// app.listen(3000, function (){
//   console.log("The server has starter on port 3000");
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
