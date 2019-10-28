import React, {useDebugValue} from 'react';
import logo from './logo.svg';
import './App.css';
import TableComponent from "./reactTable/TableComponent";
import useCustomColumns from "./reactTable/hooks/useCustomColumns";

const App: React.FC = () => {
  const {columns, updateColumns} = useCustomColumns();

  useDebugValue(updateColumns);
  const onHideColumn = () => {
    updateColumns('firstName');
  };

  return (
    <div className="App">
      <header className="App-header">
         <button onClick={onHideColumn}>Hide Column</button>
        <TableComponent columns={columns}/>
        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
    </div>
  );
}

export default App;
