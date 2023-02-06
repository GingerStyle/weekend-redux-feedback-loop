import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import FeelingPart from '../FeelingPart/FeelingPart';
import UnderstandingPart from '../UnderstandingPart/UnderstandingPart';
import CommentsPart from '../CommentsPart/CommentsPart';
import SupportPart from '../SupportPart/SupportPart';
import ReviewPart from '../ReviewPart/ReviewPart';
import WelcomePart from '../WelcomePart/WelcomePart';
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
        <Route exact path='/'><WelcomePart /></Route>
        <Route path="/feeling"><FeelingPart /></Route>
        <Route path="/understanding"><UnderstandingPart /></Route>
        <Route path="/comments"><CommentsPart /></Route>
        <Route path="/support"><SupportPart /></Route>
        <Route path="/review"><ReviewPart /></Route>

        
      </Router>
    </div>
  );
}

export default App;
