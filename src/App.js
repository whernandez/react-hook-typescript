import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableComponent from "./reactTable/Table";
import useCustomColumns from "./reactTable/hooks/useCustomColumns";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TableComponent props={'props'} useCustomColumns={useCustomColumns}/>
      </header>
    </div>
  );
}

export default App;
