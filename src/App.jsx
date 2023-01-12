import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Employement from './components/Employement';
import Contact from './components/Contact';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

 
function App() {
  return (
    <>
    <Router> 
    <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/Services">
            <Services/>
          </Route>
          <Route exact path="/Employement">
            <Employement/>
          </Route>
          <Route exact path="/Contact">
            <Contact/>
          </Route> 
    </Switch>
    </Router>
    </> 
  );
}

export default App;