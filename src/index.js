// package import
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

//files import
import './index.css';
import App from './components/App';
import movies from './reducers';

//creating store
const store=createStore(movies);

console.log("store",store);
console.log("STATE",store.getState());




ReactDOM.render(<App />,document.getElementById('root'));


