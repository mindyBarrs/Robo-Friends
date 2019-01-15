import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// MAIN CONTAINER
import App from './containers/App';

// SERVICE WORKERS
import * as serviceWorker from './serviceWorker';

// REDUCERS
import { searchRobots } from './reducers'

// STYLESHEETS
import './index.css';
import 'tachyons';

// CREATING THE STORE 
const store = createStore(searchRobots);

ReactDOM.render( <Provider store={store} >
                    <App />
                 </Provider>, document.getElementById('root'));

serviceWorker.unregister();