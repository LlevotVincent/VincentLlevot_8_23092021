import React from 'react';
import {Route, Switch } from 'react-router-dom'
import Acceuil from '../Pages/Acceuil';
import Logement from '../Pages/Logement';
import Banner_Apropos from '../Pages/Apropos';
import Error from '../Pages/Error';

class Router extends React.Component {
    render() {

        const Routes = [
            {
              name: 'Acceuil',
              path: "/",
              component: Acceuil,
              exact: true
            },
            {
              name: 'Logement',
              path: "/Logement/:id",
              component: Logement,
            },
            {
              name: 'A propos',
              path: "/Apropos",
              component: Banner_Apropos,
            },
            {
                name: 'A propos',
                path: "",
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