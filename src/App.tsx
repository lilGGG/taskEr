import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import Categories from './components/categories';
import reducer from './reducers/index';
import store  from "./store.js";


function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        hel
        <Categories store={store} /> 
        {/* categories={} onClick={} */}
      </div>
    </Provider>
  );
}

export default App;
