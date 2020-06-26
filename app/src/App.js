import React from 'react';
import logo from './logo.svg';
import './App.css';
import PeopleList from "./componenets/peopleList"
import thunk from 'redux-thunk';
import{appReducer} from "./reducer"
import{createStore,applyMiddleware} from "redux"



function App() {
  return (
    <div className="App">
     
    <PeopleList/>
    </div>
  );
}

export default App;
