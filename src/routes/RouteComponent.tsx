// TODO: Require Dependency
import React from "react";
import {Route, Switch, BrowserRouter as Router,} from "react-router-dom";
import {routes as form} from "../form/route";

type route = {
    path: string,
    exact: boolean,
    component: React.FC
}

const RoutesComponent: React.FC<{}> = ({}) => {
    return (
        <Router>
        <Switch>
            {form.map((route: route, idx) => {
                const C = route.component;
                return route.component ? (
                    <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                    >
                        <C/>
                    </Route>
                ) : (null);
            })}
        </Switch>
        </Router>
    )
}

export default RoutesComponent;
