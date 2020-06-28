// package import
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';

//files import
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

//logger(obj,next,action)
// const logger=function({dispatch,getState}){
//     return function(next){
//         return function(action){
//             //middleware
//             console.log("ACTION TYPE= ",action.type);
//             next(action);
//         }
//     }
// }

//more simpler way of writting logger middleware
const logger=({dispatch,getState})=>(next)=>(action)=>{
    //logger middleware
    console.log("ACTION TYPE= ",action.type);
    next(action)
}

//creating store
const store=createStore(rootReducer,applyMiddleware(logger));

console.log("store",store);
// console.log("BEFORE STATE",store.getState());

// store.dispatch({
//   type:"ADD_MOVIES",
//   movies:[{name:`superman`}]
// });

// console.log("AFTER STATE",store.getState());

ReactDOM.render(<App store={store} />,document.getElementById('root'));


