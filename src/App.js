import React, { Component } from 'react';
import './App.css';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      //Temperature in fahrenheit
      fahrenheit: 0,
      //Temperature in fahrenheit
      celcius: 0,
    };
    this.convertCelciustoFahr = this.convertCelciustoFahr.bind(this);
    this.convertFahrToCelcius = this.convertFahrToCelcius.bind(this);
    this.changeToFtoC = this.changeToFtoC.bind(this);
  }
  

  //Converts celcius to fahrenheit
  convertCelciustoFahr(event){
    var celcius = Number(event.target.value);
    this.setState( {
        fahrenheit: ((celcius *(5/9) ) + 32 ).toFixed(1),
    });
  }

  //Converts fahrenheit to celcius
  convertFahrToCelcius(event){
    var fahrenheit = Number(event.target.value);
    this.setState( {
        celcius: ((fahrenheit - 32) / (5/9)  ).toFixed(1)
    });
  }

  changeToFtoC(event){
    this.setState({cToF: false});
  }

  changeToCtoF(event){
    this.setState({cToF: true});
  }

  render() {
    if(this.state.cToF){
      return (
        <div className="App">

          <h1>Celcius to Fahrenheit converter</h1>
          <form id="conversion">
            <input className="Celcius" onChange={this.convertCelciustoFahr} /> °C
            <p className="Equals-sign">=</p>
            <input className="Fahrenheit" value={this.state.fahrenheit} placeholder="°F" /> °F

          </form>
        </div>
      );
    }
  return (
        <div className="App">

          <h1>Celcius to Fahrenheit converter</h1>
          <form id="conversion">
            <input className="Fahrenheit" onChange={this.convertFahrToCelcius} /> °F
            <button 
              onClick={
                this.setState(
                  {cToF: true,}
                )
              }
            >&lt;&gt;
            </button>
            <p className="Equals-sign" >=</p>
            <input className="Celcius" value={this.state.celcius} placeholder="°C" /> °C

          </form>
        </div>
      );
  }
}


export default App;
