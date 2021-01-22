import React from 'react';
import './App.css';
import Nav from './sites/Nav';
import Home from './sites/Home';
import Upcoming from './sites/Upcoming';
import Cart from './sites/Cart';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home}/>
        <Route path="/upcoming" component={Upcoming}/>
        <Route path="/cart" component={Cart}/>
      </div>
    </Router>
    
  );
}

export default App;
