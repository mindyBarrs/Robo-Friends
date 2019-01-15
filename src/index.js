import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

// MAIN CONTAINER
import App from './containers/App';

// SERVICE WORKERS
import * as serviceWorker from './serviceWorker';

// REDUCERS
import { searchRobots } from './reducers'

// STYLESHEETS
import './index.css';
import 'tachyons';

// CREATING MIDDLEWARE
const logger = createLogger()

// CREATING THE STORE 
const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render( <Provider store={store} >
                    <App />
                 </Provider>, document.getElementById('root'));

serviceWorker.unregister();