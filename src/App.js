import React from 'react';
import './App.css';
import Nav from './sites/Nav';
import List from './sites/List';
import Cart from './sites/Cart';
import Show from './components/Show'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/store" component={List}/>
          <Route path="/upcoming" component={List}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/item/:id" component={Show} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
