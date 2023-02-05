import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import FeelingPart from '../FeelingPart/FeelingPart';
import UnderstandingPart from '../UnderstandingPart/UnderstandingPart';
import CommentsPart from '../CommentsPart/CommentsPart';
import SupportPart from '../SupportPart/SupportPart';
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
        
        <Route exact path="/feeling"><FeelingPart /></Route>
        <Route exact path="/understanding"><UnderstandingPart/></Route>
        <Route exact path="/comments"><CommentsPart/></Route>
        <Route exact path="/support"><SupportPart/></Route>
        
        <button onClick={() => history.push('/feeling')}>Add New Feedback</button>
      </Router>
    </div>
  );
}

export default App;
