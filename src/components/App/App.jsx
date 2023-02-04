import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import FeelingPart from '../FeelingPart/FeelingPart.jsx';
import { useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        
        <Route exact path='/feeling'>
          <FeelingPart />
        </Route>
        <button onClick={() => history.push('/feeling')}>Add New Feedback</button>
      </Router>
    </div>
  );
}

export default App;
