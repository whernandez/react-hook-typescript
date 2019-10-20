import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableComponent from "./reactTable/Table";
import useCustomColumns from "./reactTable/hooks/useCustomColumns";

function App() {
    const [columns, updateColumns] = useCustomColumns();

    const onHideColumn = () => {
        updateColumns('firstName');
    };

  return (
    <div className="App">
      <header className="App-header">
          <button onClick={onHideColumn}>Hide Column</button>
        <TableComponent props={'props'} columns={columns}/>
      </header>
    </div>
  );
}

export default App;
