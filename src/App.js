import { useState } from 'react';
import * as math from 'mathjs';
import { evaluate } from 'mathjs';
import Button from "./components/Button";
import Input from "./components/Input";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
 import './App.css';


const App=() =>{



  return (
    <div className="App">
   
    <Router>
      <Link to="/Home" className="link">Home</Link>   
      <Link to="/About" className="link">About</Link> 


    <Route path="/Home" component={Home} ></Route>
    <Route path="/About" component={About} ></Route>
    <Route path="/" exact></Route>
    </Router>

   </div>
  
  );

}

export default App;
