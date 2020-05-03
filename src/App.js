import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {ViewBooks} from './components/ViewBooks'
import {Form} from './components/Form'
import {GlobalContextProvider} from './context/GlobalContext'

function App() {
  return (
    <GlobalContextProvider>
      <div className="App container-responsive border">
        <Header />
        <ViewBooks />
        <Form />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
