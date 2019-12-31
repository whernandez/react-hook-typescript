import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from "./core/config/redux/store";
// import history from "./core/config/historyBrowser";
import './index.css';
import RoutesComponent from "./routes/RouteComponent";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "reflect-metadata";
import {ApolloProvider} from '@apollo/react-hooks';
import apolloClient from "./core/apoloClient";
import APOLLO_CLIENT from './core/apolloClient';
import FetchContacts from './contact/queries/FetchContacts';
// import { ApolloProvider } from 'react-apollo';

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <FetchContacts/>
    </ApolloProvider>, document.getElementById('root'));

// ReactDOM.render(
//     <ApolloProvider client={apolloClient}>
//         <UpdateProfilePictureForm/>
//     </ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
