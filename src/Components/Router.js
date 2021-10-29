import React from 'react';
import {Route, Switch } from 'react-router-dom'
import Accueil from '../Pages/Accueil';
import Logement from '../Pages/Logement';
import Banner_Apropos from '../Pages/Apropos';
import Error from '../Pages/Error';

class Router extends React.Component {
    render() {

        const Routes = [
            {
              path: "/",
              component: Accueil,
              exact: true
            },
            {
              path: "/logement/:id",
              component: Logement,
            },
            {
              path: "/Apropos",
              component: Banner_Apropos,
              exact : true
            },
            {
                path: "/Error",
                component: Error,
              }
          ];


        return (
            <Switch>
                {Routes.map((route, i) => (
                    <Route key={i} {...route} />
                ))}
            </Switch>
        )
    }
}
export default Router