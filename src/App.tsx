import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import Categories from './components/categories';
import reducer from './reducers/index';
import store  from "./store.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        <Categories store={store} /> 
      </div>
    </Provider>
  );
}

export default App;
