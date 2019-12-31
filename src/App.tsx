import React, {MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import useCustomColumns from "./reactTable/hooks/useCustomColumns";
import MyTable from "./reactTable/tableWrapper/MyTable";
import MyPagination from "./reactTable/tableWrapper/MyPagination";
import TableWrapperComponent from "./reactTable/tableWrapper/TableWrapperComponent";
import FetchContacts from "./contact/queries/FetchContacts";
const App: React.FC = () => {
    const {columns, updateColumns} = useCustomColumns();

    const onHideColumn = (event: MouseEvent<HTMLButtonElement>) => {
        updateColumns('firstName');
    };


    return (
        <div className="App">
            <header className="App-header">
                <Link to={'/form_hook'} style={{color: 'white'}}>Form</Link>
                <br/>
                {/* <FetchContacts/> */}
                <button onClick={onHideColumn}>Hide Column</button>
                <TableWrapperComponent columns={columns}>
                    <MyTable/>
                    <MyPagination/>
                </TableWrapperComponent>
                {/*<TableComponent columns={columns}/>*/}
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
