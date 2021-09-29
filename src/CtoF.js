import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <div>
          <h1>Celcius to Fahrenheit converter</h1>
          <form id="conversion">
            <input className="Celcius" onChange={this.convertCelciustoFahr} /> °C
            <div>
              <button className="btn btn-default">
                <Link to="/fahrenheit-to-celcius/">
                  &lt;&gt;
                </Link>
              </button>
              <p className="Equals-sign">=</p>
            </div>
            <input className="Fahrenheit" value={this.state.fahrenheit} placeholder="°F" /> °F

          </form>
        </div>
      );
  }
}


export default CtoF;