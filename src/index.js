import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import { createStore } from 'redux';
import userData from './redux/reducer';
import {Provider} from 'react-redux';

// STORE: GLOBALIZED STATE
const globalStore = createStore(userData);
console.log("globalStore", globalStore);

//ACTION
// const increament = (data) => {
//     return{
//         type:'INCREAMENT',
//         data:data
//     }
//  }
// const decreament = () => {
//     return {
//         type:'DECREAMENT'
//     }
// }

// //REDUCER
// const counter = (state = [], action) => {
//     switch(action.type){
//         case "INCREAMENT" :
//             return state = action.data;
//         case 'DECREAMENT' :
//             return state - 1;
//     }
// };

// let store = createStore(counter);
// store.subscribe(()=>{
//     console.log("redux just worked", store.getState());
// })

// //DISPATCH
// store.dispatch(increament([1,2,3,8,9]));
// store.dispatch(increament());

ReactDOM.render(<BrowserRouter>
<Provider store={globalStore}>
    <App />
</Provider>
 </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
