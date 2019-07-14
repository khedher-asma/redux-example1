import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './reducers/user-reducer';
import productReducer from './reducers/products-reducer';


const allReducer = combineReducers({
    products: productReducer,
    user: userReducer
})
const store = createStore(
    allReducer,
    {
        products: [{ name: "sumsung" }],
        user: 'skander'
    },
    window.devToolsExtension && window.devToolsExtension()
)
ReactDOM.render(<Provider store={store}> <App aRandomProps='whatever'/> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
