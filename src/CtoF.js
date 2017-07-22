import React, { Component } from 'react';
import './App.css';



class CtoF extends Component {

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
        <form id="conversion">
          <input className="Celcius" onChange={this.convertCelciustoFahr} /> °C
          <div>
            <a href="/fahrenheit-to-celcius" className="btn btn-default">
              &lt;&gt;
            </a>
            <p className="Equals-sign">=</p>
          </div>
          <input className="Fahrenheit" value={this.state.fahrenheit} placeholder="°F" /> °F

        </form>
      );
  }
}


export default CtoF;