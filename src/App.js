import React, { Component } from 'react';
import './App.css';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      //Temperature in fahrenheit
      fahrenheit: 0,
      //Temperature in celcius
      celcius: 0,
    };
  
  this.convertCelciustoFahr = this.convertCelciustoFahr.bind(this);
  
  }

  //Converts celcius to fahrenheit
  convertCelciustoFahr(event){
    var celcius = Number(event.target.value);
    this.setState( {
        fahrenheit: ((celcius *(5/9) ) + 32 ).toFixed(1),
    });
  }

  render() {
      return (
        <div className="App">

          <h1>Celcius to Fahrenheit converter</h1>
          <form id="conversion">
            <input className="Celcius" onChange={this.convertCelciustoFahr} /> °C
            <a href="/fahrenheit-to-celcius" className="btn btn-default">
              &lt;&gt;
            </a>
            <p className="Equals-sign">=</p>
            <input className="Fahrenheit" value={this.state.fahrenheit} placeholder="°F" /> °F

          </form>
        </div>
      );
    }
  /**/
}


export default App;
