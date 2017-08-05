import React, { Component } from 'react';
import './App.css';
import CtoF from './CtoF'
import FtoC from './FtoC';
import {Route,Switch} from 'react-router-dom';



class App extends Component {
  
  render(){
    return(
      <div className="App">
        <Switch>
          <Route exact path="/" component={CtoF}/>
          <Route path="/fahrenheit-to-celcius/" component={FtoC}/>
        </Switch>
      </div>
    )
  }
    

}


export default App;
