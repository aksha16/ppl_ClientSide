import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import { createStore } from 'redux';
import userData from './redux/reducer';
import {Provider} from 'react-redux';

// STORE: GLOBALIZED STATE
const globalStore = createStore(userData);
console.log("globalStore", globalStore);



ReactDOM.render(<BrowserRouter>
<Provider store={globalStore}>
    <App />
</Provider>
 </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
