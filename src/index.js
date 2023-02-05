import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';

import feeling from './reducers/feeling';
import understanding from './reducers/understanding';
import support from './reducers/support';
import comments from './reducers/comments';

const storeInstance = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
