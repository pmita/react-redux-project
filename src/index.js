import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Let's import everything redux related
import {createStore} from 'redux';



//STORE acts as our globalized state
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
store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
