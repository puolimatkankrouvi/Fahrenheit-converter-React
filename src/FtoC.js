import React, { Component } from 'react';
import './App.css';


class FtoC extends Component{
  constructor(props){
    super(props);
    this.state = {
      //Temperature in fahrenheit
      fahrenheit: 0,
      //Temperature in celcius
      celcius: 0,
    };

    this.convertFahrToCelcius = this.convertFahrToCelcius.bind(this);
  }

  //Converts fahrenheit to celcius
  convertFahrToCelcius(event){
    var fahrenheit = Number(event.target.value);
    this.setState( {
      celcius: ((fahrenheit - 32) / (5/9)  ).toFixed(1)
    });
  }

  render() {
    return (
        <div>
          <h1>Celcius to Fahrenheit converter</h1>
          <form id="conversion">
            <input className="Fahrenheit" onChange={this.convertFahrToCelcius} /> °F
            <div>
              <a href="/" className="btn btn-default">
                &lt;&gt;
              </a>
              <p className="Equals-sign">=</p>
            </div>
            <input className="Celcius" value={this.state.celcius} placeholder="°C" /> °C

          </form>
        </div>
      );
  }
}

export default FtoC;