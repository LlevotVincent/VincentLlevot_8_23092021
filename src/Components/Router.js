import React from 'react';
import {Route, Switch } from 'react-router-dom'
import Accueil from '../Pages/Accueil';
import Logement from '../Pages/Logement';
import Apropos from '../Pages/Apropos';
import Error from '../Pages/Error';

class Router extends React.Component {

    render() {
        const routes = [
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
              component: Apropos,
              exact : true
            },
            {
                path: "*",
                component: Error,
              }
          ];


        return (
            <Switch>
                {routes.map((route, index) => (
                    <Route key={index} {...route} />
                ))}
            </Switch>
      // <Switch>
      //   <Route exact path="/" component={Accueil} />
      //   <Route path="/logement/:id" component={Logement} />
      //   <Route path="/Apropos" component={Apropos} />
      //   <Route path="*" component={Error} />
      // </Switch>

        )
    }
}
export default Router