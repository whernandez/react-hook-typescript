import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RoutesComponent from "./routes/RouteComponent";
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useParams
} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Switch>
            {/* No weird props here, just use
            regular `children` elements! */}
            <Route path="/">
                <RoutesComponent />
            </Route>
        </Switch>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
