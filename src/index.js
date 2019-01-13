import React from 'react';
import ReactDOM from 'react-dom';

//CONTAINER
import App from './containers/App';

//SERVICE WORKERS
import * as serviceWorker from './serviceWorker';

// STYLESHEETS
import './index.css';
import 'tachyons';

ReactDOM.render( <App />, document.getElementById('root'));

serviceWorker.unregister();