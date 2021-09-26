import React, { Component } from 'react';
import './App.css';
import CtoF from './CtoF'
import FtoC from './FtoC';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



class App extends Component {
  
  render(){
    return(
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={CtoF}/>
            <Route path="/fahrenheit-to-celcius/" component={FtoC}/>
          </Switch>
        </Router>
      </div>
    )
  }
    

}


export default App;
