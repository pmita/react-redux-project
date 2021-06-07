import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Let's import everything redux related
import {createStore} from 'redux';
import {Provider} from 'react-redux';
//Let's import our combined reducers
import allReducers from './reducers/index';

/*
  We cannot pass in multiple reducers on our createStore function. As such
  we need to bind all our reducers together with combineReducers(), which is what
  we have done on the reducers/index.js
*/
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
); //Setting our redux Store

//---------Typically this is all you have
/*//STORE acts as our globalized state
let store = createStore(counter);
store.subscribe(() =>  console.log(store.getState()));

//ACTION INCREMENT - actions describe what you want to happen on your state. Action is a function that returns a simple object
const increment = () => {
  return{
    type: 'INCREMENT'
  }
}
const decrement = () => {
  return{
    type: 'DECREMENT'
  }
}

//REDUCER checks the changes based on the actions we have defined
const counter = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1;
  }
}

//DISPATCH is where the changes happen to our state
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
          <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
