import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'

// MAIN CONTAINER
import App from './containers/App';

// SERVICE WORKERS
import * as serviceWorker from './serviceWorker';

// REDUCERS
import { searchRobots, requestRobots } from './reducers'

// STYLESHEETS
import './index.css';
import 'tachyons';

// CREATING MIDDLEWARE
const logger = createLogger()

// COMBINING THE REDUCERS 
const rootReducer = combineReducers({searchRobots, requestRobots});

// CREATING THE STORE 
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render( <Provider store={store} >
                    <App />
                 </Provider>, document.getElementById('root'));

serviceWorker.unregister();