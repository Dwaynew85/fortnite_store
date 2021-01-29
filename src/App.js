import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import SiteContainer from './containers/SiteContainer'


function App() {
  return (
    <Router>
      <SiteContainer />
    </Router>
  );
}

export default App;
