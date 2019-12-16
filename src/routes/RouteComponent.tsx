// TODO: Require Dependency
import React from "react";
import {Route, Switch,} from "react-router-dom";
import {routes as form} from "../form/route";

type route = {
    path: string,
    exact: boolean,
    component: any
}

const RoutesComponent: React.FC<{}> = () => {
    return (
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
    )
}

export default RoutesComponent;
