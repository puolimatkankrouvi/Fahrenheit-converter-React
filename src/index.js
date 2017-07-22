import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import App from './App';
import FtoC from './FtoC';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const RouterConfig = () => (
  <Router>
    <Route path="/" component={App}/>
    <Route path="/fahrenheit-to-celcius" component={FtoC}/>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
